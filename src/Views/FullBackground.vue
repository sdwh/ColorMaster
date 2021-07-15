<template>
    <div :style="{backgroundColor : mapColor}">
        
    </div>
</template>

<script>

export default {
  name: "FullBackground",
  data() {
    return {
         color: this.$route.params.color
    }
  },
  computed: {
      mapColor(){
          let re = /^[0-9a-fA-F]{6,6}$/
          if (this.color.match(re) !== null) {
              return '#' + this.color;
          }

          return this.color;
      }
  }
};
</script>

<style scoped>
div{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    width: 100%;
    z-index: 10;
    background-color: white;
}

@media (max-width: 1024px) {
  div{
      min-height: 1200px;
  }
}


</style>