# Alts Eliminator Bot

## Overview
The **Alts Eliminator Bot** is a customizable Discord bot designed to help server administrators prevent alternate accounts ("alts") from joining their servers. By enforcing account age restrictions and offering advanced moderation and utility features, the bot ensures that only trusted members can access the community.

## Features
- **Alt Account Detection**: Automatically identifies and removes accounts that are too new
- **Customizable Actions**: Supports actions such as `kick` or `ban` for detected accounts
- **Welcomer and Leaver Messages**: Sends customizable welcome and leave messages to designated channels
- **Bypass System**: Allows specific users to bypass alt account restrictions
- **Detailed Configuration**: Modify bot prefix, logging channels, account age settings, and more
- **Utility Tools**: Includes server analysis commands like `bots`, `names`, `agecheck`, and `showalts`
- **Informative Commands**: Provides information about the bot, server, and members

## Getting Started

### Prerequisites
1. Node.js (version 16.x or higher)
2. A Discord bot token
3. Administrative permissions in your Discord server

### Installation
1. Clone this repository to your local machine:
```bash
git clone <repository_url>
```

### Navigate to the project directory:
```bash
Copycd alts-eliminator
```
### Install dependencies:
```bash
Copynpm install
```
### Create a .env file and set your bot token:
```bash
CopyTOKEN=your_discord_bot_token
```
### Start the bot:
```bash
Copynode index.js
```
## Commands
### General Commands

!help - Displays the list of commands and their usage
!info - Provides detailed information about the bot
!uptime - Shows the bot's uptime
!ping - Displays the bot's current latency
!invite - Provides an invite link to add the bot to other servers

### Moderation Commands

#### !nuke - Deletes and recreates a channel, clearing all its messages
#### !prefix <new-prefix> - Changes the bot's prefix in the server
#### !setlogs <#channel> - Sets a channel for logging bot actions
#### !setdays <number> - Defines the minimum account age (in days) required to join the server
#### !setwelcome <#channel> - Assigns a channel for welcome messages
#### !setleave <#channel> - Assigns a channel for leave messages
#### !removewelcome - Removes the welcome channel
#### !removeleave - Removes the leave channel
#### !toggle - Toggles the alt detection system on or off
#### !settings - Displays the current configuration settings
#### !reset - Resets all configuration settings to default values

### Alt Detection Commands

#### !bypass <@user> - Allows a specific user to bypass account restrictions
#### !unbypass <@user> - Removes a user from the bypass list
#### !bypassed - Shows the list of bypassed users
#### !bannedalts - Displays the list of accounts banned for being alts
#### !showalts <days> - Lists accounts in the server created within the specified number of days
#### !agecheck <@user> - Checks the account creation date of a user

### Utility Commands

#### !nopfp - Lists members without profile pictures
#### !bots - Displays all bots in the server
#### !names <name> - Finds users with a specific username
#### !discrim <#xxxx> - Finds users with a specific discriminator
#### !fetch <user ID> - Fetches user information by ID
#### !snipe - Retrieves the last deleted message in a channel

### Setup Commands

#### !setup - Guides users through the setup process to ensure the bot functions properly

### Configuration and Permissions

#### The bot requires Administrator permissions to operate fully
#### The bot's role must be higher than the roles of the members it moderates
#### Ensure channels for logs, welcomes, and leave messages are properly set for corresponding features

### Key Considerations

#### Account Age Detection: Properly set the !setdays value to enforce account age limits
#### Logging: Use !setlogs to keep track of bot actions and moderation logs

## Contributing

### Fork the repository
### Create a new branch:
```bash
Copygit checkout -b feature/your-feature
```
### Commit your changes:
```bash
Copygit commit -m "Add your feature"
```
### Push to the branch:
```bash
Copygit push origin feature/your-feature
```
### Open a pull request

## License
#### This project is licensed under the MIT License.

## Support
#### For issues or questions, please contact the bot developer on Discord: @Alts Ejecter#2935
