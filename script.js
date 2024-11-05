const chatBody = document.querySelector(".chatBody");
const messageInput = document.querySelector('.message input');


//create message elemnt with dynamic classes and return it
const creatMessageElement = (content, classes) = >
{
    const div = document.createElement('div');
    div.classList.add('message',classes);
    div.innerHTML = content;
    return div;
}


//handle outgoing user meassages
const handleOutGoingMessage = (userMessage)=>
{
    //Create and dispaly user message
    const meassageContent = `<div class="message-text">${userMessage}</div`;
    const outgoingMesageDiv = createMessageElement(messageContent,'user-message');
    chatBody.appeandChild(outgoingMesageDiv);

}


//Handel enter key press to send meassage
 messageInput.addEventListener('keydown', (e) =>{
    const userMessage = e.target.value.trim();
    if(e.key === 'Enter' && userMessage){
        handleOutGoingMessage(userMessage)
    }
 });
