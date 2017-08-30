<template>
  <span>
    <template v-if="mode === 'normal'">
      <pre><code v-html="dataHignLight"></code></pre>
    </template>
    <template v-if="mode === 'btn'">
      <Button @click="modal = true">{{text}}</Button>
      <Modal v-model="modal">
        <pre><code v-html="dataHignLight"></code></pre>
        <div slot="footer">
          <Button type="error" size="large" long @click="modal = false">关闭</Button>
        </div>
      </Modal>
    </template>
  </span>
</template>

<script>
import { tool } from '@coreLib/tool.js'
import Prism from 'prismjs'
export default {
  props: {
    data: {},
    mode: {
      default: 'normal'
    },
    text: {
      default: '检查数据'
    }
  },
  data () {
    return {
      modal: false
    }
  },
  computed: {
    dataHignLight () {
      return Prism.highlight(tool.toString(this.data), Prism.languages.javascript)
    }
  }
}
</script>

