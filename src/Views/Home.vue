<template>
  <div class="home">
    <ColorBlockQuestion :rgb="rgb" />

    <div class="splitline" />

    <div ref="buttonGroups">
      <AnswerOptions :option="colorname" :jamming="jamming" @update="update" />
    </div>

    <!-- <div class="splitline"/>
    <button class="nextBtn" v-on:click="update">Next</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ColorBlockQuestion from "@/components/ColorBlockQuestion.vue";
import AnswerOptions from "@/components/AnswerOptions.vue";
import json from "@/data/Colors.json";
import _ from "lodash";

function generateOption(){
  let randomValue = Math.floor(Math.random() * json.length);
  let jamming = _.shuffle(json).map(i => i.color).slice(0, 3);
  let colorname = json[randomValue].color
  jamming.unshift(colorname)
  jamming = _.sortedUniq(jamming)
  jamming = _.shuffle(jamming)

  return {
    'jamming' : jamming, 
    'rgb': json[randomValue].rgb,
    'colorname': colorname
  };
}

export default {
  name: "Home",
  data() {
    let option = generateOption()

    return {
      rgb: option.rgb,
      colorname: option.colorname,
      jamming: option.jamming
    };
  },
  computed: {

  },
  components: {
    ColorBlockQuestion,
    AnswerOptions
  },
  methods: {
    update(){
      let option = generateOption()

      this.rgb = option.rgb
      this.colorname = option.colorname
      this.jamming = option.jamming

    }
  }
};
</script>

<style scoped>
.splitline {
  margin-top: 15px;
  margin-bottom: 15px;
}

.nextBtn{
  padding: 10px;
  font-size: 1.5rem;
}
</style>