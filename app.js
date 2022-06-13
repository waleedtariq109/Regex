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

// * Teaser Start 😂

/**
 ** 'i' modifier
 *  Turn on case-insensitive
 */

// const str1 = 'This is Case sensitive';
// const pos = str1.search('C');
// const pos1 = str1.search('c');
// const pos2 = str1.search(/C/i);
// const pos3 = str1.search(/c/i);

// console.log(pos);
// console.log(pos1);
// console.log(pos2);
// console.log(pos3);

/**
 * * 'g' modifier
 *   Turn on Global Search
 */

// const str2 = 'Hello This is is Regex';
// const result = str2.match(/is/g);
// console.log(result);

// * Teaser End 😂

// Character classes

/**
 * * '.' class
 *   Some Random character
 */

// const str = "I w\nnder why it's windy";
// const result = str.match(/w.n\w+/gs);
// console.log(result);

/**
 * * '\d' class
 *   Search digits only
 */

// const str = 'I learn about HTML5, CCS3, ES6, VUE3';
// const pattern = /\d/g;

// console.log(str.match(pattern));

/**
 * * '\D' class
 *   Search non-digits only
 */

// const str = 'I learn about HTML5, CCS3, ES6, VUE3';
// const pattern = /\D/g;

// console.log(str.match(pattern));

/**
 * * '\w' class
 *   Returns characters and ignore some special characters like '!, & etc'
 */

// const str = 'Yes! I do know Regex & 10 times I_say.';
// const pattern = /\w/g;

// console.log(str.match(pattern));

/**
 * * '\w+' class
 *   Returns characters and ignore some special characters like '!, & etc'
 */

const str = 'Yes! I do know Regex & 10 times I_say.';
const pattern = /\w+/g;

console.log(str.match(pattern));
