<template>
  <v-container>
    <div class="text-center">
      <h2>Change Password</h2>
      <p>Use the Reset Code sent to your inbox</p>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="pa-3" @submit.prevent="handleSubmit(submit)">
        <v-card-text>
          <ValidationProvider
            name="Reset Code"
            rules="required"
            v-slot="{ errors }"
          >
            <v-text-field
              outlined
              id="resetCode"
              name="resetCode"
              label="Reset Code"
              type="text"
              v-model="resetCode"
              :error="errors.length > 0"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider
            name="Password"
            rules="required|min:8"
            v-slot="{ errors }"
          >
            <v-text-field
              outlined
              id="password"
              name="password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              :error="errors.length > 0"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider
            name="Confirm Password"
            rules="required|min:8|confirmed:password"
            v-slot="{ errors }"
          >
            <v-text-field
              outlined
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              :type="showConfirmPassword ? 'text' : 'password'"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showConfirmPassword = !showConfirmPassword"
              v-model="confirmPassword"
              :error="errors.length > 0"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" type="submit">Change Password</v-btn>
        </v-card-actions>
      </form>
    </ValidationObserver>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PasswordReset",
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      resetCode: "",
      confirmPassword: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["resetPassword"]),
    async submit() {
      await this.resetPassword({
        resetCode: this.resetCode,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
      this.$router.push({ name: "auth.login" });
    },
  },
  created() {
    if (this.$store.state.isAuthenticated) {
      this.$router.push({ name: "user.profile" });
    }
  },
};
</script>
