import axios from 'axios'

export default {
  name: 'dashboard',
  components: {},
  props: [],
  data () {
    return {
      users: null
    }
  },
  computed: {
  },
  mounted () {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get(
        'https://jsonplaceholder.typicode.com/users', 
        { headers: {
          'content-type': 'application/json'
          }
        }
      ).then((response) => {
        console.log(response.data);
        this.users = this.processUsers(response.data);
      }).catch((error) => {
        console.log(error);
        this.users = [];
      });
    },
    processUsers(users) {
      users.forEach( user => {
        user.firstname = user.name.split(' ')[0];
        user.lastname = user.name.split(' ')[1];
        const address = user.address;
        user.completeAddress = address.street + ' - ' + address.suite + ', ' + address.city + ' ' + address.zipcode;
      })
      return users;
    }
  }
}


