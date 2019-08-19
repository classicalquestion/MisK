DMessage("Hello Domme: Start");

CMessage("%Greetings% %PetName%!");
CMessage("Let me introduce myself...");
CMessage("My name is " + getVar("domName"));
CMessage("I'm glad you are here.");
CMessage("Let's have a look at your fetishes and likings");

CMessage("Let's see how much you like edging.");

if(getVar("sublikingedge") < 4)
{
	CMessage("You don't like edging?");
	CMessage("If that's the case you should really think twice if you want to continue or not");
	CMessage("Maybe you can set that number a little bit higher for me...");
	
	if(getVar("dommelikingedge") < 4)
	{
		CMessage("... I don't like to let you edge aswell but after all it's a very good practice to show me how obedient you are. %Grin%");
		answer = getInput("So would you be a good slave and let me raise that number a little bit?");
		if(answer.isLike("yes", "of course", "yeah", "raise"))
		{
			CMessage("Really?");
			CMessage("That's great.");
			setVar("sublikingedge", getVar("sublikingedge") + Math.floor(Math.random()*3) + 1)
			CMessage("Let's see... I think " + getVar("sublikingedge") + " would be ok. %Grin%");
		}
		else if(answer.isLike("no", "n", "0", "don't"))
		{
			CMessage("ok maybe you will change your mind after a while.");
		}
		else
		{
			CMessage("That wasn't clear enough %PetName%.");
			CMessage("So I will raise it a little bit for you. %Grin%");
			setVar("sublikingedge", getVar("sublikingedge") + 1);
		}
	}
	else if(getVar("dommelikingedge") < 10)
	{
		CMessage("... I think edging is something nice. Trust me %PetName%.");
		answer = getInput("So would you be a good slave and let me raise that number a little bit?");
		if(answer.isLike("yes", "of course", "yeah", "raise"))
		{
			CMessage("Really?");
			CMessage("That makes me happy %PetName%.");
			setVar("sublikingedge", getVar("sublikingedge") + Math.floor(Math.random()*3) + 2)
			CMessage("Let's see... I think " + getVar("sublikingedge") + " would be ok. %Grin%");
		}
		else if(answer.isLike("no", "n", "0", "don't"))
		{
			CMessage("ok, I hope you will change your mind after a while.");
		}
		else
		{
			CMessage("That wasn't clear enough %PetName%.");
			CMessage("So I will raise it a little bit for you. %Grin%");
			setVar("sublikingedge", getVar("sublikingedge") + 1);
		}
	}
	else if(getVar("dommelikingedge") > 9)
	{
		CMessage("... I love edging and you should atleast like it if you want to be my pet.");
		answer = getInput("So would you be a good slave and let me raise that number a little bit?");
		if(answer.isLike("yes", "of course", "yeah", "raise"))
		{
			CMessage("Really?");
			CMessage("I start to like you %PetName%.");
			setVar("sublikingedge", getVar("sublikingedge") + Math.floor(Math.random()*4) + 3)
			CMessage("Let's see... I think " + getVar("sublikingedge") + " would be ok. %Grin%");
		}
		else if(answer.isLike("no", "n", "0", "don't"))
		{
			CMessage("I can't believe that you just denied me %PetNameBad%.");
		}
		else
		{
			CMessage("That wasn't clear enough %PetName%.");
			CMessage("So I will raise it a little bit for you. %Grin%");
			setVar("sublikingedge", getVar("sublikingedge") + 2);
		}
	}
}
else if(getVar("sublikingedge" < 8))
{ 
	if(getVar("dommelikingedge" < 10))
	{
		CMessage("Edging is something great isn't it?");
		CMessage("Yes of course it is and don't worry you will edge for me in our future. %Grin%");
	}
	else if(getVar("dommelikingedge") > 9)
	{
		CMessage("I am sure you will raise that number very soon.");
		CMessage("But at the end I will force you to edge anyway.");
	}
}
else if(getVar("sublikingedge") > 7)
{
	CMessage("We will have a lot of fun edging you %PetNameGood%. %Grin%");
}

CMessage("Let's have a look at another fetish.");

if(getVar("sublikinganal") < 4)
{
	CMessage("Oh you don't like anal?");

	if(getVar("dommelikinganal") > 6)
	{
		CMessage("Maybe I will force you than to pound that %Ass% of yours. %Grin%");
	}
	else
	{
		CMessage("That's sad, but we will find a way to figure that out.");
	}
}
else if(getVar("sublikinganal") < 8)
{
	CMessage("I see you are interested in analplay.");
	CMessage("Well hopefully we will find and bend your limits then. %Grin%");
}
else
{
	CMessage("Oh look who loves to put things inside his %Ass%. %Grin%");
	if(getVar("dommelikinganal") > 7)
	{
		CMessage("Believe me, we will use that hole.");
		CMessage("Oh, and I will find the limits of your %Ass%. %Grin%");
	}
	else
	{
		CMessage("We will have fun with your %Ass%, %PetName%. %Grin%");
		CMessage("Oh and trust me. At the end you don't even want to stop to use that dirty ass of yours.");
	}
}

CMessage("Now let's see...");

if(getVar("sublikingcei") < 4)
{
	CMessage("You don't like playing with your own cum?");
	CMessage("Maybe I have to force you to start to like it then. %Grin%");
}
else if(getVar("sublikingcei") < 8)
{
	CMessage("You are interested in cum-eating? %Grin%");
	if(getVar("dommelikingcei") > 7)
	{
		CMessage("That's nice.");
		CMessage("So I don't have to feel sorry for you to force you to ruin your own orgasm in your mouth. %Grin%");
	}
	else
	{
		CMessage("After a while you don't even want to not eat it anymore, %PetName%. %Grin%");
		CMessage("You will get used to it.");
	}
}
else
{
	CMessage("Well, well, well a cum loving slave.");
	if(getVar("dommelikingcei") > 7)
	{
		CMessage("That's all what I wanted to hear.");
		CMessage("At the end of our training you will only want to cum inside of your own mouth or atleast eat it out of your hand. %Grin%");
	}
	else
	{
		CMessage("If cum-eating is so exciting for you.");
		if(getVar("subatecum"))
		{
			CMessage("Maybe I have to force you to not eat it sometimes. %Grin%");
		}
		else
		{
			var bCorrectAnswer = false;
			CMessage("Why didn't you do it before?");
			while(!bCorrectAnswer)
			{
				answer = getInput("Are you afraid of it?");
				if(answer.isLike("yes", "y", "yeah", "1"))
				{
					CMessage("Of course you have. %Grin%");
					bCorrectAnswer = true;
				}
				else if(answer.isLike("no", "n", "nope", "0"))
				{
					CMessage("Don't worry. I will help you achieve that feeling of eating your own cum very soon.");
					bCorrectAnswer = true;
				}
				else
				{
					CMessage("It's a simple yes or no question.");
					CMessage("So...")
				}
			}
		}
	}
}
DMessage("End read fetishes");

CMessage("Don't worry " + getVar("subName") + ".");
CMessage("You will like what I am going to make you do.");
CMessage("But for now I want you to close the application. So everything is setup correctly and we can start having some fun. %Grin%");

setVar("!setupvariables", false);

CMessage("See you soon... slave.");

DMessage("Hello Domme: End");