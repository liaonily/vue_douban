<template lang="html">
  <div v-if="movie" class="movie-detail">
    <h2>{{movie.title}} <span>({{movie.year}})</span></h2>
    <div class="movie-info">
      <div>
        <img :src="movie.images.medium" alt="image">
      </div>
      <div class="pl30">
        <p>导演：{{formatCreator(movie.directors)}}</p>
        <p>主演：{{formatCreator(movie.casts)}}</p>
        <p>类型：{{movie.genres.join(' / ')}}</p>
        <p>制片国家：{{movie.countries.join(' / ')}}</p>
        <p>又名：{{movie.aka.join(' / ')}}</p>
      </div>
    </div>
    <div class="summary">
      <h3>剧情简介</h3>
      <p>{{movie.summary}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      movie: null
    }
  },
  mounted () {
    this.loadMovie()
  },
  methods: {
    loadMovie () {
      fetch(`/v2/movie/subject/${this.id}`).then(res => res.json()).then(data => {
        console.log(data)
        this.movie = data
      })
    },
    formatCreator (arr) {
      return arr.map(item => item.name).join(' / ')
    }
  }
}
</script>

<style lang="css">
  h2 {
    text-align: left;
    padding-left: 50px;
  }
  .pl30 {
    padding-left: 30px;
  }
  .movie-detail {
    width: 800px;
  }
  .movie-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding-left: 50px;
    text-align: left;
  }
  .summary {
    text-align: left;
    padding-left: 50px;
  }
  .summary p {
    text-indent: 2em;
  }

</style>
