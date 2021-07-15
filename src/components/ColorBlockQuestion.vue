<template>
  <div class="colorBlock">
    <div class="colorDisplay" :style=style></div>
    <div class="colorRGBString"> {{ rgbDisplay }}</div>
  </div>
</template>

<script>
export default {
  name: 'ColorBlock',
  props: {
    rgb: String,
  },
  computed: {
    style(){
      return 'background-color: ' + this.rgb
    },
    rgbDisplay(){
      return this.rgb;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2
{
  text-align: center;
}

.colorBlock{
  margin-top: 10px;
}

.colorDisplay
{
  margin: 0 auto;
  width: 50%;
  height: 300px;
  border-radius: 10px;
}

@media (max-width: 1024px) {
  .colorDisplay
  {
    width: 100%;
    height: 150px;
    border-radius: 3px;
  }
}

.colorRGBString
{
  font-size: 1.25rem;
  margin-top: 5px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
