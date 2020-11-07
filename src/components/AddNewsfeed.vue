<template>
    <div class="row mt-4 justify-content-center"> 
        <form class="col bg-white shadow-lg">
            <h3 class="p-3 my-3 text-center text-secondary">Add Newsfeed</h3>
            <input v-model="titletext" type="text" class="form-control my-3" id="uname" placeholder="Enter Title" name="uname" required>
            <textarea  v-model="textarea" type="text" class="form-control my-3" id="uname" placeholder="Enter Content" name="uname" required> </textarea>
            <input v-model="textauthor" type="text" class="form-control my3" id="uname" placeholder="Enter Author" name="uname" required>
            <div class="row justify-content-center my-4">
                 <button @click="addTextI" class="btn btn-outline-secondary btn-sm mx-1" required >add Newsfeed</button>
            </div>  
        </form>    
    </div>
</template>

<script>
    import { mapActions} from "vuex"
    import { v1 } from "uuid"
    import $ from 'jquery'
    export default {
        data(){
            return{
                titletext:"",
                textarea:"",
                textauthor:""
            }
        },
        methods:{
            ...mapActions(["addText"]),
            addTextI(e){
                   if (this.titletext && this.textarea && this.textauthor ) {
                         this.addText({
                            id:v1(),
                            title:this.titletext,
                            content:this.textarea,
                            author:this.textauthor
                            })
                            e.preventDefault();
                            this.$alert('Newsfeed Saved');
                            this.titletext='',
                            this.textarea='',
                            this.textauthor=''
                        }
            }
        }
    }
    
</script>

<style scoped>
        form {
           max-width: 700px;
           border-radius: 15px;
        }

</style>