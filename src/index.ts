import { Client, GatewayIntentBits } from 'discord.js';
import { loadCommands } from './handlers/commandHandler';
import { loadEvents } from './events/interactionCreate';

const Intents = GatewayIntentBits
const client = new Client({ intents: [Intents.GuildMessages, Intents.Guilds, Intents.GuildIntegrations, Intents.MessageContent] });

client.once('ready', () => {
    console.log('Bot is ready!');
});
 
loadEvents(client);   // Cargar eventos
loadCommands(client); // Cargar comandos

client.login(process.env.BOT_TOKEN);
