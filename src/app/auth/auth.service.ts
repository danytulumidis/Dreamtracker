import { Injectable } from "@angular/core";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { Auth, Hub } from "aws-amplify";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  signedIn: boolean;
  private _authState: Subject<any> = new Subject<any>();
  authState: Observable<any> = this._authState.asObservable();

  constructor() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this._authState.next(data);
          this.signedIn = true;
          break;
        case "signOut":
          this._authState.next(null);
          this.signedIn = false;
          break;
      }
    });
    // Just for DEV
    // this.signedIn = true;
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
