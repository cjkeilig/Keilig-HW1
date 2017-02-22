module.exports = {
    // When a new stock is created, check to see if a stock quote object needs to be made. Primary key is the symbol
    refreshAll : function() {
        // Get all unique stock symbols 
        DailyQuote
            .find({where:{},sort:{symbol: 1, date: -1}})
            .exec(function(stocks) {
                var cur;
                for(symbol in stocks) {
                    
                    cur = symbol;
                    if (symbol !== cur) {
                        if (today - symbol.time > 1) {
                          DailyQuote.create(DailyQuoteService.apiCall(symbol));
                        }
                    }
                }
            });
    },
    checkNewQuote : function(sym) {
        DailyQuote
            .find({where:{symbol:sym}})
            .exec(function(err, data) {
                if(err){
                    sails.log(err);
                }
                if(!data) {
                    DailyQuote.create(DailyQuoteService.apiCall(sym));
                }
            });
        
    },
    apiCall: function(sym) {
      //  Make api call and filter out the 3 fields, date, price per share and symbol
      //  Returns object with the 3 fields
    },
    getBySymbol: function(sym) {
        DailyQuote.find({where:{symbol:sym}}).exec(function(err,data) {
           if(err) {
               sails.log(err);
           } 
           return data;
        });
    }
    };
    