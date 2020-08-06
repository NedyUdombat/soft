const images = document.querySelectorAll('.list-group-item-image');
const blackBg = document.querySelector('.image-animate-bg')

images.forEach(image => {
  image.addEventListener('click', e => {
    console.log(e.target)
    console.log(image)
    document.querySelector('.list-group-item-image.mini').style.display = 'none'
    document.querySelector('.list-group-item-image.big').classList.add('show')
    blackBg.classList.add('show');
  })
})

// blackBg.addEventListener('click', () => {
//   console.log('hide me o')
//   document.querySelector('.list-group-item-image.big').classList.remove('show')
//   blackBg.style.display = 'none'
//   document.querySelector('.list-group-item-image.mini').style.display = 'block'
// })

