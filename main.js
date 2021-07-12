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

// drag and drop list items
const dragArea = document.querySelector('.content')
new Sortable(dragArea, {
    animation:350
})

// todo

const newItemInput = document.getElementById('addItem');
const todoList = document.querySelector('.content ul');
const itemsLeft = document.querySelector('.items-left span');

itemsLeft.innerText=document.querySelectorAll('.list-item input[type="checkbox"]').length



newItemInput.addEventListener('keypress', e=>{
    if(e.charCode === 13 && newItemInput.value.length>0){
        createNewTodoItem(newItemInput.value)
        newItemInput.value=''
    }
})

function createNewTodoItem(text){
    const element= document.createElement('li')
    
    element.innerHTML= `
    <label class="list-item">
    <input type="checkbox" name="todoItem" class="check">
    <span class="checkmark"></span>
    <span class="text">${text}t</span>
    </label> 
    <span class="remove"></span>
    `
    if(document.querySelector('.filter input[type="radio"]:checked').id==='completed'){
        element.classList.add('hidden')
    }
    todoList.append(element)
    updateItemsCount(1)
}

function updateItemsCount(number){
    itemsLeft.innerText = + itemsLeft.innerText + number
}

//delete todo item
function removeTodoItem(element){
    element.remove()
    updateItemsCount(-1)
}
todoList.addEventListener('click',(e) =>{
    if(e.target.classList.contains('remove')){
        removeTodoItem(e.target.parentElement)
    }
})


// clear completed items
document.querySelector('.clear').addEventListener('click', ()=>{
    document.querySelectorAll('.list-item input[type="checkbox"]:checked').forEach(item=>{
        removeTodoItem(item.closest('li'))
    })
})

//filter todo list items
document.querySelectorAll('.filter input').forEach(radio=>{
    radio.addEventListener('change', e=>{
        filterTodoItems(e.target.id)
    })
})

function filterTodoItems(id){
    const allItems = todoList.querySelectorAll('li')

    switch(id){
        case 'all':
            allItems.forEach(item=>{
                item.classList.remove('hidden')
            })
            break;
        case 'active':
            allItems.forEach(item=>{
                item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden')
            })
            break
        default:
            allItems.forEach(item=>{
                !item.querySelector('input').checked?item.classList.add('hidden'):item.classList.remove('hidden')
            })
            break
    }
}