<template lang="html">
  <div id="TalionNav">
    <header class="TalionNav">
      <div class="TalionNav-primary">
        <nav>
          <ul>
            <li><router-link to="/movies" style="color: #2384E8;">电影</router-link></li>
            <li><router-link to="/books" style="color: #2384E8;">图书</router-link></li>
          </ul>

        </nav>
      </div>
    </header>
    <div class="search">
      <input type="text" class="search-input" v-model.trim="query" @keyup.enter="search()" name="search"
             placeholder="请输入搜索内容"/>
      <img src="../assets/search-btn.png" alt="search-button" class="search-btn" @click="search()" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      placeholder: '',
      path: ''
    }
  },
  methods: {
    search () {
      if (this.$route.path === 'index' || this.$route.path.indexOf('movie') > 0) {
        this.path = '/movie/search'
      }
      if (this.$route.path.indexOf('book') > 0) {
        this.path = '/book/search'
      }
      this.$router.push({path: this.path, query: {query: this.query}})
      this.query = ''
    }
  }
}
</script>

<style scoped lang="css">
  .TalionNav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background: #fff;
  }
  .TalionNav a {
    text-decoration: none;
  }
  .TalionNav-primary {
    border-bottom: 1px solid #f3f3f3;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    background: #fff;
    height: 47px;
    box-sizing: border-box;
    display: flex;
  }
  .TalionNav-primary nav ul{
    padding: 0;
  }
  .TalionNav-primary nav li{
    display: inline-block;
    font-size: 15px;
    margin-right: 19px;
  }
  .search {
    background: #fff;
    margin-top: 47px;
    position: relative;
  }
  .search-input {
    border: 0;
    background: #f5f5f5;
    padding: 10px 5px;
    width: 100%;
    outline: none;
}
.search-btn {
  width: 20px;
  position: absolute;
  right: 5px;
  top: 9px;
}

</style>
