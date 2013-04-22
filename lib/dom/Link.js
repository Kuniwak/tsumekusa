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
 * @param {module:lib/references/Reference|string} tgtRef Target reference
 *     object.  Specify an URI string if you want to link to somewhere in the
 *     not tsumekusa documents.
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
 * Target reference object or an URI stirng.  We have no common link
 * expressions to media, so a link element has a reference object that links to
 * somewhere in tsumekusa documents. This property is URI string if the target
 * is not in tsumekusa documents.
 * @type {module:lib/references/Reference|string}
 * @private
 */
Link.prototype.tgtRef_ = null;


/**
 * Sets a target reference.  The method is chainable.
 * @param {module:lib/references/Reference|string} tgtRef Target reference or an
 *     URI..
 * @return {module:lib/dom/Link} This instance.
 */
Link.prototype.setTargetReference = function(tgtRef) {
  this.tgtRef_ = tgtRef;
  return this;
};


/**
 * Returns a target reference.
 * @return {module:lib/references/Reference|string} Target reference or an URI.
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
