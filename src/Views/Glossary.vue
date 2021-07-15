<template>
  <ColorBlock v-for="color in colors" v-bind:key="color" :color="color.color" :rgb="color.rgb" />
</template>

<script>
import ColorBlock from "@/components/ColorBlock.vue";
import json from "@/data/Colors.json";

export default {
  name: "App",
  data() {
      return {
        colors: json
      };
  },
  components: {
    ColorBlock,
  },
};
</script>