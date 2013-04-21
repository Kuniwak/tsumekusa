// This script licensed under the MIT.
// http://orgachem.mit-license.org


var defineProp = Object.defineProperty;
var registry = require('./publishing/registry');
var DefaultPublishers = require('./publishing/DefaultPublishers');


/**
 * Namespace for root.
 * @namespace
 * @exports tsumekusa
 */
var tsumekusa = {


  /**
   * An alias for elements.
   * @type {module:lib/dom/Element}
   */
  get Element(){
    defineProp(this, 'Element',
        { value: require('./dom/Element') });
    return this.Element;
  },


  /**
   * An alias for block elements.
   * @type {module:lib/dom/BlockElement}
   */
  get BlockElement(){
    defineProp(this, 'BlockElement',
        { value: require('./dom/BlockElement') });
    return this.BlockElement;
  },


  /**
   * An alias for inline elements.
   * @type {module:lib/dom/InlineElement}
   */
  get InlineElement(){
    defineProp(this, 'InlineElement',
        { value: require('./dom/InlineElement') });
    return this.InlineElement;
  },


  /**
   * An alias for elements.
   * @type {module:lib/dom/ElementArray}
   */
  get ElementArray(){
    defineProp(this, 'ElementArray',
        { value: require('./dom/ElementArray') });
    return this.ElementArray;
  },


  /**
   * An alias for code elements.
   * @type {module:lib/dom/Code}
   */
  get Code(){
    defineProp(this, 'Code',
        { value: require('./dom/Code') });
    return this.Code;
  },


  /**
   * An alias for container elements.
   * @type {module:lib/dom/Container}
   */
  get Container(){
    defineProp(this, 'Container',
        { value: require('./dom/Container') });
    return this.Container;
  },


  /**
   * An alias for definition list elements.
   * @type {module:lib/dom/DefinitionList}
   */
  get DefinitionList(){
    defineProp(this, 'DefinitionList',
        { value: require('./dom/DefinitionList') });
    return this.DefinitionList;
  },


  /**
   * An alias for document elements.
   * @type {module:lib/dom/Document}
   */
  get Document(){
    defineProp(this, 'Document',
        { value: require('./dom/Document') });
    return this.Document;
  },


  /**
   * An alias for inline code elements.
   * @type {module:lib/dom/InlineCode}
   */
  get InlineCode(){
    defineProp(this, 'InlineCode',
        { value: require('./dom/InlineCode') });
    return this.InlineCode;
  },


  /**
   * An alias for link elements.
   * @type {module:lib/dom/Link}
   */
  get Link(){
    defineProp(this, 'Link',
        { value: require('./dom/Link') });
    return this.Link;
  },


  /**
   * An alias for list elements.
   * @type {module:lib/dom/List}
   */
  get List(){
    defineProp(this, 'List',
        { value: require('./dom/List') });
    return this.List;
  },


  /**
   * An alias for paragraph elements.
   * @type {module:lib/dom/Paragraph}
   */
  get Paragraph(){
    defineProp(this, 'Paragraph',
        { value: require('./dom/Paragraph') });
    return this.Paragraph;
  },


  /**
   * An alias for preformatted paragraph elements.
   * @type {module:lib/dom/PreformattedParagraph} */
  get PreformattedParagraph(){
    defineProp(this, 'PreformattedParagraph',
        { value: require('./dom/PreformattedParagraph') });
    return this.PreformattedParagraph;
  },


  /**
   * An alias for strong elements.
   * @type {module:lib/dom/Strong}
   */
  get Strong(){
    defineProp(this, 'Strong',
        { value: require('./dom/Strong') });
    return this.Strong;
  },


  /**
   * An alias for reference objects.
   * @type {module:lib/dom/Reference}
   */
  get Reference(){
    defineProp(this, 'Reference',
        { value: require('./references/Reference') });
    return this.Reference;
  },


  /**
   * An alias for utilities.
   * @type {module:lib/util}
   */
  get util(){
    defineProp(this, 'util',
        { value: require('./util') });
    return this.util;
  },


  /**
   * An alias fo string utilities.
   * @type {module:lib/string}
   */
  get string() {
    defineProp(this, 'string',
        { value: require('./string') });
    return this.string;
  },


  /**
   * An alias for default publishers.
   * @type {module:lib/publishing/DefaultPublishers}
   */
  DefaultPublishers: DefaultPublishers,


  /**
   * An alias of a publisher registration function.
   */
  registerPublishers: registry.registerPublishers
};


// Registers default publishers.
registry.registerPublishers(DefaultPublishers);


// Exports the namespace.
module.exports = tsumekusa;
