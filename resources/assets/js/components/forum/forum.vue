<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question></question>
      </v-flex>sidebar
    </v-layout>
  </v-container>
</template>

<script>
import question from "./question";
export default {
  components: { question }
};
</script>

<style>
</style>
