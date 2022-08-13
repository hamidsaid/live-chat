import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getCollection = (collectionToGet) => {

    const documents = ref(null)
    const error = ref(null)

    // register the firestore collection reference
    let collectionRef = projectFirestore.collection(collectionToGet)
        .orderBy('createdAt')

    //set a real time listener
    collectionRef.onSnapshot((snap) => {
        let results = []
        //add each doc to the array
        snap.docs.forEach(doc => {
            // must wait for the server to create the timestamp & send it back
            // we don't want to edit data until it has done this
            //i.e we don't want to use the local timestamp
            //the second line after && will not run till the first one
            //returns true
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        });

        // update values
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch the data'
    })

    return { error, documents }
}

export default getCollection