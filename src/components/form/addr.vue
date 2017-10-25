<template>
	
	<el-select  v-model="value" :placeholder="'请输入'+name" @change="change" filterable multiple style="width: 100%;">
				<el-option v-for="item in datalist"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
				</el-select>
				
				
</template>

<script>
 import {ctx} from '../../global'
  export default {
    name: 'XJJAddr',
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
	  	//初始化
	  	this.getDataList();
  	},
    methods: {
    	change(){
    		//alert("c:"+this.value);
    		var value = this.value;
    		var obj  = new Array();
	    	if(value!=null){
	    		var vs = value.toString().split(",");
	    		for(var i=0;i<vs.length;i++){
	    			var uid = vs[i];
	    			if(uid!=null && uid.length>0){
	    				for(var j=0;j<this.datalist.length;j++){
	    					if(this.datalist[j].id === uid){
	    						var uobj = new Object();
	    						uobj.id=uid;
	    						uobj.name = this.datalist[j].name;
	    						obj.push(uobj);
	    					}
	    				}
	    				
	    			}
	    		}
	    	}
    		this.$emit('setValue', {wid:this.wid,value:obj});
    	},
	    getDataList(){
	    	
    		this.$http.post( ctx + "/api/connuser/getUsers")
		  	  	.then(res=>{
		  	  		var data  = res.body.resultData;
		  	  		if(data.length>0){
		  	  			this.datalist = data;
		  	  		}
		  	  		
		  	  	},res=>{
		  	  		alert("获取用户失败")
		  	  	})
    	
    
	    }
    }
  };
</script>
