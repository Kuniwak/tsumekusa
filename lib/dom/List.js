// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for ordered/unordered list elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var ElementArray = require(basePath + '/dom/ElementArray');
var BlockElement = require(basePath + '/dom/BlockElement');



/**
 * A class for ordered/unordered list elements.
 * Use {@link module:lib/dom/DefinitionList} if you need.
 * @param {?module:lib/dom/List.ListType=} opt_type List type.  Default
 *     type is unordered list.
 * @constructor
 * @extends {module:lib/dom/BlockElement}
 * @exports lib/dom/List
 */
var List = function(opt_type) {
  BlockElement.call(this);
  this.listItems_ = new ElementArray(this);
  this.type_ = opt_type || List.ListType.UNORDERED;
};
util.inherits(List, BlockElement);


/**
 * List type numbers.
 * @enum {number}
 */
List.ListType = {
  /** Ordered list type. */
  ORDERED: 1,
  /** Unordered list type. */
  UNORDERED: 2
};


/**
 * Default element publisher.
 * @type {module:lib/publishing/ListPublisher}
 */
List.publisher = null;


/**
 * Listed elements.
 * @type {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 * @private
 */
List.prototype.listItems_ = null;


/**
 * List type.
 * @type {module:lib/dom/List.ListType}
 * @private
 */
List.prototype.type_;


/** @override */
List.prototype.setParent = function(parent) {
  BlockElement.prototype.setParent.call(this, parent);
  var refHelper = parent ? parent.getReferenceHelper() : null;

  this.listItems_.setReferenceHelper(refHelper);
  return this;
};


/**
 * Returns a list type.
 * @return {module:lib/dom/List.ListType} List type.
 */
List.prototype.getListType = function() {
  return this.type_;
};


/**
 * Creates a list item.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>} blocks
 *     Block elements in the item.
 * @return {module:lib/dom/List.ListItem} Created list item.
 * @protected
 */
List.prototype.createListItem = function(blocks) {
  return new List.ListItem(blocks);
};


/**
 * Creates a list item if the given element is not a list.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>|
 * module:lib/dom/List|module:lib/dom/List.ListItem} arg Element to list.
 * @param {?module:lib/dom/List.ListType=} opt_type List type of the item.  Use
 *     a list type of the parent list, if falsey.
 * @return {module:lib/dom/List.ListItem|module:lib/dom/List} Created list item.
 * @protected
 */
List.prototype.createListItemIfNecessary = function(arg, opt_type) {
  if (arg instanceof List) {
    return arg;
  }
  if (arg instanceof List.ListItem) {
    return arg;
  }
  else {
    return this.createListItem(arg, opt_type);
  }
};


/**
 * Adds the specified list item to the last.  The method is chainable.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>|
 * module:lib/dom/List|module:lib/dom/List.ListItem} arg Element to list.
 * @param {?module:lib/dom/List.ListType=} opt_type List type of the item.  Use
 *     a list type of the parent list, if falsey.
 * @return {module:lib/dom/List} This instance.
 */
List.prototype.addListItem = function(arg, opt_type) {
  var li = this.createListItemIfNecessary(arg, opt_type);
  this.listItems_.addChild(li);
  return this;
};


/**
 * Adds the specified list item to the given 0-based index.  The method is
 * chainable.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>|
 * module:lib/dom/List|module:lib/dom/List.ListItem} element Element to list.
 * @param {number} index 0-based index.
 * @return {module:lib/dom/List} This instance.
 */
List.prototype.addListItemAt = function(element, index) {
  var li = this.createListItemIfNecessary(element, opt_type);
  this.listItems_.addChildAt(li, index);
  return this;
};


/**
 * Removes the specified list element.
 * @param {module:lib/dom/BlockElement} element Element to remove.
 * @return {module:lib/dom/BlockElement} Removed element, if any.
 */
List.prototype.removeListItem = function(element) {
  return this.listItems_.removeChild(element);
};


/**
 * Removes the specified list element at the given 0-based index.
 * @param {number} index 0-based index.
 * @return {module:lib/dom/BlockElement} Removed element, if any.
 */
List.prototype.removeListItemAt = function(index) {
  return this.listItems_.removeChildAt(index);
};


/**
 * Returns listed elements.
 * @return {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     Listed elements.
 */
List.prototype.getListItems = function() {
  return this.listItems_;
};



/**
 * A class for list items.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     blocks Block elements in the item.
 * @constructor
 */
List.ListItem = function(blocks) {
  BlockElement.call(this);
  this.setBlockElements(blocks);
};
util.inherits(List.ListItem, BlockElement);


/**
 * Default element publisher.
 * @type {module:lib/publishing/ListItemPublisher}
 */
List.ListItem.publisher = null;


/**
 * Paragraphs of the item..
 * @type {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 * @private
 */
List.ListItem.prototype.blocks_;


/** @override */
List.ListItem.prototype.setParent = function(parent) {
  BlockElement.prototype.setParent.call(this, parent);
  var refHelper = parent ? parent.getReferenceHelper() : null;

  this.blocks_.setReferenceHelper(refHelper);
  return this;
};


/**
 * Returns a list as the parent of the list item.
 * @return {!module:lib/dom/List} Parent list.
 */
List.ListItem.prototype.getParentList = function() {
  var elemArr;
  if (elemArr = this.getParent()) {
    return elemArr.getParent();
  }
  else {
    throw Error('List item have to be in a list, but come: ' + parent);
  }
};


/**
 * Returns a list type.
 * @return {module:lib/dom/List.ListType} List type.
 */
List.ListItem.prototype.getListType = function() {
  return this.getParentList().getListType();
};


/**
 * Sets block elements.  The method is chainable.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>} blocks
 *   Block elements to set.
 * @return {module:lib/dom/List.ListItem} This instance.
 * @protected
 */
List.ListItem.prototype.setBlockElements = function(blocks) {
  this.blocks_ = blocks;
  blocks.setParent(this);
  return this;
};


/**
 * Returns block elements as descriptions of the definition.
 * @return {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     List item.
 */
List.ListItem.prototype.getBlockElements = function() {
  return this.blocks_;
};


/**
 * Returns a 0-based index of the definition.
 * @return {number} Index of the definition.
 */
List.ListItem.prototype.getIndex = function() {
  // TODO: Caching index.
  var parentElemArr = this.getParent();
  var index = 0;
  var err = Error();

  try {
    parentElemArr.getChildren().forEach(function(li) {
      if (li === this) {
        throw err;
      }
      else if (li instanceof List.ListItem) {
        ++index;
      }
    }, this);
  }
  catch (e) {
    if (e !== err) {
      throw e;
    }
  }

  return index;
};


// Export the constructor
module.exports = List;
