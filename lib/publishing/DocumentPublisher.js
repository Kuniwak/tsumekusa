// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A singleton class for document element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib/';
var util = require(basePath + '/util');
var string = require(basePath + '/string');
var ContentsTable = require(basePath + '/dom/ContentsTable');
var ContainerPublisher = require(basePath + '/publishing/ContainerPublisher');
var WordWrapper = require(basePath + '/publishing/WordWrapper');



/**
 * A singleton class for document element publishers.
 * @constructor
 * @extends {module:lib/publishing/ContainerPublisher}
 * @exports lib/publishing/DocumentPublisher
 */
var DocumentPublisher = function() {
  ContainerPublisher.call(this);
};
util.inherits(DocumentPublisher, ContainerPublisher);
util.addSingletonGetter(DocumentPublisher);


/**
 * Whether contents table is published.
 * @const
 * @type {boolean}
 */
DocumentPublisher.ENABLED_CONTENTS_TABLE = true;


/** @override */
DocumentPublisher.prototype.publishHeader = function(container) {
  var indent = this.getIndent(container);
  var width = this.getDisplayWidth();
  var wrapper = new WordWrapper(width, indent);
  var caption = container.getCaption();

  return wrapper.wrap([caption]) + string.repeat('\n',
      ContainerPublisher.HEADER_BOTTOM_MARGIN + 1);
};


/**
 * Returns an array of block contents as sub containers and table of contents if
 * enabled.  You can override the method, if you want to add/remove any sub
 * containers.
 * @param {module:lib/dom/Container} container Container content.
 * @return {?Array.<string>} Elements table and sub containers strings, if any.
 * @protected
 * @override
 */
DocumentPublisher.prototype.publishSubContainersInternal = function(container) {
  var subContainers = ContainerPublisher.prototype.publishSubContainersInternal.
      call(this, container);

  if (DocumentPublisher.ENABLED_CONTENTS_TABLE) {
    if (subContainers) {
      return [this.publishContentsTable(container)].concat(subContainers);
    }
    else {
      return [this.publishContentsTable(container)];
    }
  }
  return subContainers;
};


/**
 * Publishes table of contents.
 * @param {module:lib/dom/Container} container Container content.
 * @return {string} Elements table string.
 */
DocumentPublisher.prototype.publishContentsTable = function(container) {
  return ContentsTable.publisher.publish(container);
};


// Exports the constructor.
module.exports = DocumentPublisher;
