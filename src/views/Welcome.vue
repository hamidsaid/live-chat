<template>
<div class="welcome container">
  <p>Welcome</p>
  <div v-if="showLogin">
    <h2>Login</h2>
    <LoginForm @login="enterChatroom"/>
    <p>No Account yet? <span @click="[showLogin = !showLogin]">SignUp</span> instead</p>
  </div>
  <div v-else>
    <h2>Sign up</h2>
    <SignupForm @signup="enterChatroom"/>
    <p>Already registered? <span @click="[showLogin = !showLogin]">Login</span></p>
  </div>

</div>
</template>

<script>
import SignupForm from "@/components/SignupForm";
import LoginForm from "@/components/LoginForm";
import {ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";
import Chatroom from "@/views/Chatroom";

export default {
  name: "Welcome",
  components:{
    SignupForm,
    LoginForm
  },
  setup(){
    const showLogin = ref(true);

    const router = useRouter()

    const enterChatroom = ()=>{
      router.push( {name: 'chatroom'} )
      console.log('entered')
    }
    return { showLogin, enterChatroom }
  }
}
</script>

<style  >
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
  cursor: pointer;
}
</style>