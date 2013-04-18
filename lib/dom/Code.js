// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A class for code block elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var BlockElement = require(basePath + '/dom/BlockElement');



/**
 * A class for code block elements.
 * @param {string} code Code.
 * @constructor
 * @extends {module:lib/dom/BlockElement}
 * @exports lib/dom/Code
 */
var Code = function(code) {
  BlockElement.call(this);
  this.setCode(code);
};
util.inherits(Code, BlockElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/CodePublisher}
 */
Code.publisher = null;


/**
 * Code in the content.
 * @type {string}
 * @private
 */
Code.prototype.code_ = null;


/**
 * Sets a code.  This method is chainable.
 * @param {string} code Code to set.
 * @return {module:lib/dom/Code} This instance.
 */
Code.prototype.setCode = function(code) {
  this.code_ = code;
  return this;
};


/**
 * Returns a code.
 * @return {string} Code.
 */
Code.prototype.getCode = function() {
  return this.code_;
};


// Exports the constructor.
module.exports = Code;
