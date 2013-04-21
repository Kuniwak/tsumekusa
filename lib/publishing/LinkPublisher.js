// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview  A class for link element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');



/**
 * A class for link element publishers.
 * @constructor
 * @implements {module:lib/publishing/IElementPublisher}
 * @exports lib/publishers/LinkPublisher
 */
var LinkPublisher = function() {};
util.addSingletonGetter(LinkPublisher);


/** @override */
LinkPublisher.prototype.publish = function(link) {
  var refId = link.getTargetReference().getReferenceId();
  return '\\' + refId + '\\';
};


// Exports the constructor
module.exports = LinkPublisher;
