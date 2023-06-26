
const removeButtons = document.querySelectorAll('li button');
const form = document.querySelector('#add-todo');
const input = document.querySelector('#todo');
const toDoList = document.querySelector('#things-to-do');
const thingsDone = document.querySelectorAll('ul li')




for (let btn of removeButtons) {
    btn.addEventListener('click', function(e) {
        btn.parentElement.remove()
    })
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    const newToDo = document.createElement('li');
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', function(e) {
        removeBtn.parentElement.remove()
    });
    newToDo.addEventListener('click',function (){
        newToDo.classList.toggle('done')
    })
    newToDo.innerText = input.value;
    newToDo.appendChild(removeBtn)
    input.value = ''
    toDoList.appendChild(newToDo)
})

for (let thing of thingsDone) {
    thing.addEventListener('click',function (){
        thing.classList.toggle('done')
    })
}


