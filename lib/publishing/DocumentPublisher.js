// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A singleton class for document element publishers.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib/';
var util = require(basePath + '/util');
var string = require(basePath + '/string');
var ContainerPublisher = require(basePath + '/publishing/ContainerPublisher');
var WordWrapper = require(basePath + '/publishing/WordWrapper');



/**
 * A singleton class for document element publishers.
 * @constructor
 * @extends {module:lib/publishing/ContainerPublisher}
 * @exports lib/publishing/DocumentPublisher
 */
var DocumentPublisher = function() {
  ContainerPublisher.call(this);
};
util.inherits(DocumentPublisher, ContainerPublisher);
util.addSingletonGetter(DocumentPublisher);



// Exports the constructor.
module.exports = DocumentPublisher;
