/*
 * Capitalize
 * http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
 */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports = {}

