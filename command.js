import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'create',
    description: 'Creates something!',
  },
];

const TOKEN = 'MTQzMjM1NzIwMjMxMTY0NzQwOA.GbksVv.MATgat52IwwDKbwxeP8Zm3WEP7XWhvwmvO56JQ';
const CLIENT_ID = '1432357202311647408';

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
