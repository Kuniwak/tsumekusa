// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for document elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var Container = require(basePath + '/dom/Container');



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
Document.prototype.getReferenceId = function() {
  return this.fileName_;
};


/** @override */
Document.prototype.getDocument = function() {
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
 * Sets a date object.
 * @param {Date} date Date object to set.
 */
Document.prototype.setDate = function(date) {
  this.date_ = date;
};


/**
 * Returns a version identifier.
 * @return {string} Version identifier.
 */
Document.prototype.getVersion = function() {
  return this.version_ || 'n/a';
};


/**
 * Sets a version identifier.
 * @param {string} ver Version identifier to set.
 */
Document.prototype.setVersion = function(ver) {
  this.version_ = ver;
};


/**
 * Sets a file name of this document.  This file name should be excluded the
 * file extension.
 * @param {string} fileName File name of the document.  This file name should be
 *     excluded the file extension.
 */
Document.prototype.setFileName = function(fileName) {
  this.fileName_ = fileName;
};


/**
 * Returns a file name of this document.
 * @return {string} File name of the document.
 */
Document.prototype.getFileName = function() {
  return this.fileName_;
};


// Export the constructor
module.exports = Document;
