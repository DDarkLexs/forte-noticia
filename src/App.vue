<template>
<v-app>
<!--   <v-navigation-drawer app>
  
  </v-navigation-drawer> -->

  <v-app-bar color="primary" app>
    <!-- -->
    
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>
  
  <v-footer app>
    <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    app
    :grow="true"
    shift
  >
    <v-btn>
      <span>Video</span>
  
      <v-icon>mdi-television-play</v-icon>
    </v-btn>
  
    <v-btn>
      <span>Music</span>
  
      <v-icon>mdi-music-note</v-icon>
    </v-btn>
  
    <v-btn>
      <span>Book</span>
  
      <v-icon>mdi-book</v-icon>
    </v-btn>
  
    <v-btn>
      <span>Image</span>
  
      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
  <v-card
      class="flex"
      flat
      tile
    >
    <v-card-text class="py-2 white--text text-center">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-card-text>
  </v-card>
  </v-footer>
</v-app>
</template>

<script>

export default {
  name: 'App',
   data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
};
</script>
<style>
 .v-item-group.v-bottom-navigation .v-btn.v-size--default {
        height: inherit;
    }
</style>
