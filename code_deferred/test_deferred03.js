$(document).on('click', '#startButton', function () {
    console.log("first");

    console.log("second");

    // deferredの宣言
    var defer = $.Deferred();

    setTimeout(function () {
        console.log("third");
        // 宣言したdeferredのresolveを実行
        defer.resolve();
    }, 1000);

    // 宣言したdeferredからpromiseを取得
    var promise = defer.promise();
    promise.then(function() { 
        // deferredのresolveが実行された後に実行したい処理
        console.log("forth");
    });

    console.log("fifth");
});