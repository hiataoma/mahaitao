<template>
    <div>
        <el-tree
            :data="data"
            show-checkbox
            node-key="noRepeatId"
            ref="tree"
            highlight-current
            @node-click="clickNode"
            @check="checkChange"
            :props="defaultProps">
            </el-tree>
        <div class="buttons">
            <!-- <el-button @click="getCheckedNodes">通过 node 获取</el-button> -->
            <el-button @click="getCheckedKeys">通过 key 获取</el-button>
            <el-button @click="setCheckedNodes">通过 node 设置</el-button>
            <!-- <el-button @click="setCheckedKeys">通过 key 设置</el-button> -->
            <el-button @click="resetChecked">清空</el-button>
        </div>
    </div>
</template>

<script>
import data from './data.json'
console.log(data)
  export default {
    methods: {
      checkChange(val) {
            console.log(val)
        },
      getCheckedKeys(val) {
          console.log(val)
      },
      clickNode (data, node, obj) {	
          console.log(data)
      //点击节点触发,不同层级的level事件不同
      //可对应界面变化，比如通过v-if控制模块显隐
        if (node.level === 1) {
          this.currLevel = 1
          this.currSignal = node.data
        } else if (node.level === 2) {
          this.currLevel = 2
          this.currChannel = node.data
        } else if (node.level === 3) {
			console.log(node.level)
		}
      },
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      return {
        data: data,
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>