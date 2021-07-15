<template>

  <h1>灰色と青</h1>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Glossary">Terms</router-link> |
    <a href="https://sdwh.dev" target="_blank">sdwh.dev</a>
  </div>
  
  <hr />

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  height: 100%;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.3rem;
  margin-left: 3%;
  margin-right: 3%;
  text-decoration: none;
}

#nav a:hover{
  color: rebeccapurple;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
