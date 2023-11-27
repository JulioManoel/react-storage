import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export default class BaseController {
  async getDocRef(docRef) {
    const res = await getDoc(docRef)
    return res.data()
  }

  async getDocument(document, collection, data = true) {
    const docSnap = await getDoc(doc(db, document, collection))
    if (data === true) return docSnap.data()
    return docSnap
  }

  async addDocument(document, payload) {
    try {
      return await addDoc(collection(db, document), payload)
    } catch (e) {
      console.error("Erro adding document: ", e)
    }
  }

  async setDocument(document, collection, payload) {
    await setDoc(doc(db, document, collection), payload)
  }

  async updateDocument(document, collection, payload) {
    await updateDoc(doc(db, document, collection), payload)
  }
}