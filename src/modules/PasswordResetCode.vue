<template>
  <v-container>
    <div class="text-center">
      <h2>Forgot your Password?</h2>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="pa-3" @submit.prevent="handleSubmit(submit)">
        <v-card-text class="justify-center">
          <div class="text-center">
            <v-row class="justify-center" no-gutters
              ><span>If you requested to reset password, </span></v-row
            >
            <v-row class="justify-center" no-gutters
              ><span>Please continue with below code </span></v-row
            >
          </div>
          <div class="text-center mt-3">
            <h3>2FA78B</h3>
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" href="/reset-password">Reset Password</v-btn>
        </v-card-actions>
      </form>
    </ValidationObserver>
  </v-container>
</template>

<script>
export default {
  name: "PasswordResetCode",
  created() {
    if (this.$store.state.isAuthenticated) {
      router.push({ name: "user.profile" });
    }
  },
};
</script>
