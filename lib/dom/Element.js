// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview An abstract class for elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */



/**
 * An abstract class for elements.  This class provide a publishing system.
 * @constructor
 * @implements {module:lib/dom/IElement}
 * @exports lib/dom/Element
 */
var Element = function() {};


/**
 * Default content publisher.
 * @type {module:lib/publishing/IElementPublisher}
 */
Element.publisher = null;


/** @override */
Element.prototype.publish = function() {
  var publisher = this.getPublisher();
  return publisher.publish(this);
};


/**
 * Returns a publisher for the content.  Default is {@code publisher} as the
 * class property if exists.
 * @return {module:lib/publishing/ElementPublisher} Publisher.
 */
Element.prototype.getPublisher = function() {
  var publisher = this.constructor.publisher;
  if (!publisher) {
    throw Error('Publisher was not found.');
  }

  return publisher;
};


// Exports the constructor.
module.exports = Element;
