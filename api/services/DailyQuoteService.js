var http = require('http');
module.exports = {
    // When a new stock is created, check to see if a stock quote object needs to be made. Primary key is the symbol
    /*refreshAll : function() {
        // Get all unique stock symbols 
        DailyQuote
            .find({where:{},sort:{symbol: 1, date: -1}})
            .exec(function(stocks) {
                var cur;
                for(symbol in stocks) {
                    
                    cur = symbol;
                    if (symbol !== cur) {
                        if (today - symbol.time > 1) {
                          DailyQuote.create(this.apiCall(symbol));
                        }
                    }
                }
            });
    },
    checkNewQuote : function(sym) {
        sails.log(sym);
        DailyQuote
            .find({where:{symbol:sym}})
            .exec(function(err, data) {
                if(err){
                    sails.log(err);
                }
                sails.log.debug(data);
                if(data.length===0) {
                    sails.log.debug(sym);
                    DailyQuoteService.apiCall(sym);
                }
            });
        
    },*/
    apiCall: function(obj) {
      //  Make api call and filter out the 3 fields, date, price per share and symbol
      //  Returns object with the 3 fields
      sails.log.debug("in api call");
      
      var url =  'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=' + JSON.stringify(obj);
      sails.log.debug(url);
      /*https.get(url, function(res) {
          var body = '';
          res.on('data', function(chunk){
              body += chunk;
          });
          res.on('end', function() {
              sails.log.debug(body);
              return JSON.parse(body);
          });
      }).on('error', function(err) {
          sails.log.debug(err);
      });*/
    }
    /*getBySymbol: function(sym, pD) {
        DailyQuote.find({where:{symbol:sym, date: { '>': new Date(pD)}}}).exec(function(err,data) {
           if(err) {
               sails.log(err);
           } 
           return data;
        });
    } */
    };
    