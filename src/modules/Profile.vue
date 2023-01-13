<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md10>
        <v-card class="elevation-5">
          <v-card-text>
            <v-row>
              <v-col
                class="d-flex align-center justify-center"
                cols="12"
                sm="2"
              >
                <v-avatar>
                  <v-img :src="'./' + user.profile_picture"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="7">
                <h2>{{ user.name }}</h2>
                <p class="mt-1">
                  {{ user.bio }}
                </p>
              </v-col>
              <v-col class="mt-md-6" cols="12" sm="3">
                <v-row>
                  <div class="primary--text">
                    <v-icon>mdi-phone</v-icon> {{ user.phone }}
                  </div>
                </v-row>
                <v-row>
                  <span class="primary--text">
                    <v-icon>mdi-email</v-icon> {{ user.email }}
                  </span>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-layout class="mt-3">
          <v-row dense>
            <v-col v-for="image in user.album" :key="image.id" col="12" sm="4">
              <v-card class="elevation-5">
                <v-img
                  class="align-end"
                  height="200"
                  :src="'./' + image.img"
                  cover
                >
                  <v-card-title class="white--text">{{
                    image.title
                  }}</v-card-title>
                </v-img>
                <v-card-text>{{ image.description }}</v-card-text>
                <v-card-actions>
                  <span>
                    <v-btn icon color="red">
                      <v-icon v-show="image.featured">mdi-heart</v-icon>
                    </v-btn>
                  </span>
                  <v-spacer></v-spacer>
                  <span>{{ image.date }}</span>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    user: null,
  }),
  created() {
    this.user = this.$store.state.auth.loggedInUser;
  },
};
</script>

<style>
#creative-lab {
  background: rgb(111, 125, 153);
  background: linear-gradient(
    283deg,
    rgba(111, 125, 153, 1) 0%,
    rgba(207, 188, 169, 1) 60%
  );
}
</style>