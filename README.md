# Top Songs Twitter Bot

This is a twitter bot that tweets an artists top song in a given country. Tweet the artist name and country - Spoon, FR - and the bot will respond with their top song in that country. 

The bot utilizes Spotify's Client Credentials Authentication flow.


## How it Works

Get the right information from a Twitter User: 
* A twitter user sends a message to the bot (format: ArtistName - Country)
* The message is parsed to isolate the artist, country and user handle
* Artist and Country are formatted and sent to the spotify_api_calls.js file

Get the right information from Spotify:
* Using Spotify's Client Credentials Authentication flow, spotify_api_calls.js makes a request for the given artists top track in the given country
* The top track, artistName, countryName and user handle are sent to the main file. 

Tweet it out:
* the bot will tweet '@handle, the top song by ArtistName in CountryName is SongName'

## How to use it

* Send a tweet to @top_song_tweets with the format Band Name - CountryCode
* Let me know about it so I can set up the server that powers the bot
* This was made just for fun and to learn more about the Spotify API and Twitter API so it isn't always online.