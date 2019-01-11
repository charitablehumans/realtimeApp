<template>
  <v-container>
    <reply v-for="reply in replies" :key="reply.id" :data="reply"></reply>
  </v-container>
</template>

<script>
import Reply from "./reply";

export default {
  props: ["replies"],
  components: { Reply }
};
</script>

<style>
</style>
