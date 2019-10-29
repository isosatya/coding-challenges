/*

Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

The words and, the, of and in should be lowercase.
All other words should have the first character as uppercase and the rest lowercase.
Examples

correctTitle("jOn SnoW, kINg IN thE noRth.")
➞ "Jon Snow, King in the North."

correctTitle("sansa stark, lady of winterfell.")
➞ "Sansa Stark, Lady of Winterfell."

correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
➞ "Tyrion Lannister, Hand of the Queen."

*/

function correctTitle(str) {
  let lower = str.toLowerCase();
  let strArray = lower.split(" ");
  let final = [];

  for (let i = 0; i < strArray.length; i++) {
    if (!strArray[i].match(/^(and|of|the|in)$/)) {
      strArray[i] =
        strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
    }
    final.push(strArray[i]);
  }

  return final.join(" ");
}
