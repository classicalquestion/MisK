DMessage("CheckUp1: Beginning");

var selection = randomInteger(0,3);
var bAnswerCorrect = false;
var bWasLockedInCage = false;

CMessage("%Greetings%");

CMessage("It's nice to see you.");

if(selection == 0)
{
	answer = getInput("How are you doing? Is everything alright?");
	if(answer.isLike("yes","yeah", "y", "1"))
	{
		CMessage("That's nice.");
		CMessage("So I can ruin your day. %Grin%");
	}
	else if(answer.isLike("no", "n", "0"))
	{
		CMessage("Don't worry %SubName%...");
		CMessage("I will bring joy in your life...");
		CMessage("... and some pain. %Grin%");
	}
	else
	{
		increaseAnger(1);
		CMessage("Well I was only polite.");
		CMessage("But what was I thinking...");
		CMessage("Maybe I should punish you for your misbehaviour.");
	}
}
else if(selection == 1)
{
	CMessage("I hope you are ready for some %stroking%.");
	CMessage("I am for sure ready to see you %Aching% and %Leaking%. %Grin%");
}
else
{
	CMessage("I am so excited to play with you today. %Grin%");
	answer = getInput("Are you excited aswell?");
	if(answer.isLike("yes","yeah", "y", "1"))
	{
		increaseAnger(-1);
		CMessage("That makes me happy %SubName%.");
		CMessage("I think you will lose some of that excitment after I milked you dry. %Grin%");
	}
	else if(answer.isLike("no", "n", "0"))
	{
		increaseAnger(2);
		CMessage("Looks like you already know what I am going to do to you. %Grin%");
		CMessage("I'm going to show you how excited it can be to be my toy.");
	}
	else
	{
		increaseAnger(1);
		CMessage("I thought this would have been an easy yes or no question...");
		CMessage("I am going to show you what you get for not answering correctly.");
	}
}

CMessage("But first I need to know something.");
if(false)
{
	while(!bAnswerCorrect)
	{
		answer = getInput("Did you took of your %chastitycage%?");

		if(answer.isLike("yes", "y", "1"))
		{
			increaseAnger(5);
			bAnswerCorrect = true;
			bWasLockedInCage = false;
			CMessage("I hope it was worth it...");
			CMessage("Maybe I should punish you for that...");
		}
		else if(answer.isLike("no", "n", "0"))
		{
			//increaseAnger(0);
			bAnswerCorrect = true;
			bWasLockedInCage = true;
		}
		else
		{
			//increaseAnger(0);
			CMessage("Answer with yes or no... it's really important.");
		}
	}
}
bAnswerCorrect = false;
while(!bAnswerCorrect && !bWasLockedInCage)
{
	answer = getInput("Did you %Stroke% your %Cock% without my permission?");
	if(answer.isLike("yes", "1", "y", "yeah"))
	{
		selection = randomInteger(0,4);
		bAnswerCorrect = true;
		if(selection < 3)
		{
			increaseAnger(2);
			CMessage("What you actually %stroked% your %Cock%...");
			CMessage("That's not good %PetNameBad%");
		}
		else
		{
			increaseAnger(1);
			CMessage("How could you disobey me?");
			CMessage("Atleast you told me the truth...");
			CMessage("... but I am still very disappointed, %SubName%.");
		}

		var bAnswerCorrect2 = false;
		while(!bAnswerCorrect2)
		{
			answer = getInput("Did you cum?");
			if(answer.isLike("yes", "y", "1"))
			{
				increaseAnger(5);
				bAnswerCorrect2 = true;
				CMessage("%SubName%, I hope it was worth it. Because this could be one of your last orgasms for a long time.");
			}
			else if(answer.isLike("no", "n", "0"))
			{
				//increaseAnger(0);
				bAnswerCorrect2 = true;
				CMessage("Well atleast you didn't cum.");
				CMessage("So now you are extra horny for me. %Grin%");
			}
			else
			{
				increaseAnger(1);
				CMessage("Yes or no, %SubName%");
			}
		}

	}
	else if(answer.isLike("no", "0", "n"))
	{
		increaseAnger(-1);
		bAnswerCorrect = true;
		CMessage("Good boy.");
		CMessage("I am proud of you.");
	}
	else
	{
		increaseAnger(1);
		CMessage("Just answer with yes or no...");
	}
}

CMessage("So let's begin...");

DMessage("CheckUp1: End");