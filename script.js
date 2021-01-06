const uknNum = parseInt(Math.floor(Math.random() * 100) + 1)
console.log(uknNum)

let goup = [25, 13, 7, 4, 2, 1]
let startNum = 50
let nullNum = 1


const newElement = () => {

    const wrapper = document.querySelector('.wrapper')
    let newDiv = document.createElement('div')
    ++nullNum

    if (nullNum < 7) {
        newDiv.innerHTML = `Попытка ${nullNum}: ${startNum} ? `

    } else if (nullNum === 7) {
        newDiv.innerHTML = `Попытка ${nullNum}: вы загодали число ${startNum}  `
        newDiv.style.color = 'red'

    } else { newDiv.innerHTML = 'Должно быть вы где-то ошиблись' }

    wrapper.insertBefore(newDiv, $less)

    
}


const $more = document.querySelector('#more')
const $less = document.querySelector('#less')

$more.addEventListener('click', () => {
    console.log(">")
    pop = goup.shift()
    startNum = startNum + pop
    newElement()
})

$less.addEventListener('click', () => {
    console.log("<")
    pop = goup.shift()
    startNum = startNum - pop
    newElement()

})

const $right = document.querySelector('#right')
$right.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper')
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `Попытка ${nullNum}: вы загодали число ${startNum}  `
    newDiv.style.color = 'red'
    wrapper.insertBefore(newDiv, $less)
})

