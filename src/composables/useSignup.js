import {ref} from "vue";
import {projectAuth} from "@/firebase/config";


const error = ref(null);
//signup a user
const signup = async (email,password, displayName)=>{
    //clear the error in case of stored error from previous req
    error.value = null;

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)
        //Check if there is a response
        if(!res){
            throw new Error("Something went wrong during signup")
        }
        //after signup ,update user profile by updating his/her username
        await res.user.updateProfile({ displayName })
        error.value = null;
        //return the response for use later in other components
        return res;

    }catch (err){
        console.log(err.message);
        error.value = err.message;
    }

}

//returns only
const useSignup= () => {
    return { error, signup}
}

//export
export default useSignup