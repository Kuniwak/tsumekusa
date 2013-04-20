// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for container elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var array = require(basePath + '/array');
var BlockElement = require(basePath + '/dom/BlockElement');
var ElementArray = require(basePath + '/dom/ElementArray');
var Paragraph = require(basePath + '/dom/Paragraph');



/**
 * Base class for container elements.  The element can be used as a chapter,
 * section and article.
 *
 * The structure is:
 * <ul>
 * <li>Caption
 * <li>Top contents
 *   <ul>
 *   <li>Block element 1
 *   <li>Block element 2
 *   <li>...
 *   </ul>
 * <li>Sub containers
 *   <ul>
 *   <li>Sub container 1
 *   <li>Sub container 2
 *   <li>...
 *   </ul>
 * </ul>
 *
 * @param {string} caption Caption.
 * @constructor
 * @extends {module:lib/dom/BlockElement}
 * @exports lib/dom/Container
 */
var Container = function(caption) {
  // TODO: Do not inherit BlockElement. Because the container do not allow to
  // add a Container as a top contents of a container, or it makes to be able to
  // support markdown.
  BlockElement.call(this);
  this.setCaption(caption);
  this.topBlocks_ = new ElementArray(this);
  this.subContainers_ = new ElementArray(this);
};
util.inherits(Container, BlockElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/ContainerPublisher}
 */
Container.publisher = null;


/**
 * Caption of the container.
 * @type {string}
 * @private
 */
Container.prototype.caption_ = null;


/**
 * Top contents of the container.
 * @type {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 * @private
 */
Container.prototype.topBlocks_ = null;


/**
 * Sub contents of the container.
 * @type {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 * @private
 */
Container.prototype.subContainers_ = null;


/**
 * Returns a parent container if exists.
 * @return {?module:lib/dom/Container} Parent container.
 */
Container.prototype.getParentContainer = function() {
  var parentElemArr;
  if (parentElemArr = this.getParent()) {
    return parentElemArr.getParent();
  }
  else {
    return null;
  }
};


/**
 * Returns a caption of the container.
 * @return {string} Caption of the container.
 */
Container.prototype.getCaption = function() {
  return this.caption_;
};


/**
 * Sets a caption of the container.  This method is chainable.
 * @param {string} caption of the container.
 * @return {module:lib/dom/Container} This instance.
 */
Container.prototype.setCaption = function(caption) {
  this.caption_ = caption;
  return this;
};


/**
 * Returns a file name of the document include this container.
 * @return {?string} File name of the document include this container.
 * @protected
 */
Container.prototype.getFileName = function() {
  var doc;
  return (doc = this.getDocument()) ? doc.getFileName() : null;
};


/**
 * Returns a document include this container.
 * @return {?module:lib/dom/Document} Document include this container if any.
 */
Container.prototype.getDocument = function() {
  var parent;
  return (parent = this.getParentContainer()) ? parent.getDocument() : null;
};


/**
 * Returns a reference ID by a caption.  This ID is made by the caption.  For
 * example, {@code 'The caption example'} becomes {@code 'the-caption-example'}, 
 * {@code 'UpperCamelCase'} becomes {@code 'upper-camel-case'}.
 * @param {string} caption Caption.
 * @return {string} Reference ID.
 * @override
 */
Container.prototype.getReferenceIdInternal = function(caption) {
  return caption.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').
      toLowerCase();
};


/**
 * Returns containers as descendants of the container.
 * @return {Array.<module:lib/dom/Container>} Descendant contents.
 */
Container.prototype.getDescendantContainers = function() {
  var descendants = [];
  this.getSubContainers().getChildren().forEach(function(sub) {
    descendants.push(sub);
    descendants = descendants.concat(sub.getDescendantContainers());
  });

  return descendants;
};


/**
 * Returns containers as ascendors of the container.
 * @return {Array.<module:lib/dom/Container>} Ancestor contents.
 */
Container.prototype.getAncestorContainers = function() {
  var ancestors = [];
  var container = this;

  while (container = container.getParentContainer()) {
    ancestors.unshift(container);
  }

  return ancestors;
};


/**
 * Returns an index number of the content.
 * @return {number} Index of the content.
 */
Container.prototype.getIndex = function() {
  var parent;
  if (parent = this.getParentContainer()) {
    return parent.getSubContainers().getChildren().indexOf(this);
  }

  return -1;
};


/**
 * Returns a depth of the container.
 * @return {number} Depth of the container.
 */
Container.prototype.getDepth = function() {
  var container = this;
  var depth = 0;

  while (container = container.getParentContainer()) {
    ++depth;
  }

  return depth;
};


/**
 * Returns top block contents.
 * @return {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     Block contents on the top.
 */
Container.prototype.getTopElements = function() {
  return this.topBlocks_;
};


/**
 * Returns sub contents.
 * @return {module:lib/dom/ElementArray.<module:lib/dom/BlockElement>}
 *     Containers as children of the container.
 */
Container.prototype.getSubContainers = function() {
  return this.subContainers_;
};


// Exports the constructor.
module.exports = Container;
