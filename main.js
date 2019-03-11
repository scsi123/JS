



let quest = document.querySelector(".faq-item-quest");
let answer = document.querySelector(".faq-item-answer");
let fw = document.querySelector(".faq-wrapper");
let fi = document.querySelector(".faq-item");

// fw.addEventListener('click', function(event){
//     let item = event.target.closest(".faq-item-quest");
//     if(item.parentNode.lastElementChild.className == "faq-item-answer"){
//         item.parentNode.lastElementChild.className = "dop faq-item-answer";
//     }
//     else{
//         item.parentNode.lastElementChild.className = "faq-item-answer";
//     }
// })


fw.addEventListener('click', function(event){
    let item = event.target.closest(".faq-item-quest");
    if(item.parentNode.lastElementChild.className == "faq-item-answer"){
        item.parentNode.lastElementChild.className = "dop faq-item-answer";
    }
    else{
        item.parentNode.lastElementChild.className = "faq-item-answer";
    }
})









// quest.onclick = function(){
//     if(answer.className=="faq-item-answer"){
//     answer.className = "dop faq-item-answer";
//     }
//     else{
//         answer.className = "faq-item-answer"
//     }
// }



// //при клике на вопрос, у нас меняется стиль answer
// quest.onclick = function(){
//     if(answer.style.display == "none"){
//         answer.style.display = "block"
//     }
//     else{
//         answer.style.display = "none"
//     }
// }

//$('.faq-item').click(function(){
//     $(this).find(".faq-item-answer").toggle(500); //this - это ссылка на контекст
// })