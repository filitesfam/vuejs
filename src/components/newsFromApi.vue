<template>
    <div class="container">
        <div v-for= "newsfeed in items" :key="newsfeed.id" class="row justify-content-center">
        <div class="col- card my-3" style="width:50rem; border-radius:12px;">
                <div class="card-body my-3">
                    <a v-bind:href="newsfeed.url"><h2 class="card-title font-weight-bold text-secondary my-2"  >{{newsfeed.title}}</h2></a>
                    <!-- <h5 class="card-title font-weight-bold text-secondary my-2" v-if="!editable">{{newsfeed.title}}</h5> -->
                    <p class="card-text text-justify" >{{newsfeed.description}}</p>
                    <h6 class="author my-3 float-right font-weight-lighter font-italic" >Author~{{newsfeed.author}}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
    mounted () {
        this.$store.dispatch('loadItems')
    },
    computed: {
        ...mapState(['items']),
    }
}
</script>

<style scoped>

</style>