<script setup lang="ts">
import { ref } from 'vue';

// Variable réactive pour contrôler l'état de la fenêtre
const open = ref(true);

defineProps({
  nomArtiste: String,
  BGclip: String,
  bio: String,

  linkSpotify: String,
  linkDeezer: String,
  linkSoundCloud: String,
  linkAppleMusic: String,
  linkYoutube: String,
})
</script>

<template>
            <!-- Section 1: Hero avec vidéo de fond -->
            <section class="section hero">
            <video class="background-video" autoplay muted loop>
              <source src="~/assets/videos/808NOCHE-Luma.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
            <!-- Fenêtre (à fermer ou ouvrir) -->
             <h1 @click="open = !open">ouvrir la fenetre</h1>
             <div
             :class="['window',open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0']"
             >
              <h2 class="text-D-secondary-pink text-center font-Primary">{{ nomArtiste }}</h2>
            </div>
          </section>
</template>

<style scoped>
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

  /* Transition personnalisée pour Tailwind */
.window {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}

</style>