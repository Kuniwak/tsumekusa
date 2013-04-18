// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A class for list element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var BlockElementPublisher = require(basePath +
    '/publishing/BlockElementPublisher');



/**
 * A class for list element publishers.
 * @constructor
 * @implements {module:lib/publishing/BlockElementPublisher}
 * @exports lib/publishing/ListPublisher
 */
var ListPublisher = function() {
  BlockElementPublisher.call(this);
};
util.inherits(ListPublisher, BlockElementPublisher);
util.addSingletonGetter(ListPublisher);


/**
 * Indent width for children.
 * @const
 * @type {number}
 */
ListPublisher.INDENT_WIDTH_FOR_CHILD = 2;


/** @override */
ListPublisher.prototype.getIndentWidthForChild = function(elem) {
  return this.getIndentWidth(elem) + ListPublisher.INDENT_WIDTH_FOR_CHILD;
};


/** @override */
ListPublisher.prototype.publish = function(list) {
  return list.getListItems().publish();
};


// Export the constructor
module.exports = ListPublisher;
