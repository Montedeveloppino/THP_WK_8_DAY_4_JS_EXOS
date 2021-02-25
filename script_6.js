// Defining the data of amino acids and codons
const aminoTable = new Map([
  ["Leucine", ["UUA", "UUG", "CUU", "CUC", "CUA", "CUG"]],
  ["Phenylalanine", ["UUU", "UUC"]],
  ["Serine", ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"]],
  ["Proline", ["CCU", "CCC", "CCA", "CCG"]],
  ["Arginine", ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"]],
  ["Tyrosine", ["UAU", "UAC"]]
]);

// Function to translate from codon to amino
const aminoConversion = (code) => {
  for(const [amino, codes] of aminoTable) {
    if(codes.includes(code)){
      return amino;
    }
  }
};

// Function to split the amino acid string into groups of 3 chars
const translateRna = (rna) => {
  let arr = [];
  let arrLength = rna.length;
  let i = 0;
  while (i <= arrLength){
    arr.push(rna.slice(i, i + 3));
    i += 3;
  }
  return arr;
};

// Translate the codon to protein
const turnToProtein = (codToProt) => {
  let prot = translateRna(codToProt);
  let protArray = [];
  i = 0;
  while (i < prot.length - 1){
    protArray.push(aminoConversion(prot[i]));
    i++;
  }
  console.log(`Initial RNA: ${codToProt}`);
  console.log(`RNA translated to Codon: ${protArray.join("-")}`);
};

turnToProtein("UUACGCAGUAGA");
turnToProtein("CCGUCGUUGCGCUACAGC");
turnToProtein("CCUCGCCGGUACUUCUCG");