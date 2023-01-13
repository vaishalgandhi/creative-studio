<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-card-title>
            <v-layout align-center>
              <v-flex>
                <v-img
                  alt="test"
                  class="ml-3"
                  contain
                  height="48px"
                  position="center"
                  src="./img/cg-logo.png"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-card-title>
          <slot />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "PreAuthorizationLayout",
};
</script>

<style>
#creative-lab {
  background: rgb(254, 189, 135);
  background: linear-gradient(
    72deg,
    rgba(254, 189, 135, 1) 0%,
    rgba(255, 152, 135, 1) 57.99999999999999%
  );
}
.text-center {
  text-align: center;
}
</style>