<template>
  <div v-if="question">
    <edit-question :data="question" v-if="editing"></edit-question>
    <show-question v-else :data="question"></show-question>
    <replies :replies="question.replies"></replies>
  </div>
</template>

<script>
import ShowQuestion from "./ShowQuestion";
import EditQuestion from "./EditQuestion";
import Replies from "../reply/replies";

export default {
  components: { ShowQuestion, EditQuestion, Replies },
  data() {
    return {
      question: null,
      editing: false
    };
  },
  created() {
    // console.log(this.$route.params.slug);
    this.listen();
    this.getQuestion();
  },
  methods: {
    listen() {
      EventBus.$on("startEditing", () => {
        this.editing = true;
      });

      EventBus.$on("cancelEditing", () => {
        this.editing = false;
      });
    },
    getQuestion() {
      axios
        .get(`/api/question/${this.$route.params.slug}`)
        .then(res => (this.question = res.data.data));
    }
  }
};
</script>

<style>
</style>
