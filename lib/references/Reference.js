// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class of references.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */



/**
 * A class of references.
 * @param {string} refId Reference ID.
 * @param {?string=} opt_fileUri Optional file URI.  Generally, a document that
 *     has an element the reference links to has the file URI.
 * @constructor
 * @exports lib/references/Reference
 */
var Reference = function(refId, opt_fileUri) {
  this.fileUri_ = opt_fileUri || '';
  this.refId_ = refId;
};


/**
 * File URI.
 * @type {string}
 * @private
 */
Reference.prototype.fileUri_ = null;


/**
 * Reference ID.
 * @type {string}
 * @private
 */
Reference.prototype.refId_ = null;


/**
 * Returns a file URI.
 * @return {!string} File URI.
 */
Reference.prototype.getFileUri = function() {
  return this.fileUri_;
};


/**
 * Returns a reference ID.
 * @return {!string} Reference ID.
 */
Reference.prototype.getReferenceId = function() {
  return this.refId_;
};


/**
 * Returns a string is concatenated an URI and a reference ID.  For exmaple,
 * an output string is as {@code http://exmaple.com#referenceId}.
 * @return {!string} String concatenated an URi and a reference ID.
 * @override
 */
Reference.prototype.toString = function() {
  return this.fileUri_ + '#' + this.refId_;
};


// Exports the constructor.
module.exports = Reference;
