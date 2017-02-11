/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'customer' : function(req, res) {
		Customer.query('SELECT * FROM customer', function(err, customers) { 
            res.view('customer/customer', {
				list: customers,
				part: null,
				cust: []
		    });
        });
	},
	
	'edit' : function(req, res) {
		var q = { where: {id:parseInt(req.param('id'),10)}, limit: 1 };
		var list;
		Customer.query('SELECT * FROM customer', function(err, customers) { 
			list = customers;
		});
		sails.log.debug(q);
		Customer.find(q).exec(function(err, retCust) { // find customer
	    	res.view('customer/customer', {
	    		list: list,
	    		part: 'edit',
	    		cust: retCust,
	    	});
		});
	},
	'update' : function(req, res) {
		Customer.update(parseInt(req.param('id'),10),req.allParams()).exec(function(err, updated) {
			if(err) { sails.log.debug(err);}
			else {
				res.redirect('/');
				
			}
		});
		
	},
	'add' : function(req, res) {
     	Customer.query('SELECT * FROM customer', function(err, customers) { 
          res.view('customer/customer', {
          	list: customers,
          	part: 'add',
			cust: []
          })
     	})
	},
	'create' : function(req, res) {
		Customer.create(req.allParams()).exec(function(err, record) {
			Customer.query('SELECT * FROM customer', function(err, customers) { 
                res.view('customer/customer', {
          	        list: customers,
              	    part: null,
			        cust: []
                });
     	    });
	    });
	},
	'stock': function(req, res) { 
		var q = { where: {id:parseInt(req.param('id'),10)}, limit: 1 };
		var list;
		Customer.query('SELECT * FROM customer', function(err, customers) { 
			list = customers;
		});
		sails.log(q);
		Customer.find(q).populateAll().exec(function(err, retCust) {
			console.log(retCust);// find customer
	    	res.view('customer/customer', {
	    		list: list,
	    		part: 'stock',
	    		cust: retCust,
	    	});
		});
		
	},
	'createStock' : function(req,res) {
	    var q = { where: {id:parseInt(req.param('owner'),10)}, limit: 1 };
		var list;
		Customer.query('SELECT * FROM customer', function(err, customers) { 
			list = customers;
		});
		createObj = req.allParams();
		createObj['owner'] = parseInt(createObj['owner'],10);
		console.log(createObj)
		Stock.create(createObj,function(err, stock) { // find customer
	    	if(err) {
	    		sails.log(err);
	    	}
		});
		Customer.find(q).populateAll().exec(function(err, retCust) {
			console.log(retCust);// find customer
	    	res.view('customer/customer', {
	    		list: list,
	    		part: 'stock',
	    		cust: retCust,
	    	});
		});
		
	}
};

