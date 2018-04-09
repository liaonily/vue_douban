<template lang="html">
  <div class="book-detail" v-if="book">
    <div class="title">
      <h1>{{book.title}}</h1>
    </div>
    <div class="about">
      <img :src="book.images.large" alt="book-cover">
      <ul>
        <li>作者：{{book.author}}</li>
        <li>出版社：{{book.publisher}}</li>
        <li>副标题：{{book.subtitle}}</li>
        <li>出版年：{{book.pubdate}}</li>
        <li>页数： {{book.pages}}</li>
        <li>定价： {{book.price}}</li>
        <li>装帧： {{book.bindding}}</li>
      </ul>
    </div>
    <div>
      <h4>内容简介</h4>
      <p>{{book.summary}}</p>
    </div>
    <div class="">
      <h4>作者简介</h4>
      <p>{{book.author_intro}}</p>
    </div>
    <div class="">
      <h4>目录</h4>
      <p>{{book.catalog}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDetails',
  data () {
    return {
      id: this.$route.params.id,
      book: null
    }
  },
  methods: {
    loadBook () {
      fetch(`/v2/book/${this.id}`).then(res => res.json()).then(data => {
        console.log(data)
        this.book = data
      })
    }
  },
  mounted () {
    this.loadBook()
  }
}
</script>

<style scoped lang="css">
  .book-detail {
    text-align: left;
    padding-left: 200px;
    padding-right: 200px;
  }
  .about {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
  }
</style>
