<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-04 16:49:05
 * @LastEditTime: 2022-03-04 18:54:20
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
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(this.$router.options.routes)
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
</style>
