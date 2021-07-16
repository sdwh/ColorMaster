<template>
  <p class="feedbackMsg">
    {{ buttonClickMsg }}
    <template v-if="correct">
        <button class="nextBtn" v-on:click="next">Next</button>
      <div style="margin-bottom: 10px"></div>
    </template>
  </p>

  <AnswerButton v-for="(color, index) in jamming" 
    :key="round+color+index" 
    :color="color" @updatemsg="updatemsg"/>

</template>

<script>
import AnswerButton from "@/components/AnswerButton.vue";

export default {
  name: "AnswerOptions",
  emits: ["update"],
  data() {
    return {
      message: '',
      correct: false,
      round: 0,
    }
  },
  components: {
    AnswerButton
  },
  props: {
    option: String,
    jamming: Array,
  },
  // Computed Replace Filters
  computed: {
    style() {
      return "background-color: " + this.rgb;
    },
    buttonClickMsg() {
      return this.message;
    }
  },
  methods: {
    updatemsg(e) {
      if (e == this.option)
      {
        this.message = `${e} 🎨`
        this.correct = true
      }
    },

    next(){
      this.message = ""
      this.correct = false
      this.$emit('update')
      this.round += 1
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  margin-right: 2rem;
  padding: 0.3rem;
  font-size: 2rem;
  border: 1px black solid;
  background-color: ivory;
  color: black;
  border-radius: 3px;
  display: inline-block;
  padding: 0.6rem 0.5rem;
}

@media (max-width: 1024px) {
  .button{
    display: block;
    margin-right: 0;
    margin-bottom: 10px;
  }
}

.button:hover{
  cursor: pointer;
}

.nextBtn{
  padding: 10px;
  font-size: 1.5rem;
}

.feedbackMsg{
  font-size: 1.5rem;
}
</style>
