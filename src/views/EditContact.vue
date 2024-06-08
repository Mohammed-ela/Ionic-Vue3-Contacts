<template>
    <!-- Début de la page avec le composant ion-page -->
    <ion-page>
      <!-- En-tête de la page avec un titre -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Modifier le Contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- Contenu principal de la page -->
      <ion-content>
        <!-- Vérifie si le contact existe avant de l'afficher -->
        <ion-list v-if="contact">
          <!-- Champ de saisie pour le nom du contact -->
          <ion-item>
            <ion-input label="Nom" v-model="contact.name" placeholder="Entrez le nom"></ion-input>
          </ion-item>
          <!-- Champ de saisie pour l'email du contact -->
          <ion-item>
            <ion-input label="Email" v-model="contact.email" type="email" placeholder="Entrez l'email"></ion-input>
          </ion-item>
          <!-- Champ de saisie pour le téléphone du contact -->
          <ion-item>
            <ion-input label="Téléphone" v-model="contact.phone" type="tel" placeholder="Entrez le téléphone"></ion-input>
          </ion-item>
          <!-- Bouton pour enregistrer les modifications -->
          <ion-button expand="full" @click="updateContact">Enregistrer</ion-button>
          <!-- Bouton pour revenir à la page d'accueil -->
          <ion-button expand="full" @click="goHome">Annuler</ion-button>
        </ion-list>
        <!-- Message affiché si le contact n'est pas trouvé -->
        <div v-else>
          <p>Contact non trouvé.</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { IonInput, IonItem, IonList, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  
  export default {
    components: {
      IonInput, IonItem, IonList, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent
    },
    setup() {
      // Utilisation de la route et du routeur
      const route = useRoute();
      const router = useRouter();
      // Définition de l'état réactif pour le contact
      const contact = ref(null);
  
      // Fonction exécutée lorsque le composant est monté
      onMounted(() => {
        // Récupère les contacts depuis le LocalStorage
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        // Trouve le contact correspondant à l'ID dans la route
        contact.value = contacts.find(c => c.id === route.params.id);
      });
  
      // Fonction pour mettre à jour le contact
      const updateContact = () => {
        if (contact.value.name && contact.value.email && contact.value.phone) {
          // Récupère les contacts depuis le LocalStorage
          let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
          // Trouve l'index du contact à mettre à jour
          const index = contacts.findIndex(c => c.id === contact.value.id);
          if (index !== -1) {
            // Met à jour les informations du contact
            contacts[index] = { ...contact.value };
            // Enregistre la liste mise à jour dans le LocalStorage
            localStorage.setItem('contacts', JSON.stringify(contacts));
            // Redirige vers la page d'accueil
            router.push('/home');
          }
        } else {
          // Affiche un message d'alerte si tous les champs ne sont pas remplis
          alert("Veuillez remplir tous les champs.");
        }
      };
  
      // Fonction pour revenir à la page d'accueil
      const goHome = () => {
        router.push('/home');
      };
  
      // Retourne les données et les fonctions pour être utilisées dans le template
      return { contact, updateContact, goHome };
    }
  };
  </script>

  