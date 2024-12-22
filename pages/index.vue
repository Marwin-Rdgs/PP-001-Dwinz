<template>
  <!-- Componsant FullPageJS qui gère les sections interactives en plein écran -->
<InProgress />
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