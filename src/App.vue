<template>
  <v-app id="creative-lab">
    <v-main>
      <PreAuthorizationLayout v-show="!checkIfAuthenticated()">
        <router-view />
      </PreAuthorizationLayout>
      <PostAuthorizationLayout v-show="checkIfAuthenticated()">
        <router-view />
      </PostAuthorizationLayout>
    </v-main>
  </v-app>
</template>

<script>
import PreAuthorizationLayout from "./components/layouts/PreAuthorizationLayout";
import PostAuthorizationLayout from "./components/layouts/PostAuthorizationLayout";

export default {
  name: "App",
  components: {
    PreAuthorizationLayout,
    PostAuthorizationLayout,
  },
  methods: {
    checkIfAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

