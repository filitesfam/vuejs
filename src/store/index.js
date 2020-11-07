import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)


export default new Vuex.Store({
  strict: true,
  state: {
    items: [],
    newsfeeds:[
      {
        id:1,
        title:"Germany",
        content:"Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank. ",
        author:"Filmon"

      },
      {
        id:2,
        title:"Holland",
        content:"The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes. Amsterdam, the capital, is home to the Rijksmuseum, Van Gogh Museum and the house where Jewish diarist Anne Frank hid during WWII. Canalside mansions and a trove of works from artists including Rembrandt and Vermeer remain from the city's 17th-century ",
        author:"Samuel"
      },
      {
        id:3,
        title:"England",
        content:"England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south.",
        author:"Michael"
      },
      {
        id:4,
        title:"Holland",
        content:"The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes. Amsterdam, the capital, is home to the Rijksmuseum, Van Gogh Museum and the house where Jewish diarist Anne Frank hid during WWII. Canalside mansions and a trove of works from artists including Rembrandt and Vermeer remain from the city's 17th-century ",
        author:"Noah"
      },
      {
        id:5,
        title:"USA",
        content:"The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking. ",
        author:"Yohannes"
      },
      {
        id:6,
        title:"Canada",
        content:"Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area.  In Canada, parents have to make sure their children get an education. Provincial and territorial governments set up and run their own school systems. They’re much the same across Canada, but there are some differences among provinces and territories. Canada does not have a federal department or national system of education.",
        author:"Yohannes"
      }
    ]
  },
  actions: {
    loadItems ({ commit }) {
          axios
              .get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-24&sortBy=publishedAt&apiKey=c59a7962ea304992870ab9fba8307206'
              )
              .then(response => response.data)
              .then(items => {
                  console.log(items.articles);
              commit('SET_Items', items.articles)
          })
      },

    addText({commit},newsfeed){
      commit("add_newsfeed", newsfeed)
    },
    deleteNewsfeed({commit},id){
      commit("delete_newsfeed",id)
    },
    updateNewsfeed({commit},newsfeed){
      commit("update_newsfeed",newsfeed)
    },
  },

  mutations: {
    add_newsfeed(state,newsfeed){
      state.newsfeeds.push(newsfeed)
    },
    delete_newsfeed(state,id){
      state.newsfeeds=state.newsfeeds.filter((newsfeed)=>newsfeed.id != id)
    },
    update_newsfeed(state,newsfeed){
      let index=state.newsfeeds.findIndex((t)=>t.id == newsfeed.id)
      if(index != -1)
      {
        state.newsfeeds[index] = newsfeed
        console.log(state.newsfeeds)
      }
    },
    SET_Items (state, items) {
      state.items = items
    },
  },
 
  getters:{
    allNewsfeed:(state)=> state.newsfeeds,
    searched: (state) => (txt) => {
          return state.newsfeeds.filter( (newsfeed) => {
            return newsfeed.title.toLowerCase().match(txt.toLowerCase());
        })
        },
    newsById: (state) => (id) => {
      return state.newsfeeds.find(newsfeed => newsfeed.id == id)
    },
    items: state => state.items,
     },
  modules: {
  }
})
