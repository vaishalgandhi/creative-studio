import store from "@/store";

const needAuth = (auth) => auth === true;

const verifyAuthorization = (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const isTokenSet = store.getters.isAuthenticated;

  /**
   * If route doesn't require authentication be normally accessed.
   */
  if (!needAuth(requiresAuth)) {
    next();
    return; // return to prevent the code from continuing in its flow
    // With this flow `else` or `else if` is not necessary
  }

  /**
   * If authentication is required and token is not set
   * Redirect to login
   */
  if (requiresAuth && !isTokenSet) {
    next({ name: "auth.login" });
    return;
  }

  next();
};

export default verifyAuthorization;
