<template  >
	<div style="width: 100%;" v-loading="uploading" :element-loading-text="'拼命上传中...'+uploadMsg+'%'">
	<el-upload
	 :before-upload="beforUpload"
	  :action="uploadUrl"
	  :on-success="onSuccess"
	  :on-progress="onProgress"
	  :show-file-list="false">
	   <el-button size="small" type="primary" >点击上传</el-button>
	</el-upload>

	<ul class="el-upload-list el-upload-list--text" v-for="(file, index) in files" v-if="!isImg(file)">
		<li class="el-upload-list__item is-success">
			
		<a class="el-upload-list__item-name">
			<i class="el-icon-document"></i><a :href="file.url">{{file.name}}</a> &nbsp;({{file.uploader}}&nbsp;&nbsp;{{file.uploadDate}})
		</a>
		<label class="el-upload-list__item-status-label">
		    	<i class="el-icon-upload-success el-icon-circle-check"></i>
		</label>
		 <i class="el-icon-close" @click="handleRemove(file)"></i>
		</li>
	</ul>

	<!--<div class="line"></div>-->
	
	<p style="height: 10px;border-top: 1px solid darkgray;"></p>
 
	<ul tag="ul" class="el-upload-list el-upload-list--picture-card" name="el-list" >
		
    <li v-for="(file, index) in files"
      style="float:left;padding: 5px; "
      :key="index" v-if="isImg(file)">
      <div  class="el-upload-list__item is-success">
      <img class="el-upload-list__item-thumbnail" :src="file.url"  :alt="file.name">
      <a class="el-upload-list__item-name" @click="handleClick(file)">
        <i class="el-icon-document"></i>
      </a>
      <label class="el-upload-list__item-status-label">
        <i class="el-icon-check"></i>
      </label>
      <i class="el-icon-close"  @click="$emit('remove', file)"></i>
      
      <span class="el-upload-list__item-actions">
        <span v-if="isImg(file)"
          class="el-upload-list__item-preview"
          @click="handlePreview(file)">
          <i class="el-icon-picture" ></i>
        </span>
        <span v-else=""
          class="el-upload-list__item-preview">
          <a :v-link="file.url"><i class="el-icon-upload2" ></i></a>
        </span>
        <span
          class="el-upload-list__item-delete"
          @click="handleRemove( file)">
          <i class="el-icon-delete2"></i>
        </span>
      </span>
      </div>
      <div style="font-size: 12px;color: #40C199;">({{file.uploader}}&nbsp;&nbsp;{{file.uploadDate}})</div>
    </li>
  </ul>
	<!--  
 <el-row>
	  <el-col :span="1" v-for="(o, index) in files" :key="o" >
	    <el-card :body-style="{ padding: '0px' ,width: '100px'}">
	      <img :src="o.url" class="image" >
	      <div style="padding: 14px;">
	        <span>{{o.name}}</span>
	        <div class="bottom clearfix">
	          <time class="time">{{ o.percentage }}%</time>
	          <el-button type="text" class="button">删除</el-button>
	        </div>
	      </div>
	    </el-card>
	  </el-col>
	</el-row>-->
<el-dialog v-model="dialogVisible" size="large">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
</div>
</template >


<script>
	import {ctx} from '../global'
	
  export default {
  	name: 'XJJAtt',
    props: {
      infoId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
      	uploadUrl : ctx+'/eleUpload',
        dialogImageUrl: "",
        dialogVisible: false,
        files : [],
        uploading:false,
        uploadMsg :""
      };
    },
    created:function(){
    	if(this.infoId!=null && this.infoId!=""){//
    		//alert("init");
	  		this.initFiles();
	  	}
  	},
    methods: {
    	initFiles(){
    		this.$http.post(ctx +"/api/connuser/listAtt?projectId=" + this.infoId).then(res=>{
					let arr =[];
					let datas = res['body']['data'];
					//alert(JSON.stringify(datas));
					for(let i = 0; i<datas.length;i++){
						var d = new Date(datas[i].createddate);
						let obj = {
							name :datas[i].filename,
							url : ctx + datas[i].downloadUrl,
							token : datas[i].token,
							projectid : datas[i].projectid,
							module: datas[i].module,
							downloadUrl: ctx + datas[i].downloadUrl,
							uploader:datas[i].uploadorname,
							uploadDate:this.formatDate(d)
						};
						//alert(JSON.stringify(obj));
						arr.push(obj);
					}
					this.files = arr;
					}, res=>{})
    	},
    	beforUpload(file){
    		//this.uploading = true;
      		//this.uploadMsg = 0;
     },
      handleRemove(file) {
      	if(this.infoId!=null && this.infoId!=""){
	      	 this.$confirm('此操作将永久删除该文件, 是否继续?', '删除附件提示', {
	          confirmButtonText: '确定删除',
	          cancelButtonText: '取消删除',
	          type: 'warning'
	        }).then(() => {
	        	
	        	var token_=file.token;
		      	this.$http.post(ctx + "/api/connuser/deleteAtt?module=cconnect&token=" + token_ +"&projectId=" + this.infoId).then(res=>{
							this.$message({
					            type: 'success',
					            message: '删除成功!'
					          });
							this.initFiles();
				}, res=>{});
	        	
	          
	        }).catch(() => {
	                   
	        });
      	}else{
      		var newFiles = new Array();
      		//alert(JSON.stringify(this.files));
      		for(var i=0;i<this.files.length;i++){
      			if(file.response.token != this.files[i].response.token){
      				newFiles.push(this.files[i]);
      			}
      		}
      		this.files = newFiles;
      		this.setValue(this.files);
      	}
      },
      handlePreview(file) {
      	if(this.isImg(file)){
      		this.dialogImageUrl = file.url;
        	this.dialogVisible = true;
      	}
      },
      onProgress(e,file,fileList){//进度提示
      	this.uploading = true;
      	this.uploadMsg = this.parsePercentage(file.percentage);
      },
      onSuccess(response,file,fileList){
      	this.uploadMsg =100;
      	this.uploading = false;
      	var token_= file.response.token;
      	file.token = token_;
      	//alert(JSON.stringify(file));
      	if(this.infoId!=null && this.infoId!=""){//信息ID存在则直接保存附件关联
      		this.$http.post(ctx + "/api/connuser/saveAtt?token=" + token_ +"&projectId=" + this.infoId).then(res=>{
					this.initFiles();
		}, res=>{});
      	}else{//创建新信息时信息ID为空则保存附件上传TOKEN
      		this.files.push(file);
      		this.setValue(this.files);
      	}
      },
      handleClick(file) {
       this.handlePreview(file);
      },
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      isImg(file){
      	var imgSuffix = new Array();
      	imgSuffix.push("jpg");
      	imgSuffix.push("bmp");
      	imgSuffix.push("jpeg");
      	imgSuffix.push("png");
      	imgSuffix.push("gif");
      	imgSuffix.push("ico");
      	
      	var name = file.name;
      	var index1=name.lastIndexOf(".");
		var index2=name.length;
		var suffix=name.substring(index1+1,index2).toLowerCase();//后缀名 //转换小写
		//alert(suffix);
		for (var i in imgSuffix) {
		    if (imgSuffix[i] == suffix) return true;
		}

      	return false;
      },
      setValue(files){
      	var tokens = new Array();
      	for(var i=0;i<this.files.length;i++){
      			tokens.push(this.files[i].response.token);
      		}
      	this.$emit('setValue', tokens);
      },
	    formatDate(value){
    	var fmt = "yyyy-MM-dd hh:mm";
	     var o = { 
	        "M+" : value.getMonth()+1,                 //月份 
	        "d+" : value.getDate(),                    //日 
	        "h+" : value.getHours(),                   //小时 
	        "m+" : value.getMinutes(),                 //分 
	        "s+" : value.getSeconds(),                 //秒 
	        "q+" : Math.floor((value.getMonth()+3)/3), //季度 
	        "S"  : value.getMilliseconds()             //毫秒 
	    }; 
	    if(/(y+)/.test(fmt)) {
	            fmt=fmt.replace(RegExp.$1, (value.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	    }
	     for(var k in o) {
	        if(new RegExp("("+ k +")").test(fmt)){
	             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	         }
	     }
    	//alert(fmt);
    	return fmt;
    },
      upload(id){
      	//alert("update"+id);
      	var tokens = new Array();
      	if(this.infoId!=null && this.infoId!=""){
      		for(var i=0;i<this.files.length;i++){
	      		var token_ = this.files[i].response.token;
	      		tokens.push(token_);
	      	}
      		this.infoId = id;
      		this.initFiles();
      		for(var i=0;i<tokens.length;i++){
      			this.$http.post(ctx + "/api/connuser/saveAtt?token=" + token_ +"&projectId=" + id).then(res=>{
		      				//this.infoId = id;
							this.initFiles();
							//alert(token_);
				}, res=>{});
      		}
      		
      	}
      		
      }
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
