<template>
  <div>
    <v-btn icon @click="likeIt">
      <v-icon color="red">favorite</v-icon>
      {{ count }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: false,
      count: 0
    };
  },
  methods: {
    likeIt() {
      if (User.loggedIn()) {
        this.liked ? this.incr() : this.decr();
        this.liked = !this.liked;
      }
    },
    incr() {
      this.count++;
    },
    decr() {
      this.count--;
    }
  }
};
</script>

<style>
</style>
