<template>
  <v-app>
      <vcard>
        <v-img height="200" width  :src="artigo.urlToImage" :lazy-url="artigo.urlToImage">
          <v-app-bar
          flat
          color="rgba(0,0,0,0)"> 
          <v-icon> mdi-map-marker </v-icon>
          
          </v-app-bar>          
        </v-img>
        <v-card-title>
          {{ artigo.title }}
        </v-card-title>
        <v-card-text>
          {{ artigo.content }}
        </v-card-text>
      </vcard>

    
      
  </v-app>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props:['artigo'],

    data: () => ({
   
    }),
  }
</script>
