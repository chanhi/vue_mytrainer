<template>
  <div class="mypage">
    <header>My Page</header>
    <div class="mypage_container">
      <div class="calender">
        <MyCalender />
      </div>
      <div class="edit-info">
        <form action="#">
          <div class="my-name">
            <input type="text" />
          </div>
          <div class="my-age">
            <input type="text" />
          </div>
          <div class="my-gender">
            <input type="text" />
          </div>
        </form>
      </div>
      <div class="logout">
        <button @click="logout" class="logout-btn">logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import MyCalender from '../components/MyCalender.vue'

export default {
  name: 'MyPageView',
  components: { MyCalender },
  methods: {
    logout () {}
  }
}
</script>

<style>
.mypage {
  width: auto;
}
</style>
