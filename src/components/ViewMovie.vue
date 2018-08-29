<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                         Title: {{movie.title}}
                     </h1>
                    <!-- <h2 class="subtitle">
                        <p>Address: {{order.deliveryAddress}}</p>
                        <p>Status: {{order.status}}</p>
                    </h2> -->
                </div>
            </div>
        </section>
    </p>
  </header>
  <!-- <div class="card-content">
    <div class="content">
        <div class="field is-grouped" v-if="order.rentalPeriod">
            <p class="control">
                Start Date:
            </p>
            <p class="control">
                {{order.rentalPeriod.startDate}}
            </p>
        </div>
        <div class="field is-grouped" v-if="order.rentalPeriod">
            <p class="control">
                End Date:
            </p>
            <p class="control">
                {{order.rentalPeriod.endDate}}
            </p>
        </div>
        <div class="field is-grouped" v-if="order.plant">
            <p class="control">
                Plant:
            </p>
            <p class="control">
                {{order.plant.name}}
            </p>
        </div>
        <div class="field is-grouped" v-if="order.plant">
            <p class="control">
                Plant Description:
            </p>
            <p class="control">
                {{order.plant.description}}
            </p>
        </div>
        <div class="field is-grouped" v-if="order.plant">
            <p class="control">
                Plant Price:
            </p>
            <p class="control">
                {{order.plant.price}}
            </p>
        </div>
        <div class="field is-grouped">
            <p class="control">
                Total Price:
            </p>
            <p class="control">
                {{order.total}}
            </p>
        </div>
    </div>
  </div>
  <footer class="card-footer">
    <a @click="checkAvailability" class="card-footer-item">Check Availability</a>
    <a @click="accept" class="card-footer-item">Accept</a>
    <a @click="reject" class="card-footer-item">Reject</a>
  </footer> -->
</div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'ViewMovie',
  props: {movie:Object},
  methods:{
    // checkAvailability:function(){
    //     var url = this.order.plant._links.availability.href;
    //     url = url.replace('{startDate}',this.order.rentalPeriod.startDate);
    //     url = url.replace('{endDate}',this.order.rentalPeriod.endDate);
    //     this.$emit("checkPlantAvailability",{url:url, method:this.order.plant._links.availability.method});
    // },
    // accept:function(){
    //   this.$emit("updatePurchaseOrder",{url:this.order._links.accept.href, method:this.order._links.accept.method});
    // },
    // reject:function(){
    //   this.$emit("updatePurchaseOrder",{url:this.order._links.reject.href, method:this.order._links.reject.method});
    // }
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