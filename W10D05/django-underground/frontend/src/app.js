fetch('/api/stations')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))