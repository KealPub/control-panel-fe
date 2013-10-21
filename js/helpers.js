define([
	'jquery',
	'underscore',
	'resource/ext/md5',
	'resource/ext/utf8_encode',
	'resource/ext/date'
], function($,_, md5, utf8_encode, date){
	return {

		formToObject: function(form){
			var _arr = form.serializeArray();
			var _obj = {};
			_.each(_arr, function(item){
				_obj[item.name] = item.value;
			});

			return _obj;
		},

		md5: md5,

		utf8_encode: utf8_encode,

		date: date

	}
})