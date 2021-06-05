const yargs = require("yargs");

function replaceVowelWithinText(text, replacementChar) {
  if( null === text || 0 === text.length) {
    return text;
  } else {
    if(null === replacementChar) {
      replacementChar = '';
    }
    return text
      .replace(/[aeiou]/g, replacementChar.toLowerCase())
      .replace(/[AEIOU]/g, replacementChar.toUpperCase());
  }
}

const input = yargs
 .usage("Masukan teks asli: -n <text>")
 .option("n", { alias: "text", describe: "Your text", type: "string", demandOption: true })
 .argv;


console.log(replaceVowelWithinText(input.text,'i'));