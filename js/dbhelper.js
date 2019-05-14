/**
 * Helper functions to access our data
 */
export default class DBHelper {
    /** Get Databse URL 
     * (in this case our data.json file) */
    static get DATABASE_URL() {
        return `./data/quotes.json`;
    }

    static fetchQuotes(callback) {
        fetch(DBHelper.DATABASE_URL)
        .then(response => response.json())
        .then(quotes => {
            callback(null, quotes);
        })
        .catch((e) => console.log(e))
    }

    static getRandomQuote(quotesArray) {
        let quotesCopy = quotesArray.slice(0);
        
        return function() {
          if (quotesCopy.length < 1) {
            quotesCopy = quotesArray.slice(0);
          }
          let index = Math.floor(Math.random() * quotesCopy.length);
          let singleQuoteArray = quotesCopy[index];
          quotesCopy.splice(index, 1);
          return singleQuoteArray;
        };
      }

    static chooseRandomQuote(callback) {
        //Get a random quote from the list of quotes
        DBHelper.fetchQuotes((error, quotes) => {
            let chooseQuoteFunction;
            if (error) {
                console.log(error)
                callback(error, null);
            } else {
                chooseQuoteFunction = DBHelper.getRandomQuote(quotes.quotes);
                callback(chooseQuoteFunction)
            }
        });

    }
}
