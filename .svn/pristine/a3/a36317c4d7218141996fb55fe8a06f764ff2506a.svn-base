<template>
	<div>
		
<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="menuSelect">
  <el-menu-item index="type">问题类型管理</el-menu-item>
  <el-menu-item index="project">项目管理</el-menu-item>
  <el-menu-item index="module">模块管理</el-menu-item>
</el-menu>
<div style="text-align: right;padding: 5px;">
	<el-row>
  <el-col :span="12"><div class="grid-content bg-purple" style="text-align: left;">
  	<el-button type="primary" icon="edit" @click="openNew()">创建</el-button>
  </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">
  	<el-input
  placeholder="请输入关键字"
  v-model="keyword"
  style="width: 400px;"> 
</el-input>
<el-button type="primary" icon="search" @click="doSearch()">搜索</el-button>
  	
  </div></el-col>
</el-row>
	
	
	

</div>
<div v-loading="loading" element-loading-text="拼命加载数据中...">		
<div id="caseTypeDiv" v-bind:style="(activeIndex=='type'? {}:{display:'none'})">
  <el-table
    :data="tableData"
    style="width: 100%" :row-key="getRowKeys" :expand-row-keys="expands" >
    
    <el-table-column  type="expand" >
      <template  scope="t">
      	<div style="padding: 5px;"><el-button type="primary" icon="edit" @click="openNewField(t.row)">创建输入域</el-button></div>
      	<el-form ref="form" label-width="150px" style=" background-color: #FFFFFF;width：1024px;height:500px; padding: 30px;overflow: auto;border: 1px solid #cccccc;" >
			<template  v-for="field of t.row.caseTypeFields">
				
				<!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：标题域
                -->
				<el-form-item  :label="field.sn+'、'+field.name" v-if="field.dataType=='title'"  >
						<XJJInput :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" style="width: 90%;"></XJJInput>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--<el-input v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)" :placeholder="'请输入'+field.name"   ></el-input>-->
				</el-form-item>
				<!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：文本域
                -->
				<el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='text'">
					<XJJInput :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" style="width: 90%;"></XJJInput>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--<el-input v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)" :placeholder="'请输入'+field.name"></el-input>-->
				</el-form-item>
				
				<!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：文本域
                -->
				<el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='chatContent'">
						<XJJInput :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" type="textarea" rows="15" style="width: 90%;"></XJJInput>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--<el-input v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)" :placeholder="'请输入'+field.name"></el-input>-->
				</el-form-item>
				
				<!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：内容域
                -->
				<el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='content'">
						<XJJTextarea :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue"  style="width: 90%;"></XJJTextarea>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--
						<el-input 
						 v-bind:value="getWId('this.form.'+field.widgetId)" 
						  @input="updateValue('this.form.'+field.widgetId,$event)"
						  type="textarea"
						  :rows="15"
						  :placeholder="'请输入'+field.name">
						</el-input>
						-->
				</el-form-item>
				
				<!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：选择框
                -->
				<el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='select'">
							<XJJSelect :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" style="width: 90%;"></XJJSelect>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
							<!--
								<el-select  v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)" filterable :placeholder="'请选择'+field.name">
						    <el-option v-for="item in getOption(field.defaultValue)"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>
						  -->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：选择框
                -->
				<el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='status'">
						<XJJStatus :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJStatus>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						  <!--<el-select  v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)" filterable :placeholder="'请选择'+field.name">
						    <el-option v-for="item in statuss"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>
						   -->
			    </el-form-item>
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：选择框
                -->
				<el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='caseType'">
						
						<XJJCaseType :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJCaseType>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--
						<el-select  v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)" filterable :placeholder="'请选择'+field.name">
						    <el-option v-for="item in caseTypes"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>
						  -->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：有限级列表
                -->
			    <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='priority'">
						
						<XJJPriority :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJPriority>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						 <!--<el-select  v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)"  filterable :placeholder="'请选择'+field.name" >
						    <el-option v-for="item in prioritys"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>
						  -->
			    </el-form-item>
			    
				<!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：项目列表
                -->
				<el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='projectId'">
						<XJJProject :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJProject>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--<el-select  v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)" filterable  :placeholder="'请选择'+field.name">
						    <el-option v-for="item in projects"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>-->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：模块列表
                -->
			    <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='moduleId'">
						<XJJModel :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJModel>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--<el-select  v-bind:value="getWId('this.form.'+field.widgetId)"  @input="updateValue('this.form.'+field.widgetId,$event)"  filterable :placeholder="'请选择'+field.name">
						    <el-option v-for="item in modules"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select> -->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：报告日期
                -->
			    <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='reportTime'">
						<XJJDatetime :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJDatetime>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						
						 <!--<el-date-picker 
								v-bind:value="getWId('this.form.'+field.widgetId)"  
								@input="updateDateValue('this.form.'+field.widgetId,$event)"
						      	type="datetime"
						      	format="yyyy-MM-dd HH:mm"
						      	:placeholder="'选择'+field.name">
	    				</el-date-picker> -->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：日期
                -->
			    <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='date'">
						
						<XJJDate :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJDate>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						   <!--<el-date-picker 
								v-bind:value="getWId('this.form.'+field.widgetId)"  
								@input="updateDateValue('this.form.'+field.widgetId,$event)"
						      	type="date"
						      	format="yyyy-MM-dd"
						      	:placeholder="'选择'+field.name">
	    				</el-date-picker>-->
			    </el-form-item>
			    
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：日期+时间
                -->
			    <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='dateTime'">
						<XJJDatetime :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJDatetime>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						
						  <!--<el-date-picker 
								v-bind:value="getWId('this.form.'+field.widgetId)"  
								@input="updateDateValue('this.form.'+field.widgetId,$event)"
						      	type="datetime"
						      	format="yyyy-MM-dd HH:mm"
						      	:placeholder="'选择'+field.name">
	    				</el-date-picker>-->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：时间
                -->
			    <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='time'">
			    	<XJJHours :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue"></XJJHours>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
			    	
			    	<!--<el-time-picker
				   		v-bind:value="getWId('this.form.'+field.widgetId)"  
						@input="updateDateValue('this.form.'+field.widgetId,$event)"
					format="HH:mm"
				    :placeholder="'选择'+field.name">
				  </el-time-picker>-->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-11
                	描述：预期日期
                -->
			    <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='expectedDate'">
						<XJJDate :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" ></XJJDate>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--<el-date-picker 
								v-bind:value="getWId('this.form.'+field.widgetId)"  
								@input="updateDateValue('this.form.'+field.widgetId,$event)"
						      	type="date"
						      	format="yyyy-MM-dd"
						      	:placeholder="'选择'+field.name">
	    				</el-date-picker>-->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-12
                	描述：地址本
                -->
                <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='addr'">
						<XJJAddr :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" style="width: 90%;" ></XJJAddr>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						 <!--<el-select  v-bind:value="getWId('this.form.'+field.widgetId)" style="width: 100%;" @input="updateAddrValue('this.form.'+field.widgetId,$event)"  filterable multiple :placeholder="'请选择'+field.name" >
						    <el-option v-for="item in users"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>
						 -->
			    </el-form-item>
			    
			    <!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-12
                	描述：
                -->
                <el-form-item :label="field.sn+'、'+field.name" v-if="field.dataType=='invitation'">
						<XJJAddr :field="field" :wid="'this.form.'+field.widgetId" @setValue="setValue" style="width: 90%;" ></XJJAddr>[<el-button type="text" size="small" @click="openEditField(field)" >编辑</el-button>]&nbsp;[<el-button type="text" size="small" @click="delTypeField(field)" >删除</el-button>]
						<!--<el-select  v-bind:value="getWId('this.form.'+field.widgetId)" style="width: 100%;" @input="updateAddrValue('this.form.'+field.widgetId,$event)"  filterable multiple :placeholder="'请选择'+field.name" >
						    <el-option v-for="item in users"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>  -->
						
			    </el-form-item>
			    
			     
			 
			</template>
			<!--
                	作者：xjjuser@yeah.net
                	时间：2017-09-12
                	描述：附件
                    -->
                <el-form-item label="附件" >
								<XJJAtt></XJJAtt>
					    </el-form-item>
		</el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="ID"
      prop="id" >
    </el-table-column>
    <el-table-column
      label="类型名称"
      prop="name" >
      <template scope="t">
      <el-button type="text"  @click="openEditType(t.row)" >{{t.row.name}}</el-button>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <template scope="t">
        <el-button type="text" size="small" @click="openEditType(t.row)" >编辑</el-button>&nbsp;<el-button type="text" size="small" @click="delType(t.row)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
  
  <div id="projectDiv" v-bind:style="(activeIndex=='project'? {}:{display:'none'})">
  	
<el-table
    :data="projectData"
    style="width: 100%;"  >
   <el-table-column
      label="id"
      prop="id" 
      >
    </el-table-column>
    <el-table-column
      label="类型名称"
      prop="name" >
      <template scope="t">
      <el-button type="text"  @click="openEditProject(t.row)" >{{t.row.name}}</el-button>
      </template>
    </el-table-column>
    
    <el-table-column
      label="短号"
      prop="shortHand" >
    </el-table-column>
    <el-table-column
      label="单位名称"
      prop="orgName" >
    </el-table-column>
   <el-table-column
      label="类型"
      prop="type" >
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <template scope="t">
        <el-button type="text" size="small" @click="openEditProject(t.row)" >编辑</el-button>&nbsp;<el-button type="text" size="small" @click="delProject(t.row)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
</div>

 <div id="moduleDiv" v-bind:style="(activeIndex=='module'? {}:{display:'none'})">
  	
<el-table
    :data="moduleData"
    style="width: 100%;"  >
   <el-table-column
      label="id"
      prop="id" 
      >
    </el-table-column>
    <el-table-column
      label="模块名称"
      prop="name" >
      <template scope="t">
      <el-button type="text"  @click="openEditModule(t.row)" >{{t.row.name}}</el-button>
      </template>
    </el-table-column>
    
    <el-table-column
      label="描述"
      prop="describe" >
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <template scope="t">
        <el-button type="text" size="small" @click="openEditModule(t.row)" >编辑</el-button>&nbsp;<el-button type="text" size="small" @click="delModule(t.row)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>



  
  
  <el-dialog title="编辑表单域" :visible.sync="editField">
  <el-form :model="fieldForm">
  	<el-form-item label="数据类型" label-width="80px">
      <el-select v-model="fieldForm.dataType" placeholder="请选择" @change="typeChange(fieldForm.dataType)">
	    <el-option
	      v-for="item in options"
	      :key="item.id"
	      :label="item.name"
	      :value="item.id">
	    </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="名称"  label-width="80px" >
      <el-input v-model="fieldForm.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="widgetId" label-width="80px">
      <el-input v-model="fieldForm.widgetId" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="默认值" label-width="80px">
      <el-input v-model="fieldForm.defaultValue" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="是否必填" label-width="80px">
      <el-radio class="radio" v-model="fieldForm.required" label="false">选填</el-radio>
  	<el-radio class="radio" v-model="fieldForm.required" label="true">必填</el-radio>
    </el-form-item>
    <el-form-item label="CSS样式" label-width="80px">
      <el-input v-model="fieldForm.style" auto-complete="off"></el-input>
    </el-form-item>
     
    <el-form-item label="排序号" label-width="80px">
      <el-input v-model="fieldForm.sn" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="editField = false">取 消</el-button>
    <el-button type="primary" @click="updateField(fieldForm)">确 定</el-button>
  </div>
</el-dialog>

<el-dialog title="编辑类型" :visible.sync="editType">
  <el-form :model="typeForm">
  	<el-form-item label="id"  label-width="80px" >
      {{typeForm.id}}
    </el-form-item>
    <el-form-item label="名称"  label-width="80px" >
      <el-input v-model="typeForm.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="是否必填" label-width="80px">
      <el-radio class="radio" v-model="typeForm.upload" label="true">启用附件</el-radio>
  	<el-radio class="radio" v-model="typeForm.upload" label="false">禁用附件</el-radio>
    </el-form-item>
    <!--<el-form-item label="排序号" label-width="80px">
      <el-input v-model="typeForm.sn" auto-complete="off"></el-input>
    </el-form-item>-->
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="editType = false">取 消</el-button>
    <el-button type="primary" @click="updateType(typeForm)">确 定</el-button>
  </div>
</el-dialog>



<el-dialog title="编辑项目" :visible.sync="editProject">
	
  <el-form :model="projectForm">
  	<el-form-item label="id"  label-width="80px" >
      {{projectForm.id}}
    </el-form-item>
    <el-form-item label="项目名称"  label-width="80px" >
      <el-input v-model="projectForm.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="单位名称"  label-width="80px" >
      <el-input v-model="projectForm.orgName" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="短号"  label-width="80px" >
      <el-input v-model="projectForm.shortHand" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="立项时间"  label-width="80px" >
     	<el-date-picker
	      v-model="projectForm.createdDate"
	      type="date"
	      placeholder="请选择立项时间" format="yyyy-MM-dd"></el-date-picker>
    </el-form-item>
    <el-form-item label="类型"  label-width="80px" >
    	<el-radio class="radio" v-model="projectForm.type" label="PC端">PC端</el-radio>
  	<el-radio class="radio" v-model="projectForm.type" label="手机办公">手机办公</el-radio>
  	<el-radio class="radio" v-model="projectForm.type" label="平板批签">平板批签</el-radio>
    </el-form-item>
    <el-form-item label="项目相关人员"  label-width="80px" >
    	<el-select  v-model="projectForm.users" placeholder="请选择" filterable multiple style="width: 100%;">
				<el-option v-for="item in userlist"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
				</el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="editProject = false">取 消</el-button>
    <el-button type="primary" @click="updateProject(projectForm)">确 定</el-button>
  </div>
</el-dialog>

<el-dialog title="编辑模块" :visible.sync="editModule">
	
  <el-form :model="moduleForm">
  	<el-form-item label="id"  label-width="80px" >
      {{moduleForm.id}}
    </el-form-item>
    <el-form-item label="名称"  label-width="80px" >
      <el-input v-model="moduleForm.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="描述"  label-width="80px" >
      <el-input v-model="moduleForm.describe" auto-complete="off"></el-input>
    </el-form-item>
     
    <el-form-item label="模块开发人员"  label-width="80px" >
    	<el-select  v-model="moduleForm.users" placeholder="请选择" filterable multiple style="width: 100%;">
				<el-option v-for="item in userlist"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
				</el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="editModule = false">取 消</el-button>
    <el-button type="primary" @click="updateModule(moduleForm)">确 定</el-button>
  </div>
</el-dialog>

</div>
 </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 100%;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
</style>

<script>
	import $ from 'jquery'
	import {ctx} from '../../global'
	 import XJJInput from '../form/input'
	 import XJJSelect from '../form/select'
	 import XJJTextarea from '../form/textarea'
	 import XJJStatus from '../form/status'
	 import XJJProject from '../form/project'
	 import XJJPriority from '../form/priority'
	 import XJJModel from '../form/model'
	 import XJJDate from '../form/date'
	 import XJJDatetime from '../form/datetime'
	 import XJJHours from '../form/hours'
	 import XJJAddr from '../form/addr'
	 import XJJAtt from '../att'
	
  export default {
  	name: 'ADMIN_MAIN',
	  components:{
	  	XJJInput,XJJSelect,XJJTextarea,XJJStatus,XJJProject,XJJPriority,XJJModel,XJJDate,XJJDatetime,XJJHours,XJJAddr,XJJAtt 
	  },
    data() {
      return {
      	keyword:"",
      	activeIndex:"type",
      	tableData:[],
      	projectData:[],
      	editProject:false,
      	projectForm:{},
      	moduleData:[],
      	editModule:false,
      	moduleForm:{},
      	editType: false,
      	typeForm : {},
      	editField: false,
      	fieldForm : {},
      	options:[
      	{id:"text",name:"文本"},
      	{id:"title",name:"标题"},
      	{id:"content",name:"内容"},
      	{id:"select",name:"下拉选择"},
      	{id:"priority",name:"优先级"},{id:"projectId",name:"项目"},{id:"moduleId",name:"模块"}
      	,{id:"addr",name:"地址本"},{id:"invitation",name:"邀请"},{id:"reportTime",name:"发生时间"},{id:"expectedDate",name:"期望完成日期"},{id:"date",name:"日期"}
      	,{id:"dateTime",name:"日期+时间"}
      	,{id:"time",name:"时间"}
      	,{id:"sn",name:"编号"},{id:"status",name:"状态"}],
      	dataType:"",
      	getRowKeys(row) {
                return row.id;
           },
      	expands:[],
      	expandId:"",
      	loading:true,
      	userlist:[]
      }
    },
    created:function(){
    	this.initUserlist();
    	this.initTypeData();
    },
  	methods:{
  		menuSelect(key, keyPath) {
  			this.loading = true;
	  		console.log(key, keyPath);
	  		console.log(this.loading);
	        this.activeIndex = key;
	        if(key=="type"){
	        	this.initTypeData();
	        }else if(key=="project"){
	        	//this.$message(key);
	        	this.initProjectData();
	        }else if(key=="module"){
	        	this.initModuleData();
	        }
      	},
		doSearch(){
			
			//alert(this.keyword);
			var key = this.activeIndex;
			
				if(key=="type"){
		        	this.initTypeData();
		        }else if(key=="project"){
		        	//this.$message(key);
		        	this.initProjectData();
		        }else if(key=="module"){
		        	this.initModuleData();
		        }
	        
		},
		openNew(){
			var key = this.activeIndex;
				var obj = new Object();
				if(key=="type"){
					obj.id="";
					obj.name ="";
					obj.upload="true";
		        	this.openEditType(obj);
		        }else if(key=="project"){
		        	obj.id="";
		        	obj.name ="";
		        	obj.orgName ="";
		        	obj.shortHand ="";
		        	obj.createdDate ="";
		        	obj.users =[];
		        	this.openEditProject(obj);
		        }else if(key=="module"){
		        	obj.id="";
		        	obj.name ="";
		        	obj.describe ="";
		        	obj.users =[];
		        	this.openEditModule(obj);
		        }
		},
		openNewField(type){
			//alert(JSON.stringify(type));
			var field = new Object();
			field.id="";
			field.name="";
			field.widgetId="";
			field.caseTypeId=type.id;
			field.dataType="";
			field.defaultValue="";
			field.required="";
			field.style="";
			field.sn="";
			this.openEditField(field);
		},
		typeChange(dateType){
			
			if(this.fieldForm.id=="" && dateType!=null && dateType!="" ){
			var opt = null;
			for(var i=0;i<this.options.length;i++){
				if(this.options[i].id==dateType){
				opt = 	this.options[i];
				break;
				}
			}
			//alert(JSON.stringify(opt));
			var url = ctx+"/api/connuser/admin/getCaseType.json?id="+this.fieldForm.caseTypeId;
			this.$http.post(url, {},{'emulateJSON': true}).then(res=>{
				var data  = res.body.resultData
				var fields = data.caseTypeFields;
				//alert(JSON.stringify(fields));
				var msg = "";
				for(var i=0;i<fields.length;i++){
					var f = fields[i];
					if(f.name==opt.name){
						msg +="["+opt.name+"]名字已经存在！\n\r";
					}
					if(f.widgetId==opt.id){
						msg +="["+opt.id+"]widgetId已经存在！";
					}
				}
				if(msg!=""){
					this.$message(msg);
				}
				this.fieldForm.sn = fields.length+1;
			},res => {
	    				this.$message("失败");
	    	});
			
			
			if(this.fieldForm.name==""){
				this.fieldForm.name=opt.name;
			}
			if(this.fieldForm.widgetId==""){
				this.fieldForm.widgetId = opt.id;				
			}
			}
		},
      	initUserlist(){
      		this.$http.post( ctx + "/api/connuser/getUsers")
		  	  	.then(res=>{
		  	  		var data  = res.body.resultData;
		  	  		//console.log(data);
		  	  		if(data.length>0){
		  	  			for(var i=0;i<data.length;i++){
		  	  				this.userlist.push({id:data[i].id,name:data[i].name});
		  	  			}
		  	  		}
		  	  		console.log(this.userlist);
		  	  	},res=>{
		  	  		this.$message("获取用户列表失败！")
		  	  	})
      	},
		initTypeData(){
			var url = ctx+"/api/connuser/admin/getCaseTypes.json";
			console.log(url);
			//this.$message(url);
			var param = new Object();
			param.keyword = this.keyword;
			//alert(JSON.stringify(param));
				this.$http.post(url, JSON.stringify(param),{'emulateJSON': true}).then(res=>{

					var data  = res.body.resultData;
					//this.$message(JSON.stringify(data));
					
					this.tableData = data
					this.loading = false;
					//this.$message(this.expandId);
					if(this.expandId!="" && this.expandId.length>0){
						this.expands.push(this.expandId);
					}
					
					//this.totalCount = res['body']['resultData'].total
	    			},res => {
	    				this.$message("获取类型列表数据失败！"+JSON.stringify(res))
	    		});
		},initProjectData(){
			this.loading = true;
			var url = ctx+"/api/connuser/admin/getProjects.json";
			console.log(url);
			var param = new Object();
			param.keyword = this.keyword;
				this.$http.post(url,JSON.stringify(param),{'emulateJSON': true}).then(res=>{

					var data  = res.body;
					console.log(JSON.stringify(data));
					this.projectData = data;
					this.loading = false;
					
	    			},res => {
	    				this.$message("获取数据失败")
	    		});
		},
		initModuleData(){
			var url = ctx+"/api/connuser/admin/getModules.json";
			console.log(url);
				var param = new Object();
				param.keyword = this.keyword;
				this.$http.post(url, JSON.stringify(param),{'emulateJSON': true}).then(res=>{

					var data  = res.body;
					console.log(JSON.stringify(data));
					this.moduleData = data;
					this.loading = false;
					
	    			},res => {
	    				this.$message("获取模块列表数据失败")
	    		});
		},
		openEditType(type){
			//this.$message(JSON.stringify(field));
			this.typeForm = type;
			this.editType = true;
		},
		updateType(type){
			//this.$message(JSON.stringify(type));
			var url = ctx+"/api/connuser/admin/saveOrUpdateCaseType.json";
			this.$http.post(url, JSON.stringify(type),{'emulateJSON': true}).then(res=>{
				this.initTypeData();
				this.editType = false;
			},res => {
	    				this.$message("失败")
	    	});
			
			this.editField = false;
		},
		openEditField(field){
			//this.$message(JSON.stringify(field));
			this.fieldForm = field;
			this.dataType = field.dataType
			this.editField = true;
		},
		openEditProject(project_){
			var project  = {};
			$.extend(true,project,project_);
			var t = project.createdDate.substring(0,10);
			if(t.length>0){
				var array =  t.split("-");
				var dt = new Date(array[0], array[1], array[2]);
				project.createdDate= dt ;
			}
			//alert(JSON.stringify(project));
			project.users = [];
			this.projectForm = project;
			this.editProject = true;
			if(project.id.length>0){
				var url = ctx+"/api/connuser/admin/getProjectUsers.json";
				this.$http.post(url, project.id,{'emulateJSON': true}).then(res=>{
					var data = res.body.resultData;
					//this.$message(JSON.stringify(data));
					//alert(JSON.stringify(data));
					if(data!=null && data.length>0){
						var uids = new Array();
						for(var i=0;i<data.length;i++){
							var id = data[i].userId;
							//alert(id);
							this.projectForm.users.push(id);
						}
					}
				},res => {
		    				this.$message("初始化项目关联人员失败！")
		    	});
	    	}
			
		},updateProject(project){
			console.log(project);
			var uids = project.users;
			var d = this.formatDate(project.createdDate);
			project.createdDate = d;
			//project.users= null;
			var url = ctx+"/api/connuser/admin/saveOrUpdateProject.json";
			this.$http.post(url, JSON.stringify(project),{'emulateJSON': true}).then(res=>{
				this.editProject = false;
				var pid  = res.body.resultData.id;
				var p = new Object();
				p.pid = pid;
				p.uids = uids;
				
				this.updateProjectUsers(p);
				this.initProjectData();
				
			},res => {
	    				this.$message("失败")
	    	});
		},updateProjectUsers(uids){
			//console.log(uids);
			//this.$message(uids);
			var url = ctx+"/api/connuser/admin/saveOrUpdateProjectUser.json";
			this.$http.post(url, JSON.stringify(uids),{'emulateJSON': true}).then(res=>{
				//alert(JSON.stringify(res));
				this.initProjectData();
			},res => {
	    				this.$message("更新项目关联人失败。")
	    	});
		},
		openEditModule(module_){
			//this.$message(JSON.stringify(field));
			//this.moduleForm = module;
			var module  = {};
			$.extend(true,module,module_);
			//alert(JSON.stringify(project));
			
			module.users = [];
			this.moduleForm = module;
			this.editModule = true;
			if(module.id.length>0){
				var url = ctx+"/api/connuser/admin/getModuleUsers.json";
				this.$http.post(url, module.id,{'emulateJSON': true}).then(res=>{
					var data = res.body.resultData;
					//this.$message(JSON.stringify(data));
					//alert(JSON.stringify(data));
					if(data!=null && data.length>0){
						var uids = new Array();
						for(var i=0;i<data.length;i++){
							var id = data[i].userId;
							//alert(id);
							this.moduleForm.users.push(id);
						}
					}
				},res => {
		    				this.$message("初始化模块关联人员失败！")
		    	});
	    }
		},updateModule(module){
			console.log(module);
			var uids = module.users;
			//project.users= null;
			var url = ctx+"/api/connuser/admin/saveOrUpdateModule.json";
			this.$http.post(url, JSON.stringify(module),{'emulateJSON': true}).then(res=>{
				this.editModule = false;
				var pid  = res.body.resultData.id;
				var p = new Object();
				p.mid = pid;
				p.uids = uids;
				this.updateModuleUsers(p);
				this.initModuleData();
				
			},res => {
	    				this.$message("失败")
	    	});
		},updateModuleUsers(uids){
			//console.log(uids);
			//this.$message(uids);
			var url = ctx+"/api/connuser/admin/saveOrUpdateModuleUser.json";
			this.$http.post(url, JSON.stringify(uids),{'emulateJSON': true}).then(res=>{
				//alert(JSON.stringify(res));
				this.initModuleData();
			},res => {
	    				this.$message("更新模块关联人失败。")
	    	});
		},
		updateField(field){
			//this.$message(JSON.stringify(field));
			//alert(field.id=="");
			if(field.id==""){
				var url = ctx+"/api/connuser/admin/getCaseType.json?id="+this.fieldForm.caseTypeId;
				this.$http.post(url, {},{'emulateJSON': true}).then(res=>{
					var data  = res.body.resultData
					var fields = data.caseTypeFields;
					//alert(JSON.stringify(fields));
					var msg = "";
					for(var i=0;i<fields.length;i++){
						var f = fields[i];
						if(f.name==field.name){
							msg +="["+field.name+"]名字已经存在！\n\r";
						}
						if(f.widgetId==field.widgetId){
							msg +="["+field.widgetId+"]widgetId已经存在！";
						}
					}
					//alert(msg);
					if(msg!=""){
						this.$message(msg);
					}else{
						//alert(field);
						this.saveTypeField(field);
					}
					
				},res => {
		    				this.$message("验证FIELD失败");
		    	});
			}else{
				this.saveTypeField(field);
			}
		},
		saveTypeField(field){
			var tid = field.caseTypeId;
						var url = ctx+"/api/connuser/admin/saveOrUpdateCaseTypeField.json";
						this.$http.post(url, JSON.stringify(field),{'emulateJSON': true}).then(res=>{
							this.initTypeData();
							this.expandId = tid;
						},res => {
				    				this.$message("更新表单域失败")
				    	});
						
						this.editField = false;
		},
		setValue(obj){
			
		},
		setAtt(obj){
			
		},
		stopLoading(){
			this.loading = false;
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
    },delType(type){
    	
    	this.$confirm('确认删除类型？').then(_ => {
            var url = ctx+"/api/connuser/admin/delCaseType.json";
			this.$http.post(url, JSON.stringify(type),{'emulateJSON': true}).then(res=>{
				this.initTypeData();
			},res => {
	    				this.$message("删除失败");
	    	});
         }).catch(_ => {});
    	
    },delTypeField(field){
    	
    	this.$confirm('确认删除类型？').then(_ => {
    		this.expandId= field.caseTypeId;
            var url = ctx+"/api/connuser/admin/delCaseTypeField.json";
			this.$http.post(url, JSON.stringify(field),{'emulateJSON': true}).then(res=>{
				this.initTypeData();
			},res => {
	    				this.$message("删除失败");
	    	});
         }).catch(_ => {});
    	
    },delProject(project){
    	this.$confirm('确认删除项目？').then(_ => {
            var url = ctx+"/api/connuser/admin/delProject.json";
			this.$http.post(url, JSON.stringify(project),{'emulateJSON': true}).then(res=>{
				this.initProjectData();
			},res => {
	    				this.$message("删除失败");
	    	});
         }).catch(_ => {});
    },delModule(module){
    	this.$confirm('确认删除模块？').then(_ => {
            var url = ctx+"/api/connuser/admin/delModule.json";
			this.$http.post(url, JSON.stringify(module),{'emulateJSON': true}).then(res=>{
				this.initModuleData();
			},res => {
	    				this.$message("删除失败");
	    	});
         }).catch(_ => {});
    }
  }
  	}
</script>