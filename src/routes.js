import Login from "./modules/Login";
import Register from "./modules/Register";
import Profile from "./modules/Profile";
import PasswordResetRequest from "./modules/PasswordResetRequest";
import PasswordResetCode from "./modules/PasswordResetCode";
import PasswordReset from "./modules/PasswordReset";

const routes = [
  { path: "/", component: Login, name: "auth.login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register, name: "auth.register" },
  {
    path: "/password-reset-request",
    component: PasswordResetRequest,
    name: "password.reset.request"
  },
  {
    path: "/password-reset-code",
    component: PasswordResetCode,
    name: "password.reset.code"
  },
  { path: "/reset-password", component: PasswordReset, name: "password.reset" },
  {
    path: "/profile",
    component: Profile,
    meta: {
      requiresAuth: true
    },
    name: "user.profile"
  }
];

export default routes;
