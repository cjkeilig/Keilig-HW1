/**
 * Stock.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    category : {
      type: 'string'
    },
    description : {
      type: 'string'
    },
    acquiredValue : {
      type: 'string'
    },
    acquiredDate : {
      type: 'date'
    },
    recentValue : {
      type: 'string'
    },
    recentDate : {
      type: 'date'
    },
    owner: { 
      model: 'customer',
      required: true
    }
  }
};

