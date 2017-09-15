<template>
	<div class="dir" id="dir">
		<div class="topTitle"><span class="text">愉快的创建一个任务</span></div>
		
	</div>
</template>

<script>
	import {ctx} from '../global'
	export default {
	  name: 'newcase',
	  data() {
	  	//alert(JSON.stringify(tid));
		return {
			caseType:""
		}
	  },
  created:function(){
  	this.getCaseType()
  },
  methods: {
  	  getCaseType(){
  	  	var tid = this.$route.query.tid;
	  	var url = ctx+"/api/connuser/getCaseType.json";
		this.$http.post(url, {tid},{'emulateJSON': true}).then(res=>{

					var data  = res.body.resultData;
					alert(JSON.stringify(data));
					this.caseType = data
					//this.totalCount = res['body']['resultData'].total
	    			},res => {
	    				alert("获取数据失败")
	    });
  	  }
  }
}

</script>

<style scoped>

</style>