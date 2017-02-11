/**
 * Asset.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    symbol : {
      type: 'string'
    },
    name : {
      type: 'string'
    },
    numshares : {
      type: 'string'
    },
    purchasePrice : {
      type: 'string'
    },
    purchaseDate : {
      type: 'string'
    },
    owner: { 
    model: 'customer',
    required: true
    }
  }
};