// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A dummy class to bind a contents table publisher.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


/**
 * A dummy class to bind a contents table publisher.
 * @namespace
 * @deprecated This element is not common to media.  So, the element will be
 *     removeed from ver.2.
 * @exports lib/dom/ContentsTable
 */
var ContentsTable = {};


/**
 * Default content publisher.
 * @type {module:lib/publishing/IElementPublisher}
 */
ContentsTable.publisher = null;


// Exports the namespace.
module.exports = ContentsTable;
