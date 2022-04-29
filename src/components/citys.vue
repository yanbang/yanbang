<template>
  <div style="display: flex;align-items: baseline;">
    <el-select
      ref="shiqu"
      class="filter-item"
      style="width: 130px;"
      v-model="provAndCity.province"
      @change="handleProvince"
      clearable
    >
      <el-option v-for="item in provinceList" :key="item" :label="item" :value="item"></el-option>
    </el-select><label style="margin:0 10px; font-weight:normal"></label>
    <el-select
      ref="quxian"
      class="filter-item"
      style="width: 130px;"
      v-model="provAndCity.city"
      @change="handleCity"
      clearable
    >
      <el-option v-for="item in cityList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
 
<script>
import { provinces as getProvinces, citys as getCitys } from '@/api/citys.js'
export default {
  name: 'citys',
  props: ['value'],
  data () {
    return {
      provAndCity: {
        province: this.value.province,
        city: this.value.city
      },
      provinceList: [],
      cityList: []
    }
  },
  created () {
    this.getCityData()
  },
  methods: {
    // 获取省
    getCityData: function () {
      this.provinceList = getProvinces()
      if (this.provAndCity.province) {
        this.cityList = getCitys(this.provAndCity.province)
      }
    },
    // 选省获取到市
    handleCity: function (e) {
      this.cityList = getCitys(e)
      // this.value.city = this.cityList[0]
      this.$emit('input', {
        province: this.provAndCity.province,
        city: e
      })
  
    },
    // 选省获取到市
    handleProvince: function (e) {
      this.cityList = getCitys(e)
      this.$emit('input', {
        province: this.provAndCity.province,
        city: this.cityList[0]
      })
    
    }
  },
  watch: {
    // 由于父组件中传入的v-model="XXXX",这里的xxxx是通过ajax取回来的数据
    // 所以，在传值的过程中是有一个变化：
    // 1. 初始值是""
    // 2. ajax回来之后，取到了，自动传入子组件（v-model是响应式）
    // 所以，要用watch监听这个变化
    // 格式是：
    // 字符段： {
    //   handler:(newVal, oldVal) {
 
    //   },
    //   deep: true
    // }
    value: {
      handler (newVal, oldVal) {
        // 更新省份
        this.provAndCity.province = newVal.province
        // 获取对应市级的数据
        this.cityList = getCitys(newVal.province)
        // 更新市
        this.provAndCity.city = newVal.city
      },
      deep: true
    }
  }
}
</script>
 
<style>
 
</style>
