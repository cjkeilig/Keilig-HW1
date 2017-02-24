/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'customer' : function(req, res) {
		Customer.find(function(err, customers) { 
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
		Customer.find(function(err, customers) { 
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
	'updates' : function(req, res) {
		Customer.update(parseInt(req.param('id'),10),req.allParams()).exec(function(err, updated) {
			if(err) { sails.log.debug(err);}
			res.redirect('/');
		});
	},
	'add' : function(req, res) {
     	Customer.find(function(err, customers) { 
          res.view('customer/customer', {
          	list: customers,
          	part: 'add',
			cust: []
          });
     	});
	},
	'create' : function(req, res) {
		Customer.create(req.allParams()).exec(function(err, record) {
			res.redirect('/');
	    });
	},
	'destroy' : function(req, res) {
		Customer.destroy(req.allParams()).exec(function(err) {
			if(err) { sails.log.debug(err);}
			res.redirect('/');
		});
	},
	'stock': function(req, res) { 
		var q = { where: {id:parseInt(req.param('id'),10)}, limit: 1 };
		var list;
		Customer.find(function(err, customers) { 
			list = customers;
		});
		sails.log(q);
		Customer.find(q).populateAll().exec(function(err, retCust) {
	    	res.view('customer/customer', {
	    		list: list,
	    		part: 'stock',
	    		cust: retCust,
	    	});
		});
	},
	'createStock' : function(req,res) {
		createObj = req.allParams();
		createObj['owner'] = parseInt(createObj['owner'],10);
		//sails.log.debug(DailyQuoteService);
		//DailyQuoteService.checkNewQuote(createObj['symbol']);
		Stock.create(createObj,function(err, stock) { // find customer
	    	if(err) {
	    		sails.log.debug(err);
	    	}
		});
		res.redirect('/customer/stock?id='+parseInt(req.param('owner'),10));
	},
	'createAsset' : function(req,res) {
		createObj = req.allParams();
		createObj['owner'] = parseInt(createObj['owner'],10);
		Asset.create(createObj,function(err, stock) { // find customer
	    	if(err) {
	    		sails.log.debug(err);
	    	}
		});
		res.redirect('/customer/stock?id='+parseInt(req.param('owner'),10));
	},
	'destroyStock': function(req, res) {
		var q = { where: {id:parseInt(req.param('id'),10)} };
		Stock.destroy(q).exec(function(err){
			if(err) {
				sails.log.debug(err);
			}
			var red = '/customer/stock?id=' + parseInt(req.param('custid'),10);
			res.redirect(red);
		});
	},
	'destroyAsset': function(req, res) {
		var q = { where: {id:parseInt(req.param('id'),10)} };
		Asset.destroy(q).exec(function(err){
			if(err) {
				sails.log.debug(err);
			}
			var red = '/customer/stock?id=' + parseInt(req.param('custid'),10);
			res.redirect(red);
		});
	},
	'editStock' : function(req, res) {
		Stock.update(parseInt(req.param('id'),10),req.allParams()).exec(function(err, updated) {
			if(err) {
				sails.log.debug(err);
			}
			res.redirect('/customer/stock?id=' + parseInt(req.param('owner'),10));
		});
	},
	'editAsset' : function(req, res) {
		Asset.update(parseInt(req.param('id'),10),req.allParams()).exec(function(err, updated) {
			if(err) {
				sails.log.debug(err);
			}
			res.redirect('/customer/stock?id=' + parseInt(req.param('owner'),10));
		});
	},
	'quote' : function(req, res) {
		var date1 = new Date(req.param('purchaseDate')); 
		var date2 = new Date(); 
		var timeDiff = Math.abs(date2.getTime() - date1.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));  
		sails.log.debug(diffDays);
		var InteractiveChartDataInput = {"Normalized":false,"NumberOfDays":diffDays,"DataPeriod":"Day","Elements":[{"Symbol":req.param('symbol'),"Type":"price","Params":["c"]}]};
		sails.log.debug(InteractiveChartDataInput);
		res.json(DailyQuoteService.apiCall(InteractiveChartDataInput));
	}
};

