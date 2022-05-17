const questionBtn1 = document.querySelector(".question-btn1")
const questionBtn2 = document.querySelector(".question-btn2")
const questionBtn3 = document.querySelector(".question-btn3")
const questionText1 = document.querySelector(".question1")
const questionText2 = document.querySelector(".question2")
const questionText3 = document.querySelector(".question3")

questionBtn1.addEventListener("click", function(){
    questionText1.classList.toggle("show-text")
})

questionBtn2.addEventListener("click", function(){
    questionText2.classList.toggle("show-text")
})

questionBtn3.addEventListener("click", function(){
    questionText3.classList.toggle("show-text")
})