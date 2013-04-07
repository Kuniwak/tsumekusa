// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib';
var util = require(basePath + '/util');
var Element = require(basePath + '/dom/Element');



/**
 * An abstract class for inline contents.
 * @constructor
 * @extends {tsumekusa.dom.Element}
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
