$(document).on('click', '#startButton05', function () {
    console.log("first");

    console.log("second");

    deferrdf1_05("1").done(function(){
        console.log("forth1");
    });

    deferrdf1_05("2").done(function(){
        console.log("forth2");
    });

    console.log("fifth");
});

var deferrdf1_05 = function(index){
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