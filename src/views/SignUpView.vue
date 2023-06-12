<template>
  <div class="signup_container signup_forms">
    <div class="sform signup">
      <div class="sform-content">
        <header class="login-header">Signup</header>
        <form action="#">
          <div class="field input-field">
            <input
              v-model="semail"
              type="email"
              placeholder="Email"
              class="input"
            />
          </div>
          <div class="field input-field">
            <input
              v-model="spassword"
              type="password"
              placeholder="Create password"
              class="password"
            />
          </div>
          <div class="field input-field">
            <input
              v-model="rtpassword"
              :type="spwType"
              placeholder="Confirm password"
              class="password"
            />
            <i @click="spwShowChange" :class="spwShowHide"></i>
          </div>
          <div class="field button-field">
            <button @click="signup">Signup</button>
          </div>
        </form>
        <div class="form-link">
          <span
            >Already have an account?
            <a href="#" class="link login-link">Login</a></span
          >
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
  name: 'SignUpView',
  data () {
    return {
      semail: '',
      spassword: '',
      rtpassword: '',
      spwShowHide: 'bx bx-hide eye-icon',
      spwType: 'password'
    }
  },
  methods: {
    signup () {
      this.$emit('signup')
      // signup funtion 1)success 2)fail
    },
    spwShowChange () {
      if (this.spwShowHide === 'bx bx-hide eye-icon') {
        this.spwShowHide = 'bx bx-show eye-icon'
        this.spwType = 'text'
      } else if (this.spwShowHide === 'bx bx-show eye-icon') {
        this.spwShowHide = 'bx bx-hide eye-icon'
        this.spwType = 'password'
      }
    }
  }
}
</script>

<style>
.signup_container {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sform {
  position: absolute;
  max-width: 430px;
  width: 100%;
  padding: 30px;
  border-radius: 6px;
  border: 3px solid #89ccf5;
}
.signup_forms.show-signup .sform.signup {
  opacity: 1;
  pointer-events: auto;
}
.signup_forms.show-signup .sform.login {
  opacity: 0;
  pointer-events: none;
}
.sform .field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
  border: 2px solid rgb(129, 236, 255);
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
.sform a {
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
.facebook-icon,
img.google-img {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
}
img.google-img {
  height: 20px;
  width: 20px;
  object-fit: cover;
}
a.google {
  border: 1px solid #cacaca;
}
a.google span {
  font-weight: 500;
  opacity: 0.6;
  color: #232836;
}

@media screen and (max-width: 400px) {
  .sform {
    padding: 20px 10px;
  }
}
</style>
