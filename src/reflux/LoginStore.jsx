var HTTP = require('./HttpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');


var LoginStore = Reflux.createStore({
	listenables: [Actions],
	login: function(user) {
		HTTP.post('/api-token-auth/', user)
		.then(function(response) {
			var msg = "";

			if (response.status == 200) {
				msg = "Login Successful!"
			} else {
				msg = "Login Failed!"
			}
			this.trigger(msg);
		}.bind(this));
	}
});

module.exports = LoginStore;