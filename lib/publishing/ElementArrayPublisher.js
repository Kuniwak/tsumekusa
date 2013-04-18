// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for element array publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var string = require(basePath + '/string');
var BlockElementPublisher = require(basePath +
    '/publishing/BlockElementPublisher');



/**
 * A class for element array publishers.
 * @constructor
 * @extends {module:lib/publishing/BlockElementPublisher}
 * @exports lib/publishing/ElementArrayPublisher
 */
var ElementArrayPublisher = function() {
  BlockElementPublisher.call(this);
};
util.inherits(ElementArrayPublisher, BlockElementPublisher);
util.addSingletonGetter(ElementArrayPublisher);


/**
 * Paragraph space height.
 * @const
 * @type {number}
 */
ElementArrayPublisher.PARAGRAPH_SPACE = 1;


/**
 * Publishes for each child.
 * @param {module:lib/dom/ElementArray} elemArr Element array to publish.
 * @return {Array.<string>} Array of published child.
 */
ElementArrayPublisher.prototype.publishForEachChild = function(elemArr) {
  return elemArr.getChildren().map(function(elem) {
    return elem.publish();
  });
};


/** @override */
ElementArrayPublisher.prototype.publish = function(elemArr) {
  return this.publishForEachChild(elemArr).join(
      string.repeat('\n', ElementArrayPublisher.PARAGRAPH_SPACE + 1));
};


// Exports the constructor.
module.exports = ElementArrayPublisher;
