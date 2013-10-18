define([
	'jquery',
	'underscore'
], function($,_){
	return {

		formToObject: function(form){
			var _arr = form.serializeArray();
			var _obj = {};
			_.each(_arr, function(item){
				_obj[item.name] = item.value;
			});

			return _obj;
		}

	}
})