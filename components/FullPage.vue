<template>
    <div id="fullpage">
    <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
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
  #fullpage {
    height: 100vh;
  }
  </style>