<template>
  <v-container>
    <div class="text-center">
      <h2>Login to your account</h2>
      <p>
        Don't have an account?
        <router-link class="text-decoration-none" to="/register">
          Create an account
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
              prepend-icon="mail"
              id="email"
              name="email"
              label="Email"
              type="text"
              v-model="email"
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
              prepend-icon="lock"
              isAuthenticated="password"
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
        </v-card-text>
        <v-card-actions>
          <router-link
            class="text-decoration-none"
            to="/password-reset-request"
          >
            Forgot your password?
          </router-link>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit">Login</v-btn>
        </v-card-actions>
      </form>
    </ValidationObserver>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["authenticateUser"]),
    async submit() {
      await this.authenticateUser({
        email: this.email,
        password: this.password,
      });

      if (this.$store.getters.isAuthenticated) {
        this.$router.push({ name: "user.profile" });
      }
    },
  },
  created() {
    if (this.$store.state.isAuthenticated) {
      this.$router.push({ name: "user.profile" });
    }
  },
};
</script>
