<template>
  <div>
    <reply v-for="reply in content" :key="reply.id" :data="reply"></reply>
  </div>
</template>

<script>
import Reply from "./reply";

export default {
  props: ["replies"],
  data() {
    return {
      content: this.replies
    };
  },
  components: { Reply },
  created() {
    this.listen();
  },
  methods: {
    listen() {
      EventBus.$on("newReply", reply => {
        this.content.unshift(reply);
      });
    }
  }
};
</script>

<style>
</style>
