<template>
	<el-date-picker v-model="value" type="datetime" format="yyyy-MM-dd HH:mm" :placeholder="'请输入'+name" @change="change">
	</el-date-picker>
</template>

<script>
 import {ctx} from '../../global'
  export default {
    name: 'XJJDatetime',
    props: {
      field: {
        type: Object,
        default: ''
      },
      wid:{
      	type: String,
        default: ''
      }
    },
    data(){
    	//alert(this.wid);
    	//alert(this.field.name);
    	return {
    		value:"",
    		name: this.field.name,
    		datalist:[]
    	};
    },
    created:function(){
  	},
    methods: {
    	change(){
    		//alert("c:"+this.value);
    		this.$emit('setValue', {wid:this.wid,value:this.formatDate(this.value)});
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
    }
    }
  };
</script>
