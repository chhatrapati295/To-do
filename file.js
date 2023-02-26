const form = document.querySelector('form')
const input = document.querySelector('.input')
const box = document.querySelector('.box')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value){
        addData()
    }else{
        input.value = 'First write something'
        setTimeout(() => {
            input.value = ''
        }, 2000);
    }
})

const addData = ()=>{
    const div = document.createElement('p')
    div.setAttribute('class','list')
    div.innerHTML = `
    <p>${input.value}</p>
    <button class='btnRemove'>Remove</button>
    `
    input.value = ''
    box.append(div)
    Array.from(document.querySelectorAll('.btnRemove')).forEach(button=>{
        button.addEventListener('click',(e)=>{
        e.target.parentNode.remove()
        })
    })
}