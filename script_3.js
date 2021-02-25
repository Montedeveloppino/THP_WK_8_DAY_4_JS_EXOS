let levels = prompt("Hello, welcome in my super pyramid! How many levels would you like?");
const brick = "#";
let i = 1;
while (i <= levels){
    let line = "";
    for(j = 0; j < (levels - i); j++){
        line += " ";
    }
    for(k = 0; k < i; k++){
        line = line + brick;
    }
    i++;
    console.log(line);
}