// Inicialización de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCME1t3LkiDQH8ewWwSea1E9vBz6hMW1Kw",
    authDomain: "autoservicio-b5783.firebaseapp.com",
    databaseURL: "https://autoservicio-b5783-default-rtdb.firebaseio.com",
    projectId: "autoservicio-b5783",
    storageBucket: "autoservicio-b5783.firebasestorage.app",
    messagingSenderId: "440481269761",
    appId: "1:440481269761:web:786c648c150933e7ab1800",
    measurementId: "G-XW18WEV9VX"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database(app);
  
  // Función para agregar un pedido desde el menú
  document.getElementById('submitBtn').addEventListener('click', function () {
    const clientName = document.getElementById('clientName').value;
    const cafe = document.getElementById('cafe').value;
    const panqueques = document.getElementById('panqueques').value;
    const jugo = document.getElementById('jugo').value;
    const details = document.getElementById('details').value;
  
    const total = (cafe * 3) + (panqueques * 5) + (jugo * 4);
  
    const orderData = {
      clientName: clientName,
      cafe: cafe,
      panqueques: panqueques,
      jugo: jugo,
      total: total,
      details: details,
      status: "Pendiente"
    };
  
    // Enviar el pedido a Firebase
    const newOrderRef = database.ref('orders').push();
    newOrderRef.set(orderData);
    alert("Pedido Enviado!");
  });
  