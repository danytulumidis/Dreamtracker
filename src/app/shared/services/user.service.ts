import { Injectable } from "@angular/core";
import { APIService } from "src/app/API.service";
import { Auth } from "aws-amplify";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private apiService: APIService) {}

  insertNewUser(user: any) {
    this.apiService
      .CreateUser({
        userID: user.attributes.email,
        name: "Dreamchaser XYZ",
        description: "Tell us about you!",
        created: this.getCurrentDate()
      })
      .then(() => console.log)
      .catch(err => console.log(err));
  }

  // Get the current user from Cognito
  getCurrentUser() {
    return Auth.currentAuthenticatedUser();
  }

  getCurrentDate() {
    let today: any = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = dd + "." + mm + "." + yyyy;
    return today;
  }
}
