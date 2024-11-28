<template>
  <!-- Conteneur principal pour FullPage.js -->
    <div id="fullpage">
      <!-- Emplacement des sections enfants qui seront insérées dynamiquement dans ce composant -->
    <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    // Cycle de vie exécuté lorsque le composant est monté sur la page
    mounted() {
      // Charger fullpage.js dynamiquement côté client seulement
      if (process.client) {
        import('fullpage.js').then((fullpage) => {
          this.fullpageInstance = new fullpage.default('#fullpage', {
            // Configuration de fullpage.js
            autoScrolling: true,
            scrollHorizontally: true,
            navigation: true,
          });
        });
      }
    },
    beforeDestroy() {
      if (this.fullpageInstance) {
        this.fullpageInstance.destroy('all');
      }
    },
  };
  </script>
  
  <style scoped>
  /* Style pour le conteneur principal. Il occupe toujours 100% de la hauteur de l'écran. */
  #fullpage {
    height: 100vh;
  }
  </style>