const io = require('socket.io')(3000, {
    cors: {
      origin: '*',
    }
  });
  
  io.on('connection', socket => {
    console.log('Nuevo Usuario Conectado');
  
    socket.on('send_message', message => {
      console.log('Mensaje recibido:', message);
  
      // Reenviar el mensaje a todos los clientes menos a mi
      socket.broadcast.emit('receive_message', message);
      
  
      // Respuesta del chatbot
      //const botResponse = getBotResponse(message);
      //io.emit('receive_message', botResponse);
    });
  
    socket.on('disconnect', () => {
      console.log('Usuario desconectado');
    });
  });
  
  console.log('Socket.io server running on port 3000');
  
  // Función para generar una respuesta del chatbot
  function getBotResponse(message) {
    // Aquí puedes implementar cualquier lógica para generar respuestas
    // Por ejemplo, respuestas predefinidas o incluso integración con servicios de IA
    if (message.includes('hola')) {
        return '¡Qué pedo maje! ¿Qué ondas?';
    } else if (message.includes('adios') || message.includes('no')) {
        return 'Dale pues, busca quien te pise.';
    } else if (message.includes('como estas')) {
        return 'Pues aquí sobreviviendo, ¿y vos qué pedo?';
    } else if (message.includes('bien')) {
        return '¡Pijudo! ¿Necesitás algo más o qué onda?';
    } else if (message.includes('quien eres')) {
        return 'Soy una IA hecha por el ingeniero Hans Barahona, un crack ese man. ¿Quéres saber algo mas de el?';
    } else {
        return 'Puta, no entendí ni verga. ¿Me lo repetís, porfa?';
    }
}


  