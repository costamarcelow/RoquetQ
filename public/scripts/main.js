import { Modal } from './modal'

const modal = Modal()

//Pegar todos os bot~eos que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //adicionar a escuta
  button.eventlistener('click', event => {
    modal.open()
  })
})
