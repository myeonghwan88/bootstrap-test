// const emailInputEl = document.querySelector('#exampleInputEmail1')
// const modalEl = document.querySelector('#exampleModal')

// modalEl.addEventListener('shown.bs.modal', function () {
//   emailInputEl.focus()
// })

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(dropdownToggleEl => new Dropdown(dropdownToggleEl))

// new Modal(document.getElementById('exampleModal'))
new Modal(document.querySelector('#exampleModal'), {
  backdrop: 'static'
})

