import axios from 'axios'

axios.get('/api/animals')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
