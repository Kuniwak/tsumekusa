// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A singleton class for table of contents publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var string = require(basePath + '/string');
var ContainerPublisher = require(basePath + '/publishing/ContainerPublisher');



/**
 * A singleton class for table of contents publishers.
 * @constructor
 * @extends {module:lib/publishing/ContainerPublisher}
 * @exports lib/publishing/ContentsTablePublisher
 */
var ContentsTablePublisher = function() {
  ContainerPublisher.call(this);
};
util.inherits(ContentsTablePublisher, ContainerPublisher);
util.addSingletonGetter(ContentsTablePublisher);


/**
 * Left/Right margin around a table.
 * @const
 * @type {number}
 */
ContentsTablePublisher.TABLE_MARGIN = 2;


/**
 * Vertical spaces height between lines.
 * @const
 * @type {number}
 */
ContentsTablePublisher.LINE_SPACE_HIGHT = 0;


/**
 * Caption of a table of contents.
 * @const
 * @type {string}
 */
ContentsTablePublisher.CAPTION = 'CONTENTS';


/** @override */
ContentsTablePublisher.prototype.publishHeader = function(container) {
  return ContentsTablePublisher.CAPTION + string.repeat('\n',
      ContainerPublisher.HEADER_BOTTOM_MARGIN + 1);
};


/** @override */
ContentsTablePublisher.prototype.publishFooter = function(container) {
  // Elements table is not able to have footer.
  return null;
};


/** @override */
ContentsTablePublisher.prototype.publishTopElements = function(
    container) {
  // Publishes only a table of contents.
  return this.publishContentsTable(container);
};


/** @override */
ContentsTablePublisher.prototype.publishSubContainersInternal = function(
    container) {
  // Elements table is not able to have children.
  return null;
};


/**
 * Publish a table of contents.
 * @param {module:lib/dom/Container} container Container to create the
 *     contents table.
 * @return {string} Elements table string.
 */
ContentsTablePublisher.prototype.publishContentsTable = function(container) {
  var heads = container.getDescendantContainers().map(function(sub) {
    // A head includes a indent.
    return this.getHeadIndent(sub) + sub.getCaption();
  }, this);

  return heads.join(string.repeat('\n', ContentsTablePublisher.
      LINE_SPACE_HIGHT + 1));
};


/**
 * Creates an index of table of contents.
 * @param {module:lib/dom/Container} container Sub container.
 * @return {string} Index of table of contents.
 */
ContentsTablePublisher.prototype.getHeadIndent = function(container) {
  var indentWidth = ContentsTablePublisher.TABLE_MARGIN +
      (container.getDepth() - 1) * 2;

  return string.repeat(' ', indentWidth);
};


// Exports the constructor.
module.exports = ContentsTablePublisher;
