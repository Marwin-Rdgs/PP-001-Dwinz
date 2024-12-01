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
        nomArtiste="Scrib"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="SCRIB-ISIAH"/>

        <Artiste 
        nomArtiste="Rodrigues Moreau"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Rodrigues_Moreau-La_Beaute_Urbaine"/>

        <Artiste 
        nomArtiste="Igno"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Igno-Sois_meilleur"/>

        <Artiste 
        nomArtiste="R1"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="R1-Sans_Rancunes"/>

        <Artiste 
        nomArtiste="Choki"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Choki-Sur_le_dembow"/>

        <Artiste 
        nomArtiste="CJ Tell'm"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="CJTellm-GNININ_LOVE"/>

        <Artiste 
        nomArtiste="Godson"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Godson-33"/>

        <Artiste 
        nomArtiste="Light Boy"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="LightBoy-Capuche"/>

        <Artiste 
        nomArtiste="Jeune Pablo"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Jeune_Pablo-Picasso"/>

        <Artiste 
        nomArtiste="Méga"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Mega-Bakagang"/>

        <Artiste 
        nomArtiste="Morphée"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Morphee-WAV"/>

        <Artiste 
        nomArtiste="Naili"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Naili-den_bas"/>

        <Artiste 
        nomArtiste="Kidaki"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Kidaki-Paye"/>

        <Artiste 
        nomArtiste="Shawass"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Shawass-Semtex_love"/>

        <Artiste 
        nomArtiste="The Vivi"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="TheVivi-Grandir"/>

        <Artiste 
        nomArtiste="Todd"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam unde quo veritatis magni modi excepturi, quos ab aperiam quis vero enim asperiores temporibus voluptatum ad quas fugiat recusandae nobis."
        BGclip="Todd-Boy"/>
    
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