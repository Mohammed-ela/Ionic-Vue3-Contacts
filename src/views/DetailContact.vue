<template>
    <!-- Début de la page avec le composant ion-page -->
    <ion-page>
      <!-- En-tête de la page avec un titre -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Détails du Contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- Contenu principal de la page -->
      <ion-content class="ion-padding">
        <!-- Vérifie si le contact existe avant de l'afficher -->
        <div class="contact-details" v-if="contact">
          <!-- Carte contenant les informations du contact -->
          <ion-card>
            <ion-card-header>
              <ion-card-title>{{ contact.name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p><strong>Email:</strong> {{ contact.email }}</p>
              <p><strong>Téléphone:</strong> {{ contact.phone }}</p>
            </ion-card-content>
          </ion-card>
        </div>
        <!-- Message affiché si le contact n'est pas trouvé -->
        <div v-else>
          <p>Contact non trouvé.</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      // Utilisation de la route pour obtenir l'ID du contact
      const route = useRoute();
      // Définition de l'état réactif pour le contact
      const contact = ref(null);
  
      // Fonction exécutée lorsque le composant est monté
      onMounted(() => {
        // Récupère les contacts depuis le LocalStorage
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        // Trouve le contact correspondant à l'ID dans la route
        contact.value = contacts.find(c => c.id === route.params.id);
      });
  
      // Retourne les données pour être utilisées dans le template
      return { contact };
    }
  };
  </script>
  
  <style scoped>
  .contact-details {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
  }
  </style>
  