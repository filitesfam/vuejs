<template>
    <div>
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col">
                        <h2 class="bg-secondary text-white p-2">{{news.title}}</h2>
                    </div>
                </div>
                <div class="p-5">
                    <div class="row">
                        <div class="col mb-3">
                            <p>{{news.content}}</p>
                        </div>    
                    </div>
                    <div class="row">
                           <div class="col d-flex justify-content-end align-items-center">
                                <img src="../assets/images/miki.png" alt="" class="pr-2">
                                <h6 class="font-weight-lighter font-italic align-middle">{{news.author}}</h6>
                           </div>
                   </div>
                </div>
            </div>
    </div>
</template>

<script>
    import { mapGetters} from "vuex"
    export default {
         data () {
        return {
            id: this.$route.params.id,
            news: {}
        }
    },
    computed:{
       ...mapGetters(["newsById"]),
    },
    created:function(){
                    this.news = this.newsById(this.id)
                    console.log(this.news)
            }
    }
</script>

<style scoped>
 img{
     max-width: 40px;
     max-height:40px;
 }
</style>