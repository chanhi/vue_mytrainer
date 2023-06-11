<template>
  <header>
    <nav class="header_nav">
      <div>
        <router-link to="/"><label class="logo">My Trainer</label></router-link>
      </div>
      <div>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/exercises">Exercises</router-link></li>
          <li><router-link to="/programs">Programs</router-link></li>
          <li v-if="!login_status">
            <router-link to="/mypage">My Page</router-link>
          </li>
          <li v-if="login_status">
            <a href="#" @click="showLogin = true">Log In</a>
          </li>
          <li v-if="login_status">
            <router-link to="/signup">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <LoginDialog v-if="showLogin" @login="login" @cancel="cancelLogin" />
</template>

<script>
import LoginDialog from '../components/LoginDialog.vue'

export default {
  components: {
    LoginDialog
  },
  data () {
    return {
      showLogin: false,
      login_status: true
    }
  },
  methods: {
    login () {
      this.showLogin = false
      this.login_status = false
    },
    cancelLogin () {
      this.showLogin = false
    }
  }
}
</script>

<style>
.header_nav {
  background: #0082e6;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

label.logo {
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}

nav ul {
  float: right;
  margin-right: 20px;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a {
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}
a.active,
a:hover {
  background: #1b9bff;
  transition: 0.5s;
}
.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}
@media (max-width: 952px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a {
    font-size: 16px;
  }
}
@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }
  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
  }
  a:hover,
  a.active {
    background: none;
    color: #0082e6;
  }
  #check:checked ~ ul {
    left: 0;
  }
}
</style>
