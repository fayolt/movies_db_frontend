<template>
  <div v-if="movie">
    <view-movie :movie="movie"></view-movie>
    <!-- @updatePurchaseOrder="handleUpdate" @checkPlantAvailability="handleAvailability" -->
  </div>
</template>

<script>
// import axios from 'axios'
import ViewMovie from '@/components/ViewMovie.vue'

export default {
  name: 'Movie',
  components: {
    ViewMovie
  },
  data: function() {
        return {
            movie:{}
        }
    },
    methods:{
    //   handleAvailability:function(request){
    //     axios.get(request.url).then(response => {
    //           this.$toast.open({
    //             type: 'is-success',
    //             message: "Plant is available"
    //           });
    //         }).catch(error => {
    //           this.$toast.open({
    //             type: 'is-danger',
    //             message: error.response.data
    //           });
    //         });
    //   },
    //   handleUpdate:function(request){
    //     this.showMsg();
    //     if(request.method=='POST'){
    //         axios.post(request.url,{}).then(response => {
    //           this.$toast.open({
    //             type: 'is-success',
    //             message: "Purchase Order successfully accepted"
    //           });
    //           this.$router.push("/");
    //         }).catch(error => {
    //           this.$toast.open({
    //             type: 'is-danger',
    //             message: "Something went wrong with purchase order submission."
    //           });
    //         });
    //     }

    //     if(request.method=='DELETE'){
    //       axios.delete(request.url,{}).then(response => {
    //           this.$toast.open({
    //             type: 'is-success',
    //             message: "Purchase Order successfully rejected"
    //         });
    //         this.$router.push("/");
    //         }).catch(error => {
    //           this.$toast.open({
    //             type: 'is-danger',
    //             message: "Something went wrong with purchase order submission."
    //           });
    //         });
    //     }

    //   },
    //   showMsg:function(){
    //     this.$snackbar.open({
    //                 duration: 5000,
    //                 message: 'Please wait while we inform the customer of your decision!',
    //                 type: 'is-warning',
    //                 position: 'is-top',
    //                 queue: false
    //             })
    //   }
    },
    mounted:function() {
        if(this.$route.params.id) {
            this.index.search(this.$route.params.id, function(err, content) {
                console.log(content.exhaustiveNbHits);
            })
        }
        // if(this.$route.params.id) {
        //     axios.get(this.baseUrl + '/api/sales/orders/'+this.$route.params.id).then(response => {
        //         this.order = response.data;
        //     }).catch(error => {
        //         this.$snackbar.open({
        //         type: 'is-danger',
        //         message: "Something went wrong with purchase order submission."
        //         });
        //     });
        // }
        
    }
}
</script>