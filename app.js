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
 *   Returns characters and ignore some special characters like '!, &, ., ' ' etc'
 */

// const str = 'Yes! I do know Regex & 10 times I_say.';
// const pattern = /\w/g;

// console.log(str.match(pattern));

/**
 * * '\w+' class
 *   Returns characters and ignore some special characters like '!, &, ., ' ' etc'
 */

// const str = 'Yes! I do know Regex & 10 times I_say.';
// const pattern = /\w+/g;

// console.log(str.match(pattern));

/**
 * * '\W' class
 *   Find non-word character
 */

// const str = 'Yes! I do know Regex & 10 times I_say.';
// const pattern = /\W/g;

// console.log(str.match(pattern));

/**
 * * '\s' class
 *   Find white space character
 */

// const str = 'Yes! I do know Regex & 10 times I_say.';
// const pattern = /\s/g;

// console.log(str.match(pattern));

/**
 * * '\S' class
 *   Find non-white space character
 */

// const str = 'Yes! I do know Regex & 10 times I_say.';
// const pattern = /\S/g;

// console.log(str.match(pattern));

// * Modifiers

/**
 * * '/m' modifier
 *   Multiline search
 */

// '^' this will check character or word in begining

// const str = 'Hello line 1\nHello line2\nHello line3';
// const pattern = /^Hello/gm;

// console.log(str.match(pattern));

// '$' this will check character or word in begining

// const str = 'Hello line 1\nHello line2\nHello line3';
// const pattern = /\d$/gm;

// console.log(str.match(pattern));

/**
 * * '/u' modifier
 *   Search for unicode
 *  p{S} - means search for symbols and currencies
 *  p{Sc} - means search for symbols only
 *  p{N} - means search for numbers
 *  p{L} - means search for letters
 */

// const str = 'This is me 😎. How do I look 😉.';
// const str2 = 'I found $500';
// const pattern = /\p{S}/gu;
// const patternC = /\p{Sc}/gu;
// const pattern = /\p{N}/gu;
// const pattern = /\p{L}/gu;

// console.log(str.match(pattern));
// console.log(str2.match(patternC));

// * Sets and ranges

// Sets

// const str = "I wonder why it's windy";
// const pattern = /w[io]n/g;
// console.log(str.match(pattern));

// Character Range

// const str = "I wonder why it's windy";
// const pattern = /[i-o]/g;
// console.log(str.match(pattern));

// * Quantifiers

//* '*' quantifier means exists 0 or more times

// const str = 'This isss Regex Bro.';
// const pattern = /s*/g;

// console.log(str.match(pattern));

//* '+' quantifier means exists 1 or more times

// const str = 'This isss Regex Bro.';
// const pattern = /s+/g;

// console.log(str.match(pattern));

//* '?' quantifier means exists 0 or one time in a word

// const str = 'This isss Regex Bro.';
// const pattern = /is?/g;

// console.log(str.match(pattern));

//* '{n}' quantifier means this will search character n times in given string

// const str = 'Hello Helo';
// const str2 = 'Hello hellllo HELLLO helo Hellllo heLLo hellllllo';
// const pattern = /hel{2}\w+/gi;
// const pattern2 = /hel{2,4}o/gi;

// console.log(str.match(pattern));
// console.log(str2.match(pattern2));

//* Greedy and Lazy Quantifiers

// const str = "Javascript 'ES6' and 'ES7' is not new";
// const pattern = /'.+?'/g;

// console.log(str.match(pattern));

// * Assertions

// Anchor - '^','$'
/**
 * ^ means string start with
 * $ means string ends with
 */

// const pattern = /Finally$/i;
// console.log(pattern.test('Test is clear finally'));

// \b character class
/**
 * This class used as anchor
 */

// const str = 'testing a test tests best to testify.';
// const pattern = /.ests?\b/g;

// const str2 = '1122 12345 678 9988 990 109';
// const pattern2 = /\b\d\d\d\b/g;

// console.log(str.match(pattern));
// console.log(str2.match(pattern2));

// Lookahead Assertion

// const str = 'Hello, This is Regex, in js';
// const pattern = /\w+(?=,)/g;

// console.log(str.match(pattern));

// Negative Lookahead Assertion

// const str = 'Hello, This is Regex, in js?';
// const pattern = /\b\w+(?!,|\?)\b/g;

// console.log(str.match(pattern));

// Look behind Assertion

// const str = 'Dr.Java and Mr.Script is here';
// const str2 = 'Tell 10 times to pay $30';

// const pattern = /(?<=Dr.)\w+/g;
// const pattern2 = /(?<=\$)\d+/d;

// console.log(str.match(pattern));
// console.log(str2.match(pattern2));

// Negative Look behind Assertion

// const str = 'Tell 10 times to pay $30';
// const pattern = /\b(?<!\$)\d+\b/g;

// console.log(str.match(pattern));

//* Methods used with Regex

//* 'exec()' method

// const str = 'This is how it is';
// const pattern = /is/g;
// let result = '';

// while (result != null) {
//   console.log('Last Index:', pattern.lastIndex);
//   result = pattern.exec(str);
//   console.log(result);
// }

//* 'match()' and 'matchAll()' methods

const str = 'Hello this is Regex';
const pattern = /is/g;

const obj = str.matchAll(pattern);

for (const item of obj) {
  console.log(item);
}

console.log(str.match(pattern));
