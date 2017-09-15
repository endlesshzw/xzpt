<template>
	<div align="center" >
		<div class="sharefile uploadfile">
		    <div  id="show"></div>
		    <div class="divext">
		        <div style="width: 99%;border: 1px solid #ccc;" id="dir_tree" class="tree"></div>
		        <div id="i_stream_total_msg" class="stream-total-msg" style="color:red;">
		        </div>
		    </div>
		    <div class="div6">
		    	<div class="div61" id="i_select_files" style="cursor:pointer;">添加文件</div>
		    	<div style="float: left;padding:0.25em; ">
		            <span>最大(2G/个)</span>
		        </div>
		    </div>
		    <div class="div7"  id="i_stream_dropzone_bg" style="margin-top:5px;">
			    <div class="pure-g content"  id="i_stream_dropzone" style="margin-top:-2px;">
				    <div class="pure-u-1" style="height:100%;">
				    
				    	<div class="pure-u-1" style="clear:both;margin-top: 0.5em;margin-bottom: 0.5em;height:220px;overflow-y:auto;z-index:99;">
					        <div class="pure-g" id="upload_container"></div>
					        <div class="div7" id="detail_try">
					        	<p class="p1">试试将电脑里的文件拖拽到此上传</p>
					            <p class="p2">（您的浏览器支持此拖拽功能）</p>
					        </div>
					    </div>
					</div>
				</div>
			</div>
			<div align="center" style="position: relative;padding: 0 0 10px 0;">
			    <div id="eableBtn">
				    <input id="save" type="button" class="k-button width60" value="提交 " />
				    <input id="cancel" type="button" class="k-button width60" value="取 消" />
			    </div>
			    <div id="disableBtn" style="display: none;">
			        <input style="color: #929292 !important; background: #ccc !important;" type="button" class="k-button width170" value="正在提交... " />
				    <input style="color: #929292 !important; background: #ccc !important;" type="button" class="k-button width60" value="取 消" />
			   </div>
			    <!--  <div class="help-tip">
					<p style="line-height: 26px;font-size: 17px;">请将作品压缩成zip文件进行上传，上传作品文件名格式要求作品名称_作者_选送单位.zip;如："<span style="color:red;">对准时政会议报道_张杰_海南日报社.zip</span>"</p>
			    </div> -->
			</div>
		</div>
	</div>
</template>

<script>
	require('../assets/jquery.min.js')
	require('../assets/upload/js/stream-v2.js')
	require('../assets/upload.js')
</script>

<style>
</style>