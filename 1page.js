dropdown()

function dropdown () {
  const burger = document.querySelector("#burger-menu")
  const dropdown = document.querySelector('.burger-dropdown')

  burger.addEventListener('click', () => {
    dropdown.classList.toggle('hidden')
  })
}
