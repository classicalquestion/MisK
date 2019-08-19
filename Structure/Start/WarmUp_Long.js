DMessage("WarmUp_Long: Beginning");

CMessage("How about we start with a nice warm-up?");
CMessage("Let me just think for a moment...");
CMessage("Yes, I think I have thought of a nice warm-up for you. %Grin%");

var selector = randomInteger(0,2);

if(selector == 0)
{
	CMessage("First, I want you to stretch your fingers for me.");
	CMessage("Stretch your dominant hand first.");
	CMessage("Hold it for a moment.");
	CMessage("Now relax your dominant hand.");
	CMessage("Next, stretch your non-dominant hand.");
	CMessage("Don't forget to hold it aswell.");
	CMessage("Now relax your those fingers too... they're going to do some really naughty things today. %Grin%");
}
else if(selector == 1)
{
	CMessage("Get ready to %stroke% your %cock% for me, %PetName%.");

	Stroking();
	stopStroking();
	CMessage("Take your hand away from your %cock%.");
}
else
{
	CMessage("Stand up for me, %PetName%.");
	CMessage("Now try to reach your toes without bending your knees.");
	CMessage("You can do it... come on.");
	answer = getInput("Did you make it?");
	if(answer.isLike("yes", "y", "1"))
	{
		increaseAnger(-1);
		CMessage("Well done, %PetName%.")
	}
	else
	{
		CMessage("Don't worry we will make you more flexible during our future sessions. %Grin%");
	}
	CMessage("Now sit down again.");
}

if(selector == 1)
{
	CMessage("Well, I don't think that was enough %stroking% for a good warm-up. %Grin%");
}
else
{
	CMessage("Let's get to the %stroking% part of this warm-up.");
}

Stroking();
stopStroking();

CMessage("No more touching.");

CMessage("I hope you don't think we're done with your warm-up.");
CMessage("But don't worry...");
CMessage("Just one or two more exercises to go. %Grin%");

selector = randomInteger(0,2);
if(selector == 0)
{
	CMessage("I want you to stand up and grab your left hand behind your back with your right hand.");
	CMessage("Now push them as far away as you can and go downwards with your head.");
	CMessage("Just stay there for a moment.");
	CMessage("Try to relax and push them even further away.");
	CMessage("Just a few more seconds.");
	CMessage("You can let go now and sit down again.");
}
else if(selector == 1)
{
	CMessage("It's time for some breathing exercises.");
	CMessage("I want you to take a deep breath, hold it and exhale again after a few seconds.");
	CMessage("Don't worry I will guide you.");
	CMessage("Now...");

	for(var i = 0; i < 3; i++)
	{
		CMessage("Take a deep breath in...");
		for(var j = 0; j <= i; j++)
		{
			CMessage("Hold it...");
		}
		CMessage("And exhale again.");
	}
	CMessage("Good boy.");
	CMessage("Just relax.");
}
else
{
	CMessage("Take your %balls% in your non-dominant hand and start massaging them.");
	CMessage("Don't be too hard to them. They have a lot to endure during our session. %Grin%");
	CMessage("I hope it feels good %PetName%.");

	CMessage("Now take your dominant hand and rub yourself between your %Balls% and your %Anus%");
	CMessage("Just relax and massage yourself.");
	CMessage("Now do it a little bit faster and harder.");
	CMessage("Yes, that's it.");
	CMessage("Now even faster...");
	CMessage("and harder. %Grin%");

	CMessage("Now swap hands but keep going faster and do it really hard now.");
	CMessage("Ohhh, that's so hot.");

	CMessage("Keep going...");
	CMessage("... and stop.");
}

CMessage("Let's start...");
CMessage("... after some %stroking%. %Grin%");
Stroking();
stopStroking();
CMessage("Stop stroking... we are done with your warm-up.");
CMessage("Now let's start for real. %Grin%");

DMessage("WarmUp_long: End");