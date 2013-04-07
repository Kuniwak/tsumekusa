// This script licensed under the MIT.
// http://orgachem.mit-license.org

var basePath = '../../lib';
var util = require(basePath + '/util');


/**
 * A singleton class for inline code publisher for vim help.
 * @constructor
 * @implements {tsumekusa.publishing.IElementPublisher}
 */
var InlineCodePublisher = function() {};
util.addSingletonGetter(InlineCodePublisher);


/** @override */
InlineCodePublisher.prototype.publish = function(code) {
  return '`' + code.getCode() + '`';
};


// Exports the constructor.
module.exports = InlineCodePublisher;
