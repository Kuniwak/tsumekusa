// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview An abstract class for inline elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var Element = require(basePath + '/dom/Element');



/**
 * An abstract class for inline elements.
 * @constructor
 * @extends {module:lib/dom/Element}
 * @exports lib/dom/InlineElement
 */
var InlineElement = function() {
  Element.call(this);
};
util.inherits(InlineElement, Element);


/**
 * Whether the inline tag is unknown.
 * @type {boolean}
 */
InlineElement.prototype.unknown = false;


/**
 * Whether a content allows a line break is included in.
 * @return {boolean} Whether a content allows a line break is included in.
 */
InlineElement.prototype.isBreakable = util.abstractMethod;


// Exports the constructor.
module.exports = InlineElement;
