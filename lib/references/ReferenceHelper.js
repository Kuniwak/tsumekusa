// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class of reference helpers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var Reference = require(basePath + '/references/Reference');



/**
 * A class of reference helpers.  This helper should be created by a Document.
 * @param {string} uri File URI.
 * @constructor
 * @exports lib/references/ReferenceHelper
 */
var ReferenceHelper = function(uri) {
  this.fileUri_ = uri;
};


/**
 * Returns a reference object.
 * @param {string} refId Reference ID.
 * @return {module:lib/references/Reference} Reference object.
 */
ReferenceHelper.prototype.getReference = function(refId) {
  return new Reference(refId, this.fileUri_);
};


// Exports the constructor.
module.exports = ReferenceHelper;
