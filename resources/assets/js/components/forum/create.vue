<template>
  <v-container>
    <v-form @submit.prevent="create">
      <v-text-field label="Title" v-model="form.title" type="text" required></v-text-field>

      <v-select
        :items="categories"
        v-model="form.category_id"
        item-text="name"
        item-value="id"
        label="Category"
        autocomplete
      ></v-select>

      <v-btn color="green" type="submit">Create</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: null,
        category_id: null
      },
      categories: {}
    };
  },
  created() {
    axios.get("/api/category").then(res => (this.categories = res.data.data));
  },
  methods: {
    create() {}
  }
};
</script>

<style>
</style>
