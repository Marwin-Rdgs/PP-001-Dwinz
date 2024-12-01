<script setup lang="ts">
// Importation d'une fonction de Vue permettant de créer des variables réactives
import { ref } from 'vue';

// Variable réactive pour contrôler l'état de la fenêtre
const open = ref(false);

// Définition des différents propriétés du composants pour présenter l'artiste.
const props = defineProps({
  nomArtiste: String, // Nom de l'artiste
  BGclip: String, // Clip en fond du composant
  bio: String, // Biographie de l'artiste

  linkSpotify: String, // Lien direct à son Spotify
  linkDeezer: String, // Lien direct à son Deezer
  linkSoundCloud: String, // Lien direct à son SoundCloud
  linkAppleMusic: String, // Lien direct à son AppleMusic
  linkYoutube: String, // Lien direct à son Youtube
})
</script>

<template>
            <!-- Section principale de la page (appelée "Hero") avec une vidéo de fond. -->
            <section class="section hero">
              <!-- Vidéo de fond pour une ambiance visuelle immersive -->
            <video class="background-video" autoplay muted loop>
              <source :src="`/videos/${BGclip}.mp4`" type="video/mp4" />
              <!-- Message affiché si le navigateur de l'utilisateur ne supporte pas les vidéos -->
              Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
            <!-- Fenêtre (à fermer ou ouvrir) -->
             <div class="bg-D-primary-pink rounded-2xl">
              <img @click="open = !open" src="../assets/img/chevron.svg" alt="" class="w-[32px] absolute left-0 top-[60%] transition-all ease-in-out duration-500 bg-D-primary-pink bg-opacity-80 rounded-3xl p-1" :class="[open ? 'rotate-180 ml-96 mt-20 lg:mt-0' : 'lg:rotate-0 lg:ml-0 mt-20 lg:mt-0']">

              <div class="absolute left-0 top-[50%] transition-all ease-in-out duration-500 lg:w-1/4 bg-D-grey bg-opacity-35 rounded-lg p-4" :class="[open ? 'ml-0 opacity-100' : '-ml-96 opacity-0 lg:opacity-100']">
                <h2 class="text-D-secondary-pink text-center font-Primary">{{ nomArtiste }}</h2>
                <p class="text-D-secondary-pink text-left font-Secondary pl-2"> {{ bio }} </p>
                <ul class="flex justify-center gap-3 mt-4">
                  <li><a href="#"><img src="../assets/img/Spotify.svg" alt="" class="w-[30px] -translate-y-0 hover:-translate-y-3 scale-100 hover:scale-110 transition-all duration-100 ease-in-out"></a></li>
                  <li><a href="#"><img src="../assets/img/Deezer.svg" alt="" class="w-[30px] -translate-y-0 hover:-translate-y-3 scale-100 hover:scale-110 transition-all duration-100 ease-in-out"></a></li>
                  <li><a href="#"><img src="../assets/img/Soundcloud.svg" alt="" class="w-[30px] -translate-y-0 hover:-translate-y-3 scale-100 hover:scale-110 transition-all duration-100 ease-in-out"></a></li>
                  <li><a href="#"><img src="../assets/img/AppleMusic.svg" alt="" class="w-[30px] -translate-y-0 hover:-translate-y-3 scale-100 hover:scale-110 transition-all duration-100 ease-in-out"></a></li>
                  <li><a href="#"><img src="../assets/img/Youtube.svg" alt="" class="w-[30px] -translate-y-0 hover:-translate-y-3 scale-100 hover:scale-110 transition-all duration-100 ease-in-out"></a></li>
                </ul>
              </div>
            </div>
          </section>
</template>

<style scoped>
/* Style de la section principale. Elle occupe toute la hauteur de l'écran. */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
}

  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .content {
    position: relative;
    z-index: 1;
  }


.section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  }

</style>