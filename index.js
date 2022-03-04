const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.login("OTA0NjkwMjU1MjY4MDMyNTgy.YX_MdQ.PVtfsbYm6zfOMeLolzAxAoAF-D8");

const prefix = "'";

    //this is to see all the informations and update for the bot
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
        if (message.content === prefix + "info"){
            const embed = new Discord.MessageEmbed()
                .setColor("6600FF")
                .setTitle("This is some infos about the bot!")
                .setAuthor("𝕸𝖎𝖙𝖘𝖚𝖔", "https://cdn.discordapp.com/attachments/906120531022057482/912757033965584444/258-2585755_manga-anime-animeboy-mangaboy-monokuma-boy-hot-monokuma.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/829236671580602378/907705551079763988/20211109_195652.gif")
                .setDescription("Updated, moved the add bot thing to bot's profile.\nAdded roblox games thing, use the command **'games** to see.\nCheck this **'info** usually to know all the updates!\n**'commands** or **'cmds** for commands list!");
            
                message.channel.send({ embeds: [embed]});
        }
    });
    
    
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
        //This is for the help command
        if(message.content === prefix + "help"){
            message.reply("Hello!\nCurrent prefix: **'**\nUse the command **'cmds** or **'commands** to view the list of commands for me!");
        }
    });

    //This is to check all the commands
        Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content === prefix + "cmds"){
        const embed = new Discord.MessageEmbed()
            .setColor("6600FF")
            .setTitle("This is a list of all the commands!")
            .setAuthor("𝕸𝖎𝖙𝖘𝖚𝖔", "https://cdn.discordapp.com/attachments/906120531022057482/912757033965584444/258-2585755_manga-anime-animeboy-mangaboy-monokuma-boy-hot-monokuma.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/829236671580602378/907705551079763988/20211109_195652.gif")
            .addField("'commands/cmds", "View all the commands! It will be updated everytime a new command come out!")
            .addField("'lyrics help", "View the list of all the lyrics for some songs, feel free to suggest a song!")
            .addField("'add", "Add the bot to your own server!")
            .addField("'server", "Use this to join the server of the creator of the bot.")
            .addField("'games", "View the list for roblox games.")
            .addField("'info", "This command is to see all the updates of the bot, check everydays for more!");
            message.channel.send({ embeds: [embed]});
    }
});

    //This is to check all the commands
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
        if (message.content === prefix + "commands"){
            const embed = new Discord.MessageEmbed()
                .setColor("6600FF")
                .setTitle("This is a list of all the commands!")
                .setAuthor("𝕸𝖎𝖙𝖘𝖚𝖔", "https://cdn.discordapp.com/attachments/906120531022057482/912757033965584444/258-2585755_manga-anime-animeboy-mangaboy-monokuma-boy-hot-monokuma.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/829236671580602378/907705551079763988/20211109_195652.gif")
                .addField("'commands/cmds", "View all the commands! It will be updated everytime a new command come out!")
                .addField("'lyrics help", "View the list of all the lyrics for some songs, feel free to suggest a song!")
                .addField("'add", "Add the bot to your own server!")
                .addField("'server", "Use this to join the server of the creator of the bot.")
                .addField("'games", "View the list for roblox games.")
                .addField("'info", "This command is to see all the updates of the bot, check everydays for more!");
                message.channel.send({ embeds: [embed]});
        }
    });
    
    //this is to see stressed out lyrics
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content === prefix + "lyrics Stressed Out"){
        const embed = new Discord.MessageEmbed()
            .setColor("6600FF")
            .setTitle("This is the list of the lyrics for the song Stressed Out, link to official video: https://www.youtube.com/watch?v=pXRviuL6vMY")
            .setAuthor("Twenty One Pilots")
            .setThumbnail("https://cdn.discordapp.com/attachments/904642871171354664/905107266489958400/musique-23157485.jpg")
            .setDescription("I wish I found some better sounds\nNo one's ever heard\nI wish I had a better voice\nThat sang some better words\nI wish I found some chords\nIn an order that is new\nI wish I didn't have to rhyme\nEvery time I sang\nI was told when I get older\nAll my fears would shrink\nBut now I'm insecure\nAnd I care what people think\nMy name's Blurryface and I care what you think\nMy name's Blurryface and I care what you think\nWish we could turn back time\nTo the good old days\nWhen our momma sang us to sleep\nBut now we're stressed out\nWish we could turn back time\nTo the good old days\nWhen our momma sang us to sleep\nBut now we're stressed out\nWe're stressed out\nSometimes a certain smell will\nTake me back to when I was young\nHow come I'm never able to identify\nWhere it's coming from?\nI'd make a candle out of it\nIf I ever found it\nTry to sell it, never sell out of it\nI'd probably only sell one\nIt'd be to my brother, cause we have the same nose\nSame clothes, home grown\nThe stone's throw from a creek we used to roam\nBut it would remind us of when\nNothing really mattered\nOut of student loans and tree house homes\nWe all would take the latter\nMy name's Blurryface and I care what you think\nMy name's Blurryface and I care what you think\nWish we could turn back time\nTo the good old days\nWhen our momma sang us to sleep\nBut now we're stressed out\nWish we could turn back time\nTo the good old days\nWhen our momma sang us to sleep\nBut now we're stressed out\nUsed to play pretend\nGive each other different names\nWe would build a rocket ship and then we'd fly it far away\nUsed to dream of outer space\nBut now they're laughing at our face singing\nWake up, you need to make money, yeah\nUsed to play pretend\nGive each other different names\nWe would build a rocket ship\nAnd then we'd fly it far away\nUsed to dream of outer space\nBut now they're laughing at our face singing\nWake up, you need to make money, yeah\nWish we could turn back time\nTo the good old days\nWhen our momma sang us to sleep\nBut now we're stressed out\nWish we could turn back time\nTo the good old days\nWhen our momma sang us to sleep\nBut now we're stressed out\nWe used to play pretend, used to play pretend, money\nWe used to play pretend, wake up you need the money\nUsed to play pretend, used to play pretend, money\nWe used to play pretend, wake up you need the money\nUsed to play pretend\nGive each other different names\nWe would build a rocket ship\nAnd then we'd fly it far away\nUsed to dream of outer space\nBut now they're laughing at our face saying\nWake up, you need to make money, yeah");
        
            message.channel.send({ embeds: [embed]});
    }
});



    //This is help for lyrics
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
        if (message.content === prefix + "lyrics help"){
            
            const embed = new Discord.MessageEmbed()
                .setColor("6600FF")
                .setTitle("You can see all the lyrics commands here!")
                .setAuthor("𝕸𝖎𝖙𝖘𝖚𝖔", "https://cdn.discordapp.com/attachments/906120531022057482/912757033965584444/258-2585755_manga-anime-animeboy-mangaboy-monokuma-boy-hot-monokuma.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/829236671580602378/907705551079763988/20211109_195652.gif")
                .addField("'lyrics Stressed Out\nBy Twenty One Pilots", "View the lyrics for Stressed Out and the link to the official video!")
                .addField("'lyrics 7 Years\nBy Lukas Graham", "View the lyrics for 7 Years and the link to the official video!")
                .addField("'lyrics Courtesy Call\nBy Thousand Foot Krutch", "View the lyrics for Courtesy Call and the link to the official video!")
                .addField("'lyrics Heathens\nBy Twenty One Pilots", "View the lyrics for Heathens and the link to the official video!")
                .addField("More coming soon!", "if you have suggestions, tell me!");
                message.channel.send({ embeds: [embed]});
        }
    });

    //lyrics for 7 Years
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
        if (message.content === prefix + "lyrics 7 Years"){
            const embed = new Discord.MessageEmbed()
                .setColor("6600FF")
                .setTitle("this is the list of the lyrics for the song 7 Years, link to official video: https://www.youtube.com/watch?v=LHCob76kigA")
                .setAuthor("Lukas Graham")
                .setThumbnail("https://cdn.discordapp.com/attachments/904642871171354664/905107266489958400/musique-23157485.jpg")
                .setDescription("Once I was seven years old my mama told me, \nGo make yourself some friends or you'll be lonely\nOnce I was seven years old\nIt was a big, big world but we thought we were bigger\nPushing each other to the limits, we were learning quicker\nBy eleven smoking herb and drinking burning liquor \nNever rich so we were out to make that steady figure\nOnce I was eleven years old my daddy told me, \nGo get yourself a wife or you'll be lonely\nOnce I was eleven years old\nI always had that dream like my daddy before me\nSo I started writing songs, I started writing stories\nSomething about that glory just always seemed to bore me\n‘Cause only those I really love will ever really know me\nOnce I was twenty years old my story got told\nBefore the morning sun when life was lonely\nOnce I was twenty years old\nI only see my goals I don't believe in failure\n‘Cause I know the smallest voices they can make it major\nI got my boys with me, at least those in favor\nAnd if we don't meet before I leave I hope I'll see you later\nOnce I was twenty years old my story got told \nI waswriting 'bout everything I saw before me\nOnce I was twenty years old\nSoon we'll be thirty years old, our songs have been sold \nWe'vetraveled around the world and we're still roaming\nSoon we'll be thirty years old\nI'm still learning about life, my woman brought children for me\nSo I can sing them all my songs and I can tell them stories\nMost of my boys are with me, some are still out seeking glory\nAnd some I had to leave behind, my brother I'm still sorry\nSoon I'll be sixty years old, my daddy got sixty-one \nRemember life and then your life becomes a better one\nI made a man so happy when I wrote a letter once\nI hope my children come and visit once or twice a month\nSoon I'll be sixty years old, will I think the world is cold\nOr will I have a lot of children who can warm me\nSoon I'll be sixty years old");
            
                message.channel.send({ embeds: [embed]});
        }
    });


        //add this bot to your own server
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content === prefix + "add"){
        const embed = new Discord.MessageEmbed()
            .setColor("6600FF")
            .setTitle("Hey!")
            .setAuthor("𝕸𝖎𝖙𝖘𝖚𝖔", "https://cdn.discordapp.com/attachments/906120531022057482/912757033965584444/258-2585755_manga-anime-animeboy-mangaboy-monokuma-boy-hot-monokuma.png")
            .setDescription("This has moved to the bot profile! Please check it!")
            message.channel.send({ embeds: [embed]});
    }
});

    //lyrics for courtesy call
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
        if (message.content === prefix + "lyrics Courtesy Call"){
            const embed = new Discord.MessageEmbed()
                .setColor("6600FF")
                .setTitle("this is the list of the lyrics for the song Courtesy Call, link to official video: https://www.youtube.com/watch?v=ocpDEOXABWg")
                .setAuthor("Thousand Foot Krutch")
                .setThumbnail("https://cdn.discordapp.com/attachments/904642871171354664/905107266489958400/musique-23157485.jpg")
                .setDescription("Hey-o, here comes the danger up in this club\nWhen we get started and we ain't gonna stop\nWe gonna turn it out till it gets too hot\nEverybody sing, hey-O\nTell'em turn it up till they can't no more\nLet's get this thing shakin' like a disco ball\nThis is your last warning, a courtesy call\nHey-O, here comes the danger up in this club\nWhen we get started and we ain't gonna stop\nWe gonna turn it out till it gets too hot\nEverybody sing, hey-O\nTell'em turn it up till they can't no more\nLet's get this thing shakin' like a disco ball\nThis is your last warning, a courtesy call\nI am not afraid of the storm that comes my way\nWhen it hits it shakes me to the core\nAnd makes me stronger than before\nIt's not a question about trust\nbut will you stand with us\nCan you feel it, make it real?\nI think it might wash away tonight\nAwaken from this never ending fight\nIt takes more than meets the eye\nThis war we're fighting it's not just rotting\nHey-o, here comes the danger up in this club\nWhen we get started and we ain't gonna stop\nWe gonna turn it out till it gets too hot\nEverybody sing, hey-o\nTell'em turn it up till they can't no more\nLet's get this thing shakin' like a disco ball\nThis is your last warning, a courtesy call\nThere's a rumble in the floor\nSo get prepared for war\nWhen it hits it'll knock you to the ground\nWhen it shakes up everything around\nBut survival is a must\nSo will you stand with us\nCan you feel it, make it real\nMake me feel it\nI think it might wash away tonight\nAwaken from this never ending fight\nIt takes more than meets the eye\nThis war we're fighting is not just rotting\nHey-o, here comes the danger up in this club\nWhen we get started and we ain't gonna stop\nWe gonna turn it out till it gets too hot\nEverybody sing, hey-o\nTell'em turn it up till they can't no more\nLet's get this thing shakin' like a disco ball\nThis your last warning, a courtesy call\nHey-o, here comes the danger up in this club\nWhen we get started and we ain't gonna stop\nWe're gonna turn it up till it gets too hot\nEverybody sing, hey-o\nTell'em turn it out till they can't no more\nLet's get this thing shakin' like a disco ball\nThis your last warning, a courtesy call"); 
            
                message.channel.send({ embeds: [embed]});
        }
    });

    //invite to server owner
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
        if (message.content === prefix + "server"){
            const embed = new Discord.MessageEmbed()
                .setColor("6600FF")
                .setTitle("Click this to join the server of my creator!")
                .setAuthor("𝕸𝖎𝖙𝖘𝖚𝖔", "https://cdn.discordapp.com/attachments/906120531022057482/912757033965584444/258-2585755_manga-anime-animeboy-mangaboy-monokuma-boy-hot-monokuma.png")
                .setURL("https://discord.gg/RqFHxsXN8F");
            
                message.channel.send({ embeds: [embed]});
        }
    });



    //Rules list
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
        if (message.content === prefix + "ruleslist"){
            const embed = new Discord.MessageEmbed()
                .setColor("6600FF")
                .setTitle("Here is some rules that you will have to read!")
                .setThumbnail("https://cdn.discordapp.com/attachments/829236671580602378/907705551079763988/20211109_195652.gif")
                .setDescription("Do not **bully** (muted for 1 week or kick)\nDo not be **toxic** (muted for 5 days or kick)\nYou must be **13** or above (ban)\nNo online dating (ban)\nDo not **spam** (muted for 4 days)\nDo not get **sad** in poketwo trading (muted for 1 day)\nDo not get **sad** when someone gets your favourite Pokemon (muted for 2 days)\nDo not send **NSFW** (ban) \nDo not be **rude** to the other members (muted for 1 week)\nBy the way you only get **3** chances on the muted after you get kicked or ban it depends.\nI hope you follow the rules please click or tap ✅ to agree and I hope you enjoy the server!");
            
                message.channel.send({ embeds: [embed]});
        }
    });


 //lyrics for Heathens
Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "lyrics Heathens"){
         const embed = new Discord.MessageEmbed()
             .setColor("6600FF")
             .setTitle("this is the list of the lyrics for the song Heathens, link to official video: https://www.youtube.com/watch?v=UprcpdwuwCg")
             .setAuthor("Twenty one pilots")
             .setThumbnail("https://cdn.discordapp.com/attachments/904642871171354664/905107266489958400/musique-23157485.jpg")
             .setDescription("All my friends are heathens, take it slow\nWait for them to ask you who you know\nPlease don't make any sudden moves\nYou don't know the half of the abuse\nAll my friends are heathens, take it slow\nWait for them to ask you who you know\nPlease don't make any sudden moves\nYou don't know the half of the abuse\nWelcome to the room of people\nWho have rooms of people that they loved one day\nDocked away\nJust because we check the guns at the door\nDoesn't mean our brains will change from hand grenades\nYou'll never know the psychopath sitting next to you\nYou'll never know the murderer sitting next to you\nYou'll think, `How'd I get here, sitting next to you?`\nBut after all I've said, please don't forget\nAll my friends are heathens, take it slow\nWait for them to ask you who you know\nPlease don't make any sudden moves\nYou don't know the half of the abuse\nWe don't deal with outsiders very well\nThey say newcomers have a certain smell\nYou have trust issues, not to mention\nThey say they can smell your intentions\nYou'll never know the freak show sitting next to you\nYou'll have some weird people sitting next to you\nYou'll think `How did I get here, sitting next to you?`\nBut after all I've said, please don't forget\nAll my friends are heathens, take it slow\nWait for them to ask you who you know\nPlease don't make any sudden moves\nYou don't know the half of the abuse\nAll my friends are heathens, take it slow (Watch it)\nWait for them to ask you who you know (Watch it)\nPlease all my friends are heathens, take it slow (Watch it)\nWait for them to ask you who you know\nWhy'd you come? You knew you should have stayed\nI tried to warn you just to stay away\nAnd now they're outside ready to bust\nIt looks like you might be one of us"); 
            
                message.channel.send({ embeds: [embed]});
        }
    });
        
    console.log("Bot is ready!");

        //this is to see games
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content === prefix + "games"){
        const embed = new Discord.MessageEmbed()
            .setColor("6600FF")
            .setTitle("This is the list of the roblox games commands made by my creator!")
            .setAuthor("Evil Butler")
            .setThumbnail("https://cdn.discordapp.com/attachments/906593952457691238/939239830724939776/stsmall507x507-pad600x600f8f8f8.jpg")
            .setDescription("My creator, Mitsuo, created roblox games.\n**1.** **A Mystery Anime**,  command is **game1**");
        
            message.channel.send({ embeds: [embed]});
    }
});

        //game 1 A Mystery Anime
        Client.on("messageCreate", message => {
            if (message.author.bot) return;
        
            if (message.content === prefix + "game1"){
                const embed = new Discord.MessageEmbed()
                    .setColor("6600FF")
                    .setTitle("game 1: A Mystery Anime")
                    .setAuthor("Evil Butler")
                    .setThumbnail("https://cdn.discordapp.com/attachments/906593952457691238/939239830724939776/stsmall507x507-pad600x600f8f8f8.jpg")
                    .setDescription("**A Mystery Anime** is a game in testing, you can grind and get level on it!")
                    .setURL("https://www.roblox.com/games/8387548132/A-Mystery-Anime-Test-place")
                
                    message.channel.send({ embeds: [embed]});
            }
        });