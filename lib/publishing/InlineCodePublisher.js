// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A singleton class for inline code element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');


/**
 * A singleton class for inline code element publishers.
 * @constructor
 * @implements {module:lib/publishing/IElementPublisher}
 * @exports lib/publishing/InlineCodePublisher
 */
var InlineCodePublisher = function() {};
util.addSingletonGetter(InlineCodePublisher);


/** @override */
InlineCodePublisher.prototype.publish = function(code) {
  return '`' + code.getCode() + '`';
};


// Exports the constructor.
module.exports = InlineCodePublisher;
