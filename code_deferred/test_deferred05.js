$(document).on('click', '#startButton05', function () {
    console.log("first");

    console.log("second");
    finish_deferreds();
    // $.when(deferredf1_05("1"), deferredf1_05("2"), deferredf1_05("3"), deferredf1_05("4")).then(function(){
    //    console.log("done");
    // });
    console.log("fifth");
});

var deferredf1_05 = function(task_name, index){
    var dfd = $.Deferred();
    var timeout_millisec = index * 1000;
    asynctimeoutf_05(function(){
        console.log(task_name + index.toString());
        dfd.resolve();
    }, timeout_millisec);
    return dfd.promise();
}

var asynctimeoutf_05 = function(f, millisec=1000) {
    setTimeout(f, millisec);
}

//http://jsfiddle.net/YNGcm/21/
var get_deferredf1_05_array = function(task_name, maxCount){
    var num_array = [...Array(maxCount).keys()].map(i => ++i);
    var deferredf1_05_func_array = num_array.map(function(index){
        return deferredf1_05(task_name, index);
    });

    return deferredf1_05_func_array;
}

var finish_deferreds = function(){
    get_deferredf1_05_array("firsttask", 7);
    var deferreds_array02 = get_deferredf1_05_array("secondtask", 9);

    $.when.apply(null, deferreds_array02).done(function(){
        console.log("all done!");
    });
}