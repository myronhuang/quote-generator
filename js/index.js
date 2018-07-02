var quotes = {
	"quote" : ["If I have seen further than others, it is by standing upon the shoulders of giants.", "The impediment to action advances action. What stands in the way becomes the way.", "It always seems impossible until it's done.", "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.","Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", "A gem cannot be polished without friction, nor a man perfected without trials.","First say to yourself what you would be; and then do what you have to do.","Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.", "Keep your eyes on the stars and your feet on the ground.", "You are never too old to set another goal or to dream a new dream.", "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.", "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.", "If you can't explain it to a 6-year-old, you don't understand it yourself.", "Life is like riding a bicycle. To keep your balance, you must keep moving.", "A man who dares to waste one hour of time has not discovered the value of life.", "In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.", "If it is not right, do not do it, if it is not true, do not say it.","Don’t explain your philosophy. Embody it.", "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", "The greatest wealth is to live content with little.", "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", "I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.", "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.", "With your head full of brains and your shoes full of feet, you’re too smart to go down any not-so-good street.", "You’re off to great places! Today is your day! Your mountain is waiting, So get on your way!", "You miss 100% of the shots you don’t take. –Wayne Gretzky", "I am not a product of my circumstances. I am a product of my decisions.", "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "The only person you are destined to become is the person you decide to be.", "All generalizations are false, including this one.", "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.", "True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing.", "The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.", "Non est ad astra mollis e terris via (There is no easy way from the earth to the stars).", "If a man knows not to which port he sails, no wind is favorable", "Be the change that you wish to see in the world.", "In three words I can sum up everything I've learned about life: it goes on.", "Don’t walk in front of me ... I may not follow. Don’t walk behind me ... I may not lead. Walk beside me ... just be my friend.", "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "The fool doth think he is wise, but the wise man knows himself to be a fool.", "If you judge people, you have no time to love them.", "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends."],
	"author" : ["Isaac Newton", "Marcus Aurelius", "Nelson Mandella", "Marcus Aurelius", "Hellen Keller", "Lucius Annaeus Seneca", "Epictetus", "Dr. Seuss", "Theodor Roosevelt", "C.S. Lewis", "Michelle Obama", "Mark Twain", "Albert Einstein", "Albert Einstein", "Charles Darwin", "Marcus Aurelius", "Marcus Aurelius", "Epictetus", "Martin Luther King Jr.", "Plato", "Martin Luther King Jr.", "Cato", "Victor Frankl", "Dr. Suess", "Dr. Suess", "Michael Scott", "Steven Covey", "Maya Angelou", "Ralph Waldo Emerson", "Mark Twain", "John F. Kennedy", "Lucius Annaeus Seneca", "Lucius Annaeus Seneca", "Lucius Annaeus Seneca", "Lucius Annaeus Seneca", "Mahatma Gandhi", "Robert Frost", "Albert Camus", "Ralph Waldo Emerson", "William Shakespeare", "Mother Teresa", "J.K. Rowling"]
}



var currentQuote = quotes.quote[0];
var currentAuthor = quotes.author[0];
$("#quoteDisplay").text(currentQuote);
$("#authorDisplay").text("- " + currentAuthor);


function newQuote() {
  var randomNum = Math.floor(Math.random()*(quotes.quote.length));
  currentQuote = quotes.quote[randomNum];
  currentAuthor = quotes.author[randomNum];
};




$("#new").on("click", function(){
             newQuote();
              $("#quoteDisplay").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500); 
                
           $(this).text(currentQuote);
              });
  
              $("#authorDisplay").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500); 
                
           $(this).text('- ' + currentAuthor);
              });

});



$("#tweet").on("click", function() {
     window.open('https://twitter.com/intent/tweet?&text=' + encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor));
   });   


$('#tumblr').on('click', function() {
      window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
});

$(".bgimg-1").click(function() {
    $('html, body').animate({
        scrollTop: $(".bgimg-2").offset().top
    }, 1000);
});