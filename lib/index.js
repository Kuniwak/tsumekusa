// This script licensed under the MIT.
// http://orgachem.mit-license.org


var defineProp = Object.defineProperty;
var registry = require('./publishing/registry');
var DefaultPublishers = require('./publishing/DefaultPublishers');


/**
 * Namespace for root.
 * @namespace
 */
var util = {
  get Element(){
    defineProp(this, 'Element',
        { value: require('./dom/Element') });
    return this.Element;
  },
  get BlockElement(){
    defineProp(this, 'BlockElement',
        { value: require('./dom/BlockElement') });
    return this.BlockElement;
  },
  get InlineElement(){
    defineProp(this, 'InlineElement',
        { value: require('./dom/InlineElement') });
    return this.InlineElement;
  },
  get ElementArray(){
    defineProp(this, 'ElementArray',
        { value: require('./dom/ElementArray') });
    return this.ElementArray;
  },
  get Code(){
    defineProp(this, 'Code',
        { value: require('./dom/Code') });
    return this.Code;
  },
  get ContentsTable(){
    defineProp(this, 'ContentsTable',
        { value: require('./dom/ContentsTable') });
    return this.ContentsTable;
  },
  get Container(){
    defineProp(this, 'Container',
        { value: require('./dom/Container') });
    return this.Container;
  },
  get DefinitionList(){
    defineProp(this, 'DefinitionList',
        { value: require('./dom/DefinitionList') });
    return this.DefinitionList;
  },
  get Document(){
    defineProp(this, 'Document',
        { value: require('./dom/Document') });
    return this.Document;
  },
  get InlineCode(){
    defineProp(this, 'InlineCode',
        { value: require('./dom/InlineCode') });
    return this.InlineCode;
  },
  get Link(){
    defineProp(this, 'Link',
        { value: require('./dom/Link') });
    return this.Link;
  },
  get List(){
    defineProp(this, 'List',
        { value: require('./dom/List') });
    return this.List;
  },
  get Paragraph(){
    defineProp(this, 'Paragraph',
        { value: require('./dom/Paragraph') });
    return this.Paragraph;
  },
  get PreformattedParagraph(){
    defineProp(this, 'PreformattedParagraph',
        { value: require('./dom/PreformattedParagraph') });
    return this.PreformattedParagraph;
  },
  get Strong(){
    defineProp(this, 'Strong',
        { value: require('./dom/Strong') });
    return this.Strong;
  },
  get Tag(){
    defineProp(this, 'Tag',
        { value: require('./dom/Tag') });
    return this.Tag;
  },
  get TagFactory(){
    defineProp(this, 'TagFactory',
        { value: require('./dom/TagFactory') });
    return this.TagFactory;
  },
  get util(){
    defineProp(this, 'util',
        { value: require('./util') });
    return this.util;
  },
  registerPublishers: registry.registerPublishers
};


// Registers default publishers.
registry.registerPublishers(DefaultPublishers);


// Exports the namespace.
module.exports = tsumekusa;
