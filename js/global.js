define([
	'helpers'
], function(helpers){

	Date.prototype.toFormat = function(format){
		return helpers.date(format, this.getTime() / 1000);
	}

});