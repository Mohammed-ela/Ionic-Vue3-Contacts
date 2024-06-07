<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contacts</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="goToCreate">Ajouter</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-searchbar v-model="searchQuery"></ion-searchbar>
      <ion-list>
        <ion-item v-for="contact in filteredContacts" :key="contact.id" @click="goToDetail(contact.id)">
          <ion-label>
            <h2>{{ contact.name }}</h2>
            <p>{{ contact.email }}</p>
          </ion-label>
          <ion-button @click.stop="goToEdit(contact.id)">Modifier</ion-button>
          <ion-button @click.stop="deleteContact(contact.id)" color="danger">Supprimer</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      contacts: JSON.parse(localStorage.getItem('contacts')) || []
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    goToCreate() {
      this.$router.push('/create');
    },
    goToDetail(id) {
      this.$router.push(`/${id}`);
    },
    goToEdit(id) {
      this.$router.push(`/${id}/edit`);
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  }
};
</script>
