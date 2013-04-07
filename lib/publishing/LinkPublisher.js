// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../util';
var util = require(basePath);



/**
 * A class for link content publisher.
 * @constructor
 * @implements {tsumekusa.publishing.IElementPublisher}
 */
var LinkPublisher = function() {};
util.addSingletonGetter(LinkPublisher);


/** @override */
LinkPublisher.prototype.publish = function(link) {
  var refId = link.getTargetReferenceId();
  return '\\' + refId + '\\';
};


// Exports the constructor
module.exports = LinkPublisher;
