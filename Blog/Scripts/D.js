
var D = (function() {

	var handlers = {};
	var token = 0;

	return {

		publish: function(key, data) {
			if (handlers[key] !== undefined)
				for (var handlerToken in handlers[key])
					handlers[key][handlerToken](data);
		},

		subscribe: function(key, callback) {

			if (handlers[key] === undefined)
				handlers[key] = {};

			var thisToken = token++;
			handlers[key][thisToken] = callback;
			return thisToken;
		},

		unsubscribe: function(key, token) {
			if (handlers[key] !== undefined)
				delete handlers[key][token];
		}
	};
})();