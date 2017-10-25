<template>
	
	<el-select  v-model="value" :placeholder="'请输入'+name" @change="change" filterable>
						    <el-option v-for="item in getOptions(field.defaultValue)"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>
</template>

<script>
  export default {
    name: 'XJJSelect',
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
    		name: this.field.name
    	};
    },
    methods: {
    	change(){
    		//alert("c:"+this.value);
    		this.$emit('setValue', {wid:this.wid,value:this.value});
    	},
	    getOptions(str){
	    	var str_ = str.split(",");
	    	var opts = new Array();
	    	for(var i=0;i<str_.length;i++){
	    		var s = str_[i];
	    		var obj = new Object();
	    		obj.id=s;
	    		obj.name = s;
	    		opts.push(obj);
	    	}
	    	return opts;// [{id:'0',name:'0'},{id:'0',name:'0'}]
	    }
    }
  };
</script>
