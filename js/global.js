define([
	'helpers',
	'backbone'
], function(helpers, Backbone){

	Date.prototype.toFormat = function(format){
		return helpers.date(format, this.getTime() / 1000);
	}



	//=== Backbone methods

	Backbone.History.prototype._loadUrl = Backbone.History.prototype.loadUrl;

	Backbone.History.prototype.loadUrl = function(fragments){
		if(window.currentView && window.currentView.closePage) window.currentView.closePage(fragments);
		window.currentView = undefined;
		this._loadUrl(fragments);
	}

});