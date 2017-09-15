<template>
	<div class="">
		<el-dialog
	      @close="onClose"
	      title="选择参与的人"
	      :visible.sync="showAddressBook"
	       >
			<el-transfer
				:button-texts="['取消', '邀请']"
				ref="transfer"
				style="margin: 0 10%;"
			  	:props="{key:'id',label:'name'}"
			  	:footer-format="{
			      noChecked: '${total}',
			      hasChecked: '${checked}/${total}'
			      }" :titles="['全部', '邀请的人']" class="trans" filterable v-model="showLabel" :data="address">
			</el-transfer>
			<el-button class="comfirmTransfer" type="primary" @click="submitNames">确定</el-button>
	    </el-dialog>
	</div>
</template>

<script>
	import {ctx} from '../global'
	export default{
		name: "addressBook",
		props:['showAddressBook'],
		data(){
			return{
				choosen:[],
				showLabel: [],
				getUserIdUrL: "/api/connuser/getUserId",
				saveUsersUrl: "/api/connuser/saveCaseUser2",
				address: [],
				participateUser:[]
			}
		},
		mounted:function(){
			this.getAllUsers()
		},
		methods:{
			onClose(){
				this.$emit('closeDia',this.showAddressBook)
			},
			submitNames(){//提交参与人
				this.choosen = this.$refs.transfer.targetData
				this.$emit("getTargetData",this.choosen)
				this.showAddressBook = false
				this.$emit('closeDia',this.showAddressBook)
			},
			getAllUsers(){//地址本获取用户
		  	  	this.$http.post( ctx + "/api/connuser/getUsers")
		  	  	.then(res=>{
		  	  		let data = res['body']['resultData']
		  	  		this.address = data
		  	  	},res=>{
		  	  		alert("获取用户失败")
		  	  	})
		  	},
		}
	}
</script>

<style>
	.comfirmTransfer{
		display: block;
		margin: 20px auto 0;
	}
</style>