// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A singleton class for strong element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');



/**
 * A singleton class for strong element publishers.
 * @constructor
 * @implements {module:lib/publishing/IElementPublisher}
 * @exports lib/publishing/StrongPublisher
 */
var StrongPublisher = function() {};
util.addSingletonGetter(StrongPublisher);


/** @override */
StrongPublisher.prototype.publish = function(strong) {
  return '#' + strong.getElement() + '#';
};


// Exports the constructor.
module.exports = StrongPublisher;
