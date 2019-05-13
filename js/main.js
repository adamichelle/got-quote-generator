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

    $("#newQuote").click(function() {
        DBHelper.chooseRandomQuote((quoteFunction) => {
            let randomQuoteFunction = quoteFunction;
        
            newRandomQuoteArray = randomQuoteFunction();
            
            newQuote = newRandomQuoteArray.quote;
            newQuoteAuthor = newRandomQuoteArray.character;
            
    
            $("#quote").text(newQuote);
            $("#author").text(newQuoteAuthor);
            $("#author").append(citation);
        });
    });

    $("#tweetQuote").click(function() {
        let regex = / in Game of Thrones/gi;
        quote = $("#quote").text();
        author = $("#author")
          .text()
          .replace(regex, "");
        let tweethref = `https://twitter.com/intent/tweet?text=${quote} - ${author} via @aniuchia`;
        $(".twitter-share-button").attr("href", tweethref);
    });
});
