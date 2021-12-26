$(document).on('click', '#startButton04', function () {
    console.log("first");

    console.log("second");

    deferredf1("1").done(function(){
        console.log("forth1");
    });

    deferredf1("2").done(function(){
        console.log("forth2");
    });

    console.log("fifth");
});

var deferredf1 = function(index){
    var dfd = $.Deferred();
    asynctimeoutf(function(){
        console.log(index);
        dfd.resolve();
    }, 2000);
    return dfd.promise();
}

var asynctimeoutf = function(f, millisec=1000) {
    setTimeout(f, millisec);
}