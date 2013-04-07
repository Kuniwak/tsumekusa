// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib';
var util = require(basePath + '/util');


/**
 * A singleton class for strong publisher.
 * @constructor
 * @implements {tsumekusa.publishing.IElementPublisher}
 */
var StrongPublisher = function() {};
util.addSingletonGetter(StrongPublisher);


/** @override */
StrongPublisher.prototype.publish = function(strong) {
  return '#' + strong.getElement() + '#';
};


// Exports the constructor.
module.exports = StrongPublisher;
