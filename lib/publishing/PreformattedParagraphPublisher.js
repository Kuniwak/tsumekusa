// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../util';
var util = require(basePath);
var string = require(basePath + '/string');
var WordWrapper = require(basePath + '/publishing/WordWrapper');
var Indent = require(basePath + '/publishing/Indent');
var BlockElementPublisher = require(basePath +
    '/publishing/BlockElementPublisher');



/**
 * A class for preformatted paragrapg publisher.
 * @constructor
 * @extends {tsumekusa.publishing.BlockElementPublisher}
 */
var PreformattedParagraphPublisher = function(width) {
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
