<template>
  <div>
    <table class="table is-table-bordered is-table-striped is-fullwidth">
    <thead>
        <tr>
            <th class="has-text-center">Title</th>
            <th class="has-text-center">Year</th>
            <th class="has-text-center">Score</th>
            <th class="has-text-center">Rating</th>
            <!-- <th class="has-text-center">Price</th>
            <th class="has-text-center">Subtotal</th>
            <th class="has-text-center">Actions</th> -->
        </tr>
    </thead>
    <tbody>
      <tr><p v-if="movies.length==0">No movies found</p></tr>
        <tr v-for="movie in movies" :key="movie.objectID">
            <td>{{movie.title}}</td>
            <td>{{movie.year}}</td>
            <!-- <td>{{order.rentalPeriod.startDate|formatDate}}</td>
            <td>{{order.rentalPeriod.endDate|formatDate}}</td> -->
            <td class="has-text-right">{{order.score}}</td>
            <td class="has-text-right">{{order.rating}}</td>
            <a @click="view(movie.objectID)"  class="button is-danger is-outlined">View</a>
        </tr>
    </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Movies',
  props: {status:String},
  data: function() {
        return {
            movies:[]
        }
    },
  methods:{
    view:function(id){
      this.$emit("viewMovie", id);
    },
    getMovies:function() {
        this.index.search('Just Go With It', function(err, content) {
            console.log(content.hits);
        });
    //   axios.get(this.baseUrl+'/api/sales/orders?status='+this.status).then(response => {
    //     if(response.data._embedded){
    //       this.orders = response.data._embedded.orders;
    //     }
    //   }).catch(error => {
    //     this.$snackbar.open({
    //       type: 'is-danger',
    //       message: "Something went wrong with purchase order submission."
    //     });
    //   });
    }
  }
  ,
  mounted:function() {
    this.getMovies();
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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