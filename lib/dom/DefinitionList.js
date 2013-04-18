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
var Paragraph = require(basePath + '/dom/Paragraph');



/**
 * A class for ordered/unordered list elements.
 * Use {@link module:lib/dom/DefinitionList} if a list explains about any
 * definitions.
 * @param {?module:lib/dom/DefinitionList.ListType=} opt_type List type.
 *     Default is no marker list.
 * @constructor
 * @extends {module:lib/dom/BlockElement}
 * @exports lib/dom/DefinitionList
 */
var DefinitionList = function(opt_type) {
  BlockElement.call(this);
  this.definitions_ = new ElementArray(this);
  this.type_ = opt_type || DefinitionList.ListType.NO_MARKER;
};
util.inherits(DefinitionList, BlockElement);


/**
 * List type numbers.
 * @enum {number}
 */
DefinitionList.ListType = {
  /** No marker list type. */
  NO_MARKER: 0,
  /** Ordered list type. */
  ORDERED: 1,
  /** Unordered list type. */
  UNORDERED: 2
};


/**
 * Default content publisher.
 * @type {module:lib/publishing/DefinitionListPublisher}
 */
DefinitionList.publisher = null;


/**
 * Definitions.
 * @type {module:lib/dom/ElementArray.<
 *     module:lib/dom/DefinitionList.Definition>}
 * @private
 */
DefinitionList.prototype.definitions_ = null;


/**
 * List type.
 * @type {module:lib/dom/List.ListType}
 * @private
 */
DefinitionList.prototype.type_;


/**
 * Returns a list type.
 * @return {module:lib/dom/DefinitionList.ListType} List type.
 */
DefinitionList.prototype.getListType = function() {
  return this.type_;
};


// Methods for definitions manipulation {{{
/**
 * Creates a new definition.
 * @param {module:lib/dom/Paragraph} term Definition term.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     descs Definition content.
 * @param {?module:lib/dom/DefinitionList.ListType=} opt_type List type.
 *     Default is same type parent list.
 * @return {module:lib/dom/DefinitionList.Definition} Created definition.
 * @protected
 */
DefinitionList.prototype.createDefinition = function(term, descs, opt_type) {
  return new DefinitionList.Definition(term, descs, opt_type);
};


/**
 * Returns a definition by index.
 * @param {number} index Index of a definition to get.
 * @return {module:lib/dom/DefinitionList.Definition} Definition.
 */
DefinitionList.prototype.getDefinitionAt = function(index) {
  return this.definitions_.getChildAt(index);
};


/**
 * Adds a new definition.  The method is chainable.
 * @param {module:lib/dom/Paragraph} term Definition term.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     descs Definition content.
 * @param {?module:lib/dom/DefinitionList.ListType=} opt_type List type.
 *     Default is same type parent list.
 * @return {module:lib/dom/DefinitionList} This instance.
 */
DefinitionList.prototype.addDefinition = function(term, descs, opt_type) {
  var definition = this.createDefinition(term, descs, opt_type);
  this.definitions_.addChild(definition);
  return this;
};


/**
 * Adds a new definition at the given 0-based index.  The method is chainable.
 * @param {module:lib/dom/Paragraph} term Definition term.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     descs Definition content.
 * @param {number} index 0-based index.
 * @param {?module:lib/dom/DefinitionList.ListType=} opt_type List type.
 *     Default is same type parent list.
 * @return {module:lib/dom/DefinitionList} This instance.
 */
DefinitionList.prototype.addDefinitionAt = function(term, descs, index,
    opt_type) {
  var definition = this.createDefinition(term, descs, opt_type);
  this.definitions_.addChildAt(definition, index);
  return this;
};


/**
 * Removes the specified definition.
 * @param {module:lib/dom/DefinitionList.Definition} definition Definition
 *     to remove.
 * @return {?module:lib/dom/DefinitionList.Definition} Removed definition if
 *     any.
 */
DefinitionList.prototype.removeDefinition = function(definition) {
  var removed = this.definitions_.removeChild(definition);
  return removed;
};


/**
 * Removes the specified definition at the given 0-based index.
 * @param {number} index 0-based index.
 * @return {?module:lib/dom/DefinitionList.Definition} Removed definition if
 *     any.
 */
DefinitionList.prototype.removeDefinitionAt = function(index) {
  var removed = this.definitions_.removeChildAt(index);
  return removed;
};


/**
 * Returns definitions.
 * @return {module:lib/dom/ElementArray.<
 *     module:lib/dom/DefinitionList.Definition>} Definitions.
 */
DefinitionList.prototype.getDefinitions = function() {
  return this.definitions_;
};


/**
 * Returns a definition term.
 * @param {number} index Index of a definition to get.
 * @return {module:lib/dom/Paragraph} Definition term.
 */
DefinitionList.prototype.getTermAt = function(index) {
  var definition;
  return (definition = this.getDefinitionAt(index)) && definition.getTerm();
};


/**
 * Returns a definition content.
 * @param {number} index Index of a definition to get.
 * @return {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     Definition content.
 */
DefinitionList.prototype.getDescriptionAt = function(index) {
  var definition;
  return (definition = this.getDefinitionAt(index)) &&
      definition.getDescriptions();
};


/**
 * Returns a definition content.
 * @param {number} index Index of a definition to get.
 * @return {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     Definition content.
 */
DefinitionList.prototype.getDescriptionAt = function(index) {
  var definition;
  return (definition = this.getDefinitionAt(index)) &&
      definition.getDescriptions();
};
//}}}



// Definition class {{{
/**
 * A class for definition.
 * @param {module:lib/dom/Paragraph|string=} opt_term Definition term.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>=}
 *    opt_descs Block contents as descriptions of the definition.
 * @param {?module:lib/dom/DefinitionList.ListType=} opt_type List type.
 * @constructor
 */
DefinitionList.Definition = function(opt_term, opt_descs, opt_type) {
  BlockElement.call(this);

  if (opt_term) {
    this.setTerm(opt_term);
  }

  if (opt_descs) {
    this.setDescriptions(opt_descs);
  }

  if (opt_type) {
    this.type_ = opt_type;
  }
};
util.inherits(DefinitionList.Definition, BlockElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/DefinitionPublisher}
 */
DefinitionList.Definition.publisher = null;


/**
 * List type of the definition.
 * @type {module:lib/dom/DefinitionList.ListType}
 * @private
 */
DefinitionList.Definition.prototype.type_ = null;


/**
 * Paragraph as a term of the definition.
 * @type {module:lib/dom/Paragraph}
 * @private
 */
DefinitionList.Definition.prototype.term_ = null;


/**
 * Block contents as descriptions of the definition.
 * @type {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 * @private
 */
DefinitionList.Definition.prototype.descs_ = null;


/**
 * Returns a paragraph as a term of the definition.
 * @return {module:lib/dom/Paragraph} Paragraph as a term of the
 *     definition.
 */
DefinitionList.Definition.prototype.getTerm = function() {
  return this.term_;
};


/**
 * Sets a paragraph as a term of the definition.  This method is chainable.
 * @param {module:lib/dom/Paragraph|string} term Paragraph as a term of the
 *     definition.
 * @return {module:lib/dom/DefinitionList.Definition} This instance.
 */
DefinitionList.Definition.prototype.setTerm = function(term) {
  var p = typeof term === 'string' ? new Paragraph(term) : term;

  if (this.term_) {
    this.term_.setParent(null);
  }

  p.setParent(this);
  this.term_ = p;
  return this;
};


/**
 * Returns block contents as descriptions of the definition.
 * @return {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     Definition content.
 */
DefinitionList.Definition.prototype.getDescriptions = function() {
  return this.descs_;
};


/**
 * Sets block contents as descriptions of the definition.  This method is
 * chainable.
 * @param {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>} descs
 *     Definition content.
 * @return {module:lib/dom/DefinitionList.Definition} This instance.
 */
DefinitionList.Definition.prototype.setDescriptions = function(descs) {
  if (this.descs_) {
    this.descs_.setParent(null);
  }

  descs.setParent(this);
  this.descs_ = descs;
  return this;
};


/** @override */
DefinitionList.Definition.prototype.getParent = function() {
  var parent;
  if (parent = BlockElement.prototype.getParent.call(this)) {
    return parent;
  }
  else {
    throw Error('Definition have to be in an element array, but come: ' +
        parent);
  }
};


/**
 * Returns a list as the parent of the list item.
 * @return {module:lib/dom/DefinitionList} Parent list.
 */
DefinitionList.Definition.prototype.getParentDefinitionList = function() {
  var elemArr;
  if (elemArr = this.getParent()) {
    return elemArr.getParent();
  }
  else {
    throw Error('Definition have to be in a definition list, but come: ' +
        parent);
  }
};


/**
 * Returns a list type.  Returns a list type of the parent list if it is null.
 * @return {module:lib/dom/DefinitionList.ListType} List type.
 */
DefinitionList.Definition.prototype.getListType = function() {
  var parentDefList = this.getParentDefinitionList();
  return this.type_ || parentDefList.getListType();
};


/**
 * Returns a 0-based index of the definition.
 * @return {number} Index of the definition.
 */
DefinitionList.Definition.prototype.getIndex = function() {
  // TODO: Caching index.
  var parentElemArr = this.getParent();
  return parentElemArr.indexOfChild(this);
};
//}}}


// Export the constructor
module.exports = DefinitionList;
