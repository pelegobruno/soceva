importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDBLvUiI3cosf-oFo6bGp7RiG3NzbrejyY",
    authDomain: "socerva-27d0.firebaseapp.com",
    projectId: "socerva-27d0",
    storageBucket: "socerva-27d0.appspot.com",
    messagingSenderId: "913239732988",
    appId: "1:913239732988:web:YOUR_APP_ID"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manipula mensagens recebidas no segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log("Notificação em segundo plano:", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "assets/icons/SO-CEVA-192.png",
    });
});
