Alts Eliminator Bot

Overview

The Alts Eliminator Bot is a customizable Discord bot designed to help server administrators prevent alternate accounts ("alts") from joining their servers. By enforcing age restrictions on accounts and offering advanced moderation features, the bot ensures that only trusted members can access the community.

Features

Alt Account Detection: Automatically identifies and removes accounts that are too new.

Customizable Actions: Supports actions such as kick or ban for detected accounts.

Logging: Logs all actions in a specified channel for transparency.

Command Customization: Allows administrators to tailor bot settings to fit their server's needs.

Toggleable Functionality: Easily enable or disable the bot's features as required.

Getting Started

Prerequisites

Node.js (version 16.x or higher)

A Discord bot token

Administrative permissions in the server

Installation

Clone this repository to your local machine.

git clone <repository_url>

Navigate to the project directory.

cd alts-eliminator

Install dependencies.

npm install

Set up your .env file with your bot token.

TOKEN=your_discord_bot_token

Run the bot.

node index.js

Commands

General Commands

!toggle: Toggles the bot's functionality on or off.

!reset: Resets all settings to default values.

Moderation Commands

!setaction [kick|ban]: Specifies the action to take when an alt account is detected.

!setdays [number]: Sets the minimum account age (in days) required to join the server.

!setlog [channel]: Sets the channel for logging bot actions.

!deletelog: Removes the current logging channel.

Informational Commands

!bannedalts: Displays a list of users who have been banned by the bot.

Key Considerations

Ensure the bot's role is higher than the roles it needs to moderate.

Grant the bot Administrator permissions for seamless functionality.

Contributing

Fork the repository.

Create a new branch.

git checkout -b feature/your-feature

Commit your changes.

git commit -m "Add your feature"

Push to the branch.

git push origin feature/your-feature

Open a pull request.

License

This project is licensed under the MIT License.

Support

For any issues or questions, please contact the bot developer on Discord: @Alts Ejecter#2935.

