CMessage("Tell me something %PetName%");
var assOrTits = getVar("assortits", "none");
var aotErrorCounter = 0;
var noAnswer = true;

while(noAnswer)
{
	if(assOrTits == "none")
	{
		while(noAnswer)
		{
			if(aotErrorCounter < 1)
			{
				CMessage("What do you like more?");
				CMessage("A good pair of %Boobs%...");
				CMessage("... or a nice %Butt%?");
				answer = getInput("What do you prefer?");
			}
			else if(aotErrorCounter == 1)
			{
				answer = getInput("Ass or Tits?");
			}
			else if(aotErrorCounter == 2)
			{
				answer = getInput("You are getting on my nerves %PetName%. Butts or Boobs?");
			}
			else
			{
				CMessage("Okay, last chance %PetName%.");
				answer = getInput("What do you prefer: Ass or Tits?");
				noAnswer = false;
			}
				if(answer.isLike("ass", "butt", "first", "former", "behind", "rear", "hienie", "bum", "booty", "butts"))
				{
					noAnswer = false;
					setVar("assOrTits", "ass");
					lockImages();
					showCategoryImage("BUTTS");
					startStroking("I hope you really like %Butts%, %PetName%.");
					showCategoryImage("BUTTS");
					startEdging("Because you are going to edge for this one %Grin%");
					unlockImages();
					CMessage("Now let the edge fade");
					CMessage("So you're an ass man.");
					CMessage("I'm going to remember that %PetName% %Grin%");
				}
				else if(answer.isLike("tits", "boobs", "badoinkers", "breasts", "boobies", "titties", "bahama mammas", "balloons", "bawagos", "melons", "watermelons"))
				{
					noAnswer = false;
					setVar("assortits", "tits");
					lockImages();
					showCategoryImage("BOOBS");
					startEdging("Here's some %Boobs% you can edge to right now %Grin%");
					unlockImages();
					CMessage("Let the edge fade away %PetName%");
					CMessage("So you're a tit man...");
					CMessage("I'm gonna remember that %PetName% %Grin%");
				}
				else
				{
					aotErrorCounter++;
					increaseAnger(aotErrorCounter);
				}
		}
	}
	else if(assOrTits == "ass")
	{
		while(noAnswer)
		{
			lockImages();
			showCategoryImage("BUTTS");
			answer = getInput("Do you think this is a nice %Butt%?");
			if(answer.isLike("y", "yes", "yep", "yea", "hot", "sexy", "like"))
			{
				increaseAnger(-1);
				CMessage("I knew you couldn't say no to a nice %Butt% %Grin%");
				CMessage("And I'm sure you are going to like this %Butt% even more...");
				noAnswer = false;
			}
			else if(answer.isLike("nope", "no", "ugly", "nop", "n", "dislike"))
			{
				increaseAnger(2);
				CMessage("You really think this is an ugly %Butt%?!");
				CMessage("That's too bad. But I guess you're going to like it a little bit more... ");
				noAnswer = false;
			}
			else
			{
				if(aotErrorCounter < 2)
				{
					aotErrorCounter++;
					CMessage("Just say yes or no");
				}
				else
				{
					CMessage("You know what? I don't care.");
					CMessage("Perhaps you can answer correctly again...");
				}
				increaseAnger(aotErrorCounter);
			}
		}
		startEdging("... after you edged for it.");
		CMessage("Relax and let the edge fade away.");
		CMessage("See I told you I won't forget about your ass-fetish %Grin%");
	}
	else if(assOrTits == "tits")
	{
				while(noAnswer)
		{
			lockImages();
			showCategoryImage("BOOBS");
			answer = getInput("Do you think this is a nice %Boobs%?");
			if(answer.isLike("y", "yes", "yep", "yea", "hot", "sexy", "like"))
			{
				increaseAnger(-1);
				CMessage("I knew you couldn't say no to a nice pair of %Boobs% %Grin%");
				CMessage("And I'm sure you are going to like this %Boob% even more...");
				noAnswer = false;
			}
			else if(answer.isLike("nope", "no", "ugly", "nop", "n", "dislike"))
			{
				increaseAnger(2);
				CMessage("You really think this are ugly %Boobs%?!");
				CMessage("That's too bad. But I guess you're going to like them a little bit more... ");
				noAnswer = false;
			}
			else
			{
				if(aotErrorCounter < 2)
				{
					aotErrorCounter++;
					CMessage("Just say yes or no");
				}
				else
				{
					CMessage("You know what? I don't care.");
					CMessage("Perhaps you can answer correctly again...");
				}
				increaseAnger(aotErrorCounter);
			}
		}
		startEdging("... after you edged for it.");
		CMessage("Relax and let the edge fade away.");
		CMessage("See I told you I won't forget about your tits-fetish %Grin%");
	}
	else
	{
		CMessage("I'm pretty sure you told me what you liked more, but I just cannot remember it anymore.");
		CMessage("I'm sorry %%PetName.");
		CMessage("I have to ask you once more.");
		increaseAnger(-1);
		setVar("assortits", "none");
	}
}