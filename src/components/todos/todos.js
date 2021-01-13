import axios from 'axios'

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


