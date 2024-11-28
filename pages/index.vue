<template>
    <h1 class="text-D-primary-pink text-center font-Primary">(présentation du site)</h1>
    <FullPage>
        <Artiste 
        nomArtiste="808noche"/>
    </FullPage>
</template>
  
  <script>
  import FullPage from '@/components/FullPage.vue'
  
  export default {
    components: {
      FullPage,
    },
  }
  </script>