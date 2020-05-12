import { Component, OnInit, ElementRef, NgZone } from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { AuthService } from "../auth/auth.service";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  signedIn: boolean = false;

  constructor(
    public location: Location,
    private element: ElementRef,
    private authService: AuthService,
    private ngZone: NgZone,
    private userService: UserService
  ) {
    this.sidebarVisible = false;
    // Defines if user is signed in and can see and access the whole application
    this.authService.authState.subscribe(user => {
      this.ngZone.run(() => {
        if (user !== null) {
          this.signedIn = true;
        } else {
          this.signedIn = false;
        }
      });
    });

    this.userService
      .getCurrentUser()
      .then(user => {
        user != null ? (this.signedIn = true) : (this.signedIn = false);
      })
      .catch(err => console.log(err));
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName("html")[0];

    setTimeout(function() {
      toggleButton.classList.add("toggled");
    }, 500);
    html.classList.add("nav-open");

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName("html")[0];
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    html.classList.remove("nav-open");
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    if (titlee === "/home") {
      return true;
    } else {
      return false;
    }
  }
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    if (titlee === "/documentation") {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    if (this.signedIn) {
      this.authService.logout();
    }
  }
}
