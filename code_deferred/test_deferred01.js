$(function(){
    var $output_tag = $('#output_01');
    function msg(text){
        $output_tag.append('<li>' + text + '</li>');
    }
    function fn(){
        return 4;
    }
    $.when( { num:1 }, 2, '3', fn() ).done(function(o1, o2, o3, o4){
        msg(o1.num);
        msg(o2);
        msg(o3);
        msg(o4);
    });
});
