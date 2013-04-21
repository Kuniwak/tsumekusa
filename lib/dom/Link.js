// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for link elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var InlineElement = require(basePath + '/dom/InlineElement');
var LinkPublisher = require(basePath + '/publishing/LinkPublisher');



/**
 * A class for link elements.
 * @param {module:lib/references/Reference} tgtRef Target reference.
 * @constructor
 * @extends {module:lib/dom/InlineElement}
 * @exports lib/dom/Link
 */
var Link = function(tgtRef) {
  InlineElement.call(this);
  this.setTargetReference(tgtRef);
};
util.inherits(Link, InlineElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/LinkPublisher}
 */
Link.publisher = null;


/**
 * Sets a target reference.  The method is chainable.
 * @param {module:lib/references/Reference} tgtRef Target reference.
 * @return {module:lib/dom/Link} This instance.
 */
Link.prototype.setTargetReference = function(tgtRef) {
  this.tgtRef_ = tgtRef;
  return this;
};


/**
 * Returns a target reference.
 * @return {module:lib/references/Reference} Target reference.
 */
Link.prototype.getTargetReference = function() {
  return this.tgtRef_;
};


/** @override */
Link.prototype.isBreakable = function() {
  return false;
};


// Export the constructor
module.exports = Link;
