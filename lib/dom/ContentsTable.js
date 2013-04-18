// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A dummy class to bind a contents table publisher.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


/**
 * A dummy class to bind a contents table publisher.
 * @namespace
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
