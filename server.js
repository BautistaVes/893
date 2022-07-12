const Discord = require("discord.js");                                             //
const chalk = require('chalk');                                                   //
const intents = new Discord.Intents(32767)                                       //
const client = new Discord.Client({intents});                                   //DEFINE CONFIG COMO "CONFIG.JSON"
const config = require("./config.json");                                       //
let prefix = config.prefix;                                                   //
var j = "J.vps#9542"                                                         //
const { MessageEmbed } = require('discord.js');                             //
            
                                                                           

client.on('ready', () => {
  console.log(chalk.yellow(`\nIniciando bot...`));
   console.log("\nBot creado por:" + chalk.red("J.vps#9542 | ykz#0893"))
     console.log("IG:" + chalk.red("www.instagram.com/joaco_lomas"))
      console.log(chalk.green(`
      ░░░██╗░░░██╗██████╗░░██████╗
      ░░░██║░░░██║██╔══██╗██╔════╝
      ░░░╚██╗░██╔╝██████╔╝╚█████╗░
      ░░░░╚████╔╝░██╔═══╝░░╚═══██╗
      ██╗░░╚██╔╝░░██║░░░░░██████╔╝
      ╚═╝░░░╚═╝░░░╚═╝░░░░░╚═════╝░`))
     console.log(chalk.yellow(`\n\nBot encendido!`));

     setInterval(() => { 
      const estados = ["[ykz] Prefix del Bot ", ".VPS", "Developer J.vps#9542", "Developer ykz#0893",]
      const random = Math.floor(Math.random() * estados.length); 
      client.user.setActivity(estados[random], { type: "WATCHING"}, { status: "idle" }, {})
        }, 2000);

          
});


client.on('messageCreate', (message) => {
  if(message.content.startsWith('.raid')) {
    message.channel.send(`**El raid empieza en 10...**`);
    message.channel.send(`**El raid empieza en 9...**`);
    message.channel.send(`**El raid empieza en 8...**`);
    message.channel.send(`**El raid empieza en 7...**`);
    message.channel.send(`**El raid empieza en 6...**`);
    message.channel.send(`**El raid empieza en 5...**`);
    message.channel.send(`**El raid empieza en 4...**`);
    message.channel.send(`**El raid empieza en 3...**`);
    message.channel.send(`**El raid empieza en 2...**`);
    message.channel.send(`**El raid empieza en 1...**`);
    message.channel.send(`**El raid se esta realizando...** <a:cargando:901165095101558805>`);
    message.channel.send(`Eliminando completamente **MalianteoDM**...`);{server.name}
  
  } else
  if(message.content.startsWith(prefix + 'hola')) { 
    message.channel.send(`Hola que tal?`);
  }});


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
///////////////   /////////// /////////////// ///｜
///███████╗███╗░░░███╗██████╗░███████╗██████╗░///｜
///██╔════╝████╗░████║██╔══██╗██╔════╝██╔══██╗///｜
///█████╗░░██╔████╔██║██████╦╝█████╗░░██║░░██║///｜
///██╔══╝░░██║╚██╔╝██║██╔══██╗██╔══╝░░██║░░██║///｜
///███████╗██║░╚═╝░██║██████╦╝███████╗██████╔╝///｜
///╚══════╝╚═╝░░░░░╚═╝╚═════╝░╚══════╝╚═════╝░///｜
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('messageCreate', (message) => {
  if(message.content.startsWith(prefix + 'version')) {
const exampleEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('PIJUDOS DE LA **.𝙑𝙋𝙎**↴')
    .setURL('https://discord.gg/uFfaqM5FAJ')
    .setAuthor('「J.vps#9542」', 'https://cdn.discordapp.com/avatars/893126002933366794/d240544e5716635b66a2ab7659fb8976.webp?size=2048', 'http://209.14.130.43:8080')
    .setDescription('')
    .setThumbnail('https://cdn.discordapp.com/attachments/893126684050616333/893621811919589416/cmd.gif')
    .addFields(
        { name: '__Owner__:', value: 'J.vps#9542' },
        { name: '__Boss__:', value: 'ykz#0893' },
        { name: '__Coti$ed__:', value: 'kuarle¿.#0893', inline: true },
        { name: '__PvP__ __player__:', value: 'nx.#0893', inline: false },
    )
    .setImage('https://1gbits.com/site-assets/images/servers.gif')
    .setTimestamp()
    .setFooter('.𝙑𝙋𝙎 | .𝙔𝙆𝙕', 'https://cdn.discordapp.com/emojis/808565729782923285.gif?size=48');

    message.channel.send({ embeds: [exampleEmbed] });

}});


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
///////// ///////////////  //////   ///////////////  /////////////  ////// //｜
//██████╗░██╗███████╗███╗░░██╗██╗░░░██╗███████╗███╗░░██╗██╗██████╗░░█████╗░//｜
//██╔══██╗██║██╔════╝████╗░██║██║░░░██║██╔════╝████╗░██║██║██╔══██╗██╔══██╗//｜
//██████╦╝██║█████╗░░██╔██╗██║╚██╗░██╔╝█████╗░░██╔██╗██║██║██║░░██║███████║//｜
//██╔══██╗██║██╔══╝░░██║╚████║░╚████╔╝░██╔══╝░░██║╚████║██║██║░░██║██╔══██║//｜
//██████╦╝██║███████╗██║░╚███║░░╚██╔╝░░███████╗██║░╚███║██║██████╔╝██║░░██║//｜
//╚═════╝░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚══╝╚═╝╚═════╝░╚═╝░░╚═╝//｜
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
client.on("guildMemberAdd", (member) => {
  console.log(member);
  const welcome = new MessageEmbed() 
///consejo pueden poner .setTitle("Hola " + member.user.username) para decir el nombre
//Resultado: Hola (El Nombre Del Usuario)

// o tambien .setTitle("hola"+ member.user.username + "A Mi Servidor")
//resultado: hola (El Nombre Del Usuario) A Mi Servidor

  .setTitle(`Bienvenido ` + member.user.username)
///en .setColor() Dejen El 0x ejemplo: 0x39ff14, despues del ///0x ponen el hex del color
	.setColor('RANDOM')
  .setDescription("Bienvenido/a a **[𝑌𝐾𝑍𝑐𝑙𝑢𝑏]**")
  .setImage("https://cdn.discordapp.com/attachments/859845221905727489/893980116445724702/PoshBelovedJaeger-size_restricted.gif")                                                                                         

  const channel = member.guild.channels.cache.get("893126684050616333");
    channel.send({ embeds: [welcome] });
    member.roles.add("893980301611659315")

});


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬                                        
// ////// ///     //////// ////// /////// ///｜
//░█████╗░██╗░░░░░███████╗░█████╗░██████╗░///｜
//██╔══██╗██║░░░░░██╔════╝██╔══██╗██╔══██╗///｜
//██║░░╚═╝██║░░░░░█████╗░░███████║██████╔╝///｜
//██║░░██╗██║░░░░░██╔══╝░░██╔══██║██╔══██╗///｜
//╚█████╔╝███████╗███████╗██║░░██║██║░░██║///｜
//░╚════╝░╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝///｜
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const { Permissions } = require('discord.js');
  const args = message.content
    .toLowerCase()
    .slice(prefix.length)
    .trim()
    .split(/\s+/);
  const [command, input] = args;

  if (command === 'clear' || command === 'c') {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
      return message.channel
        .send(
          "Te faltan permisos negraso...tocate el orto.",
        );
    }

    if (isNaN(input)) {
      return message.channel
        .send('Ingrese la cantidad de mensajes que quieras borrar.')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 3000);
        });
    }

    if (Number(input) < 0) {
      return message.channel
        .send('Ingrese un número positivo')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 3000);
        });
    }

    // add an extra to delete the current message too
    const amount = Number(input) > 500
      ? 501
      : Number(input) + 0;

    message.channel.bulkDelete(amount, true)
    .then((_message) => {
      message.channel
        // do you want to include the current message here?
        // if not it should be ${_message.size - 1}
        .send(`Se borraron \`${_message.size}\` mensajes :broom:<a:verificado:893899581383917638>`)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 3000);
        });
    });
  }

  if (command === 'help' && input === 'clear') {
    const newEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('**Ayuda para el __.clear__**')
      .setDescription(
        `Este comando borra mensajes, por ejemplo \`${prefix}clear [cantidad]\` o \`${prefix}c [cantidad]\`.`,
      )
      .setFooter(
        `Pedido por ${message.author.tag}`,
        message.author.displayAvatarURL(),
      )
      .setTimestamp();

      message.channel.send({ embeds: [newEmbed] });
  }
});

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬                                        
/////////  ////// //// //////｜
//██████╗░░█████╗░███╗░░██╗//｜
//██╔══██╗██╔══██╗████╗░██║//｜
//██████╦╝███████║██╔██╗██║//｜
//██╔══██╗██╔══██║██║╚████║//｜
//██████╦╝██║░░██║██║░╚███║//｜
//╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝//｜
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'ban')) {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
      return message.channel
        .send(
          "Te faltan permisos negraso...tocate el orto.",
        );
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        member
          .ban({
            reason: 'No hay razón',
          })
          .then(() => {
            message.channel.send(`Baneado con exito ${user.tag}`);
          })
          .catch(err => {
            message.channel.send('No pude banear al miembro');
            console.error(err);
          });
      } else {
        message.channel.send("El usuario no esta en el server!");
      }
    } else {
      message.channel.send("No mencionaste el usuario para banear!");
    }
  }



});


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬                                        
/////  ////// ////// ///  /////｜
//██╗░░██╗██╗░█████╗░██╗░░██╗//｜
//██║░██╔╝██║██╔══██╗██║░██╔╝//｜
//█████═╝░██║██║░░╚═╝█████═╝░//｜
//██╔═██╗░██║██║░░██╗██╔═██╗░//｜
//██║░╚██╗██║╚█████╔╝██║░╚██╗//｜
//╚═╝░░╚═╝╚═╝░╚════╝░╚═╝░░╚═╝//｜
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kick')) {
    if (!message.member.permissions.has('KICK_MEMBERS')) {
      return message.channel
        .send(
          "Te faltan permisos negraso...tocate el orto.",
        );
    }
  let member = message.mentions.members.first();
  if(!member) return message.reply("Menciona a un usuario que este en el servidor!");
  if(!member.kickable) return message.reply("No se pudo kickear a este usuario!");
  
  member.kick();
  
 }});


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬     
// ////// ///   /// ////// ///////// ////// /////// //｜
//░█████╗░██╗░░░██╗░█████╗░████████╗░█████╗░██████╗░//｜
//██╔══██╗██║░░░██║██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗//｜
//███████║╚██╗░██╔╝███████║░░░██║░░░███████║██████╔╝//｜
//██╔══██║░╚████╔╝░██╔══██║░░░██║░░░██╔══██║██╔══██╗//｜
//██║░░██║░░╚██╔╝░░██║░░██║░░░██║░░░██║░░██║██║░░██║//｜
//╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝//｜
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'avatar')) {
if(message.author.bot) return; //detecta si es un bot
let miembro = message.mentions.users.first() //Agarra a la primera mencion 
if (!miembro) { //Si no hay mencion mandara el avatar del autor del mensaje
const avatarembed = new Discord.MessageEmbed()
    .setImage(`${message.author.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor(`RANDOM`)
    .setFooter(`Avatar de ${message.author.tag}`);
    
message.channel.send({ embeds: [avatarembed] });

} else { //Si hay mencion dara el avatar del mencionado.
const avatar2embed = new Discord.MessageEmbed()
    .setImage(`${miembro.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor(`RANDOM`)
    .setFooter(`Avatar de ${miembro.tag}`);

message.channel.send({ embeds: [avatar2embed] });
}
}});


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
// //////  //////  ////// /// ////// ////  /////////// /////////｜
//░█████╗░░█████╗░░█████╗░██╗░█████╗░███╗░░██╗███████╗░██████╗//｜
//██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗████╗░██║██╔════╝██╔════╝//｜
//███████║██║░░╚═╝██║░░╚═╝██║██║░░██║██╔██╗██║█████╗░░╚█████╗░//｜
//██╔══██║██║░░██╗██║░░██╗██║██║░░██║██║╚████║██╔══╝░░░╚═══██╗//｜
//██║░░██║╚█████╔╝╚█████╔╝██║╚█████╔╝██║░╚███║███████╗██████╔╝//｜
//╚═╝░░╚═╝░╚════╝░░╚════╝░╚═╝░╚════╝░╚═╝░░╚══╝╚══════╝╚═════╝░//｜
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

client.on('messageCreate', message => {
  if (!message.guild) return;
  if (message.content.startsWith('ykzhug')) { 
 let targetMember = message.mentions.members.first();
 if(!targetMember) return message.reply('Necesitas mencionar a alguien!');
 const abrazos = ["https://media.discordapp.net/attachments/894317167196127252/894320272067407872/abrazo-leo-messi.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894320297291956224/abrazo-messi.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894320299951140904/abrazo-grupal-lionel-messi.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894320305709916220/abrazar-messi.gif"]    
 const random = Math.floor(Math.random() * abrazos.length);
 const abrazo = new MessageEmbed() 
 .setTitle(`Recibiste un abrazo de ${message.author.tag} `)
 ///en .setColor() Dejen El 0x ejemplo: 0x39ff14, despues del ///0x ponen el hex del color
   .setColor('RANDOM')
   .setDescription(`<@${targetMember.user.id}>`)
   .setImage(abrazos[random])     
      message.channel.send({ embeds: [abrazo] });
 }
 });

 client.on('messageCreate', message => {
  if (!message.guild) return;
  if (message.content.startsWith('ykzkiss')) { 
 let targetMember = message.mentions.members.first();
 if(!targetMember) return message.reply('Necesitas mencionar a alguien!');
 const besitos = ["https://cdn.discordapp.com/attachments/894317167196127252/894321609299595265/messi-football.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894321696188805150/lionel-messi-barcelona.gif", "https://cdn.discordapp.com/attachments/893126684050616333/895525477446479882/beso.gif", "https://cdn.discordapp.com/attachments/893126684050616333/894312105350692874/676bf9c2cd4104187c9c211ee0efe130.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894322691107074108/naruto-sasuke.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894322689253208074/hinata-naruto.gif"]    
 const random = Math.floor(Math.random() * besitos.length);
 const besito = new MessageEmbed() 
 .setTitle(`Recibiste un beso de ${message.author.tag} `)
 ///en .setColor() Dejen El 0x ejemplo: 0x39ff14, despues del ///0x ponen el hex del color
   .setColor('RANDOM')
   .setDescription(`<@${targetMember.user.id}>`)
   .setImage(besitos[random])     
      message.channel.send({ embeds: [besito] });
 }
 });

 client.on('messageCreate', message => {
  if (!message.guild) return;
  if (message.content.startsWith('ykzdance')) {
    const pasitos2 = ["https://cdn.discordapp.com/attachments/894317167196127252/894317263409278986/duki-cumbia.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894317263891611738/HeavenlyImaginativeCat-size_restricted.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894317265305092126/Guido_submarine_Pelicula.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894317280144539668/cumbia-baile.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894317285555208272/Hnet-image.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894317307759849472/turros-baile.gif", "https://cdn.discordapp.com/attachments/894317167196127252/894317312096759818/turros-turros-bailando.gif"]    
    const random = Math.floor(Math.random() * pasitos2.length);
    let miembro = message.mentions.users.first() //Agarra a la primera mención 
    if (!miembro) {
    const pasitos = new MessageEmbed() 
 

 .setTitle(`${message.author.tag} Se tiro unos pasitos `)
 ///en .setColor() Dejen El 0x ejemplo: 0x39ff14, despues del ///0x ponen el hex del color
   .setColor('RANDOM')
   .setDescription(` `)

   .setImage(pasitos2[random])     
      message.channel.send({ embeds: [pasitos] });
 }
}});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.login(config.token);