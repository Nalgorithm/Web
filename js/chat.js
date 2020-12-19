const generateMessage = (content) => {
    let messageDiv = document.createElement('div')
    let messageText = document.createElement('span')
    messageDiv.classList.add('userMessage')
    messageText.innerHTML = content
    messageDiv.appendChild(messageText)

    const btn = document.createElement("button");
    btn.className = "chat__msg_del";
    btn.innerHTML = "x";
    btn.addEventListener("click", function (e) {
        e.target.parentNode.remove();
    });
    messageDiv.append(btn)

    return messageDiv;
}


let dict = {
    first: ['Привет ', 'Салам ', 'Здарова ', 'Приветствую '],
    second: ['работяга ', 'синьор ', 'друг ', 'брат '],
    third: ['как сам? ', 'как дела? ', 'чем помочь? ']
}

const generateAnswer = () => {
    let messageDiv = document.createElement('div')
    let messageText = document.createElement('span')
    messageDiv.classList.add('botMessage')
    messageText.innerHTML = dict.first[Math.floor(Math.random() * dict.first.length)] + dict.second[Math.floor(Math.random() * dict.second.length)] + dict.third[Math.floor(Math.random() * dict.third.length)];
    messageDiv.appendChild(messageText)

    return messageDiv;
}


let input = document.querySelector('input')
let chatDiv = document.getElementById('chat')
const createChat = (input, chat) => {
    let btnSend = document.getElementById('btnSend')
    btnSend.addEventListener('click', () => {
        if (input.value === '') {
            return
        }
        chatDiv.appendChild(generateMessage(input.value))
        input.value = ''
        setTimeout(() => chatDiv.appendChild(generateAnswer()), 1000)
    })
}

createChat(input, chatDiv)