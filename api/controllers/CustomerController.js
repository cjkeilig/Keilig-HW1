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
				part: null
		    });
        });
	},
	
	'edit' : function(req, res) {
		sails.log.debug(req.allParams());
		var q = { where: {id:parseInt(req.param('id'),10)}, limit: 1 };
		var list;
		Customer.query('SELECT * FROM customer', function(err, customers) { 
			list = customers;
		});
		sails.log.debug(q);
		Customer.find(q).exec(function(err, retCust) { // find customer
		    sails.log.debug(retCust);
	    	res.view('customer/customer', {
	    		list: list,
	    		cust: retCust,
	    		part: 'edit'
	    	});
		});
	},
	'update' : function(req, res) {
		sails.log.debug(req.allParams());
		Customer.update(parseInt(req.param('id'),10),req.allParams()).exec(function(err, updated) {
			if(err) { sails.log.debug(err);}
			else {
				res.redirect('/');
				
			}
		});
		
	}
};

