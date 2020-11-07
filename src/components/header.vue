<template>
    <div class="navbar justify-content-center navbar-expand-lg bg-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link text-white btn btn-outline-success mx-2" to="/add">Add</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-white nav-link btn btn-outline-success mx-2" to="/">Show NewsFeed</router-link>
            </li>
              <li class="nav-item">
                <router-link class="text-white nav-link btn btn-outline-success" to="/apinews">World NewsFeed</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
    
</script>

<style scoped>

</style>