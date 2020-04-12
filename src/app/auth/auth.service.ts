import { Injectable } from "@angular/core";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { Auth, Hub } from "aws-amplify";
import { AmplifyService } from "aws-amplify-angular";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  signedIn: boolean;
  user: any;

  constructor(private amplifyService: AmplifyService) {
    // this.amplifyService.authStateChange$.subscribe(authState => {
    //   this.user = authState.user;
    //   this.signedIn = authState.state === "signedIn" && this.user;
    // });
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.user = data;
          this.signedIn = true;
          break;
        case "signOut":
          this.user = null;
          break;
      }
    });
    // Just for DEV
    // this.signedIn = true;
  }

  isLoggedIn() {
    if (this.signedIn) {
      return true;
    } else {
      return false;
    }
  }

  federatedSignIn(provider: string) {
    if (provider === "facebook") {
      Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Facebook
      });
    } else {
      Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google
      });
    }
  }

  logout() {
    Auth.signOut();
  }
}
