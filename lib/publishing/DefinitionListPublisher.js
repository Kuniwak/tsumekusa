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
 * @extends {module:lib/publishing/BlockElementPublisher}
 * @exports lib/publishing/DefinitionListPublisher
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
