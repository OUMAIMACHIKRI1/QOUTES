let btn=document.getElementById('btn')
let qts=document.getElementById('qts')
let quotes = [
    "So many books, so little time.-Frank Zappa",
"A room without books is like a body without a soul.- Marcus Tullius Cicero",
"Be the change that you wish to see in the world.-Mahatma Gandhi",
"The purpose of our lives is to be happy. - Dalai Lama",
"Life is what happens when you're busy making other plans. — John Lennon",
]
btn.addEventListener('click',function(){
    let rand=Math.floor(Math.random()*7)
    qts.innerHTML=quotes[rand]
})