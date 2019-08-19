DMessage("YouWillCum: Beginning");

var cumming = calculateOrgasm();
var ruining = false;

CMessage("It's time to come to an end.");
CMessage("Or should I say, to cum to an end.");
CMessage("Yes, I am going to let you cum");

if(cumming)
{
	ruining = calculateRuin()
	if(ruining)
	{
		CMessage("Now take your %Cock% in your hand.");
		Stroking();
		stopStroking();
		CMessage("Now calm down before I will let you edge one last time.");
		startEdging();
		stopStroking();
		stopEdging();
		CMessage("%RuinIt%");
		if(answer.isLike("ruined", "finished", "did"))
		{
			CMessage("Good %PetName%. %Grin%");
		}
		else
		{
			CMessage("Now calm down.");
			CMessage("Isn't it just perfect to feel all that tension go away with a ruined orgasm?");
			CMessage("You don't have to answer me. I know that you love to ruin your orgasm for me. %Grin%");
		}
	}
	else
	{
		Stroking();
		stopStroking();
		CMessage("Now calm down before I will let you edge one last time.");
		startEdging();
		stopStroking();
		stopEdging();
		CMessage("%CumForMe%");
		answer = getInput("Tell me when you are done.");
		if(answer.isLike("done", "came", "cum"))
		{
			CMessage("Good boy.");
			CMessage("Now clean yourself.");
		}
		else
		{
			CMessage("%Grin%");
			CMessage("So we are done here.");
		}
	}
}
else
{
	CMessage("Take your %Cock% in your hand.");
	Stroking();
	stopStroking();
	CMessage("Now it's time to edge again.");
	startEdging();
	stopStroking();
	stopEdging();
	CMessage("Take your hand away from that %Cock%. %Grin%");
	CMessage("You really thought I would let you cum?");
	CMessage("Silly you. %Grin%");
	CMessage("Put your %Cock% away.");
}

CMessage("%bye%");

DMessage("YouWillCum: End");