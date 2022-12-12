<template>
  <v-app>
      <vcard>
        <v-img height="200" width  :src="artigo.urlToImage" :lazy-url="artigo.urlToImage">
          
        </v-img>
        <v-card-title>
        
        </v-card-title>
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
