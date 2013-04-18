// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A class for inline code elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var InlineCode = require(basePath + '/dom/InlineCode');
var InlineElement = require(basePath + '/dom/InlineElement');



/**
 * A class for inline code elements.
 * @param {string} code inline code.
 * @constructor
 * @extends {module:lib/dom/InlineElement}
 * @exports lib/dom/InlineCode
 */
var InlineCode = function(code) {
  InlineElement.call(this);
  this.setCode(code);
};
util.inherits(InlineCode, InlineElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/InlineCodePublisher}
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
 * @return {module:lib/dom/Code} This instance.
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
