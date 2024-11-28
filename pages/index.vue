<template>
    <h1 class="text-D-primary-pink text-center font-Primary">(présentation du site)</h1>
    <FullPage>
        <!-- Section 1: Hero avec vidéo de fond -->
      <div class="section hero">
        <video class="background-video" autoplay muted loop>
          <source src="~/assets/videos/808NOCHE-Luma.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        <h2 class="text-D-secondary-pink text-center font-Primary">hihi !:D </h2>
      </div>
  
      <!-- Section 2: Biographie ou autres sections -->
      <div class="section hero">
        <video class="background-video" autoplay muted loop>
          <source src="~/assets/videos/Choki-Sur_le_dembow.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        <h2 class="text-D-secondary-pink text-center font-Primary">hihi !:D </h2>
      </div>
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
</style>