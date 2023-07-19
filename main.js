const message = document.querySelector('.message')
const button = document.querySelector('.button')
const feedback = document.querySelector('.feedback')
const messageContent = document.querySelector('.message-content')

button.addEventListener('click',yazdir)

function yazdir(e) {
    e.preventDefault()
    if(message.value === '') {
        feedback.classList.add('active')
      setTimeout(() => {
        feedback.classList.remove('active')
      }, 4000);
    } else {
      messageContent.textContent = message.value
        setTimeout(()=>{
         messageContent.textContent = ''
        },5000)
    }
}