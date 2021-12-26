$(document).on('click', '#startButton05', function () {
    console.log("first");

    console.log("second");
    finish_deferreds();
    // $.when(deferredf1_05("1"), deferredf1_05("2"), deferredf1_05("3"), deferredf1_05("4")).then(function(){
    //    console.log("done");
    // });
    console.log("fifth");
});

var deferredf1_05 = function(index){
    var dfd = $.Deferred();
    var timeout_millisec = index * 1000;
    asynctimeoutf_05(function(){
        console.log('third:' + index.toString());
        dfd.resolve();
    }, timeout_millisec);
    return dfd.promise();
}

var asynctimeoutf_05 = function(f, millisec=1000) {
    setTimeout(f, millisec);
}

//http://jsfiddle.net/YNGcm/21/
var get_deferredf1_05_array = function(){
    var deferreds = [];
    var num_array = [1,2,3,4,5,6,7,8,9,10];
    var deferredf1_05_func_array = num_array.map(function(index){
        return deferredf1_05(index);
    });

    return deferredf1_05_func_array;
}

var finish_deferreds = function(){
    var deferreds_array = get_deferredf1_05_array();

    $.when.apply(null, deferreds_array).done(function(){
        console.log("all done!");
    });
}