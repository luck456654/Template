<template>
    <main>
      <h1>Заготовка стека - Vue2,Vue Router,Vuex,Axios,СSS</h1>
      <h2>{{$store.state.count}}</h2>
      <button @click="add">Прибавить 5</button>
      <button @click="min">Отнять 10</button>
      <button @click="squareval">Возвести в квадрат</button>
      <br>
      <br>
      <PropsView :content="'Я ПРОПС'+$store.state.count" content2="Я ПРОПС2"></PropsView>
      <hr>
      <button @click="loaddata">Загрузить данные из тестового API</button>
      <p>{{ data }}</p>
    </main>
</template>


<script>
import PropsView from './PropsView.vue';
import axios from 'axios';

export default {
  name: "HomeView",
  components: {
        PropsView
    },
  data() {
    return {
      data:[]
          }; 
     },
  methods: {
  add(){  
    this.$store.commit('changevalue',5)
  },
  min(){  
    this.$store.commit('minvalue',10)
  },
  squareval(){  
    this.$store.commit('squareval')
  },
  loaddata(){
    axios.get('https://catfact.ninja/fact')
        .then(response => {
          this.data=response.data
          
          })
  }
}  
};
</script>

<style scoped>
@import './css/normalize.css';
@import './css/style.css';
</style>
