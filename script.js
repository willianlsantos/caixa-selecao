const option = document.querySelector('select')

const div = document.querySelector('div')
const divOne = document.querySelector('.divOne')
const divTwo = document.querySelector('.divTwo')
const divThree = document.querySelector(".divThree")
const divFour = document.querySelector(".divFour")
const divFive = document.querySelector(".divFive")
const divSix = document.querySelector(".divSix")



option.addEventListener("change", function () {

    if (option.value == 'select') {
        divOne.style.background = '#F4F4F4'
        divTwo.style.background = '#F4F4F4'
        divThree.style.background = '#F4F4F4'
        divFour.style.background = '#F4F4F4'
        divFive.style.background = '#F4F4F4'
        divSix.style.background = '#F4F4F4'
        

    } else if (option.value == 'first-child') {
        divOne.style.background = '#04BF9D'
        divTwo.style.background = '#F4F4F4'
        divThree.style.background = '#F4F4F4'
        divFour.style.background = '#F4F4F4'
        divFive.style.background = '#F4F4F4'
        divSix.style.background = '#F4F4F4'

    } else if (option.value == 'last-child') {
        divSix.style.background = '#04BF9D'
        divOne.style.background = '#F4F4F4'
        divTwo.style.background = '#F4F4F4'
        divThree.style.background = '#F4F4F4'
        divFour.style.background = '#F4F4F4'
        divFive.style.background = '#F4F4F4'

    } else if (option.value == 'nth-child(2)') {
        divTwo.style.background = '#04BF9D'
        divOne.style.background = '#F4F4F4'
        divThree.style.background = '#F4F4F4'
        divFour.style.background = '#F4F4F4'
        divFive.style.background = '#F4F4F4'
        divSix.style.background = '#F4F4F4'

    } else if (option.value == 'last-child(2)') {
        divFive.style.background = '#04BF9D'
        divOne.style.background = '#F4F4F4'
        divTwo.style.background = '#F4F4F4'
        divThree.style.background = '#F4F4F4'
        divFour.style.background = '#F4F4F4'
        divSix.style.background = '#F4F4F4'

    } else if (option.value == 'nth-child(odd)') {
        divOne.style.background = '#04BF9D'
        divThree.style.background = '#04BF9D'
        divFive.style.background = '#04BF9D'
        divTwo.style.background = '#F4F4F4'
        divFour.style.background = '#F4F4F4'
        divSix.style.background = '#F4F4F4'


    } else if (option.value == 'nth-child(even)') {
        divOne.style.background = '#F4F4F4'
        divTwo.style.background = '#04BF9D'
        divThree.style.background = '#F4F4F4'
        divFour.style.background = '#04BF9D'
        divFive.style.background = '#F4F4F4'
        divSix.style.background = '#04BF9D'

    } else if (option.value == 'nth-child(n+4)') {
        divOne.style.background = '#F4F4F4'
        divTwo.style.background = '#F4F4F4'
        divThree.style.background = '#F4F4F4'
        divFour.style.background = '#04BF9D'
        divFive.style.background = '#04BF9D'
        divSix.style.background = '#04BF9D'

    } else if (option.value == 'nth-child(3n+1)') {
        divOne.style.background = '#04BF9D'
        divFour.style.background = '#04BF9D'
        divTwo.style.background = '#F4F4F4'
        divThree.style.background = '#F4F4F4'
        divFive.style.background = '#F4F4F4'
        divSix.style.background = '#F4F4F4'


    } else if (option.value == 'nth-child(3n-1)') {
        divOne.style.background = '#F4F4F4'
        divTwo.style.background = '#04BF9D'
        divThree.style.background = '#F4F4F4'
        divFive.style.background = '#04BF9D'
        divFour.style.background = '#F4F4F4'
        divSix.style.background = '#F4F4F4'


    } else if (option.value == 'nth-child(4n)') {
        divFour.style.background = '#04BF9D'
        divOne.style.background = '#F4F4F4'
        divTwo.style.background = '#F4F4F4'
        divThree.style.background = '#F4F4F4'
        divFive.style.background = '#F4F4F4'
        divSix.style.background = '#F4F4F4'
    }


})






