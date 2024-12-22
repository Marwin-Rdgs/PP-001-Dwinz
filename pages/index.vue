<template>
  <!-- Componsant FullPageJS qui gère les sections interactives en plein écran -->
  <FullPage>


    <section class="section w-full bg-[url('/assets/img/Dwinz-Hero-BG.jpg')] bg-cover bg-center bg-opacity-5 h-screen">
      <header>
        <img src="../assets/logos/Logo-Dwinz-Long.svg" alt="" class="h-[128px] pl-[4%] pt-[2%]">
      </header>
      <div class="grid grid-cols-2 w-full pt-[4%] items-center">
        <div class="col-span-1 px-[4%]">
          <p class="font-Secondary text-D-black text-lg">Le nouveau média Rap Français vous présentant les nouvelles pépites, nouveautés, présentation, actualités et d’autres fonctionnalités arriveront dans le futur !</p>
          <div class="mt-[4%]">
            <h2 class="font-Secondary text-D-black text-lg font-semibold text-center">Ils nous font confiances</h2>
            <div class="flex justify-center gap-14 pt-[2%]">
              <partner name="Choki" img="Choki"/>
              <partner name="Choki" img="Choki"/>
              <partner name="Choki" img="Choki"/>
              <partner name="Choki" img="Choki"/>
              <partner name="Choki" img="Choki"/>
            </div>
          </div>
        </div>
        <div class="col-span-1 flex justify-center">
          <div class="relative w-1/2">
            <img src="../assets/img/BG-Hero-Section.jpg" alt="" class="opacity-80 rounded-3xl">
            <img src="../assets/logos/Music.webp" alt="" class="absolute -top-20 right-11 scale-125">
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center pt-[8%] px-[4%]">
        <div class="grid gap-4">
          <div class="flex justify-start gap-10">
            <a href="#" target="_blank" class="hover:animate-pulse hover:-translate-y-2 hover:scale-105"><img src="/icons/Instagram.svg" alt=""></a>
            <a href="#" target="_blank" class="hover:animate-pulse hover:-translate-y-2 hover:scale-105"><img src="/icons/Tiktok.svg" alt=""></a>
          </div>
          <p class="text-lg font-Primary font-bold text-D-primary-pink">Suivez Dwinz sur les réseaux pour être aux premières loges !</p>
        </div>
        <div class="lg:flex lg:gap-10 lg:items-center">
          <p class="text-lg font-Primary font-bold text-D-primary-pink">Scroll pour découvrir des artistes</p>
          <img src="/icons/Scroll.svg" alt="" class="animate-bounce w-1/12">
        </div>
      </div>
    </section>
      <!-- <h1 class="text-D-primary-pink text-center font-Primary section">(présentation du site)</h1> -->


      <!-- Composant Artiste qui affiche les informations sur un artiste spécifique -->
        <Artiste id="first"
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