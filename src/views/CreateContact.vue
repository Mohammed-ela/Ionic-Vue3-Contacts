<template>
    <!-- Début de la page avec le composant ion-page -->
    <ion-page>
      <!-- En-tête de la page avec un titre -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Créer un contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- Contenu principal de la page -->
      <ion-content>
        <!-- Liste de champs de saisie pour les informations de contact -->
        <ion-list>
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
          <!-- Bouton pour créer un nouveau contact -->
          <ion-button expand="full" @click="createContact">Créer</ion-button>
          <!-- Bouton pour revenir à la page d'accueil -->
          <ion-button expand="full" @click="goHome">Annuler</ion-button>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { defineComponent, reactive } from 'vue';
  import { IonInput, IonItem, IonList, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  
  export default defineComponent({
    // Définition des composants utilisés dans ce composant
    components: { IonInput, IonItem, IonList, IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent },
    setup() {
      // Définition de l'état réactif pour les informations du contact
      const contact = reactive({ name: '', email: '', phone: '' });
  
      // Fonction pour créer un nouveau contact
      const createContact = () => {
        // Vérifie que tous les champs sont remplis
        if (contact.name && contact.email && contact.phone) {
          // Récupère les contacts existants depuis le LocalStorage
          let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
          // Ajoute le nouveau contact à la liste
          contacts.push({ ...contact, id: Date.now().toString() });
          // Enregistre la liste mise à jour dans le LocalStorage
          localStorage.setItem('contacts', JSON.stringify(contacts));
          // Redirige vers la page d'accueil
          window.location.href = '/home';
        } else {
          // Affiche un message d'alerte si tous les champs ne sont pas remplis
          alert("Veuillez remplir tous les champs.");
        }
      };
  
      // Fonction pour revenir à la page d'accueil
      const goHome = () => {
        window.location.href = '/home';
      };
  
      // Retourne les données et les fonctions pour être utilisées dans le template
      return { contact, createContact, goHome };
    }
  });
  </script>

  