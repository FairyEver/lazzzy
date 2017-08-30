<template>
  <section>
    <Table
      class="build-base-table"
      size="small"
      border
      :columns="col"
      :data="data">
    </Table>
    <div style="margin-top:10px;">
      <tool-code-preview :data="data" mode="btn" text="查看原始数据"></tool-code-preview>
    </div>
    <Modal v-model="editModal">
      <edit-form :value="editData"></edit-form>
      <div slot="footer">
        <Button type="success" size="large" long @click="editModal = false">确定</Button>
      </div>
    </Modal>
  </section>
</template>

<script>
// 模拟数据源
import data from './data.js'
// 列公共设置
let pubSetting = {
  align: 'center'
}
// 布尔值render设置
let booleanRender = (h, params, value) => {
  return h('Icon', {
    props: {
      type: value ? 'checkmark' : 'close'
    },
    style: {
      color: value ? '#19be6b' : '#ed3f14'
    }
  })
}
// 表单组件
import editForm from './form.vue'
export default {
  components: {
    editForm
  },
  data () {
    return {
      data,
      editModal: false,
      editData: {
        col: 'log_nr_',
        note: 'log_nr_',
        type: 'bigint(20)',
        javaType: 'Long',
        javaAttr: 'logNr',
        mainKey: true,
        nullable: true,
        insert: false,
        edit: true,
        list: false,
        search: true,
        searchMode: '=',
        uiType: 'input',
        distType: '',
        sort: '1'
      },
      col: [
        {
          title: '列名',
          key: 'col',
          width: 120,
          ...pubSetting
        },
        {
          title: '说明',
          key: 'note',
          ...pubSetting
        },
        {
          title: '物理类型',
          key: 'type',
          width: 70,
          ...pubSetting
        },
        {
          title: 'Java类型',
          key: 'javaType',
          width: 70,
          ...pubSetting
        },
        {
          title: 'Java属性名称',
          key: 'javaAttr',
          width: 100,
          ...pubSetting
        },
        {
          title: '主键',
          key: 'mainKey',
          width: 45,
          ...pubSetting,
          render: (h, params) => booleanRender(h, params, params.row.mainKey)
        },
        {
          title: '可空',
          key: 'nullable',
          width: 45,
          ...pubSetting,
          render: (h, params) => booleanRender(h, params, params.row.nullable)
        },
        {
          title: '插入',
          key: 'insert',
          width: 45,
          ...pubSetting,
          render: (h, params) => booleanRender(h, params, params.row.insert)
        },
        {
          title: '编辑',
          key: 'edit',
          width: 45,
          ...pubSetting,
          render: (h, params) => booleanRender(h, params, params.row.edit)
        },
        {
          title: '列表',
          key: 'list',
          width: 45,
          ...pubSetting,
          render: (h, params) => booleanRender(h, params, params.row.list)
        },
        {
          title: '查询',
          key: 'search',
          width: 45,
          ...pubSetting,
          render: (h, params) => booleanRender(h, params, params.row.search)
        },
        {
          title: '查询匹配方式',
          key: 'searchMode',
          width: 90,
          ...pubSetting,
          render: (h, params) => {
            return h('Tag', {
              props: {
                type: 'border'
              }
            }, params.row.searchMode)
          }
        },
        {
          title: '显示表单类型',
          key: 'uiType',
          width: 100,
          ...pubSetting,
          render: (h, params) => {
            let dict = {
              input: '单行文本',
              textarea: '多行文本',
              select: '下拉选项',
              radiobox: '单选按钮',
              checkbox: '复选框',
              dateselect: '日期选择',
              userselect: '人员选择',
              officeselect: '部门选择',
              areaselect: '区域选择',
              treeselect: '树选择控件',
              fileselect: '文件上传选择'
            }
            return h('Tag', {
              props: {
                type: 'border'
              }
            }, dict[params.row.uiType])
          }
        },
        {
          title: '字典类型',
          key: 'distType',
          width: 70,
          ...pubSetting
        },
        {
          title: '排序',
          key: 'sort',
          width: 70,
          ...pubSetting
        },
        {
          title: '操作',
          key: 'do',
          width: 70,
          ...pubSetting,
          render: (h, params) => {
            return h('Button', {
              props: {
                size: 'small'
              },
              on: {
                'click': () => {
                  this.edit(params)
                }
              }
            }, '编辑')
          }
        }
      ]
    }
  },
  methods: {
    edit (params) {
      this.editModal = true
      this.editData = this.data[params.index]
    }
  }
}
</script>

<style lang="scss">
.build-base-table{
  .ivu-table-cell{
    padding-left: 4px;
    padding-right: 4px;
  }  
}
</style>

