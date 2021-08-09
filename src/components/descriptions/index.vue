<template>
  <div class="card">
    <el-row type="flex">
      <el-col :span="4" style="border:1px solid red">
        <img src="@/assets/avator.jpeg" alt="avator">
      </el-col>
      <el-col :span="20">
    <!-- 基础信息 -->
    <el-descriptions class="margin-top" :column="2" border>
      <el-descriptions-item :span="1" :label="item.label" v-for="(item,index) in cardList" :key="index">
        {{item.value}}
      </el-descriptions-item>
    </el-descriptions>

    <!-- 复杂信息 -->
      </el-col>
    </el-row>
    <!-- 复合显示 -->
    <el-descriptions title="垂直带边框列表" class="margin-top" :column="2" border>
      <el-descriptions-item :span="1" :label="item.label" v-for="(item,index) in cardList" :key="index">
        {{item.value}}
      </el-descriptions-item>
    </el-descriptions>
    <div style="margin-top:1px"></div>
    <el-descriptions direction="vertical" :column="1" border>
      <el-descriptions-item label="National Citizen Identity Card(Front)/Passport">kooriookami</el-descriptions-item>
      <el-descriptions-item label="National Citizen Identity Card(Back)">18100000000</el-descriptions-item>
      <el-descriptions-item label="National Citizen Identity Card(Holding)" :span="2">苏州市</el-descriptions-item>
      <el-descriptions-item label="Bank Card Photo or Bank Statement" class="page">
        <img src="@/assets/avator.jpeg" alt="avator">
        <img src="@/assets/avator.jpeg" alt="avator">
        <img src="@/assets/avator.jpeg" alt="avator">
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import data from './data.json'
export default {
  name: 'card',
  data() {
    return {
      cardList: [
        {
          label: 'Member ID',
          value: ''
        },
        {
          label: 'Member Nickname',
          value: '1212121'
        },
        {
          label: 'Entity Legal Name',
          value: '12121212121'
        },
        {
          label: 'Admin',
          value: 'asasasasas'
        },
        {
          label: 'Create Date',
          value: 'asasasasas'
        },
        {
          label: 'Creator',
          value: ''
        }
      ]
    }
  },
  created() {
    this.cardData = data.data
    const labels = ['Member ID','Member Nickname','Entity Legal Name','Admin','Create Date','Creator','BD Sales','kyc Status','Channel Source', 'Tag']
    const values = ['Member ID','Member Nickname','Entity Legal Name','Admin','Create Date','Creator','BD Sales','kyc Status','Channel Source', 'Tag']
    labels.forEach((item) => {
      console.log(item)
    })
  }
}
</script>

<style lang="sass">
</style>