<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm/>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router/dist/vue-router";
import {watch} from "vue";
import NewChatForm from "@/components/NewChatForm";
import ChatWindow from "@/components/ChatWindow";

export default {
  name: "Chatroom",
  components: {NewChatForm, Navbar, ChatWindow},

  setup(){
    const { user } = getUser();
    const router = useRouter()


    watch(user,()=>{
      if(!user.value){
        router.push({name:'welcome'})
      }
    })

  }
}
</script>

<style scoped>

</style>