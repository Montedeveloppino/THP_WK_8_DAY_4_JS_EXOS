const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
/*
const rentedBooks = books.forEach(index => {index.rented
if (index.rented > 0)
    console.log("rented once");
else
    console.log("never rented");
});
/*


/*
another method if you like
for (i = 0; i < books.length; i++){
  if (books[i]["rented"] > 1)
  console.log("rented once");
else
  console.log("never rented");
};*/

for(i = 0; i < books.length; i++){
  if (books[i]["rented"] > 1)
    console.log(books[i]["title"] + " was rented at least once");
   else 
    console.log("This book was never rented.");
}

//var mostRented = (Math.max.apply(Math, books.map(function(o) { return o.rented; })));


let rentedTheMost = "";
  let j = 0;
  books.forEach(book => {
    if(book.rented > j){
      j = book.rented;
      rentedTheMost = book.title;
    }
  });
  console.log(`le livre le plus emprunté est : ${rentedTheMost}`);

  //console.log(books.sort((a, b) => a.rented.localeCompare(b.rented)))
let lessRented = books.sort(function(a, b){return a.rented - b.rented});
console.log(lessRented[0].title)

console.log(books.find(x => x.id == '873495').title);

let bookToDelete = books.findIndex(function(o){
  return o.id === '133712';
});

if (bookToDelete !== -1)
    books.splice(bookToDelete, 1);

console.log(books) 

console.log(books.sort((a, b) => a.title.localeCompare(b.title)))