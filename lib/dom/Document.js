// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for document elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var Container = require(basePath + '/dom/Container');
var ReferenceHelper = require(basePath + '/references/ReferenceHelper');



/**
 * A class for document elements.
 * @param {string} caption Caption of the document.
 * @param {string} fileName File name of the document.  This file name should be
 *     excluded the file extension.
 * @constructor
 * @extends {module:lib/dom/Container}
 * @exports lib/dom/Document
 */
var Document = function(caption, fileName) {
  Container.call(this, caption);
  this.setFileName(fileName);
};
util.inherits(Document, Container);


/**
 * Default content publisher.
 * @type {module:lib/publishing/DocumentPublisher}
 */
Document.publisher = null;


/**
 * Version identifier.
 * @type {?string}
 * @private
 */
Document.prototype.version_ = 'n/a';


/**
 * Date object.
 * @type {?Date}
 * @private
 */
Document.prototype.date_ = null;


/** @override */
Document.prototype.setParent = function() {
  tsumekusa.warn('Documents do not allow to set a parent element.');
  return this;
};


/**
 * Returns a date object.
 * @return {?Date} Date object.
 */
Document.prototype.getDate = function() {
  return this.date_;
};


/**
 * Sets a date object.  This method is chainable.
 * @param {Date} date Date object to set.
 * @return {module:lib/dom/Document} This instance.
 */
Document.prototype.setDate = function(date) {
  this.date_ = date;
  return this;
};


/**
 * Returns a version identifier.
 * @return {string} Version identifier.
 */
Document.prototype.getVersion = function() {
  return this.version_ || 'n/a';
};


/**
 * Sets a version identifier.  This method is chainable.
 * @param {string} ver Version identifier to set.
 * @return {module:lib/dom/Document} This instance.
 */
Document.prototype.setVersion = function(ver) {
  this.version_ = ver;
  return this;
};


/**
 * Sets a file name of this document.  This file name should be excluded the
 * file extension.  This method is chainable.
 * @param {string} fileName File name of the document.  This file name should be
 *     excluded the file extension.
 * @return {module:lib/dom/Document} This instance.
 */
Document.prototype.setFileName = function(fileName) {
  this.fileName_ = fileName;
  return this;
};


/**
 * Returns a file name of this document.
 * @return {string} File name of the document.
 */
Document.prototype.getFileName = function() {
  return this.fileName_;
};


/** @override */
Document.prototype.getReferenceHelper = function() {
  var refHelper = Container.prototype.getReferenceHelper.call(this);
  if (!refHelper) {
    refHelper = new ReferenceHelper(this.getFileName());
    this.setReferenceHelper(refHelper);
  }
  return refHelper;
};


// Export the constructor
module.exports = Document;
