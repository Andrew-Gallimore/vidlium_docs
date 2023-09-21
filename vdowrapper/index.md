---
sidebar_position: 1
---
# VDOwrapper.js
📖 A clean event-driven library built around VDO.ninja.

> Note: This library is built for Vidlium software, however is designed to be multipurpose for other developers to use in other cases.

## What is it?
This library 'wraps' around [VDO.ninja's](https://vdo.ninja) iframe API. VDO.ninja generates low-latency p2p video chat rooms which -- via iframe messages -- can be interacted with by 3rd party websites like Vidlium. Although powerful in utility, the API can be complex and so a middle layer with persistent room/guest objects and register-able events can help developers by storing, managing, and sequencing data.

## Quick Example

This example creates a new VDO.ninja room, then when a guest joins the room, adds them to a scene.
```js
// Making vdo.ninja room
var room = new vdo.Room("roomID1234");
room.register();

// Event is fired after all the information is gathered for a guest
room.on("person-connected", person => {
	// Guest connected
	console.log(person)
	person.addToScene("sceneName");
})
```

## Features

- Multiple rooms can be opened at once
- Iframes are created and managed automatically
- Rooms & people both have objects that track data and events
- There's events for updates to data & states
- Fallback for person video element generation.
- Library collates a persons data before calling `connected` event