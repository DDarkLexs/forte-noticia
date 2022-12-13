<template>
    <v-app>
    <!--   <v-navigation-drawer app>
      
      </v-navigation-drawer> -->
    
      <v-app-bar dark color="primary" app>
        <v-app-bar-title>
            Forte-noticia
        </v-app-bar-title>
        
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
        <v-btn   
        v-for="({ 
           name,
           label,
           icon
          }, i) in routes" :to="{ name }" :key="i">
          <span>{{ label }}</span>
      
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
     
      </v-footer>
    </v-app>
    </template>
    
    <script>
    
    export default {
        name: 'AppView',
       data: () => ({ 
            routes:[
                {
                    label:"Destaques",
                    name:'destaque',
                    icon:'mdi-newspaper-variant'
                }
            ]

        }),
    
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
    