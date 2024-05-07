import { Client, IntentsBitField, EmbedBuilder, ActivityType } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

//Some variables
const GenshinImpactEmbedMessageAuthorName = `Genshin Impact - Notification`;
const GenshinImpactEmbedMessageAuthorIconUrl = `https://cdn.discordapp.com/attachments/1179367744014143510/1236539625657466911/112385885_p0_master1200.jpg`;
const HonkaiStarRailEmbedMessageAuthorName = `Honkai Star Rail - Notification`;
const HonkaiStarRailEmbedMessageAuthorIconUrl = `https://cdn.discordapp.com/attachments/1179367744014143510/1236547000787533824/gp3ebskaz85c1.png`;
const AuthorIconUrl =
  "https://cdn.discordapp.com/attachments/1179367744014143510/1237388845969047582/Logo_1_JPEG.png";


//handles all the messages + embed messages
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  try {
    if (message.content === "..instagram") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("@itsmeprinceyt - instagram")
        .setDescription("https://www.instagram.com/itsmeprinceyt");

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..instagram is used at ${new Date()}`)
    }
    if (message.content === "..youtube") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("ItsMe Prince0 - YouTube")
        .setDescription("https://www.youtube.com/@itsmeprince0");

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..youtube is used at ${new Date()}`)
    }
    if (message.content === "..discord") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("ItsMe Prince Server - Discord Invite Link")
        .setDescription("https://discord.gg/HgXNs4p5cx");

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..discord is used at ${new Date()}`)
    }
    if (message.content === "..clips") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("ItsMe Prince Clips - YouTube")
        .setDescription(
          "https://www.youtube.com/playlist?list=PLE3BGeUsE3iqhCkZaXgHTPnN8s__8uNCt"
        );

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..clips is used at ${new Date()}`)
    }
    if (message.content === "..sofiguide") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("Sofi Discord Bot FULL HINDI GUIDE - YouTube")
        .setDescription("https://youtu.be/kfrl1yO8sUA");

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..sofiguide is used at ${new Date()}`)
    }
    if (message.content === "..ppdevice" || message.content === "..ppphone") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`I'm currently using IQOO NEO 7 ( 12+256 Variant) - Black`);

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..ppdevice is used at ${new Date()}`)
    }
    if (message.content === "..pppc" || message.content === "..pppcspecs") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`PC Specs`).setDescription(`
      CPU🐤Ryzen 5 3600
      
      RAM🐤A-DATA XPG DDR4 (8GBx2)
      
      MOTHERBOARD🐥MSI B450 PRO-VDH-MAX
      
      GRAPHIC CARD🐥INNO3D NVIDIA GEFORCE RTX 3060 Twin X2 OC 
      
      PSU✨Antec 550 Watt 80 Plus
      
      SSD🐥A-DATA GAMMIX 256 GB M.2
      
      SSD 2🐥& Patriot 1TB SATA SSD
      
      CABINET🐤Ant Esports ICE-200TG
      `);

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..pppcspecs is used at ${new Date()}`)
    }
    if (message.content === "..whatsapp") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`ItsMe Prince Broadcast Channel - Whatsapp`)
        .setDescription(
          `https://www.whatsapp.com/channel/0029Va5MEeX2UPBIHUMyQY2z`
        );

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..whatsapp is used at ${new Date()}`)
    }
    if (message.content === "..help") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`ItsMe Prince Bot - Commands`)
        .setDescription(
          "```..instagram``````..youtube``````..discord``````..clips``````..sofiguide``````..ppdevice``````..pppc``````..whatsapp```\n```..help```"
        );

      await message.reply({
        embeds: [embed],
      });
      console.log(`Command ..help is used at ${new Date()}`)
    }
    if (message.content.startsWith("..math")) {
      const expression = message.content.slice("..math ".length).trim();
      try {
        const result = eval(expression);
        const embed = new EmbedBuilder()
          .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
          .setTitle("Maths Calculator - ItsMe Prince Bot")
          .setDescription(`Result: ${result}`);
        await message.reply({
          embeds: [embed],
        });
        console.log(`Command ..math is used at ${new Date()}`)
      } catch (error) {
        console.log("There was an error processing the expression.");
      }
    }
  } catch (error) {
    console.log(`Cannot initiate the command due to an expected error: ${error}`);
  }
});

// slash embedded messages
client.on("interactionCreate", async (interaction) => {
  if (interaction.user.username.toLowerCase() === "itsmeprinceyt") {
    if (interaction.commandName === "genshin_impact_primogem") {
      const Code = interaction.options.get("enter-code").value;
      const InputImage = interaction.options.get("image").value;
      const CodeDescription =
        interaction.options.get("notification-title").value;
      const cleanURL = InputImage.trim().replace(/&$/, "");

      const embed = new EmbedBuilder()
        .setAuthor({
          name: GenshinImpactEmbedMessageAuthorName,
          iconURL: GenshinImpactEmbedMessageAuthorIconUrl,
        })
        .setTitle(CodeDescription)
        .setDescription(
          `
      Code: [${Code}](https://genshin.mihoyo.com/en/gift?code=${Code})\n
      Click on the code or redeem through website: https://genshin.mihoyo.com/en/gift
      `
        )
        .setImage(cleanURL);

      await interaction
        .reply({
          content: "<@&969188588870852628>",
          embeds: [embed],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .then((message) => {
          message.react("977169624187695104").catch(console.error);
        })
        .catch(console.error);

      console.log(
        `Genshin Impact Redeem Code Message has been delivered: ${Code}`
      );
    }
    if (interaction.commandName === "honkai_star_rail_jades") {
      const Code = interaction.options.get("enter-code").value;
      const InputImage = interaction.options.get("image").value;
      const CodeDescription =
        interaction.options.get("notification-title").value;
      const cleanURL = InputImage.trim().replace(/&$/, "");

      const embed = new EmbedBuilder()
        .setAuthor({
          name: HonkaiStarRailEmbedMessageAuthorName,
          iconURL: HonkaiStarRailEmbedMessageAuthorIconUrl,
        })
        .setTitle(CodeDescription)
        .setDescription(
          `
      Code: [${Code}](https://hsr.hoyoverse.com/gift?code=${Code})\n
      Click on the code or redeem through website: https://hsr.hoyoverse.com/gift
      `
        )
        .setImage(cleanURL);

      await interaction
        .reply({
          content: "<@&1124817467257139270>",
          embeds: [embed],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .then((message) => {
          message.react("1131210828704645175").catch(console.error);
        })
        .catch(console.error);

      console.log(
        `Honkai Star Rail Redeem Code Message has been delivered: ${Code}`
      );
    }
  }
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online and running now .... `);

  client.user.setStatus("dnd");
  client.user.setActivity({
    name: 'over PP 🥸',
    type: ActivityType.Watching,
  });
});

client.login(process.env.TOKEN);
