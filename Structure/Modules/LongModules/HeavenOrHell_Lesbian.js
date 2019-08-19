DMessage("HeavenOrHell_Lesbian: Start");

var bAnswerCorrect = false;

CMessage("You know what I am thinking?");
CMessage("I think it's time to make you beg me to please you.");
CMessage("To let you touch yourself.");
CMessage("So you can jerk your %Cock%.");

answer = getInput("Now beg me to let you stroke.", 10);
if(answer.isLike("please", "pls"))
{
	CMessage("Good boy.");
}
else if(answer.isTimeout())
{
	CMessage("%AreYouDeaf%");
	answer = getInput("Now beg me %PetName%");
	if(answer.isLike("please", "pls"))
	{
		CMessage("See that wasn't so hard.");
	}
	else
	{
		CMessage("I start to think you should be punished slave.");
		CMessage("In the future I want you to beg on command.");
		answer = getInput("Is that clear?", 15);
		if(answer.isLike("yes", "y", "yeah"))
		{
			CMessage("Good.");
		}
		else
		{
			CMessage("Let me answer it for you.");
			CMessage("Yes, " + getVar("domName") + ".");
		}
	}
}
else
{
	CMessage("Do I have to teach you how to beg?");
	CMessage("You are so pathetic, " + getVar("subName") + ".");
}

CMessage("Now let's start stroking.");
CMessage("Or you know what.");
CMessage("Maybe I just tease you a little bit before. %Grin%");
showCategoryImage("LESBIAN");
lockImages();
CMessage("Do you want to be in heaven with them?");
unlockImages();
showCategoryImage("LEZDOM");
lockImages();
CMessage("Or do you want to be in hell?");
CMessage("Tell me %PetName%.");


var bChooseHeaven = true;
unlockImages();
answer = getInput("Heaven or hell?");
while(!bAnswerCorrect)
{
	if(answer.isLike("heaven"))
	{
		bAnswerCorrect = true;
		CMessage("So you want to be heavenly teased? %Grin%");
		bChooseHeaven = true;
		showCategoryImage("LESBIAN");
		lockImages();
	}
	else if(answer.isLike("hell"))
	{
		bAnswerCorrect = true;
		CMessage("I see, you like it rough. %Grin%");
		bChooseHeaven = false;
		showCategoryImage("LEZDOM");
		lockImages();
	}
	else
	{
		CMessage("%PetNameBad%, it can't be so hard to choose.");
		answer = getInput("So again, Heaven or Hell?")
	}
}
unlockImages();

Stroking();
stopStroking();

CMessage("You can't imagine what I am going to do to you. %Grin%");
CMessage("I would tease you to all those beatiful girls.");
if(bChooseHeaven)
{
	showCategoryImage("LESBIAN");
	lockImages();
	CMessage("I would love to join them.");
	CMessage("But I want to see that %Cock% of yours %ache% aswell.");
	CMessage("And I think for today I am staying with you. %Grin%");
}
else
{
	showCategoryImage("LEZDOM");
	lockImages();
	CMessage("Look at all the fun they have.");
	CMessage("Well atleast one of them. %Grin%");
	CMessage("Don't you think they are like us?");
	CMessage("The one with fun and the other one with pain?");
}

unlockImages();
if(bChooseHeaven)
{
	showCategoryImage("LESBIAN");
	lockImages();
}
else
{
	showCategoryImage("LEZDOM");
	lockImages();
}

CMessage("I bet you would love to be with them.");
CMessage("But they wouldn't be interested in you.");
CMessage("At the moment they want to lick a %Pussy% and don't suck a %Cock%.");

unlockImages();
if(bChooseHeaven)
{
	showCategoryImage("LESBIAN");
	lockImages();
}
else
{
	showCategoryImage("LEZDOM");
	lockImages();
}

CMessage("Ohh I see, you would still like to be with them.");
CMessage("Am I right?");
CMessage(getVar("subName") + ", silly you.");
CMessage("They would let you do the exact same thing like me.");
CMessage("Maybe we need a new %Picture%.");

unlockImages();
if(bChooseHeaven)
{
	showCategoryImage("LESBIAN");
	lockImages();
}
else
{
	showCategoryImage("LEZDOM");
	lockImages();
}

CMessage("Such a beautiful view.");
CMessage("I mean look at this %picture%");
CMessage("Oh, I almost forgot %PetName%...");

answer = getInput("You want to %stroke% am I right?");
if(answer.isLike("yes", "yeah"))
{
	CMessage("Good. %Grin%");
	answer = getInput("Then beg me to let you stroke. %Grin%");
	if(answer.isLike("Please, let me stroke", "please let me stroke", "I beg you to let me stroke"))
	{
		CMessage("Such a good boy.");
		unlockImages();
		if(bChooseHeaven)
		{
			showCategoryImage("LESBIAN");
			lockImages();
		}
		else
		{
			showCategoryImage("LEZDOM");
			lockImages();
		}
		Stroking();
		stopStroking();
	}
	else
	{
		CMessage("That wasn't what I want you to say.");
		CMessage("Now I have to punish you. %Grin%");
		unlockImages();
		showCategoryImage("GAY");
		lockImages();
		Stroking();
		stopStroking();
		CMessage("I hope you have learned your lesson.");
		CMessage("You should always beg correctly.");
		CMessage("Like: Please, let me stroke " + getVar("domName"));
		CMessage("Or: I beg you to let me stroke.");
	}
}
else if(answer.isLike("no", "nope"))
{
	CMessage("Really?");
	CMessage("That's good for me, %PetName%.");
	CMessage("Now I only have to show you %picture%s without letting you touch yourself.");

	for(var i = 0; i < 7; i++)
	{
		unlockImages();
		if(bChooseHeaven)
		{
			showCategoryImage("LESBIAN");
			lockImages();
		}
		else
		{
			showCategoryImage("LEZDOM");
			lockImages();
		}

		if(i == 3)
			CMessage("And remember no touching. %Grin%");
		if(i == 5)
			CMessage("Still no touching %PetName%. %Grin%");
	}
	unlockImages();
	CMessage("Remember, I don't care when or even if you get to stroke.");
	CMessage("So think about your actions slave.");
}
else
{
	CMessage("ok, then... I don't have to let you %stroke%.");
}

CMessage("I think that was a lot of fun.");

if(randomInteger(0,4) < 2)
{
	CMessage("I think that was a lot of fun.");
	CMessage("Let's have one last look at a nice %picture%.");
	unlockImages();
	if(bChooseHeaven)
	{
		showCategoryImage("LESBIAN");
		lockImages();
		CMessage("I think I would have chosen heaven aswell.");
		CMessage("I mean it looks so perfect.");
	}
	else
	{
		showCategoryImage("LEZDOM");
		lockImages();
		CMessage("I think I am more the heaven type in this case.");
		CMessage("But if I play with you %SubName%...");
		CMessage("I would always choose hell. %Grin%");
	}
}
else
{
	CMessage("Don't worry we will do this more often... I promise. %Grin%");
	CMessage("I am excited to see what you are choosing the next time.");
}

DMessage("HeavenOrHell_Lesbian: End");