# discord-kommando.js-plugins
Welcome to the discord-kommando.js-plugins docs!

This module will help you to make [discord-kommando.js](https://github.com/Team-ThinkCord/discord-kommando.js) plugins!

## Classes
### Main
```js
require('discord-kommando.js-plugins');
```

#### Properties
##### perms
type: PluginPerms

Plugin permissions.

### plugin
```js
new <plugins>.plugin(permissions);
```

#### Properties
##### name
type: string

Name of this plugin

##### perms
type: string[]

Plugin permissions

#### Events
##### messageCreate

| Parameter | Type |

| --------- | ---- |

| message   | [Discord.Message](https://discord.js.org/#/docs/main/stable/class/Message) |

## Types
### PluginPerms
```json
{
    "ALL": [],
    "PERMS": {
        "GET_MESSAGES": "msg"
    }
}
```
