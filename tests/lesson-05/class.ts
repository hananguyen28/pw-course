class LoginPage {
    usernameLoc: string;
    passwordLoc: string;
    rememberMeLoc: string;
    btnLoginLoc: string;

    constructor(usernameLoc: string, passwordLoc: string, rememberMeLoc: string, btnLoginLoc: string) {
        this.usernameLoc = usernameLoc;
        this.passwordLoc = passwordLoc;
        this.rememberMeLoc = rememberMeLoc;
        this.btnLoginLoc = btnLoginLoc;
    }

    fillUsername(username: string) {
        console.log("Filling username", username);
    }

    fillPassword(password: string) {
        console.log("Filling password", password);
    }

    clickRememberMe() {
        console.log("Click remember me");
    }

    clickBtnLogin() {
        console.log("Click button Login");
    }
}

const loginPageObj = new LoginPage("#username", "#pw", "#rememberMe", "#btnLogin");

loginPageObj.fillUsername("Cham Nguyen");

class DashboardPage extends LoginPage {
    headingLoc: string;

    constructor(headingLoc: string, usernameLoc: string, passwordLoc: string, rememberMeLoc: string, btnLoginLoc: string) {
        super(usernameLoc, passwordLoc, rememberMeLoc, btnLoginLoc);
        this.headingLoc = headingLoc;
    }

    clickMenu(menuName: string) {
        console.log("Click menu", menuName);
    }
}

const dashboard = new DashboardPage("a", "b", "c", "d", "e");
dashboard.clickMenu("Profile");
