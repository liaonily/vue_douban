<template lang="html">
  <div class="search">
    <input type="text" class="search-input" v-model.trim="query" @keyup.enter="search()" name="search"
           placeholder="请输入搜索内容"/>
    <img src="../assets/search-btn.png" alt="search-button" class="search-btn" @click="search()" />
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
.search {
  background: #fff;
  position: relative;
  margin-top: 20px;
}
.search-input {
  border: 0;
  background: #f5f5f5;
  padding: 10px 5px;
  width: 50%;
  outline: none;
}
.search-btn {
  width: 20px;
  margin-bottom: -5px;
  margin-left: -35px;
}

</style>
