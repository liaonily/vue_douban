<template lang="html">
  <div>
    <Spinner v-if="loading" />
    <div v-if="movies.length" >
      <p>{{movieList.title}}</p>
      <p>共{{movieList.total}}条,显示{{movies.length}}条</p>
      <p><a href="javascript: void(0)" @click="loadMore()">显示更多</a></p>
      <div class="movies">
        <div class="movie" v-for="item in movies" :key="item.id">
          <a href="javascript: void(0)" @click="getDetails(item)"><img :src="attachImageUrl(item.images.medium)" width="160px" height="240px"></a>
          <h3>{{item.title}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/movie.css'
import Spinner from '@/components/Spinner'
export default {
  components: {
    Spinner
  },
  data () {
    return {
      query: '',
      start: 0,
      count: 9,
      movieList: {},
      movies: [],
      loading: true
    }
  },
  mounted () {
    this.query = this.$route.query.query
    this.searchMovies()
  },
  watch: {
    '$route': 'loadAgain'
  },
  methods: {
    loadAgain () {
      this.query = this.$route.query.query
      this.movies = []
      this.searchMovies()
    },
    searchMovies () {
      this.loading = true
      fetch(`/v2/movie/search?q=${this.query}&start=${this.start}&count=${this.count}`).then(res => {
        return res.json()
      }).then(data => {
        console.log(data)
        this.movieList = data
        this.movies.push(...data.subjects)
        this.loading = false
      })
    },
    loadMore () {
      if (this.count < this.movieList.total) {
        this.start += this.count
        this.searchMovies()
      }
    },
    getDetails (movie) {
      this.$router.push({path: `/movie/${movie.id}`})
    },
    // 修改图片链接
    attachImageUrl (srcUrl) {
      if (srcUrl !== undefined) { // 将http://或https://替换成图片缓存网站的链接
        return srcUrl.replace(/http\w{0,1}:\/\//g, 'http://images.weserv.nl/?url=')
      }
    }
  }
}
</script>

<style lang="css">
</style>
