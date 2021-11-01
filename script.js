var buttons = document.querySelectorAll(".dots i");
var details = document.querySelector(".author-quote");
var author = document.createElement("p");
var quote = document.createElement("h4");
console.log(buttons);
console.log(details);

var obj = [
  {
    quote:
      '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt vero voluptas blanditiis nostrum non at aspernatur doloråofficia"',
    author: "SUZAN SIMS, INTERACTION DESIGNER AD XYZ",
  },
  {
    quote:
      '"Amet maiores sit, recusandae totam est corporis repellendus. Deserunt quam unde optio magnam reprehenderit voluptateaccusamus."',
    author: "SAM SMITH, CEO PHARMACY DIGITAL",
  },
  {
    quote:
      '"Est praesentium ipsam sint quae iste earum natus delectus omnis quam unde optio magnam reprehenderit voluptateaccusamus"',
    author: "MIKE MALONE, HEAD OF TRAINING, DNGTS",
  },
  {
    quote:
      '"Consectetur, eveniet ullam laudantium eos dolore in explicabo alias consequatur agnam reprehenderit voluptateaccusamu."',
    author: "GEORGE BROWN, CTO TRALALA",
  },
  {
    quote:
      '"Facere ex deleniti molestias earum non minus adipisci laboriosam fugit? Blanditiis a dolorem ad fuga facere provident dicta perferendis molestias."',
    author: "MITAR SKORO, HOLYCODE",
  },
];
quote.innerHTML = obj[0].quote;
details.appendChild(quote);
author.innerHTML = obj[0].author;
details.appendChild(author);
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
