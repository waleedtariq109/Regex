/**
 * Regular Expression Pattern Syntax.
 *
 * The Pattern of Regular expression is very simple
 *
 * We can specify regex with two syntax in javascript
 * 1: Literal notation
 * 2: Constructor
 *
 * With Literal notation
 *
 * The pattern begins with forward slash and pattern that is word/character
 * along with some along with some search pattern like '[]', '*' etc and after
 * that add forward slash and modifier or flag
 *
 * Example:
 * /case/i
 * Here you can see the pattern start with forward slash and the pattern after
 * that add forward slash and add flag or modifier
 *
 * With Constructor
 *
 * If the same pattern is to be used by using 'RegExp()' constructor it should
 * look like this.
 *
 * Example:
 * RegExp("Pattern", "Flag or Modifier")
 * or
 * RegExp("case", "i")
 *
 * The RegExp method takes two arguments
 * 1: Pattern
 * 2: Flag or Modifier
 *
 * Click this link below to see the full list of flags or modifier
 * https://www.regular-expressions.info/refmodifiers.html
 *
 */

/**
 * 'i' modifier
 * With 'i' modifier basically Turn on case insensitivity.
 * If we have string 'This is Case sensitive' with regex we can easily search
 * any character it dosen't matter is character is uppercase or lowercase
 * because 'i' modifier Turn on case insensitivity
 *
 * Example:
 */

// Here's the string with capital case 'C'

// If we search 'C' with 'search()' method it should returns the index of 'C'
/**
 * But If we search small case 'c' with 'search()' method it should returns -1
 * because the 'search()' method is case sensitive
 */
const str = 'This is Case sensitive';
const pos = str.search('C'); // Search capital case 'C'
const pos1 = str.search('c'); // Search lower case 'c'
const pos2 = str.search(/C/i); // Search capital case 'C' with regex
const pos3 = str.search(/c/i); // Search lower case 'c' with regex

console.log(pos); // Returns the index of character 'C'
console.log(pos1); // Returns -1 because 'search()' method is case sensitive
console.log(pos2); // Returns the index of character 'C'
console.log(pos3); // Returns the index of character 'C'
