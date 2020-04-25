let chatBoxIcon = document.querySelector('.chatBoxIcon');
let chatBox = document.querySelector('#chatBox');
let crossIcon = document.querySelector('.crossIcon');


crossIcon.addEventListener('click', ()=>{
    toggleChatBox()
})

chatBoxIcon.addEventListener('click', ()=>{
    toggleChatBox()
})


function toggleChatBox(){
    if (chatBox.style.display === "block") {
        chatBox.style.display = "none";
      } else {
        chatBox.style.display = "block";
      }
}