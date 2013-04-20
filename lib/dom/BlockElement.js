// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview An abstract class for block elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var Element = require(basePath + '/dom/Element');



/**
 * An abstract class for block elements.
 * @constructor
 * @extends {module:lib/dom/Element}
 * @exports lib/dom/BlockElement
 */
var BlockElement = function() {
  Element.call(this);
};
util.inherits(BlockElement, Element);


/**
 * Block content as a parent of the content.
 * @type {module:lib/dom/Element}
 * @private
 */
BlockElement.prototype.parent_ = null;


/**
 * Returns a block content as a parent of the content.
 * @return {module:lib/dom/IElement} Parent content.
 */
BlockElement.prototype.getParent = function() {
  return this.parent_;
};


/**
 * Sets a block content as parent.  This method is chainable.
 * @param {module:lib/dom/BlockElement} parent Parent.
 * @return {module:lib/dom/BlockElement} This instance.
 */
BlockElement.prototype.setParent = function(parent) {
  this.parent_ = parent;
  return this;
};


/**
 * Returns ancestor block contents.
 * @return {Array.<module:lib/dom/BlockElement>} Ancestor block contents.
 */
BlockElement.prototype.getAncestors = function() {
  var ancestors = [];
  var current = this;

  while (current = current.getParent()) {
    ancestors.unshift(current);
  }

  return ancestors;
};


/**
 * Sets a reference ID.  A link element links to this tag.  This method is
 * chainable.
 * @param {string} refId Reference ID to set.
 * @return {module:lib/dom/BlockElement} This instance.
 */
BlockElement.prototype.setReferenceId = function(refId) {
  this.refId_ = refId;
  return this;
};


/**
 * Returns a reference ID.
 * @return {string} Reference ID.
 */
BlockElement.prototype.getReferenceId = function() {
  return this.refId_ || this.getReferenceIdInternal();
};


/**
 * Returns a reference ID by a caption.  This ID is made by the caption.  For
 * example, {@code 'The caption example'} becomes {@code 'the-caption-example'}, 
 * {@code 'UpperCamelCase'} becomes {@code 'upper-camel-case'}.
 * @param {string} caption Caption.
 * @return {string} Reference ID.
 * @protected
 */
BlockElement.prototype.getReferenceIdInternal = util.abstractMethod;


// Exports the constructor.
module.exports = BlockElement;
