<template>
  <!-- Componsant FullPageJS qui gère les sections interactives en plein écran -->
  <FullPage>
      <!-- <h1 class="text-D-primary-pink text-center font-Primary section">(présentation du site)</h1> -->


      <!-- Composant Artiste qui affiche les informations sur un artiste spécifique -->
        <Artiste 
        nomArtiste="808noche"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="808NOCHE-Luma"/>

        <Artiste 
        nomArtiste="Choki"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="808NOCHE-Luma"/>
    
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