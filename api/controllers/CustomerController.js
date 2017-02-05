/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new' : function(req, res) {
		Customer.query('SELECT * FROM customer', function(err, customers) {
			sails.log(customers);
            res.view('customer/new', {
				list: customers
		    });
        });
	}
}

