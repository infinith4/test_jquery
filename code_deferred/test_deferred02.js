var d = new $.Deferred();

asyncf(function() {
    console.log('1async');
    d.resolve();
});

d.promise()
.then(function() {
    var d2 = new $.Deferred();

    asyncf(function() {
        console.log('2hoge');
        d2.resolve();
    });

    return d2.promise();
})
.then(function() {
    console.log('3fuga');
});

/**指定した関数を 1 秒後に実行する*/
function asyncf(f) {
    setTimeout(f, 1000);
}

// 1async
// 2hoge
// 3fuga