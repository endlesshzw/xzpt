<template>
  <div id="casetype">
    <el-table
      :data="tableData"
      style="width: 100%" :row-class-name="tableRowClassName" :show-header="false">
      <el-table-column
        prop="name"
        label="问题单">
        <template scope="t">
          <el-button type="text" @click="openType(t.row)">
            {{t.row.name}}
          </el-button>
          <!--[<router-link tag="li" :to="{path:'Newcase',query: {tid: t.row.id}}">
					  <a target="_blank">{{t.row.name}}</a>
					</router-link>]
          <router-link to="details" @click="openType(t.row.id)" target="_blank">{{t.row.name}}</router-link>-->
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisible" size="large">
	  	<newcase :tid="tid" @closeDialog="dialogVisible = false"></newcase>
		</el-dialog>
  </div>
  
</template>

<script>
  import {ctx} from '../global'
  import newcase from './newcase'
  export default {
    name: 'casetype',
    components:{
	  	newcase
	  },
    data() {

		this.getAllCaseTypes();
      return {
      	dialogVisible:false,
        tableData:[],
        tid:""

		/*[{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]*/
      }
    },
	methods:{
		getAllCaseTypes(){
			var url = ctx+"/api/connuser/getCaseTypes.json";
			//alert(url);
				this.$http.post(url, {},{'emulateJSON': true}).then(res=>{

					var data  = res.body.resultData;
					//alert(JSON.stringify(data));
					this.tableData = data
					//this.totalCount = res['body']['resultData'].total
	    			},res => {
	    				alert("获取数据失败")
	    		})
		},
    tableRowClassName(row, index) {
      if (index === 1) {
        return 'info-row';
      } else if (index === 3) {
        return 'positive-row';
      }
      return '';
    },
    openType(type){
    	
    	var id = type.id;
    	this.tid = id;
    	this.dialogVisible = true;
    	/*sessionStorage[id]=JSON.stringify(type);
    	this.dialogVisible = true;
    	
    	this.$router.push({ name: 'Newcase', query: { tid: id }})
    	//window.open("/newcase?tid=" + id , "_blank");
		 	this.$emit('dialogHide');
		 	//this.$router.push({path: '/Details'});
		 	*/
    },
    handlePictureCardPreview(file) {
        
    }
}
	}
</script>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
