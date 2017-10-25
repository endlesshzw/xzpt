<template>
		<el-input  v-model="value" :placeholder="'请输入'+name" @change="change" type="textarea" :rows="rows"></el-input>
</template>

<script>
  export default {
    name: 'XJJTextarea',
    props: {
      field: {
        type: Object,
        default: ''
      },
      rows:{
      	type:Number,
      	default:15
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
    	}
    }
  };
</script>
