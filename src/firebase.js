import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBCp6RpRKHLcgguwPtMJOoSsL2x8GZH1vo',
	authDomain: 'portfolio-contact-form-4ad39.firebaseapp.com',
	databaseURL:
		'https://portfolio-contact-form-4ad39-default-rtdb.firebaseio.com',
	projectId: 'portfolio-contact-form-4ad39',
	storageBucket: 'portfolio-contact-form-4ad39.appspot.com',
	messagingSenderId: '903516492864',
	appId: '1:903516492864:web:fe23204197987347e5bba5',
});

var db = firebaseApp.firestore();

export { db };
