DMessage("End_1: Beginning");

var cumming = calculateOrgasm();
var ruining = false;

CMessage("Well this is it.");
CMessage("This is the moment of truth.");
CMessage("I hope you are ready to find out if you are about to cum.");

if(cumming)
{
	ruining = calculateRuin();
}

if(ruining)
{
	CMessage("Bring yourself to the edge one more time");
	startStroking(220);
	startEdging();
	stopStroking();
	stopEdging();
	CMessage("%RuinIt%");
	answer = getInput("Tell me when you are done.");
	if(answer.isLike("ruined", "finished", "did"))
	{
		CMessage("Good %PetName% %Grin%");
	}
	else
	{
		CMessage("%Lol%");
		CMessage("Now calm down.");
		CMessage("Isn't it just perfect to feel all that tension go away with a ruined orgasm?");
	}
}
else if(cumming)
{
	CMessage("Bring yourself to the edge.");
	startStroking(220);
	startEdging();
	stopStroking();
	stopEdging();
	answer = ("Cum for me.");
	if(answer.isLike("came", "finished", "did"))
	{
		CMessage("Good %Grin%");
	}
	else
	{
		CMessage("You're welcome %PetName%");
		CMessage("I hope you enjoyed your orgasm %Grin%");
		CMessage("I think this should be the last orgasm for a long time for you %PetName%");
	}
}
else
{
	CMessage("Bring yourself to the edge.");
	startStroking(220);
	startEdging();
	stopStroking();
	stopEdging();
	answer = getInput("Put your %Cock% back in your pants. You don't get to cum tonight.");
	CMessage("Too bad %Lol%");
	CMessage("But I'm sure you didn't even want to cum now.");
	answer = getInput("Am I right?");
	if(answer.isLike("yes", "yep", "yea", "y"))
	{
		CMessage("Good I will remember that %Grin%");
	}
	else
	{
		CMessage("Ohhh poor %PetName%. I love it to see you ache.");
	}
}
CMessage("Thank ou for giving me a good time %PetName%");
CMessage("I can't wait to see you again.");

DMessage("End_1: End");