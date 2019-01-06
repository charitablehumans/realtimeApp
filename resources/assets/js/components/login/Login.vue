<template>
  <v-container>
    <v-form v-model="valid">
      <v-text-field label="E-mail" v-model="form.email" type="email" required></v-text-field>
      <v-text-field label="Password" v-model="form.password" type="password" required></v-text-field>

      <v-btn color="green" type="submit">Login</v-btn>
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  }
};
</script>

<style>
</style>
