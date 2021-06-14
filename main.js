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
const dragArea = document.querySelector('.tasks')
new Sortable(dragArea, {
    animation:350
})

// todo

