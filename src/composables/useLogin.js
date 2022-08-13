import {ref} from "vue";
import {projectAuth} from "@/firebase/config";

const error = ref(null);

const login = async (email,password)=>{
    //reset
    error.value = null;

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email,password)
        //reset agaim
        error.value = null
        return res
    }catch (err){
        console.log(err.message)
        error.value ='Incorrect Login credentials';
    }

}

const useLogin = ()=>{
    return { error, login}
}

export default useLogin