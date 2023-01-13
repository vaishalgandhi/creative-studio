<template>
  <v-container>
    <div class="text-center">
      <h2>Register an account</h2>
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
          <v-row>
            <v-col cols="12" sm="6">
              <ValidationProvider
                name="Name"
                rules="required"
                v-slot="{ errors }"
              >
                <v-text-field
                  outlined
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  v-model="name"
                  :error="errors.length > 0"
                  :error-messages="errors[0]"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" sm="6">
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
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <ValidationProvider
                name="Phone Number"
                rules="required"
                v-slot="{ errors }"
              >
                <v-text-field
                  outlined
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type="text"
                  v-model="phone"
                  :error="errors.length > 0"
                  :error-messages="errors[0]"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" sm="6">
              <ValidationProvider
                name="Bio"
                rules="required"
                v-slot="{ errors }"
              >
                <v-text-field
                  outlined
                  id="bio"
                  name="bio"
                  label="Bio"
                  type="text"
                  v-model="bio"
                  :error="errors.length > 0"
                  :error-messages="errors[0]"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <ValidationProvider
                name="Password"
                rules="required|min:8"
                v-slot="{ errors }"
              >
                <v-text-field
                  outlined
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
            </v-col>
            <v-col cols="12" sm="6">
              <ValidationProvider
                name="Confirm Password"
                rules="required|min:8|confirmed:password"
                v-slot="{ errors }"
              >
                <v-text-field
                  outlined
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
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" type="submit">Register</v-btn>
        </v-card-actions>
      </form>
    </ValidationObserver>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      name: "",
      email: "",
      phone: "",
      bio: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    async submit() {
      await this.registerUser({
        email: this.email,
        password: this.password,
      });
    },
  },
  created() {
    if (this.$store.state.isAuthenticated) {
      this.$router.push({ name: "user.profile" });
    }
  },
};
</script>
