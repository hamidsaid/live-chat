import {ref} from "vue";
import {projectAuth} from "@/firebase/config";

const user = ref(projectAuth.currentUser)

//listens to user authentication status
//it'll be fired when the user logins in/logouts etc
//_user is the current user firebase return to us,
//will be null if the status is not logged in
projectAuth.onAuthStateChanged((_user)=>{
    console.log('User state change, Current user is:' , _user)
    user.value = _user
})

const getUser = ()=>{
    return { user}
}

export default getUser