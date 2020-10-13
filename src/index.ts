import { Client, Message, MessageEmbed } from "discord.js";
import reactions from "./reactions.js";

let client: Client = new Client();

function respond(reactions: Array<string>): MessageEmbed {
  let randomImage: string =
    reactions[Math.floor(Math.random() * reactions.length)];

    let response: MessageEmbed = new MessageEmbed()
    .setImage(randomImage);

    return response
}

client.on("message", (message: Message) => {
  if (message.content.match(/unzip/i) !== null) {
    let response: MessageEmbed = respond(reactions)
    message.reply(response);
  }
});

client.login(process.env.TOKEN);
