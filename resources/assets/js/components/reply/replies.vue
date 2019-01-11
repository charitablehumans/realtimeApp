<template>
  <v-container>
    <reply v-for="reply in replies" :key="reply.id" :data="reply" v-if="replies"></reply>
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
