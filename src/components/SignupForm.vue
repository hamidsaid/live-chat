<template>
<form @submit.prevent="handleSubmit">
  <input type="text" placeholder="display name" v-model="displayName" required>
  <input type="email" placeholder="email" v-model="email" required>
  <input type="password" placeholder="password" v-model="password" required>
  <div class="error">{{ error }}</div>
  <button>Sign Up</button>
</form>
</template>

<script>
import {ref} from "vue";
import useSignup from "@/composables/useSignup";

export default {
  name: "SignupForm",
  setup(props,context){
    //declare the data properties
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    //destructure useSignup
    const {error , signup } = useSignup();

    const handleSubmit = async ()=>{
      await signup(email.value,password.value,displayName.value)

      if (!error.value){
        //emit a custom event
        context.emit('signup')
      }
    }
    //return them to access in the template
    return  {displayName, email, password, handleSubmit, error}
  }
}
</script>

<style scoped>

</style>