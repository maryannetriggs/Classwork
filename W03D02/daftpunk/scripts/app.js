window.addEventListener('load', () => {

  const soundElements = document.querySelectorAll('.sound')
  const audioList = document.querySelectorAll('audio')

  soundElements.forEach((elem, index) => {
    elem.addEventListener('click', elem => {
      audioList[index].play()
    })
  })

})