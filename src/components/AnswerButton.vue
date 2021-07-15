<template>
    <div class="button" :style="style" v-on:click="changeColor(color)">{{ color }}</div>
</template>

<script>

export default {
  name: "AnswerButton",
  data() {
    return {
      changeBackground: false,
    }
  },
  props: {
    color: String
  },
  // Computed Replace Filters
  computed: {
    style() {
        if (this.changeBackground) {
            return "background-color: " + this.color + ";color:" + this.color;
        }
        else{
            return "";
        }
    }
  },
  methods: {
    changeColor(color) {
        this.changeBackground = !this.changeBackground

        this.$emit('updatemsg', color)
    }
  }
};
</script>

<style scoped>
.button {
  margin-right: 2rem;
  padding: 0.3rem;
  font-size: 2rem;
  border: 1px black solid;
  background-color: #fff;
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
</style>
