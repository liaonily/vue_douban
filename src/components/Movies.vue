<template>
  <div>
    <spinner v-if="loading" />
    <div v-if="moviesInTheaters.subjects">
      <div class="title">
        <p>{{moviesInTheaters.title}}</p>
        <p>共 <i>{{moviesInTheaters.total}}</i> 部</p>
      </div>
      <div class="movies">
        <div class="movie" v-for="movie in moviesInTheaters.subjects" :key="movie.id">
          <a href="javascript: void(0)" @click="getDetails(movie)"><img :src="movie.images.small" alt="Image" width="160px" height="240px"></a>
          <h4>{{movie.title}}</h4>
        </div>
      </div>
      <div>
        <p><a href="javascript:void(0)" @click="loadMoreMoviesInTheaters">更多&gt;&gt;</a></p>
      </div>
      <div class="title">
        <p>{{moviesComingSoon.title}}</p>
        <p>共 <i>{{moviesComingSoon.total}}</i> 部</p>
      </div>
      <div class="movies">
        <div class="movie" v-for="movie in moviesComingSoon.subjects" :key="movie.id">
          <a href="javascript: void(0)" @click="getDetails(movie)"><img :src="movie.images.small" alt="Image" width="160px" height="240px"></a>
          <h4>{{movie.title}}</h4>
        </div>
      </div>
      <div>
        <p><a href="javascript:void(0)" @click="loadMoreMoviesComingSoon">更多&gt;&gt;</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/movie.css'
import Spinner from '@/components/Spinner'
export default {
  name: 'Movies',
  components: {
    Spinner
  },
  data () {
    return {
      loading: true,
      moviesInTheaters: {},
      moviesComingSoon: {},
      start_t: 0,
      count_t: 9,
      start_c: 0,
      count_c: 9
    }
  },
  mounted () {
    this.loadMoviesInTheaters()
    this.loadMoviesComingSoon()
  },
  methods: {
    loadMoviesInTheaters () {
      this.loading = true
      fetch(`/v2/movie/in_theaters?start=${this.start_t}&count=${this.count_t}`).then(res => {
        return res.json()
      }).then(data => {
        // console.log(data)
        this.moviesInTheaters = data
        this.loading = false
      })
    },
    loadMoviesComingSoon () {
      fetch(`/v2/movie/coming_soon?start=${this.start_c}&count=${this.count_c}`).then(res => {
        return res.json()
      }).then(data => {
        // console.log(data)
        this.moviesComingSoon = data
      })
    },
    loadMoreMoviesInTheaters () {
      this.count_t += 9
      this.loadMoviesInTheaters()
    },
    loadMoreMoviesComingSoon () {
      this.count_c += 9
      this.loadMoviesComingSoon()
    },
    getDetails (movie) {
      this.$router.push({path: `/movie/${movie.id}`})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
