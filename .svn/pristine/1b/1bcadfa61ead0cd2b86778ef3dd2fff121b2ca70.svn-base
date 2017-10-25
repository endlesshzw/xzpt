<template>
	
	<el-select  v-model="value" :placeholder="'请输入'+name" @change="change" filterable>
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
    name: 'XJJModel',
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
	  	this.getDataList();
  	},
    methods: {
    	change(){
    		//alert("c:"+this.value);
    		this.$emit('setValue', {wid:this.wid,value:this.value});
    	},
	    getDataList(){
		    	var url_ = ctx+"/api/connuser/getModules.json";
		    		this.$http.post(url_, {},{'emulateJSON': true}).then(res=>{
							var data  = res.body;
							//alert(JSON.stringify(data));
							this.datalist = data;
							//this.caseType = data
							//this.totalCount = res['body']['resultData'].total
			    			},res => {
			    				alert("获取数据失败")
			    });
	    }
    }
  };
</script>
