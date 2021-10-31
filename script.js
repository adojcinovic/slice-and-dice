var buttons = document.querySelectorAll("button");
var quotes = document.querySelector(".quotes");
var author = document.createElement("p");
var quote = document.createElement("p");

var obj = [
  { quote: "tralalala", author: "pera peric" },
  { quote: "gneg", author: "zika peric" },
  { quote: "tralnonooalala", author: "mika peric" },
  { quote: "piowphwn", author: "zmika peric" },
  { quote: "wphwn", author: "mitar skoro" },
];
author.innerHTML = obj[0].author;
quotes.appendChild(author);
quote.innerHTML = obj[0].quote;
quotes.appendChild(quote);
console.log(buttons);

buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    var text = obj.find((e, i) => {
      if (index === i) {
        return e;
      }
    });
    author.innerHTML = text.author;
    quote.innerHTML = text.quote;
    quotes.appendChild(author);
    quotes.appendChild(quote);
  });
});
