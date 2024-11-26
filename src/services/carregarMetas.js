import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

export const carregarMetas = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });

};