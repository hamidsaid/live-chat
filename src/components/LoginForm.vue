<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" v-model="email" required>
    <input type="password" placeholder="password" v-model="password" required>
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from "vue";
import useLogin from "@/composables/useLogin";

export default {
  name: "LoginForm",
  setup(props,context){
    //refs
    const email = ref('');
    const password = ref('');
    //destruct
    const {error, login} = useLogin();

    const handleSubmit = async () =>{
     await login(email.value,password.value)
      //if no error
      if (!error.value){
        console.log("Login successful")
        //emit a custom event
        context.emit('login')
      }
    }

    return {email, password, handleSubmit, error}
  }
}
</script>

<style scoped>

</style>