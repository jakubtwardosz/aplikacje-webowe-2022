import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

export class FirebaseService {

    constructor() {        
        const app = initializeApp(firebaseConfig);
        console.log(app);
    }
}