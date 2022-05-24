import * as admin from "firebase-admin";
import serviceAccount from "./queuit-firebase-adminsdk.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const firestore = admin.firestore();
