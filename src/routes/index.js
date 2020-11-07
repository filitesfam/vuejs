import AddNewsfeed from '../components/AddNewsfeed.vue'
import ListNewsfeed from '../components/ListNewsfeed.vue'
import eachNews from '../components/eachNews.vue'
import newsFromApi from '../components/newsFromApi.vue'


export default[
    {path:'/add',component:AddNewsfeed},
    {path:'/',component:ListNewsfeed},
    {path:'/news/:id',component:eachNews},
    {path:'/apinews',component:newsFromApi},
]