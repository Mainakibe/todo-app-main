//dark mode toggle
const checkbox =document.getElementById('checkbox')

checkbox.addEventListener('click',checkMode)

function checkMode(){
    if(checkbox.checked){
        darkModeOn()
    }else{
        darkModeOff()
    }
}

function darkModeOn(){
    document.body.classList.add('dark-mode')
}

function darkModeOff(){
    document.body.classList.remove('dark-mode')
}

// todo
const input = document.querySelector('#item')
const list =document.querySelector('.list')

// add to do function

function addToDo(toDo){
    const text =`<li class="item">
    <i class="far fa-circle" id="circle" id="0" job="complete"></i>
    <p class="text">${toDo}</p>
    <img src="images/icon-cross.svg" alt="" id="delete" id="0" job="delete">
    </li> `
    const position ="beforeend"
    list.insertAdjacentHTML(position,text)
}
// addToDo('kill the cat')

// add items to the todo using the enter button

document.addEventListener('keyup', function(event){
    if(event.keyCode===13){
        const toDo=input.value
        if(toDo){
            addToDo(toDo)
        }
        input.value=""
    }
})