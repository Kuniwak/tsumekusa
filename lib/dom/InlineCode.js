// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../util';
var util = require(basePath);
var InlineCode = require(basePath + '/dom/InlineCode');
var InlineElement = require(basePath + '/dom/InlineElement');



/**
 * A class for inline code.
 * @param {string} code inline code.
 * @constructor
 * @extends {tsumekusa.dom.InlineElement}
 */
var InlineCode = function(code) {
  InlineElement.call(this);
  this.setCode(code);
};
util.inherits(InlineCode, InlineElement);


/**
 * Default content publisher.
 * @type {tsumekusa.publishing.InlineCodePublisher}
 */
InlineCode.publisher = null;


/**
 * Code in the content.
 * @type {string}
 * @private
 */
InlineCode.prototype.code_ = null;


/** @override */
InlineCode.prototype.isBreakable = function() {
  return false;
};


/**
 * Sets a code.  This method is chainable.
 * @param {string} code Code to set.
 * @return {tsumekusa.dom.Code} This instance.
 */
InlineCode.prototype.setCode = function(code) {
  this.code_ = code;
  return this;
};


/**
 * Returns a code.
 * @return {string} Code.
 */
InlineCode.prototype.getCode = function() {
  return this.code_;
};


// Exports the constructor.
module.exports = InlineCode;
