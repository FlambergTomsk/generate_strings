
import {generateString} from "~/utils/strings";
import localForage from "localforage";


export const state = () => ({
  percents: null,
  stringsArray: [],
  search: '',
  searchResultCount: 0,
  searchResultArray: [],
});

export const mutations = {
  SET_PROGRESS_PERCENTS: (state, i) => {
    state.percents = i;
  },

  SET_STRINGS_ARRAY: (state, array) => {
    state.stringsArray = array;
  },

  SET_SEARCH_VALUE: (state, value) => {
    state.search = value;

    if(value){
    state.searchResultArray = state.stringsArray.filter((str) =>{
      let searchString = `^${value}`
      return str.match(searchString)
    })
    state.searchResultCount = state.searchResultArray.length;
    }else{
     state.searchResultArray = [];
     state.searchResultCount = 0;
    }
  },

};

export const actions = {
  async GET_STRINGS_ARRAY({ commit }) {
    let result = [];
    let conditions = await localForage.getItem('array0');
    if(!conditions){
      for(let i = 0; i <100 ; i+=1){
        let arr = [];
        // for(let i = 0; i <10000  ; i++){
        //test mode
        for(let i = 0; i <100000  ; i++){
        let str = generateString();
        arr.push(str);
       }
        await localForage.setItem(`array${i}`, arr);
        result = result.concat(arr);
        commit('SET_PROGRESS_PERCENTS', i);
       }
      commit('SET_STRINGS_ARRAY', result);
      } else {
        for(let i = 0; i <100 ; i+=1){
        let arrFromStorage = await localForage.getItem(`array${i}`)
        result = result.concat(arrFromStorage);
        commit('SET_PROGRESS_PERCENTS', i);
        }
        commit('SET_STRINGS_ARRAY', result);
      }
    }
};

export const getters = {
  PERCENTS(state) {
    return state.percents;
  },
  STRINGS_ARRAY(state) {
    return state.stringsArray;
  },
  RESULT_COUNT(state) {
    return state.searchResultCount;
  },
  RESULT_ARRAY(state) {
    return state.searchResultArray;
  },
};
