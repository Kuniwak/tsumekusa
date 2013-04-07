// This script licensed under the MIT.
// http://orgachem.mit-license.org

var basePath = '../../lib';
var util = require(basePath + '/util');
var string = require(basePath + '/string');
var BlockElementPublisher = require(basePath +
    '/publishing/BlockElementPublisher');


/**
 * A singleton class for inline code publisher for vim help.
 * @constructor
 * @extends {tsumekusa.publishing.BlockElementPublisher}
 */
var CodePublisher = function() {
  BlockElementPublisher.call(this);
};
util.inherits(CodePublisher, BlockElementPublisher);
util.addSingletonGetter(CodePublisher);


/** @override */
CodePublisher.prototype.publish = function(code) {
  var indentWidth = this.getIndentWidth(code);
  var whites = string.repeat(' ', indentWidth);

  return code.getCode().split('\n').map(function(line) {
    return whites + line;
  }).join('\n');
};


// Exports the constructor.
module.exports = CodePublisher;
