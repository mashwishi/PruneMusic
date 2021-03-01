<div align="center">
  <img src="https://i.imgur.com/t0l86xY.png" width="25%"/>
  <h1>Prune Music </h1>


  <h4>Created by Mashwishi | Powered by <a href="https://discord.js.org/">Discord.js</a></h4>
  
  <h6>Fellow Developers that guide me doing this from Discord Server Community of <a href="https://discord.gg/discord-api">Discord API</a>.
<br><br>

  [![support][support-image]][support-invite] &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://i.imgur.com/w9R5l1T.png" width="27%"/>
  
 [![Contributors][contributors-shield]][contributors-url]
 [![Forks][forks-shield]][forks-url]
 [![Stargazers][stars-shield]][stars-url]
 [![Issues][issues-shield]][issues-url]
 [![MIT License][license-shield]][license-url]
 <br>

  <strong><a href="http://bit.ly/PruneMusic">INVITE ME TO YOUR SERVER</a></strong>



</div>

---

<h2 align="center">What is this bot?</h2>

PruneBot is a free and open source is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide), Our goal is to cover as many functionalities as possible.


<h3>Table of Contents</h3>

- [Commands](#commands)
- [Media Controls via Reactions](#Media-Controls-via-Reactions)
- [Self-hosting](#self-hosting)
  - [Requirements](#Requirements)
  - [Getting Started](#Getting-Started)
  - [Configuration](#Configuration)
  - [Contributing](#Contributing)
- [Credits](#Credits)  

<h2 align="center">Commands</h2>

<h5>Current Commands | Version 1.0.0</h5>
<p>Note: The default prefix is '+'</p>

Command|Description
-|-
**`+play <url/title>`**|Play music from YouTube/SoundCloud URL or song title
**`+search <title>`**|Search and select music to play
**`+playlist <playlist url>`**|Play youtube playlists via url
**`+np`**|Now Playing
**`+queue, +q`**|Queue system
**`+loop`**|Loop / Repeat
**`+shuffle`**|Shuffle
**`+volume, +v`**|Volume control
**`+lyrics, +ly`**|Lyrics
**`+pause`**|Pause
**`+resume, +r`**|Resume
**`+skip, +s`**|Skip
**`+skipto, +st`**|Skip to song # in queue
**`+move, +mv`**|Move a song in the queue
**`+remove, +rm`**|Remove song # from queue 
**`+clip <your clip>`**|Play an mp3 clip (put the file in sounds folder)
**`+clips`**|List all clips
**`+ping`**|Show api ping 
**`+uptime`**|Show bot uptime
**`+pruning`**|Toggle pruning of bot messages
**`+help, +h`**|View all the commands
> Command Handler from [discordjs.guide](https://discordjs.guide/)

<h2 align="center">Media Controls via Reactions</h2>

![reactions](https://i.imgur.com/La0WeMQ.jpg)

<h2 align="center">Self-hosting</h2>

**We ask you to please not host your own instance of PruneBot.** Even though our license allows it, self-hosted instances of the bot have brought us a lot of headache in the past. If you're considering self-hosting, please [try the official instance of the bot first](https://github.com/mashwishi/PruneBot/#). If you have any concerns about the security of our instance, please contact us. We'd love to talk and answer any questions you have.

> If you're really really really going to self-host the bot, please [read our license](https://github.com/mashwishi/PruneBot/blob/master/LICENSE) first, and be aware that we don't provide any self-hosting support. **You'll be on your own.**

## Requirements

1. Discord Bot Token 
2. YouTube Data API v3 Key  
2.1 **[Optional]** Soundcloud Client ID
3. Node.js v14.0.0 or newer

## Getting Started

If deploying to Heroku make sure to create config variables

```
git clone https://github.com/mashwishi/PruneMusic.git
cd PruneMusic
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## Configuration

Open `config.json` and fill out the values:

**WARNING: Never commit or share your token or api keys publicly** 

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "+",
  "PRUNING": false,
  "LOCALE": "en",
  "DEFAULT_VOLUME": 100,
  "STAY_TIME": 30
}
```
## Contributing

1. [Fork the repository](https://github.com/mashwishi/PruneMusic/fork)
2. Clone your fork: `git clone https://github.com/your-username/PruneMusic.git`
3. Create your feature branch: `git checkout -b new-feature`
4. Commit your changes: `git commit -am 'Add feature'`
5. Push to the branch: `git push origin new-feature`
6. Submit a pull request

## Credits

[@iCrawl](https://github.com/iCrawl) For the queue system used in this application which was adapted from [@iCrawl/discord-music-bot](https://github.com/iCrawl/discord-music-bot)

[support-invite]: https://discord.gg/qpkRST8MMb
[support-image]: https://discordapp.com/api/guilds/815657126705889320/widget.png?style=banner2

[donate-link]: https://www.paypal.me/NCMC
[donate-image]: https://i.imgur.com/R2SxfKG.png

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/mashwishi/PruneBot.svg?style=for-the-badge
[contributors-url]: https://github.com/mashwishi/PruneBot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mashwishi/PruneBot.svg?style=for-the-badge
[forks-url]: https://github.com/mashwishi/PruneBot/network/members
[stars-shield]: https://img.shields.io/github/stars/mashwishi/PruneBot.svg?style=for-the-badge
[stars-url]: https://github.com/mashwishi/PruneBot/stargazers
[issues-shield]: https://img.shields.io/github/issues/mashwishi/PruneBot.svg?style=for-the-badge
[issues-url]: https://github.com/mashwishi/PruneBot/issues
[license-shield]: https://img.shields.io/github/license/mashwishi/PruneBot.svg?style=for-the-badge
[license-url]: https://github.com/mashwishi/PruneBot/blob/master/LICENSE

