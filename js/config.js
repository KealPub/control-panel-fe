/**
 * Created by Evgeniy on 21.10.13.
 */
define([
    'text!../config.json'
], function(config){
    try{
        return JSON.parse(config);
    }
    catch (e)
    {
        console.log(e.getTrace());
        return false;
    }

});
