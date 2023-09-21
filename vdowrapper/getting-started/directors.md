---
sidebar_position: 3
description: "Events for your director-status and other directors."
---
# Directors

Your director status is managed seperately from guests. However, events for other directors are *similar* to a regular person events.

## Your director status

You can find out your director status soon after the room loads *(typically within a second of the room loading)*. The event `director-status` fires when VDOwrapper finds out your director status.

```js
room.on("director-status", e => {
    console.log("Director Status Event")
    console.log(e) //EX: {directorStatus: true, codirectorStatus: false,
                   //     message: 'You are the director and not a codirector'}
});
```

The event data indicates a few different cases:
- `{directorStatus: true, ...}` indicates whether you are the main-director of the vdo.ninja room.
- `{codirectorStatus: false, ...}` indicates whether you are a codirector director of the vdo.ninja room.
    - You will likely be one or the other, never both
    - If you are **neither**, then someone else is already the main-director *and* the co-director password isn't set or is just incorrect.

## Other directors

As mensioned in the very begining, events related to other directors are similar to a regular person's events. As a person joins a vdo.ninja room, we can't tell initially if they are another director or just a guest.

An **initial joining event** is fired for the person, which can either be a director or a guest. 

```js
// Fired as soon as a new person is joining, no data is added yet nessesarally when this fires
room.on("person-joining", person => {
    console.log("Person joining event!")
    console.log(person) //EXAMPLE would be too long, see person-object docs
})
```

> Data (like if they are a director or not) is populated between when the joining event is called, and when a final 'connected' event is fired, so don't expect all data to be there until after the person is fully connected.

# **TODO: Add the director-connected event when it is added to the library**
