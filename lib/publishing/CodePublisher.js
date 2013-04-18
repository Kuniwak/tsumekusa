// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A singleton class for code element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var string = require(basePath + '/string');
var BlockElementPublisher = require(basePath +
    '/publishing/BlockElementPublisher');



/**
 * A singleton class for code element publishers.
 * @constructor
 * @extends {module:lib/publishing/BlockElementPublisher}
 * @exports lib/publishing/CodePublisher
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
