<template>
  <Navbar />
</template>

<script>
import Navbar from "@/components/Navbar";
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router/dist/vue-router";
import {watch} from "vue";

export default {
  name: "Chatroom",
  components: {Navbar},

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