<template>
  <div class="about">
    <el-row type="flex">
      <el-col :span="4" style="border:1px solid red">
        头像
      </el-col>
      <el-col :span="20">
        <el-descriptions class="margin-top" :column="2" border>
    <el-descriptions-item :span="1">  
      <template slot="label">
        用户名
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        <!-- 联系地址 -->
      </template>
      <!-- 江苏省苏州市吴中区吴中大道 1188 号 -->
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        <!-- 联系地址 -->
      </template>
      <!-- 江苏省苏州市吴中区吴中大道 1188 号 -->
    </el-descriptions-item>
  </el-descriptions>
      </el-col>
    </el-row>
  
  </div>
</template>
