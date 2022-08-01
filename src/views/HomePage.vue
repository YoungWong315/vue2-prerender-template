<template>
  <div>
    home page
    <router-link to="/about">to about</router-link>
    <div class="item" v-for="(item, index) in list">{{ item.workerName }}</div>
  </div>
</template>

<script>
import Service from '@/modules/service'

export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    async getWeather() {
      const res = await Service.Weather.getWeather()
      this.list = res.data.list
    },
  },
  mounted() {
    this.getWeather()
  },
}
</script>

<style scoped>
.item {
  font-size: 20px;
  color: aqua;
}
</style>
