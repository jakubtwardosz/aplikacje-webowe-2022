// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { firebaseConfig } from "./firebaseConfig";
// import { Note } from './note';
// import { addDoc, deleteDoc, doc, collection, getDocs } from "firebase/firestore";

// export class FirebaseService {

//     app = initializeApp(firebaseConfig);
//     db = getFirestore(this.app);

//     // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0
//     async addNote(note: Note) {
//         await addDoc(collection(this.db, "notes"), {
//             title: note.title,
//             content: note.content,
//             color: note.color
//         });
//     }

//     async getNotes() {
//         const querySnapshot = await getDocs(collection(this.db, "notes"));
//         querySnapshot.forEach((doc) => {
//             let data = doc.data();
//             let note = new Note(data.title, data.content, data.color, doc.id);
//             note.create();
//         });
//     }

//     async deleteNote(id : string){
//         await deleteDoc(doc(this.db, "notes", id));
//     }

//     async editNote(id: string) {


        
//     }

// }
