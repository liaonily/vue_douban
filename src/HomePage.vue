<template>
  <div class="home">
    <div class="content">
      <h1>{{ title }}</h1>
      <p>请点击电影或图书进入相关主页</p>
      <header>
        <div>
          <nav>
            <ul>
              <li><router-link to="/movies" style="color: #2384E8;">电影</router-link></li>
              <li><router-link to="/books" style="color: #2384E8;">图书</router-link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      title: 'Welcome to Vue.js Douban App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin-top: 300px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
