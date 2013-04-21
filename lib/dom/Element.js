// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview An abstract class for elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');



/**
 * An abstract class for elements.  This class provide a publishing system.
 * @constructor
 * @implements {module:lib/dom/IElement}
 * @exports lib/dom/Element
 */
var Element = function() {};


/**
 * Default element publisher.
 * @type {module:lib/publishing/IElementPublisher}
 */
Element.publisher = null;


/**
 * Element as a parent of this element.
 * @type {?module:lib/dom/Element}
 * @private
 */
Element.prototype.parent_ = null;


/**
 * Reference helper.
 * @type {?module:lib/dom/Element}
 * @private
 */
Element.prototype.refHelper_ = null;


/**
 * Reference ID.
 * @type {?string}
 * @private
 */
Element.prototype.refId_ = null;


/** @override */
Element.prototype.publish = function() {
  var publisher = this.getPublisher();
  return publisher.publish(this);
};


/**
 * Returns a publisher for this element.  Default is {@code publisher} as the
 * class property if exists.
 * @return {module:lib/publishing/ElementPublisher} Publisher.
 */
Element.prototype.getPublisher = function() {
  var publisher = this.constructor.publisher;
  if (!publisher) {
    throw Error('Publisher was not found.');
  }

  return publisher;
};


/**
 * Returns an element as a parent of this element.
 * @return {module:lib/dom/IElement} Parent element.
 */
Element.prototype.getParent = function() {
  return this.parent_;
};


/**
 * Sets an element as parent.  This method is chainable.
 * @param {?module:lib/dom/Element} parent Parent.
 * @return {module:lib/dom/Element} This instance.
 */
Element.prototype.setParent = function(parent) {
  var refHelper;
  if (parent && (refHelper = parent.getReferenceHelper())) {
    this.setReferenceHelper(refHelper);
  }

  this.parent_ = parent;
  return this;
};


/**
 * Returns ancestor of this element.
 * @return {Array.<module:lib/dom/Element>} Ancestor elements.
 */
Element.prototype.getAncestors = function() {
  var ancestors = [];
  var current = this;

  while (current = current.getParent()) {
    ancestors.unshift(current);
  }

  return ancestors;
};


/**
 * Returns a reference object.  Publishers publish links by the reference
 * object.
 * @return {module:lib/references/Reference} Reference object.
 * @see module:lib/references/Reference
 */
Element.prototype.getReference = function() {
  var refHelper;
  if (refHelper = this.getReferenceHelper()) {
    return refHelper.getReference(this.getReferenceId());
  }
  else {
    throw Error('Cannot generate a reference object,' +
                '  because a ReferenceHelper was not set.');
  }
};


/**
 * Sets a reference ID.  This method is chainable.
 * @param {?string} refId Reference ID to set.
 * @return {module:lib/dom/Element} This instance.
 */
Element.prototype.setReferenceId = function(refId) {
  this.refId_ = refId;
  return this;
};


/**
 * Returns a reference ID.  A reference ID is unique string that represent a
 * content.  Do not use this method to get a reference ID, instead use {@link
 * #getReference}.
 * @return {?string} Reference ID.
 * @protected
 */
Element.prototype.getReferenceId = function() {
  if (!this.refId_) {
    this.setReferenceId(this.getReferenceIdInternal());
  }

  return this.refId_;
};


/**
 * Returns a reference ID by a caption.  This ID is made by the caption.  For
 * example, {@code 'The caption example'} becomes {@code 'the-caption-example'},
 * {@code 'UpperCamelCase'} becomes {@code 'upper-camel-case'}.
 * @return {string} Reference ID.
 * @protected
 */
Element.prototype.getReferenceIdInternal = util.abstractMethod;


/**
 * Returns a reference helper.
 * @return {?module:lib/references/ReferenceHelper} Reference helper.
 * @protected
 */
Element.prototype.getReferenceHelper = function() {
  return this.refHelper_;
};


/**
 * Sets a reference helper.  This method is chainable.
 * @param {?module:lib/references/ReferenceHelper} refHelper Reference helper.
 * @return {module:lib/dom/Element} This instance.
 * @protected
 */
Element.prototype.setReferenceHelper = function(refHelper) {
  this.refHelper_ = refHelper;
  return this;
};


// Exports the constructor.
module.exports = Element;
