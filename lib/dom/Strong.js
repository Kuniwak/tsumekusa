// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for strong elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var InlineElement = require(basePath + '/dom/InlineElement');



/**
 * A class for strong elements.
 * @param {string} word Word to highlight.
 * @constructor
 * @extends {module:lib/dom/InlineElement}
 * @exports lib/dom/Strong
 */
var Strong = function(word) {
  InlineElement.call(this);
  this.content_ = word;
};
util.inherits(Strong, InlineElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/StorngPublisher}
 */
Strong.publisher = null;


/**
 * Strong content.
 * @type {string}
 * @private
 */
Strong.prototype.content_ = null;


/** @override */
Strong.prototype.isBreakable = function() {
  return false;
};


/**
 * Returns a strong content.
 * @return {string} Element string.
 */
Strong.prototype.getElement = function() {
  return this.content_;
};


// Export the constructor
module.exports = Strong;
