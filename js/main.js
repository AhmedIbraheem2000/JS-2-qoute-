var quotes = [{
    quote:`A room without books is like a body without a soul.`,
    authorName:` ..Marcus Tullius Cicero`
},
{
    quote:`Be the change that you wish to see in the world.`,
    authorName:` ..Mahatma Gandhi`
},
{
    quote:`In three words I can sum up everything I've learned about life: it goes on.`,
    authorName:` .. Robert Frost`
}
,
{
    quote:`To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment`,
    authorName:` ..Ralph Waldo Emerson`
}
,
]
var qouteBtn = document.getElementById("Btn")
var quote = document.getElementById("quote")
var authorName = document.getElementById("authorName")
qouteBtn.addEventListener("click",function(){
    var random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    authorName.innerHTML=  quotes[random].authorName;
}
)




