import DBHelper from "./dbhelper.js";

let firstRandomQuoteArray,
  firstLoadedQuote,
  firstLoadedQuoteAuthor,
  newRandomQuoteArray,
  newQuote,
  newQuoteAuthor,
  quote,
  author,
  citation = " in <cite title='Game of Thrones'>Game of Thrones</cite>";

$(function() {
    DBHelper.chooseRandomQuote((quoteFunction) => {
        let randomQuoteFunction = quoteFunction;
    
        firstRandomQuoteArray = randomQuoteFunction();
        
        firstLoadedQuote = firstRandomQuoteArray.quote;
        firstLoadedQuoteAuthor = firstRandomQuoteArray.character;
        

        $("#quote").text(firstLoadedQuote);
        $("#author").text(firstLoadedQuoteAuthor);
        $("#author").append(citation);
    });
});
