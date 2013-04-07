// This script licensed under the MIT.
// http://orgachem.mit-license.org

var basePath = '../../lib';
var util = require(basePath + '/util');



/**
 * A class for tag content publisher.
 * @constructor
 * @implements {tsumekusa.publishing.IElementPublisher}
 */
var TagPublisher = function() {};
util.addSingletonGetter(TagPublisher);


/** @override */
TagPublisher.prototype.publish = function(tag) {
  tsumekusa.warn('The output format do not support a tag element: ' + refId);

  var refId = tag.getReferenceId();
  return refId;
};


// Exports the constructor.
module.exports = TagPublisher;
