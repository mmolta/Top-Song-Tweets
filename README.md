# Top Songs Twitter Bot

This is going to be a twitter bot that tweets an artists top song in a given country. Tweet the artist name and country - Spoon, Italy - and the bot will output their top song in that country. 

The bot utilizes Spotify's Client Credentials Authentication flow.


## How it Works

Get the right information from a Twitter User: 
* A twitter user sends a message to the bot (format: ArtistName, Country)
* The message is parsed to isolate the Artist and Country
* Artist and Country are formatted and sent to the spotify_api_calls.js file

Get the right information from Spotify:
* Adhering to Spotify's Client Credentials Authentication flow, spotify_api_calls.js makes a request for the given artists top track in the given country
* In the event where the artist or country aren't in Spotify's catalogue, the value of the top track is set to null.
* The top track is exported in an object. 

Tweet it out:
* If the top track is null, the bot will tweet 'Either ArtistName or CountryName aren't in Spotify's catalogue'
* If the top track exists, the bot will tweet 'The current top song by ArtistName in CountryName is SongName'