import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'dashboard',
  components: {},
  props: {
    msg: String,
  },
  data () {
    return {
      users: null
    }
  },
  created: function () {
    this.getUsers(); 
  },
  mounted () {
  },
  methods: {
    getUsers() {
      Vue.use(VueAxios, axios);
      axios.get(
        'https://jsonplaceholder.typicode.com/users', 
        { headers: {
          'content-type': 'application/json'
          }
        }
      ).then((response) => {
        console.log(response.data);
        this.users = response.data;
      }).catch((error) => {
        console.log(error);
        this.users = [];
      });
    }
  }
}


