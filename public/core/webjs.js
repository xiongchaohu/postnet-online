/**
 * Created by hxc on 16-8-8.
 */
$(function () {
    function postRequest(input) {
        $('#error').html('');
        let radio = $("input[name='transformer']:checked");
        $.post(`http://localhost:3000/${radio.val()}`, {cmd: input.val()})
            .done(function (data) {
                if (data.error === '') {
                    $('#result').html('Result');
                    $('#data').html(data.data);
                    var tr = $(`<tr><td>${$("#inputCode").val()}</td><td>${$('#data').html()}</td></tr>`);
                    tr.prependTo($('tbody'));
                }
                else {
                    $('#transformResult').hide();
                    $('#error').html(data.error);
                }
            })
            .fail(function () {
                alert("服务器未响应请刷新重试");
            });
    }

    $('#inputCode').focus(function () {
        $('#transformResult').hide();
        $('#error').hide();
    });

    /*function history(done) {
        postRequest($("#inputCode"));
        setTimeout(function () {
            if ($('tr').length > 10) {
                $('tr:last').remove();
            }
            if ($('#error').html() === '') {
                var tr = $(`<tr><td>${$("#inputCode").val()}</td><td>${$('#data').html()}</td></tr>`);
                tr.prependTo($('tbody'));
            }

        }, 100);

    }*/

    $('button').click(function () {
        $('#transformResult').show();
        $('#error').show();
        //history();
        postRequest($("#inputCode"));
    });

});