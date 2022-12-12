<template>
  <div>
    <v-row g-1>
      <v-col 
      v-for="({ 
        urlToImage,
        title, 
      
      }, i) in artigos" :key="i"
      cols="12" sm="4" >
        <v-card
          class=""
          outlined
          rounded  >
          <v-img :lazy-src="urlToImage" :src="urlToImage" 
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
          class="white--text align-end"
          >  
          <v-card-title small>
            {{ title }}
          </v-card-title>
                  
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn  @click="lerArtigo(artigos[i])" color="primary" >
            Ler <v-icon left>mdi-newspaper</v-icon>
          </v-btn>
        </v-card-actions>
       </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import PaginaDeArtigo from '@/components/HelloWorld'
  import { mapState, mapGetters,mapActions } from 'vuex'
  import swal from 'sweetalert'

  export default {
    name: 'Home',
    computed:{
      ...mapGetters({
        artigos:'PN/artigoAPI'
      })
    },
    methods: {
      ...mapActions({
        get:'PN/getTopHeadLine'
      }),
      lerArtigo(artigo){
        try{
          
          this.$FModal.show(
          { component: PaginaDeArtigo },
          { artigo } )
          

        } catch (error){

          swal("Houve um erro!",`${error}`, "error");

        }
      },
      async updatedNews(){
        // this.$FModal.show(
        // { component: HelloWorld },
        // { msg: "Welcome to Your Vue.js App" } )

        await this.get();
        // await swal('Hello world');
      },
      
    },
    mounted() {
      this.updatedNews()
    },


  }
</script>
