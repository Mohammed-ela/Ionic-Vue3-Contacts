<template>
  <!-- Début de la page avec le composant ion-page -->
  <ion-page>
    <!-- En-tête de la page avec un titre et un bouton pour ajouter un contact -->
    <ion-header>
      <ion-toolbar>
        <ion-title>Contacts</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="addContact">Ajouter un contact</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <!-- Contenu principal de la page -->
    <ion-content>
      <!-- Liste des contacts -->
      <ion-list>
        <!-- Chaque contact est affiché dans un item -->
        <ion-item v-for="contact in contacts" :key="contact.id">
          <!-- Lorsque l'utilisateur clique sur le label, il est redirigé vers les détails du contact -->
          <ion-label @click="viewContact(contact.id)">
            <h2>{{ contact.name }}</h2>
            <p>{{ contact.email }}</p>
            <p>{{ contact.phone }}</p>
          </ion-label>
          <!-- Bouton pour éditer le contact -->
          <ion-button @click="editContact(contact.id)" slot="end" color="primary">Edit</ion-button>
          <!-- Bouton pour supprimer le contact -->
          <ion-button @click="deleteContact(contact.id)" slot="end" color="danger">Delete</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    // Définition de l'état réactif pour la liste des contacts
    const contacts = ref([]);

    // Fonction exécutée lorsque le composant est monté
    onMounted(() => {
      // Récupère les contacts depuis le LocalStorage
      contacts.value = JSON.parse(localStorage.getItem('contacts') || '[]');
    });

    // Fonction pour afficher les détails d'un contact
    const viewContact = (id) => {
      window.location.href = `/${id}`;
    };

    // Fonction pour éditer un contact
    const editContact = (id) => {
      window.location.href = `/edit/${id}`;
    };

    // Fonction pour supprimer un contact
    const deleteContact = (id) => {
      // Récupère les contacts depuis le LocalStorage
      let storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      // Filtre les contacts pour retirer celui à supprimer
      storedContacts = storedContacts.filter(contact => contact.id !== id);
      // Enregistre la liste mise à jour dans le LocalStorage
      localStorage.setItem('contacts', JSON.stringify(storedContacts));
      // Met à jour la liste des contacts affichée
      contacts.value = storedContacts;
    };

    // Fonction pour ajouter un nouveau contact
    const addContact = () => {
      window.location.href = `/create`;
    };

    // Retourne les données et les fonctions pour être utilisées dans le template
    return { contacts, viewContact, editContact, deleteContact, addContact };
  }
});
</script>
