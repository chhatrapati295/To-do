const title = document.querySelector('#title')
const desc = document.querySelector('#desc')
const form = document.querySelector('form')
const container = document.querySelector('.container')

const data = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
showAllTasks()

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    removeTask()
    data.push({
        title : title.value,
        description : desc.value
    })
    localStorage.setItem('tasks',JSON.stringify(data))
    console.log(data)
    showAllTasks()
    title.value=''
    desc.value = ''
})

function removeTask(){
    data.forEach((item)=>{
        const div = document.querySelector('.task')
        div.remove()
    })
}

function deleteItem(index){
    removeTask()
    data.splice(index,1)
    localStorage.setItem('tasks',JSON.stringify(data))
    showAllTasks()
}

function showAllTasks(){
    data.forEach((item,index)=>{
        const div = document.createElement('div')
        div.setAttribute('class','task')
        const innerDiv = document.createElement('div')
        div.append(innerDiv)
        const p = document.createElement('p')
        p.setAttribute('class','taskTitle')
        p.textContent = item.title
        innerDiv.append(p)
        const span = document.createElement('span')
        span.className = 'taskDesc'
        span.textContent = item.description
        innerDiv.append(span)
        const button = document.createElement('button')
        button.className = 'deleteBtn'
        button.textContent= '-'
        button.addEventListener('click',()=>{
            deleteItem(index)
        })
        div.append(button)
        container.append(div)
    })
}