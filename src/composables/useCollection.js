import {ref} from "vue";
import {projectFirestore} from "@/firebase/config";


const useCollection = (collectionToConnet)=>{
    //create a new error every time we use this
    //useCollection composable
    const error = ref(null)

    const addDoc = async (doc) => {
        //in every request reset the error if there was one
        error.value = null

        try{
            await projectFirestore.collection(collectionToConnet).add(doc)
        }catch (err){
            console.log(err.message)
            error.value = 'Could not send the message'
        }
    }

    return { error, addDoc}
}

export default useCollection