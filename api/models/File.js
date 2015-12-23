/**
* File.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity:'File',
  attributes: {
	image:{
		type:'string'
	},
	name:{
		type:'string'
	},
	Todo:{
		model:'Todo'
	}
  }
};

