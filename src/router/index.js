import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies'
import MovieList from '@/components/MovieSearch'
import MovieDetail from '@/components/MovieDetail'
import HelloWorld from '@/components/HelloWorld'
import Books from '@/components/Books'
import BookList from '@/components/BookSearch'
import BookDetail from '@/components/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/book/search',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/book/:id',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/movie/search',
      name: 'SearchList',
      component: MovieList
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ]
})
