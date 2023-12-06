"use strict"
const dropdown = document.querySelector('.dropdown')
const show = (word) => {
  const dropInput = document.querySelector('.dropdown-box')
  dropInput.value = word
}
dropdown.addEventListener('click',()=>{
  dropdown.classList.toggle('active')
})
