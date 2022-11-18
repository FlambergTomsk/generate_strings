<template>
  <div class="page"
  :class="{'page_loading': isLoading}"
  >
    <div
     v-if="PERCENTS === 99"
     class="page__content">
        <div class="page__container">
          <search
          :placeholder = "'Введите не менее двух символов'"
          :isError="isError"
          v-model="searchField"
          v-debounce:500="changeSearch"
          @clear = "kostbIL"
          />
          <div class="page__result result" v-if="searchField.length>1 && !isLoading" :key="searchKey">
           <div class="result__block result__block_sticky "><span class="result__text">Найдено строк:</span>  {{RESULT_COUNT}}</div>
           <br/>
           <div  v-if="RESULT_ARRAY.length>0" class="result__block" ><span class="result__text "> Найденные строки:</span> </div>
           <br/> 
           <span class="result__array" v-if="RESULT_ARRAY.length>0">{{RESULT_ARRAY}}</span>
            <span class="result__empty" v-if="RESULT_ARRAY.length === 0 && searchField">
              По вашему запросу ничего не найдено
            </span>
          </div>
         <transition name="cards" mode="out-in">
          <div
          v-if="!isLoading && searchField.length<2"
          class="content__field">
          <h2 class="content__title">Используемые технологии</h2>
           <div class="content__blocks">
            <div
            class="content__list"
            v-for="item in content"
            :key="item.id"
            >
              <card
              :item="item"
              />
            </div>
            </div>
          </div>
        </transition>
        </div>
        <transition name="cards" mode="out-in">
        <div
        v-if="!isLoading && !searchField"
        class="page__joke joke">
          <div class="joke__text">
            Вам понравилась работа?
          </div>
          <div
            class="icon-checkbox page__icon"
            @click="isLiked=!isLiked"
            :class="{'icon-checkbox_active':isLiked}"
            >
              <span class="path1" /><span class="path2" /><span class="path3" />
            </div>
         </div>
         </transition>
         <transition name="cards" mode="out-in">
         <div
          v-if="isLiked && !isLoading && !searchField"
          class="page__telegramm">
          <a class="page__address" href="https://t.me/AndreyT0msk" target="_blank">Пишите мне в телеграмм! <span class="icon-message page__message"/></a>
          
         </div>
         </transition>
    </div>
    <div
     v-if="PERCENTS !== 99"
     class="page__loader loader">
      <div class="loader__wrapper">
        <div class="loader__title">
          Задание
        </div>
        <div class="loader__text loader__text_colored">
          Требуется реализовать приложение, взаимодействующее с локальным хранилищем данных (например, с localstorage, но не обязательно).
          <br>
          <br>
          Приложение должно загрузить в хранилище 10 000 000 строк длиной 100, сгенерированных рандомно из букв в любом регистре.
          <br>
          <br>
          Приложение должно обладать строкой ввода, с помощью которой пользователь будет искать по хранилищу. 
        </div>
        <el-progress
        class="loader__block"
        type="circle" :text-inside="true"	:percentage="PERCENTS+1"/>
        <div class="loader__text">
          Идет генерация данных, пожалуйста подождите...
        </div>
        <br/>
        <div class="loader__text">
          Прогресс {{PERCENTS+1}}%
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

import search from '@/components/ui/Search.vue'
import card from '@/components/Card.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import { getDirective } from 'vue-debounce';

Vue.use(Element, { locale })

export default {
  name: "MainApp",
  components: {
    search,
    card,
  },
  directives: {
    debounce: getDirective(),
  },
  data () {
    return {
      isLoading: false,
      searchField: '',
      searchKey: 0,
      percents: 0,
      isLiked: false,
      content: [
        {title:'Nuxt', id: 1, description: 'Понятная структура проекта', src: "/images/nuxt.bmp"},
        {title:'Vue', id: 2, description: 'Реактивный фреймворк',  src: "/images/vue.bmp"},
        {title:'Sass/Scss', id: 3, description: 'Препроцессоры css', src: "/images/css.bmp"},
        {title:'Vuex', id: 4, description: 'Работа со store', src: "/images/vuex.bmp"},
        {title:'Кастомный компонент', id: 5, description: 'Универсальный поиск', src: "/images/search.bmp"},
        {title:'Element UI', id: 6, description: 'Использован готовый loader', src: "/images/loader.bmp"},
        ]
    }
  },
  computed: {
    ...mapGetters('strings',['RESULT_COUNT', 'RESULT_ARRAY', 'PERCENTS']),
    isError(){
      return this.searchField.length === 1 ? true : false;
    },
  },
  watch: {
    'searchField': function () {
      if(this.searchField.length>1) {this.isLoading = true};
    },
  },
  mounted(){
  this.GET_STRINGS_ARRAY();
  },
  methods: {
    ...mapActions('strings',['GET_STRINGS_ARRAY']),
    ...mapMutations('strings',['SET_SEARCH_VALUE']),
    kostbIL(){
      setTimeout(this.changeSearch, 500)
    },
    changeSearch(){
      if (this.searchField.length>1){
      this.SET_SEARCH_VALUE(this.searchField); 
      this.isLoading = false;
      this.searchKey +=1;
      }
    },
  }
}
</script>
<style lang="sass" src="@/assets/sass/components/page.sass" scoped></style>






