// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A tag factory.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var Tag = require(basePath + '/dom/Tag');


/**
 * A tag factory.
 * @namespace
 * @exports lib/dom/TagFactory
 */
var TagFactory = exports;


/**
 * Map of created tags.
 * @private
 */
TagFactory.tagMap_ = {};


/**
 * Creates a new tag.
 * @param {string} refId Reference tag ID.
 * @return {module:lib/dom/Tag} Created tag.
 */
TagFactory.createTag = function(refId) {
  TagFactory.registerId(refId);
  return new Tag(refId);
};


/**
 * Whether a tag has an ID is already registered.
 * @param {string} refId Reference tag ID.
 * @return {boolean} Whether a tag has an ID is already registered.
 */
TagFactory.isRegisteredId = function(refId) {
  return !!TagFactory.tagMap_[refId];
};


/**
 * Registers a tag ID.
 * @param {string} refId Reference tag ID.
 */
TagFactory.registerId = function(refId) {
  if (TagFactory.isRegisteredId(refId)) {
    throw Error('The tag is already registered: ' + refId);
  }
  TagFactory.tagMap_[refId] = true;
};
