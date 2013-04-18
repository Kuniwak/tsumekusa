// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A class for preformatted paragraph element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var string = require(basePath + '/string');
var WordWrapper = require(basePath + '/publishing/WordWrapper');
var Indent = require(basePath + '/publishing/Indent');
var BlockElementPublisher = require(basePath +
    '/publishing/BlockElementPublisher');



/**
 * A class for preformatted paragraph element publishers.
 * @constructor
 * @extends {module:lib/publishing/BlockElementPublisher}
 * @exports lib/publishing/PreformattedParagraphPublisher
 */
var PreformattedParagraphPublisher = function() {
  BlockElementPublisher.call(this);
};
util.inherits(PreformattedParagraphPublisher, BlockElementPublisher);
util.addSingletonGetter(PreformattedParagraphPublisher);


/** @override */
PreformattedParagraphPublisher.prototype.publish = function(pre) {
  var indentWidth = this.getIndentWidth(pre);
  var whites = string.repeat(' ', indentWidth);

  return '>>>\n' + pre.getElement().split('\n').map(function(line) {
    return whites + line;
  }).join('\n') + '\n>>>';
};


// Exports the constructor.
module.exports = PreformattedParagraphPublisher;
