<template>
  <div>
    about page
    <router-link to="/">to about</router-link>
    <div v-for="(item, index) in list">{{ item.workerName }}</div>
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
