<template></template>

<script>
export default {
  data() {
    return {
      question: {}
    };
  },
  created() {
    // console.log(this.$route.params.slug);
    axios
      .get(`/api/question/${this.$route.params.slug}`)
      .then(res => (this.question = res.data.data));
  }
};
</script>

<style>
</style>
