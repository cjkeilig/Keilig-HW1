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
				list: customers
		    });
        });
	},
	
	'edit' : function(req, res) {
		sails.log.debug(req.allParams());
		Customer.find(req.allParams()).exec(function(err, customer) { // find customer
	    	res.view('customer/edit', {
	    		customer: customer
	    	});
		});
	}
};

