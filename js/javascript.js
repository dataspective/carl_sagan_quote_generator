$(document).ready(function(){
  // array full of carl sagan quotes
  var quotes = [
    "Somewhere, something incredible is waiting to be known.", 
    "If you want to make an apple pie from scratch, you must first create the universe.",
    "We're made of star stuff. We are a way for the cosmos to know itself.", 
    "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
    "For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.", 
    "We are like butterflies who flutter for a day and think it is forever.", 
    "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
    "Science is a way of thinking much more than it is a body of knowledge."];
  
  var oldNum = 0;
  var newNum = 0;
  
    // appends a quote to the div
  function getQuote(){
    // picks a random index from the quote array
    newNum = Math.floor(Math.random() * quotes.length);
    // makes sure same quote isn't appended twice
    if(newNum == oldNum){ 
      newNum = (newNum + 1) % quotes.length;
    }
    // clears the div of previous quote
    $("#quoteDiv").empty();
    // appends new quote
    $("#quoteDiv").append("<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>" + " " + quotes[newNum] + "<br><h3><em> - Carl Sagan </em></h3>");
    // replaces archived number for the next quote
    oldNum = newNum;
  };
  
  // appends a quote initially
  getQuote();

  /* -- NEW QUOTE BUTTON --
  * when "new quote" button is clicked, 
  * shares a new carl sagan quote.
  */
  $("#newQuote").click(function(){
    getQuote();
  })

  /* -- TWEET BUTTON --
  * when "tweet" button is clicked, 
  * copies quote to twitter
  */
  $("#tweet").click(function(){
    var string = "";
    string = $("#quoteDiv").text();
    window.open("https://twitter.com/intent/tweet?text=" + string);
  })
}); // end of ready function



