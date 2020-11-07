<template>
    <div class="card my-3" style="width:45rem; border-radius:12px;">
        <div class="card-body">
            <router-link v-bind:to="'/news/' + newsfeed.id"><h2 class="card-title font-weight-bold text-secondary my-2" v-if="!editable" >{{newsfeed.title}}</h2></router-link>
            <!-- <h5 class="card-title font-weight-bold text-secondary my-2" v-if="!editable">{{newsfeed.title}}</h5> -->
            <p class="card-text text-justify" v-if="!editable">{{newsfeed.content}}</p>
            <h6 class="author my-3 float-right font-weight-lighter font-italic" v-if="!editable">Author~{{newsfeed.author}}</h6>
            <div v-else>
                <input v-model="newsfeedtitle"  type="text" class="my-2 col form-control">
                <textarea v-model="newsfeedcontent"  type="text" class="my-2 col form-control"/>
                <input v-model="newsfeedauthor"  type="text" class=" my-2 col form-control">
            </div>
            <div>
                 <button @click="updateNewsfeed1(newsfeed)"  class="btn btn-outline-secondary btn-sm mx-1">{{editable?'Update':'Edit'}}</button>
                 <button @click="deleteNewsfeed(newsfeed.id)" v-html="Del" class="btn btn-outline-secondary btn-sm mx-1"></button>
            </div>
         </div>
     </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
    props:{
       newsfeed:{},

    },
    data(){
        return{
           editable: false,
           newsfeedtitle:'',
           newsfeedcontent:'',
           newsfeedauthor:'',
           Del:"<i class='fa fa-trash'></i>"
        }
    },
    methods:
    {
        ...mapActions(["deleteNewsfeed","updateNewsfeed"]),
        updateNewsfeed1(newsfeed){
            this.editable = this.editable==true?false:true
        if (this.editable){
            this.newsfeedtitle= newsfeed.title
            this.newsfeedcontent= newsfeed.content
            this.newsfeedauthor= newsfeed.author
            this.updateNewsfeed(newsfeed)
        }
        else{
            newsfeed.title = this.newsfeedtitle
            newsfeed.content = this.newsfeedcontent
            newsfeed.author = this.newsfeedauthor
        }
        
        }
    }

    }
</script>

<style scoped>

</style>