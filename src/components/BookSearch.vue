<template>
  <div>
    <Spinner v-if="loading" />
    <div v-if="books.length" v-for="book in books" :key="book.id" class="books">
        <h4>{{book.title}}</h4>
        <p><i>{{book.author}}</i></p>
        <a href="javascript: void(0)"><img :src="book.images.large" alt="image" @click="getDetails(book)"></a>
        <p>{{book.summary}}</p>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
export default {
  components: {
    Spinner
  },
  data () {
    return {
      loading: true,
      query: '',
      books: []
    }
  },
  mounted () {
    this.query = this.$route.query.query
    console.log(this.$route)
    this.searchBooks()
  },
  watch: {
    '$route': 'loadAgain'
  },
  methods: {
    loadAgain () {
      this.query = this.$route.query.query
      this.searchBooks()
    },
    searchBooks () {
      this.loading = true
      fetch(`/v2/book/search?q=${this.query}`).then(res => {
        return res.json()
      }).then(
        data => {
          console.log(data)
          this.books = data.books
          this.loading = false
        }
      )
    },
    getDetails (book) {
      this.$router.push({path: `/book/${book.id}`})
    }
  }

}
</script>
<style media="screen">
  .books{
    padding: 50px;
  }
</style>
