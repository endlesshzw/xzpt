/**
     * 配置文件（如果没有默认字样，说明默认值就是注释下的值）
     * 但是，on*（onSelect， onMaxSizeExceed...）等函数的默认行为
     * 是在ID为i_stream_message_container的页面元素中写日志
     */
var config = {
    customered: true,
    multipleFiles: true,
    browseFileId: "i_select_files",
    dragAndDropArea: "i_stream_dropzone",
    dragAndDropTips:" ",
    maxSize: 2*1024*1024*1024,
    onMaxSizeExceed: function (file) {
    	ZAlert.Msg.warn(file.name+"已超过大小限制");
    },
    onFileCountExceed: function (selected, limit) {
    	ZAlert.Msg.warn("同时最多上传"+limit+"个文件");
    },
    onExtNameMismatch: function (info) {
    	ZAlert.Msg.warn(info.name+"文件类型不匹配"+info.filters.toString());
    },
    onAddTask: function (file) {
    	$("#detail_try").hide();
        var icon_str = _t.getFaIcon(file.name);
        var buttons_str_process = '<a href="javascript:_t.cancelOne(\'' + file.id + '\')" class="pure-link">删除</a>';
        var _file =
                '<div class="pure-u-1-3  G0" id="' + file.id + '" style="width:98%;">' +
                '  <i class="fa ' + icon_str + '  fa-2x" style="float:left;"></i>' +
                '  <div class="o0" title="' + file.name + '" style="text-align:left;">' + file.name + '</div>' +
                '  <div class="stream-buttons">' + buttons_str_process + '</div>' +
                '  <div class="j0">' +
                '     <div class="stream-process">' +
                '       <span class="stream-process-bar"><span style="width:0%;"></span></span>' +
                '       <span class="stream-progress-text">文件大小:' + file.formatSize + ', 等待上传</span>' +
                '    </div>' +
                '  </div>' +
//                 '  <div class="stream-process-tip" style="display:none;height:auto;">' + file.name + 
//                	'<br>文件大小:' + file.formatSize + '<span>, 等待上传</span></div>' +
                '</div>';

        $("#upload_container").append(_file);
        $("#" + file.id).hover(
                function () {
                    $(this).find(".stream-process-tip").show();
                },
                function () {
                    $(this).find(".stream-process-tip").hide();
                }
        );
    },
    onUploadProgress: function (file) {
    	$("#detail_try").hide();
        var $file = $("#" + file.id);
        var $bar = $file.find("div .stream-process-bar > span");
        var $bar_text = $file.find(".stream-progress-text");
        var $bar_tip_span = $file.find(".stream-process-tip > span");
        var _width = $file.find("div .stream-process-bar").width()  * parseInt(file.percent) /100 ;//IE7不能用%显示进度
        $bar[0].style.width= _width+ "px";
        $bar_text.html(file.percent + '%' + ',\u5269\u4f59\u65f6\u95f4' + file.formatTimeLeft + ",上传速度:" + file.formatSpeed);
        //$bar_tip_span.html(", 已上传" + file.formatLoaded + ", 上传速度:" + file.formatSpeed);
        var $total = $("#i_stream_total_msg");
        $total.text("(" + file.totalPercent + "% 已上传" + file.formatTotalLoaded + ",总文件大小" + file.formatTotalSize + ")");
        
        shwoDropzone();
    },
    onCancel: function (file) {
        $("#" + file.id).remove();
        var $total = $("#i_stream_total_msg");
        if (file.totalSize > 0) {
            $total.text("(" + file.totalPercent + "%,已上传" + file.formatTotalLoaded + ",总文件大小" + file.formatTotalSize + ")");
        } else {
            $total.text("");
            $("#detail_try").show();
        }
    },
    onComplete: function (file) {
    	$("#detail_try").hide();
        var $file = $("#" + file.id);
        var $bar = $file.find("div .stream-process-bar > span");
        var $bar_text = $file.find(".stream-progress-text");
        var $bar_tip = $("#" + file.id).find(".stream-process-tip");
        $file.unbind('mouseenter mouseleave');
        $bar.css("width", file.percent + "%");
        $bar_tip.hide();
        $file.find("div .stream-process-bar").hide('fast', function () {
            $bar_text.html(file.formatLoaded + ' <span class="pure-txt-success">上传完成</span>');
        });

        var $buttons = $("#" + file.id).find(".stream-buttons");
        var buttons_str_success = '<a href="javascript:_t.download(\'' + file.token + '\',\'' + file.name + '\')" class="pure-link">下载</a>|<a href="javascript:_t.removeFile(\'' + file.id + '\',\'' + file.token + '\')" class="pure-link">删除</a>';
        $buttons.html(buttons_str_success);

        var $total = $("#i_stream_total_msg");
        $total.text("(" + file.totalPercent + "%, 已上传" + file.formatTotalLoaded + ", 总文件大小" + file.formatTotalSize + ")");
        
        shwoDropzone();
    },
    onUploadError: function (status, msg) {
    	$("#detail_try").hide();
        var ob = document.getElementById("i_stream_error_msg")
        if(ob) document.getElementById("i_stream_error_msg").style.display = "block";
        
        shwoDropzone();
    }

};
var _t = new Stream(config);
$('.pure-form-rimless input[type="text"],' +
        '.pure-form-rimless input[type="password"],' +
        ' .pure-form-rimless input[type="email"],' +
        ' .pure-form-rimless input[type="url"],' +
        ' .pure-form-rimless input[type="date"],' +
        ' .pure-form-rimless input[type="month"],' +
        ' .pure-form-rimless input[type="time"],' +
        ' .pure-form-rimless input[type="datetime"],' +
        ' .pure-form-rimless input[type="datetime-local"],' +
        ' .pure-form-rimless input[type="week"],' +
        ' .pure-form-rimless input[type="number"],' +
        ' .pure-form-rimless input[type="search"],' +
        ' .pure-form-rimless input[type="tel"],' +
        ' .pure-form-rimless input[type="color"],' +
        ' .pure-form-rimless select,' +
        ' .pure-form-rimless textarea').focus(function () {
    $(this.parentNode).css("border-color", "#0078E7");
}).blur(function () {
    $(this.parentNode).css("border-color", "#ccc");
})

function shwoDropzone() {
    $("#i_stream_dropzone_bg").show();
}
function hideDropzone() {
    $("#i_stream_dropzone_bg").hide()
}
function getTokens(){
    if(_t.isCompleted()){
    	ZAlert.Msg.info("已上传的附件ID:["+_t.getTokens()+"]");
    }else{
    	ZAlert.Msg.warn("还有文件未上传完，请耐心等待");
    }
}
function getDeletedTokens(){
	ZAlert.Msg.info("已删除的附件ID:["+_t.getDeletedTokens()+"]");
}