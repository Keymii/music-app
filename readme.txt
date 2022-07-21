This is a reactjs project made in the year 2022. It is a song player that plays songs made available to it as a local resource.
Currently, there are 4 mp3 files used.

To run this app:

first run 'npm install' command on terminal in the same directory(I'll call it '.' from now on) as of the whole repository to download all the dependencies as the 'node_modules' folder.
secondly, run 'npm start' to build the react application.

To add more songs to the player:

go to ./public/music folder and drop the mp3 file.
go to ./public/image and drop its thumbnail image (preferably a square image).
go to ./src/App.js , open it, and add your song's 'title'(song name), 'artist'(artist's name), 'img_src' (thumbnail image's address), 'src'(audio file's address) into the array as a new element and save the file.
