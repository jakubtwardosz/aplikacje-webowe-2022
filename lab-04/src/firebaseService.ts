import { initializeApp } from "firebase/app";

export class FirebaseService {

    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyCnpt8mgcrkMQ2EoG00aFNQd5DVLT5JVuk",
            authDomain: "lab-04-35415.firebaseapp.com",
            projectId: "lab-04-35415",
            storageBucket: "lab-04-35415.appspot.com",
            messagingSenderId: "186132513557",
            appId: "1:186132513557:web:ed547ee1a7371c083a9f1c"
        };
        const app = initializeApp(firebaseConfig);

        console.log(app);
    }
}