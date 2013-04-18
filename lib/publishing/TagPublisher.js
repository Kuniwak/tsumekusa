// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A class for tag element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');



/**
 * A class for tag element publishers.
 * @constructor
 * @implements {module:lib/publishing/IElementPublisher}
 * @exports lib/publishing/TagPublisher
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
