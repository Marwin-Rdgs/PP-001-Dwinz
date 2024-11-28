<template>
    <h1 class="text-D-primary-pink text-center font-Primary">(présentation du site)</h1>
    <!-- Componsant FullPageJS qui gère les sections interactives en plein écran -->
    <FullPage>
      <!-- Composant Artiste qui affiche les informations sur un artiste spécifique -->
        <Artiste 
        nomArtiste="808noche"/>
    </FullPage>
</template>
  
  <script>
  // Importation du composant FullPage pour gérer les sections
  import FullPage from '@/components/FullPage.vue'
  
  export default {
    components: {
      // Enregistrement du composant FullPage pour une utilisation dans ce fichier
      FullPage,
    },
  }
  </script>