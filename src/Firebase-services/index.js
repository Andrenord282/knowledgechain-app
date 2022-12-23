import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDW8dpz9T1m8NtXB8VsgeruH8ynBoPvgJI',
	authDomain: 'knowledgechain-70eab.firebaseapp.com',
	projectId: 'knowledgechain-70eab',
	storageBucket: 'knowledgechain-70eab.appspot.com',
	messagingSenderId: '309137582750',
	appId: '1:309137582750:web:af11104e7df7a89a2fe98f',
};

const firebasApp = initializeApp(firebaseConfig);
const db = getFirestore(firebasApp);
const auth = getAuth(firebasApp);
const storage = getStorage(firebasApp);

export { auth, db, storage };
