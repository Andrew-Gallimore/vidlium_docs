---
sidebar_position: 0
---

# Security and Lifesycle

How vidlium handles the lifesycle of streams, and why creating a stream as a director is important for security.


## TLDR:

Simply put, vidlium streams can operate in their most basic forms *without* needing directors to have 'created' a stream or to have the directors-page open actively while guests are chatting. Guests videos can still be picked up by OBS, guests can still see each other in their room, and custom groups (via url params) can still work to a limited extent*.

**Groups in this state are insecure and anyone could change their URL to put them in what ever groups they want*

You do, however, most importantly loose the security of room ID's and other data as well as many tools. Furthermore, due to not having central director(s) for state, you loose functionality of being able to traverse rooms as guests, the ability to have custom room layouts and designs, and the ability to filter/manage names and chat messages.


:::note

Assuming the stream was created and director-pages were active while guests were joining, directors can disconnect breifely without many issues.

The current state of things for a guest -- like current room and custom group assignments -- is stable when all directors are disconnected. Therfore if a director disconnects breifly it won't break a guest's current experience as they will be simply stuck with the most recent state the director left them at. Services like the ability to filter names and chat messages as well as joing via Secure-join-links will be turned off, however. After a director reconnects with a directors page, the services will resume.

:::


## Why it's weird

Vidlium works in a complex way where it can still transport video from guest to OBS without any directors pages needing to be open. But at the same time it requires directors to have their director pages open for services like joining via secure links to work.

For example in the software, when you send join links to people you can either send a "Secure Join Link" or a regular "Room Join Link". Secure join links don't share any data about any room ID's or other sensitive data until the person is validated by directors. The validation requires at least one director to have created the stream and to have the directors-page open. Regular join links, on the other hand, don't secure any data and so can let a guest join a room without needing a stream open.

If you wanted to just give people regular join links for **one** room, you don't technically need a directors-page open to manage security. You could still access their feeds in OBS, because that also doesn't need security. And although slightly insecure, you can still set custom group assignments via URL parameters in the guest's join links to use groups.

## Vidlium lifesycles

As described above, some basic functions of vidlium work without even needing to 'create' a stream. 

**Without a stream attached, vidlium rooms are based on everyone having a link with the same room ID in it.** Therfore the lifesycle of vidlium rooms are infinate. They are instantiated anytime someone joins them, and are deconstructed when everyone has left them. Even if the room was initially created under a stream, if the stream is deconstructed the room will still survive as long as there are people in it.

Vidlium streams, on the other hand, are instantiated when a director generates one. Then it survives as long as at least **one** director has the directors page open with the unique stream ID. Once all the directors close the page, the stream is deconstructed. To reinstantiate the stream, a director only needs to reopen the directors-page with the unique stream ID. However, unless the stream config was stored locally in the browser either automatically or manually, it would have to be manually created again. If the stream was stored in the browser, the stream URL could simply be reopened and the stream would be reinstantiated with the previous configuration as if it wasn't deconstructed.

### The importance of lifesycles

Notibly, this difference between the lifesycles of streams and rooms allows for problems to occure and the show will still go on. For example, if a stream is created and the configuration is stored in the browser by one director directing the stream, and people have already joined the stream and are in their respective rooms. The director could axedentally close the tab or loose internet connection and the rooms would still be working even though the stream is technically decomposed. Services like Secure-join-links and filtering of names and chat won't work while the stream is decomposed, but if the director reconnects or reopens the page, the stream would be reintantiaed and resume its normal operations.