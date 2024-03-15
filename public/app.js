const socket = io();

const topics = [
    "Cereals",
    "Birds",
    "Cookies",
    "Sauces",
    "Street signs"
];

function generateRandomTopic() 
{
    const randomIndex = Math.floor(Math.random() * topics.length);
    const randomTopic = topics[randomIndex];
    document.getElementById("topicGen").textContent = randomTopic;
    document.getElementById("draftTitle").textContent = randomTopic;
    //document.getElementById("topic").innerText = randomTopic;
}


document.getElementById("customTopic").addEventListener("click", function() 
{
    document.getElementById("topicPage").style.display = "none";
    document.getElementById("homepage").style.display = "block";
});


document.getElementById("randomTopic").addEventListener("click", function() 
{
    document.getElementById("topicPage").style.display = "none";

    generateRandomTopic();
    document.getElementById("randomPickPage").style.display = "block";
    // document.getElementById("topicPage").style.display = "none";
    // document.getElementById("draftPage").style.display = "block";
});

document.getElementById("goRandom").addEventListener("click", function() 
{
    document.getElementById("randomPickPage").style.display = "none";
    document.getElementById("draftPage").style.display = "block";
});



document.getElementById("createNewGame").addEventListener("click", function() 
{
    document.getElementById("joinPage").style.display = "none";
    // document.getElementById("goRandom").style.display = "none";
    document.getElementById("topicPage").style.display = "block";
});

document.getElementById("joinGame").addEventListener("click", function() 
{
    document.getElementById("joinPage").style.display = "none";
    document.getElementById("joinExisting").style.display = "block";
});



document.getElementById("gotoGame").addEventListener("click", function() 
{
    passInput = document.getElementById("gameCode").value;
    if(passInput == "jit")
    {
        document.getElementById("joinExisting").style.display = "none";
        document.getElementById("goRandom").style.display = "none";
        document.getElementById("topicPage").style.display = "block"; 
    }
});



document.getElementById("goButton").addEventListener("click", function() 
{
    const topic = document.getElementById("draftTopicInput").value;
    document.getElementById("draftTitle").textContent = topic;
    document.getElementById("homepage").style.display = "none";
    document.getElementById("draftPage").style.display = "block";
});

document.getElementById("submitPick1").addEventListener("click", function() 
{
    const board = document.getElementById("board1");

    if (board.getElementsByClassName("draftEntry").length < 5)
    {

      const itemValue = document.getElementById("playerInput1").value;

      if (itemValue.trim() !== "") 
      {
        const item = document.createElement("div");
        item.textContent = itemValue;
        item.className = "draftEntry";
        board.appendChild(item);
        document.getElementById("playerInput1").value = "";
      }

    }

    checkForVoting();

  });

document.getElementById("submitPick2").addEventListener("click", function() 
{
    const board = document.getElementById("board2");

    if (board.getElementsByClassName("draftEntry").length < 5)
    {

      const itemValue = document.getElementById("playerInput2").value;

      if (itemValue.trim() !== "") 
      {
        const item = document.createElement("div");
        item.textContent = itemValue;
        item.className = "draftEntry";
        board.appendChild(item);
        document.getElementById("playerInput2").value = "";
      }

    }

    checkForVoting();

});

function checkForVoting() 
{
    const board1Entries = document.getElementById("board1").getElementsByClassName("draftEntry").length;
    const board2Entries = document.getElementById("board2").getElementsByClassName("draftEntry").length;
    if (board1Entries >= 5 && board2Entries >= 5) {
      document.getElementById("playerInput1").style.display = "none";
      document.getElementById("submitPick1").style.display = "none";
      document.getElementById("playerInput2").style.display = "none";
      document.getElementById("submitPick2").style.display = "none";
      document.getElementById("votingSection").style.display = "block";
    }
}



document.getElementById("votePlayer1").addEventListener("click", function() 
{
    showWinner(1);
});
  
document.getElementById("votePlayer2").addEventListener("click", function() 
{
    showWinner(2);
});
  
function showWinner(playerNumber) 
{
    document.getElementById("votingSection").style.display = "none";
    document.getElementById("winnerSection").style.display = "block";
    document.getElementById("winnerAnnouncement").textContent = `Player ${playerNumber} Wins!`;
  
    const confettiSettings = { target: 'confettiCanvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}
  
document.getElementById("playAgain").addEventListener("click", function() 
{
    location.reload();
});


