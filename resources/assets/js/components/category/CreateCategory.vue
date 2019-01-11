<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field label="Category Name" v-model="form.name" required></v-text-field>

      <v-btn type="submit" color="teal">Create</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null
      }
    };
  },
  methods: {
    submit() {
      axios.post("/api/category", this.form).then(res => console.log(res.data));
    }
  }
};
</script>

<style>
</style>
