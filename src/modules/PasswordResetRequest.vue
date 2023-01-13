<template>
  <v-container>
    <div class="text-center">
      <h2>Password Reset Request</h2>
      <p>
        Have an account?
        <router-link class="text-decoration-none" to="/login">
          Login
        </router-link>
      </p>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="pa-3" @submit.prevent="handleSubmit(submit)">
        <v-card-text>
          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <v-text-field
              outlined
              id="email"
              name="email"
              label="Email"
              type="text"
              v-model="email"
              :error="errors.length > 0"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" type="submit">Request Password Reset</v-btn>
        </v-card-actions>
      </form>
    </ValidationObserver>
  </v-container>
</template>

<script>
import router from "@/routes";
import { mapActions } from "vuex";

export default {
  name: "PasswordResetRequest",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    ...mapActions(["requestPasswordReset"]),
    async submit() {
      await this.requestPasswordReset(this.email);

      // Usually this link is given in password reset email
      // But for the demo flow is redirected to reset code page
      this.$router.push({
        name: "password.reset.code",
      });
    },
  },
  created() {
    if (this.$store.state.isAuthenticated) {
      router.push({ name: "user.profile" });
    }
  },
};
</script>
