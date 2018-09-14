function deckofcards() 
{
    
      
      var suits = ["Clubs", "Diamonds", "Hearts","Spades" ];
     var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var res=suits.length*ranks.length;
  var deck = new Array(res);
      // Initialize cards
      for (i = 0; i < ranks.length; i++) {
        for (j = 0; j < suits.length; j++) {
            deck[suits.length*i + j] = ranks[i] + " of " + suits[j];
        }
    }
      // Shuffle the cards
      for (var i = 0; i < deck.length; i++) 
      {
        var index = parseInt(Math.random() * deck.length);
        var temp = deck[i];
        deck[i] = deck[index];
        deck[index] = temp;
      }
  
      // Display the all the cards
      for ( i = 0; i < 4; i++) {
        console.log("** Person " + (i + 1) + " **");
        for (j = 0; j < 9; j++) {
            console.log(deck[i + j * 4]);
        }
    
    }
}
deckofcards();
  