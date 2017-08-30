<template>
  <div>
    <!-- 块 -->
    <Form label-position="right" :label-width="100">
      <Row>
        <Col span="12"><FormItem label="列名"><Input v-model="valueSelf.col"></Input></FormItem></Col>
        <Col span="12"><FormItem label="说明"><Input v-model="valueSelf.note"></Input></FormItem></Col>
        <Col span="12"><FormItem label="物理类型"><Input v-model="valueSelf.type"></Input></FormItem></Col>
        <Col span="12"><FormItem label="Java类型"><Input v-model="valueSelf.javaType"></Input></FormItem></Col>
        <Col span="12"><FormItem label="Java属性名称"><Input v-model="valueSelf.javaAttr"></Input></FormItem></Col>
        <Col span="12"><FormItem label="字典类型"><Input v-model="valueSelf.distType"></Input></FormItem></Col>
        <Col span="12"><FormItem label="排序"><Input v-model="valueSelf.sort"></Input></FormItem></Col>
      </Row>
    </Form>
    <!-- 块 -->
    <Form label-position="right" :label-width="100">
      <Row>
        <Col span="12">
          <FormItem label="查询匹配方式">
            <Select v-model="valueSelf.searchMode">
              <Option v-for="item in searchModeOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="显示表单类型">
            <Select v-model="valueSelf.uiType">
              <Option v-for="item in uiTypeOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <!-- 块 -->
    <Form label-position="top">
      <Row>
        <Col span="4"><FormItem class="mab0" label="主键"><i-switch v-model="valueSelf.mainKey"></i-switch></FormItem></Col>
        <Col span="4"><FormItem class="mab0" label="可空"><i-switch v-model="valueSelf.nullable"></i-switch></FormItem></Col>
        <Col span="4"><FormItem class="mab0" label="插入"><i-switch v-model="valueSelf.insert"></i-switch></FormItem></Col>
        <Col span="4"><FormItem class="mab0" label="编辑"><i-switch v-model="valueSelf.edit"></i-switch></FormItem></Col>
        <Col span="4"><FormItem class="mab0" label="列表"><i-switch v-model="valueSelf.list"></i-switch></FormItem></Col>
        <Col span="4"><FormItem class="mab0" label="查询"><i-switch v-model="valueSelf.search"></i-switch></FormItem></Col>
      </Row>
    </Form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: null
    }
  },
  data () {
    return {
      valueSelf: null,
      searchModeOption: [
        {value: '=', label: '等于'},
        {value: '!=', label: '不等于'},
        {value: '>', label: '大于'},
        {value: '>=', label: '大于等于'},
        {value: '<', label: '小于'},
        {value: '<=', label: '小于等于'},
        {value: 'between', label: 'between'},
        {value: 'like', label: 'like'},
        {value: 'left_like', label: 'left_like'},
        {value: 'right_like', label: 'right_like'}
      ],
      uiTypeOption: [
        {value: 'input', label: '单行文本'},
        {value: 'textarea', label: '多行文本'},
        {value: 'select', label: '下拉选项'},
        {value: 'radiobox', label: '单选按钮'},
        {value: 'checkbo', label: '复选框'},
        {value: 'dateselect', label: '日期选择'},
        {value: 'userselect', label: '人员选择'},
        {value: 'officeselect', label: '部门选择'},
        {value: 'areaselect', label: '区域选择'},
        {value: 'treeselect', label: '树选择控件'},
        {value: 'fileselect', label: '文件上传选择'}
      ]
    }
  },
  created () {
    if (!this.value) { return }
    this.valueSelf = this.value
  },
  watch: {
    value (value) {
      if (value === this.valueSelf) { return }
      this.valueSelf = value
    }
  }
}
</script>

<style lang="scss" scoped>
.mab0{
  margin-bottom: 0px;
}
</style>

