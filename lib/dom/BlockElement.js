// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview An abstract class for block elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var Element = require(basePath + '/dom/Element');



/**
 * An abstract class for block elements.
 * @constructor
 * @extends {module:lib/dom/Element}
 * @exports lib/dom/BlockElement
 */
var BlockElement = function() {
  Element.call(this);
};
util.inherits(BlockElement, Element);


// Exports the constructor.
module.exports = BlockElement;
