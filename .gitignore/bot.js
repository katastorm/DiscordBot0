const Discord = require("discord.js");
const client = new Discord.Client();






function getMsg(msg) {

prt = (txt)=>{
    msg.channel.send(txt)    
}


 if (msg.content.substr(0,1) === ","){

    cmd = msg.content.split(" ")[0].substr(1)


    txt = msg.content.substr(cmd.length+1)


    switch (cmd){

        case "py":
        msg.delete(1000);
        prt("```Python\n" + txt + "\n```" )
        break

        case "C":
        msg.delete(1000);
        prt("```C\n" + txt + "\n```" )
        break

        case "test":
        prt("je fonctionne !! yeah !" )
        break


    }

}

}






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message',getMsg);

client.login('NTIxMzU4NTQwNjUzMTk5Mzcw.Du7jAw.9XfBfaeEtlEUVMwcg9iMwLy3jB8');