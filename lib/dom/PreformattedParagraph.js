// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib';
var util = require(basePath + '/util');
var BlockElement = require(basePath + '/dom/BlockElement');



/**
 * A class for preformatted paragraph.
 * @constructor
 * @param {string} content Preformatted content.
 * @extends {module:lib/dom/BlockElement}
 */
var PreformattedParagraph = function(content) {
  BlockElement.call(this);
  this.content_ = content;
};
util.inherits(PreformattedParagraph, BlockElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/PreformattedParagraphPublisher}
 */
PreformattedParagraph.publisher = null;


/**
 * Returns a preformatted content.
 * @return {string} Preformatted content.
 */
PreformattedParagraph.prototype.getElement = function() {
  return this.content_;
};



// Exports the constructor.
module.exports = PreformattedParagraph;
