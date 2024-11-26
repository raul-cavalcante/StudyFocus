import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const salvarMeta = async (text, dataTermino) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error("Usuário não está logado.");
      return;
    }

    const userID = user.uid;

    const userMetasRef = collection(db, "users", userID, "metas");

    const docRef = await addDoc(userMetasRef, {
      text: text,
      dataTermino: dataTermino,
      criadoEm: new Date(),
    });

    console.log("Meta adicionada", docRef.id);
  } catch (error) {
    console.error("Erro", error);
  }
}
