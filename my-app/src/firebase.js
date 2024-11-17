import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
	apiKey: 'AIzaSyDJy9OcTT4oSJ3DupMQLIUkevFkg557rv8',
	authDomain: 'todos-a1dcd.firebaseapp.com',
	projectId: 'todos-a1dcd',
	storageBucket: 'todos-a1dcd.firebasestorage.app',
	messagingSenderId: '780694625755',
	appId: '1:780694625755:web:a8119b9852c5741303dbfe',
	databaseURL: 'https://todos-a1dcd-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
