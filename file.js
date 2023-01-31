const input = document.getElementById('input')
const btn = document.getElementById('btn')
const box1 = document.getElementById('box1')
input.addEventListener('keyup',(e)=>{
    if(e.key==='Enter' ){
        const newli = document.createElement('li')
    newli.innerHTML = `<h2 class='liItem'></h2>`
    newli.textContent += input.value
        newli.innerHTML += `<button class='removeBtn' id='btn'><i class="fa-solid fa-trash-can"></i></button>`
        newli.querySelector('.removeBtn').addEventListener('click',()=>{
            newli.remove()
        })
    input.value= ''
    box1.after(newli)
    }
}) || btn.addEventListener('click',()=>{
    const newli = document.createElement('li')
    newli.innerHTML = `<h2 class='liItem'></h2>`
    newli.textContent += input.value
        newli.innerHTML += `<button class='removeBtn' id='btn'><i class="fa-solid fa-trash-can"></i></button>`
        newli.querySelector('.removeBtn').addEventListener('click',()=>{
            newli.remove()
        })
    input.value= ''
    box1.after(newli)
})