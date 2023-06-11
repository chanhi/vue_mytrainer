<template>
  <div class="login_container forms">
    <div class="form login">
      <div class="form-content">
        <header class="login-header">
          <div></div>
          <div class="login_title">Login</div>
          <div @click="cancelLogin" class="cancel_btn">
            <i class="bx bx-x"></i>
          </div>
        </header>
        <form action="#">
          <div class="field input-field">
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="input"
            />
          </div>
          <div class="field input-field">
            <input
              v-model="password"
              :type="pwType"
              placeholder="Password"
              class="password"
            />
            <i @click="pwShowChange" :class="pwShowHide"></i>
          </div>
          <div class="form-link">
            <a href="#" class="forgot-pass">Forgot password?</a>
          </div>
          <div class="field button-field">
            <button @click="login">Login</button>
          </div>
        </form>
        <div class="form-link">
          <span
            >Don't have an account?<router-link
              to="/signup"
              class="link signup-link"
              >Sign Up</router-link
            >
          </span>
        </div>
      </div>
      <div class="line"></div>
      <div class="media-options">
        <a href="#" class="field facebook">
          <i class="bx bxl-facebook facebook-icon"></i>
          <span>Login with Facebook</span>
        </a>
      </div>
      <div class="media-options">
        <a href="#" class="field google">
          <i class="bx bxl-google google-icon"></i>
          <span>Login with Google</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginDialog',
  data () {
    return {
      email: '',
      password: '',
      pwShowHide: 'bx bx-hide eye-icon',
      pwType: 'password'
    }
  },
  methods: {
    login () {
      this.$emit('login')
    },
    cancelLogin () {
      this.$emit('cancel')
    },
    pwShowChange () {
      if (this.pwShowHide === 'bx bx-hide eye-icon') {
        this.pwShowHide = 'bx bx-show eye-icon'
        this.pwType = 'text'
      } else if (this.pwShowHide === 'bx bx-show eye-icon') {
        this.pwShowHide = 'bx bx-hide eye-icon'
        this.pwType = 'password'
      }
    }
  }
}
</script>

<style>
.login_container {
  z-index: 100;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  position: absolute;
  max-width: 430px;
  width: 100%;
  padding: 30px;
  border-radius: 6px;
  background: #fff;
}

.form.signup {
  opacity: 0;
  pointer-events: none;
}
.forms.show-signup .form.signup {
  opacity: 1;
  pointer-events: auto;
}
.forms.show-signup .form.login {
  opacity: 0;
  pointer-events: none;
}

.login-header {
  font-size: 28px;
  font-weight: 600;
  color: #232836;
  display: flex;
  justify-content: space-between;
}
form {
  margin-top: 30px;
}
.form .field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
}
.field input,
.field button {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
}
.field input {
  outline: none;
  padding: 0 15px;
  border: 1px solid#CACACA;
}
.field input:focus {
  border-bottom-width: 2px;
}
.eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #8b8b8b;
  cursor: pointer;
  padding: 5px;
}
.field button {
  color: #fff;
  background-color: #0171d3;
  transition: all 0.3s ease;
  cursor: pointer;
}
.field button:hover {
  background-color: #016dcb;
}
.form-link {
  text-align: center;
  margin-top: 10px;
}
.form-link span,
.form-link a {
  font-size: 14px;
  font-weight: 400;
  color: #232836;
}
.form a {
  color: #0171d3;
  text-decoration: none;
}
.form-content a:hover {
  text-decoration: underline;
}
.line {
  position: relative;
  height: 1px;
  width: 100%;
  margin: 36px 0;
  background-color: #d4d4d4;
}
.line::before {
  content: "Or";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: #8b8b8b;
  padding: 0 15px;
}
.media-options a {
  display: flex;
  align-items: center;
  justify-content: center;
}
a.facebook {
  color: #fff;
  background-color: #4267b2;
}
a.facebook .facebook-icon {
  height: 28px;
  width: 28px;
  color: #0171d3;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
a.google .google-icon {
  height: 28px;
  width: 28px;
  color: #232836;
  font-size: 20px;
  font-weight: 500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cacaca;
}
.facebook-icon,
.google-icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
}

@media screen and (max-width: 400px) {
  .form {
    padding: 20px 10px;
  }
}
</style>
