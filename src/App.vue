<template>
  <div>
    <router-view></router-view>
  </div>
</template>
  
  <script>
  
  export default {
    name: 'App',
     data: () => ({ value: 1 }),
  
      
  };
  </script>
  <style>
   .v-item-group.v-bottom-navigation .v-btn.v-size--default {
          height: inherit;
      }
  </style>
  