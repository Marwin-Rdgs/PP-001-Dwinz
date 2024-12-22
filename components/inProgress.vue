
<template>
    <div class="background-progress">
       <div class="progress__logo-Me">
           <a href="https://marwin-rodrigues.fr/" target="_blank"><img src="../assets/logos/Logo-MarwinWeb.png" alt="Logo de Chez Marwin-web" class="progress__logo-Me-Web"></a>
       </div>

       <div class="progess__content">
           <div class="progress__content-text">
               <div class="putCenter">
                   <img class="logoprincipal" src="../assets/logos/Logo-Dwinz-Long.svg" alt="Logo de Dwinz">
               </div>
               <h1>Coming Soon</h1>
               <p>Le futur site web de Dwinz prend vie… Restez connectés pour une expérience innovante à venir !</p>
               <div class="putCenter">
                   <a href="https://www.instagram.com/dwinzwave/"><button>Savoir plus sur Dwinz</button></a>
               </div>
           </div>
       </div>
    </div>
</template>

<style scoped>
.background-progress {
  background-image: url('../assets/img/BackGround.jpg'); /* Assurez-vous que ce chemin est correct */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh; /* Ajouté pour s'assurer que le fond prend toute la hauteur de l'écran */
}

.progress__content {
  display: grid;
  grid-template-columns: 50% 50%;
}

.progress__content-text {
  grid-column: 1;
  padding-top: 12%;
  padding-right: 20%;
}

.progress__content-text img {
  width: 128px;
}

.progress__content-text h1 {
  color: #EEA500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-size: 64px;
  text-align: center;
  padding-top: 2%;
}

.progress__content-text p {
  color: #FAFAFA;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 24px;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
}

.progress__content-text a button {
  background-color: #EEA500;
  border: 2px solid #EEA500;
  padding: 8px 32px;
  border-radius: 6px;
  text-align: center;
  color: #FAFAFA;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
}

.progress__content-text a button:hover {
  background-color: transparent;
  color: #EEA500;
}

.progress__logo-Me {
  position: absolute;
  top: 2%;
  right: 2%;
}

.progress__logo-Me-Web {
  width: 128px;
  opacity: 80%;
}

.putCenter {
  display: flex;
  justify-content: center;
}

</style>
