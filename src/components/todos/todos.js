import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'todos',
  components: {},
  props: [],
  data () {
    return {
      todos: null
    }
  },
  computed: {
  },
  mounted () {
    this.getTodos();
  },
  methods: {
    getTodos() {
      Vue.use(VueAxios, axios);
      axios.get(
        'https://jsonplaceholder.typicode.com/todos?userId=' + this.$route.params.id, 
        { headers: {
          'content-type': 'application/json'
          }
        }
      ).then((response) => {
        console.log(response.data);
        this.todos = response.data;
      }).catch((error) => {
        console.log(error);
        this.users = [];
      });
    }
  }
}


