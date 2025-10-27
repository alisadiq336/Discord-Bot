import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === 'create') {
    await interaction.reply('Creating something https://thealisadiq.wordpress.com/');
  }
});

client.login('MTQzMjM1NzIwMjMxMTY0NzQwOA.GbksVv.MATgat52IwwDKbwxeP8Zm3WEP7XWhvwmvO56JQ');
