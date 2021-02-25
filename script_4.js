const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("***********************************************************************************");
console.log("****on va afficher uniquement les entrepreneurs qui sont nés entre 1970 et 1979****");
console.log("***********************************************************************************");

const ageEntrepreneurs = entrepreneurs.filter(index => (index.year > 1969 && index.year < 1980));
console.log(ageEntrepreneurs);
console.log("***********************************************************************");
console.log("****on va afficher uniquement les noms et prénoms des entrepreneurs****");
console.log("***********************************************************************");

entrepreneurs.forEach(index => {
  console.log(index.first +" "+ index.last)
});

console.log("**********************************************************************");
console.log("****on va afficher l'age qu'aurait chaque entrepreneur aujourd'hui****");
console.log("**********************************************************************");

var yearNow = (new Date().getFullYear())
entrepreneurs.forEach(index => {
  console.log(index.first +" "+ index.last + " would be"+" "+(yearNow - index.year) +" years old")
});
console.log("***************************************************************");
console.log("****on va afficher les entrepreneurs par ordre alphabetique****");
console.log("***************************************************************");

console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)))

console.log("**************************************************************************************");
console.log("****Rien de plus chiant comme exercice mais bon..j'imagine que c'est pour la forme****");