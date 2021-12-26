$(document).on('click', '#startButton05', function () {
    console.log("first");

    console.log("second");
    finish_deferreds();
    console.log("fifth");
});

var deferredf1_05 = function(index){
    var dfd = $.Deferred();
    asynctimeoutf(function(){
        console.log('third' + index);
        dfd.resolve();
    }, 2000);
    return dfd.promise();
}

var asynctimeoutf_05 = function(f, millisec=1000) {
    setTimeout(f, millisec);
}

//http://jsfiddle.net/YNGcm/21/
var get_deferredf1_05_array = function(){
    var deferreds = [];
    for(var i=0; i<10; i++){
        deferreds.push(
            deferredf1_05(i.toString())
        )
    }
}

var finish_deferreds = function(){
    var deferreds_array = get_deferredf1_05_array();

    $.when.apply($, deferreds_array).then(function(){
        console.log("all done!");
    });
}