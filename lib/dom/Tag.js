// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for tag elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var InlineElement = require(basePath + '/dom/InlineElement');



/**
 * A class for tag elements.  Do not construct by the constructor.  Instead use
 * {@link module:lib/dom/TagFactory.createTag} to construct.
 * @param {string} id Reference ID string.
 * @constructor
 * @extends {module:lib/dom/InlineElement}
 * @exports lib/dom/Tag
 */
var Tag = function(id) {
  InlineElement.call(this);
  this.setReferenceId(id);
};
util.inherits(Tag, InlineElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/TagPublisher}
 */
Tag.publisher = null;


/**
 * Reference ID of the tag.
 * @type {string}
 * @private
 */
Tag.prototype.refId_;


/** @override */
Tag.prototype.isBreakable = function() {
  return false;
};


/**
 * Returns a context text.
 * @return {string} Context string.
 */
Tag.prototype.getReferenceId = function() {
  return this.refId_;
};


/**
 * Sets a context text.  The method is chainable.
 * @param {string} id Reference ID string.
 * @return {module:lib/dom/Tag} This instance.
 */
Tag.prototype.setReferenceId = function(id) {
  this.refId_ = id;
  return this;
};


// Exports the constructor.
module.exports = Tag;
