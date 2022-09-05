<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-04 16:49:05
 * @LastEditTime: 2022-09-05 16:50:59
 * @Email: str-liang@outlook.com
 * @FilePath: \cscscs\src\views\Home.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>

    <div class="route_wrap">
      <div v-for="item in list" :key="item.id" class="route_item">
        <p class="route_item_name" @click="handleClickItem(item)">{{ item.name }}</p>
        <ul v-for="chidItem in item.children" :key="chidItem.id" class="route_ul">
          <li class="route_ul_name" @click="handleClickChidItem(chidItem)">{{ chidItem.name }}</li>
        </ul>
      </div>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import routeList from '@/data/data2.js'

export default {
  name: 'Home',
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    console.log(this.$router.options.routes)
    this.list = routeList
    console.log(routeList)
  },
  methods: {
    handleClickItem(val) {
      console.log(val.url)
    },
    handleClickChidItem(val) {
      let { url: path } = val
      if (path !== '') {
        this.$router.push(`/${path}`)
        console.log(path)
      }
    },
  },
}
</script>

<style scoped>
.content {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  border: 2px solid red;
}

.route_wrap {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 200px;
  overflow: hidden;
  overflow-y: scroll;
}
.route_item {
  width: 100%;
  display: flex;
}
.route_item_name {
  font-weight: 700;
  color: #999;
  cursor: pointer;
}
.route_ul {
  display: flex;
  list-style: none;
}
.route_ul_name {
  font-size: 12px;
  cursor: pointer;
}
</style>
