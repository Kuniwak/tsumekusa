// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../util';
var util = require(basePath);
var BlockElementPublisher = require(basePath +
    '/publishing/BlockElementPublisher');



/**
 * A class for list publisher for vim help.
 * @constructor
 * @extends {tsumekusa.publishing.BlockElementPublisher}
 */
var DefinitionListPublisher = function() {
  BlockElementPublisher.call(this);
};
util.inherits(DefinitionListPublisher, BlockElementPublisher);
util.addSingletonGetter(DefinitionListPublisher);


/** @override */
DefinitionListPublisher.prototype.publish = function(list) {
  return list.getDefinitions().publish();
};


// Export the constructor
module.exports = DefinitionListPublisher;
