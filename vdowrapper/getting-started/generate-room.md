---
sidebar_position: 1
description: "Getting started and generating your first room."
---

# Generating a room

:::info
The name `vdo` is the global object containing the whole library. You should only need to reference it when making a new room.
:::


## Setting up

To import the library into your page, you need to download the library [here](https://example.com), and then link to it in your HTML.

```html title="index.html"
<script src="vdowrapper.js"></script>
```

You might also want to add CSS to hide any background iframes created by the library. *(the class `.vdon` is important, as some iframes without it are intended to be visible)*

```css title="index.css"
iframe.vdon {
    display: none;
}
```


## Loading a room

Loading a room is very simple. **It takes two steps:**

1. **Making the object**
```js
// FORMAT: new vdo.Room(roomID, options);
var room = new vdo.Room("roomID1234", {password: "roomPSW1234"});
```
- `roomID` is the "room name" in vdo.ninja.
- `options` is an *object* that can contain optional configuration for the room. Options can contain:
    - `password: ""` which will be the password used by guests in the vdo.ninja room.
    - `codirectorPassword: ""` which will be the password used by directors to be classified as a 'codirector' in the vdo.ninja room. Adding this option automatically opens up the room to allow codirectors.

2. **Registering the room (AKA opening the iframe for it)**
```js
room.register()
.then(data => {
    // Success
    console.log(data) //EX: {loadStatus: true, message: 'Successfully loaded vdo.ninja iframe.'}
}).catch(err => {
    // Error
    console.warn(err)
})
```

Registering a room can result in different messages for different cases:

- `.then(data...)` can result in *either* a **successful** load or a **failure** loading. If it responds `{loadStatus: true, ...}`, the iframe and its API is up and running! If you get `{loadStatus: false, ...}`, typically the iframe timed out and didn't responce or load.
- `.catch(err...)` catches any other errors that are unplanned or otherwise out of the norm.

## Full Example:
```js
// Making vdo.ninja room
var room = new vdo.Room("OhHello", {password: "OnBroadway"});
room.register();

// ...you can further add any event listeners and so on from here on
```