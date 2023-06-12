<template>
  <div class="mypage">
    <header>My Page</header>
    <div class="mypage_container">
      <div class="todo">
        <TodoListVue />
      </div>
      <div class="itsme">
        <router-link to="/describe">프로그램 소개 버튼: 20202289 정찬희</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TodoListVue from '../components/TodoList.vue'

export default {
  name: 'MyPageView',
  components: { TodoListVue },
  data () {
    return {

    }
  }
}
</script>

<style>
.mypage {
  width: 100%;
}
.mypage_container {
  width: auto;
}
.itsme {
  background-color: aquamarine;
}
</style>
