import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from "@/views/Chatroom";
import {projectAuth} from "@/firebase/config";


//auth guards
const requireAuth = (to, from, next) =>{
  //get the current user
  let user = projectAuth.currentUser;
  //if user is null
  if(!user){
    next({ name:'welcome'})
  }else {
//proceed as usual
    next()
  }
}


const requireNoAuth = (to,from,next)=>{
  let user = projectAuth.currentUser;
  //if user is  logged in
  if(user){
    next({name:'chatroom'})
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    beforeEnter:requireNoAuth
  },
  {
    path: '/chatroom',
    name:'chatroom',
    component: Chatroom,
    //register the auth guard
    //the property runs the specified function b4 entering the route
    beforeEnter:requireAuth
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
