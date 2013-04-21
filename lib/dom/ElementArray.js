// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for element arrays.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var Element = require(basePath + '/dom/Element');



/**
 * A class for element arrays.
 * @param {?module:lib/dom/IElement=} opt_parent Optional parent.  Sets the
 *     parent to a child when the child is added, if {@code opt_parent} was
 *     given.
 * @constructor
 * @extends {module:lib/dom/Element}
 * @exports lib/dom/ElementArray
 */
var ElementArray = function(opt_parent) {
  Element.call(this);
  this.children_ = [];
  this.setParent(opt_parent || null);
  this.childrenCount_ = 0;
};
util.inherits(ElementArray, Element);


/**
 * Elements as children of this array.
 * @type {Array.<T>}
 * @private
 */
ElementArray.prototype.children_ = null;


/**
 * Count of children.
 * @type {number}
 * @private
 */
ElementArray.prototype.childrenCount_;


/** @override */
ElementArray.prototype.setParent = function(parent) {
  Element.prototype.setParent.call(this, parent);
  var refHelper = parent ? parent.getReferenceHelper() : null;

  this.setReferenceHelper(refHelper);
  return this;
};


/** @override */
ElementArray.prototype.setReferenceId = function() {};


/** @override */
ElementArray.prototype.getReferenceId = function() { return null; };


/** @override */
ElementArray.prototype.setReferenceHelper = function(refHelper) {
  Element.prototype.setReferenceHelper.call(this, refHelper);
  this.children_.forEach(function(child) {
    if (typeof child !== 'string') {
      child.setReferenceHelper(refHelper);
    }
  });
  return this;
};


/**
 * Returns a count of elements was added.
 * @return {number} Count of elements.
 */
ElementArray.prototype.getChildrenCount = function() {
  return this.childrenCount_;
};


/**
 * Returns elements are contained.
 * @return {Array.<T>} Elements.
 */
ElementArray.prototype.getChildren = function() {
  return this.children_;
};


/**
 * Returns the specified element as a chilf of this array at the given 0-based
 * index.
 * @param {number} index 0-based index.
 * @return {T} Child element as the given index.
 */
ElementArray.prototype.getChildAt = function(index) {
  return this.children_[index];
};


/**
 * Whether this array has children..
 * @return {boolean} Elements.
 */
ElementArray.prototype.hasChildren = function() {
  return this.childrenCount_ > 0;
};


/**
 * Adds the specified elements of this array to last.
 * @param {Array.<T>} elements Elements to add.
 * @return {module:lib/dom/ElementArray.<T>} This instance.
 */
ElementArray.prototype.addChildren = function(elements) {
  elements.forEach(function(element) {
    this.addChild(element);
  }, this);

  return this;
};


/**
 * Adds the specified element of this array to last.
 * @param {T} element Element to add.
 * @return {module:lib/dom/ElementArray.<T>} This instance.
 */
ElementArray.prototype.addChild = function(element) {
  this.addChildAt(element, this.getChildrenCount());
  return this;
};


/**
 * Adds the specified element of this array at the given 0-based index.
 * @param {T} element Element to add.
 * @param {number} index 0-based index at which the new element is to be added;
 *     must be between 0 and the current element count (inclusive).
 * @return {module:lib/dom/ElementArray.<T>} This instance.
 */
ElementArray.prototype.addChildAt = function(element, index) {
  if (typeof element !== 'string') {
    var refHelper;
    if (refHelper = this.getReferenceHelper()) {
      element.setReferenceHelper(refHelper);
    }
    element.setParent(this);
  }
  this.children_.splice(index, 0, element);
  this.childrenCount_++;
  return this;
};


/**
 * Removes the specified element as a child of this array.
 * @param {T} element Element to remove.
 * @return {?T} Element was removed, if any.
 */
ElementArray.prototype.removeChild = function(element) {
  var index;
  if ((index = this.children_.indexOf(element)) >= 0) {
    return this.removeChildAt(index);
  }
  return null;
};


/**
 * Removes the specified element as a child of this array at the given 0-based
 * index.
 * @param {number} index 0-based index at which the element is to be removed;
 *     must be between 0 and the current element count (inclusive).
 * @return {?T} Element was removed, if any.
 */
ElementArray.prototype.removeChildAt = function(index) {
  var removed;
  if (this.children_[index]) {
    removed = this.children_.splice(index, 1)[0];
    this.childrenCount_--;

    if (typeof removed !== 'string') {
      removed.setParent(null);
      removed.setReferenceHelper(null);
    }
    return removed;
  }

  return null;
};


/**
 * Returns the 0-based index of the given child element, or -1 if no such child
 * is found.
 * @param {T} element Child element.
 * @return {number} 0-based index.
 */
ElementArray.prototype.indexOfChild = function(element) {
  return this.children_.indexOf(element);
};


/**
 * Returns a clone of the instance.
 * @return {module:lib/dom/ElementArray} Clone.
 */
ElementArray.prototype.clone = function() {
  var clone = new this.constructor();
  clone.children_ = this.children_;
  clone.childrenCount_ = this.childrenCount_;
  clone.parent_ = this.parent_;
  return clone;
};


// Exports the constructor.
module.exports = ElementArray;
