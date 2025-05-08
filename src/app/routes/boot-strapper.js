import {
  setCurrentUserRoles,
  setCurrentUser,
  setCurrentToken,
} from "shared/cache";

class BootStrapper {
  static async initialize() {
    console.log("BootStrapper initialized with app:");
  }

  static async setDataToRunApplicationInLocal() {
    console.log("Setting data to run application in local");
    setCurrentUserRoles(["admin", "user"]);
    setCurrentToken("dG9rZW4gcmVhY3RqCg==");
    setCurrentUser({
      username: "admin",
      password: "1234",
    });
  }
}

export default BootStrapper;
