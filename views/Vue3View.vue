<template>
 <main>
  <h1>Заготовка стека - Vue3,Vue Router,Vuex,Axios,СSS</h1>
  <h2>Cодержимое state в в хранилище Vuex- {{$store.state.count}} </h2>
  <button @click="showstore">Показать и прибавить к тому что есть в стейте</button><br>
  <hr>
  {{ data }}<br>
  <p>
  <button @click="loaddata">Загрузить данные из тестового API</button><br> 
  </p> 
 </main> 
</template>


<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

export default { 
setup() {
  const store = useStore()
  const path = ref('/');
  const data = ref('[]');
  const showstore = () => {
    store.commit('changevalue',5)
    }
    const loaddata = () => {
     return axios.get('https://catfact.ninja/fact')
        .then(response => {
          data.value=response.data
          
          })
    }  
  return {path,data,showstore,loaddata}
}}
</script>

<style scoped>
@import './css/normalize.css';
@import './css/style.css';
</style>






