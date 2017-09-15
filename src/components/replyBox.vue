<template>
	<div id="replybox">
		<el-input 
			type="textarea" 
			:rows="3" 
			placeholder="随便说点儿什么吧" 
			v-model="replyCommentText">	
		</el-input>
		
		<el-button 
			class="rightfloat" 
			:plain="true" 
			type="primary" 
			@click="replyCommentOk">
			&nbsp;回复&nbsp;
		</el-button>
		
		<el-button 
			class="rightfloat" 
			:plain="true" 
			type="primary" 
			@click="replyCommentNo">
			&nbsp;清空&nbsp;
		</el-button>
	</div>    	
</template>

<script>
	
	export default {
		name: 'replybox',
		props:[''],
		data: function(){
			return {
				replyCommentText: '',
			}
		},
		methods: {
			replyCommentOk: function(){
				this.$emit('replyReplyer', this.replyCommentText)  //参数一 是父组件中v-on的方法，参数二 是子组件要传递给父组件的值，在父组件监听方法中作为参数调用。
				this.replyCommentText = ""   //点击回复后，清空文本框
			},
			replyCommentNo: function(){
				this.replyCommentText = ""
			},
		}
	}
</script>

<style>
</style>