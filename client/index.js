const twit = require('twit')
const request = require('request')

let bot = new twit({
	consumer_key: YmfMdmMVJotxKyJl85DBSRLZm,
	consumer_secret: LFSWBoVT8n8QiCtOCt96cIrhO2FLdTYsPDJQqUg4H10y3qcYPA,
	access_token: 	1694764148-LnNfJyMcHPIOTGh2OMhBd3z5jGx9tHpOJbuT1MO,
	access_token_secret: Rs7LFhreS7kF17I5cI66m2qP7rkvbPpFpyNvJDquhrdEI
})

function tweet(chars){
	console.log(chars)
	bot.post('statuses/update', {status: tweet}, function(err, data, response) {
		console.log(data)
	})
}