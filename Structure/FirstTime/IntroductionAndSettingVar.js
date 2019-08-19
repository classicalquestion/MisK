DMessage("IntroductionAndSettingVar: Start");

CMessage("Hello...");
CMessage("... and welcome to MissKinki's palace.");
var bIntroductionDone = false;
CMessage("This file is supposed to give you a quick introduction to MissKinki and setting up some variables for you.");

while(!bIntroductionDone)
{
	answer = getInput("Do you want to have an introduction to this personality? (Recommended for first timers)");

	if (answer.isLike("no", "n", "nope", "0")) 
	{
		bIntroductionDone = true;
		CMessage("ok");
	} 
	else if (answer.isLike("yes", "y", "yeah", "gimme that introduction", "1", "sure"))
	{
		bIntroductionDone = true;
		CMessage("MissKinki is a personality created for those who want to find their limits and maybe expand them.");
		CMessage("I try to implement as many different fetishes and commands as possible.");
		CMessage("If you have any suggestions or miss something please write me a message.");
		CMessage("I also try to make MissKinki as customizable as possible.");
		CMessage("But also a little bit challenging and crazy.");
	}
	else
	{
		CMessage("Please answer with yes or no");
	}
} //while(bIntroDone)

DMessage("Setup: Variables");
CMessage("In the following part you have to set up some variables for MissKinki.");
CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");

DMessage("Setup: Sub Variables");

var bAnswerCorrect = false;
while(!bAnswerCorrect)
{
	answer = getInput("How much do you like edging?");
	if(answer.isInt())
	{
		if(answer.getInteger() <= 10 && answer.getInteger() >= 1)
		{
			setVar("sublikingedge", answer.getInteger());
			CMessage("Answer saved");
			bAnswerCorrect = true;
		}
		else
		{
			CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
		}
	}
	else
	{
		CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
	}
}

bAnswerCorrect = false;
while(!bAnswerCorrect)
{
	answer = getInput("How much do you like analplay?");
	if(answer.isInt())
	{
		if(answer.getInteger() <= 10 && answer.getInteger() >= 1)
		{
			setVar("sublikinganal", answer.getInteger());
			CMessage("Answer saved");
			bAnswerCorrect = true;
		}
		else
		{
			CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
		}
	}
	else
	{
		CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
	}
}


bAnswerCorrect = false;
while(!bAnswerCorrect)
{
	answer = getInput("How much do you like cum-eating?");
	if(answer.isInt())
	{
		if(answer.getInteger() <= 10 && answer.getInteger() >= 1)
		{
			setVar("sublikingcei", answer.getInteger());
			CMessage("Answer saved");
			bAnswerCorrect = true;
		}
		else
		{
			CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
		}
	}
	else
	{
		CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
	}
}

bAnswerCorrect = false;
while(!bAnswerCorrect)
{
	answer = getInput("Did you ever ate your own cum?");
	if(answer.isLike("yes", "y", "yeah", "1"))
	{
		CMessage("Answer saved");
		bAnswerCorrect = true;
	}
	else if (answer.isLike("no", "n", "nope", "0"))
	{
		CMessage("Answer saved");
		bAnswerCorrect = true;
	}
	else
	{
		CMessage("Please answer with yes or no.");
	}
}

DMessage("All sub-variables set");
//-----------------------------------------------------------------------------------------------------------------
DMessage("Setup: Domme Variables")

CMessage("Now it's time to set some variables for your future domme.");

bAnswerCorrect = false;
while(!bAnswerCorrect)
{
	answer = getInput("Would you like to set the domme variables randomly?");
	if(answer.isLike("yes", "y", "yeah", "random", "1"))
	{
		DMessage("Setting domme variables randomly");
		bAnswerCorrect = true;

		setVar("dommelikingedging", 10 - Math.floor(Math.random()*6));
		DMessage("Domme Edging: " + getVar("dommelikingedging"));

		setVar("dommelikinganal", 10 - Math.floor(Math.random()*6));
		DMessage("Domme Anal: " + getVar("dommelikinganal"));

		setVar("dommelikingcei", 10 - Math.floor(Math.random()*6));
		DMessage("Domme Cum-eating: " + getVar("dommelikingcei"));
	}
	else if(answer.isLike("no", "n", "nope", "not", "manual", "0"))
	{
		DMessage("Settig domme variables manually");
		bAnswerCorrect = true;

		var bAnswerCorrect2 = false
		while(!bAnswerCorrect2)
		{
			answer = getInput("How much does your future domme likes: edging?");
			if(answer.isInt())
			{
				if(answer.getInteger() <= 10 && answer.getInteger() >= 1)
				{
					setVar("dommelikingedge", answer.getInteger());
					CMessage("Answer saved");
					bAnswerCorrect2 = true;
				}
				else
				{
					CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
				}
			}
			else
			{
				CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
			}
		}

		bAnswerCorrect2 = false;
		while(!bAnswerCorrect2)
		{
			answer = getInput("How much does your future domme likes: analplay?");
			if(answer.isInt())
			{
				if(answer.getInteger() <= 10 && answer.getInteger() >= 1)
				{
					setVar("dommelikinganal", answer.getInteger());
					CMessage("Answer saved");
					bAnswerCorrect2 = true;
				}
				else
				{
					CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
				}
			}
			else
			{
				CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
			}
		}


		bAnswerCorrect2 = false;
		while(!bAnswerCorrect2)
		{
			answer = getInput("How much does your future domme likes: cum-eating?");
			if(answer.isInt())
			{
				if(answer.getInteger() <= 10 && answer.getInteger() >= 1)
				{
					setVar("dommelikingcei", answer.getInteger());
					CMessage("Answer saved");
					bAnswerCorrect2 = true;
				}
				else
				{
					CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
				}
			}
			else
			{
				CMessage("Please answer with a number between 1 (I hate it) and 10 (I love it).");
			}
		}

	}
	else
	{
		CMessage("Please answer with yes or no.");
	}
}
DMessage("All domme variables set");
//-----------------------------------------------------------------------------------------------------------------
DMessage("Setup: Toys Variables");

CMessage("Now let's get to the toys we can use during the sessions.");
CMessage("Please answer with yes or no.");
CMessage("Only answer with yes if you have the toy and want to use it during sessions.");

bAnswerCorrect = false;
while(!bAnswerCorrect)
{
	answer = getInput("Do you have a fleshlight?");
	if(answer.isLike("yes", "y", "yeah", "1"))
	{
		setVar("toyfleshlight", true);
		CMessage("Answer saved");
		bAnswerCorrect = true;
	}
	else if(answer.isLike("no", "n", "nope", "0"))
	{
		setVar("toyfleshlight", false);
		CMessage("Answer saved");
		bAnswerCorrect = true;
	}
	else
	{
		CMessage("Please answer only with yes or no.");
	}
}

bAnswerCorrect = false;
while(!bAnswerCorrect)
{
	answer = getInput("Do you have an analplug?");
	if(answer.isLike("yes", "y", "yeah", "1"))
	{
		setVar("toyplug", true);
		CMessage("Answer saved");
		bAnswerCorrect = true;
	}
	else if(answer.isLike("no", "n", "nope", "0"))
	{
		setVar("toyplug", false);
		CMessage("Answer saved");
		bAnswerCorrect = true;
	}
	else
	{
		CMessage("Please answer only with yes or no.");
	}
}

bAnswerCorrect = false;
while(!bAnswerCorrect)
{
	answer = getInput("Do you have shoelaces?");
	if(answer.isLike("yes", "y", "yeah", "1"))
	{
		setVar("toyshoelace", true);
		CMessage("Answer saved");
		bAnswerCorrect = true;
	}
	else if(answer.isLike("no", "n", "nope", "0"))
	{
		setVar("toyshoelace", false);
		CMessage("Answer saved");
		bAnswerCorrect = true;
	}
	else
	{
		CMessage("Please answer only with yes or no.");
	}
}

DMessage("All toys variables set");
//-----------------------------------------------------------------------------------------------------------------
DMessage("All variables set");

CMessage("Please setup ALL category image paths correctly.");
CMessage("You should also have all domme friends setup correctly.");

DMessage("IntroductionAndSettingVar: End");