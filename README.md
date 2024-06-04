# chat_app

Este es un proyecto de aplicación de chat desarrollado utilizando Flutter. Permite a los usuarios comunicarse entre sí en tiempo real.

## Estructura del Proyecto

El proyecto está organizado en varios archivos y directorios clave, cada uno con un propósito específico:

### `main.dart`

Este es el punto de entrada principal de la aplicación. Inicializa la conexión con el servidor de Socket.IO y configura el tema visual de la aplicación. También define la pantalla principal (`ChatScreen`) donde se muestran los mensajes y se envían nuevos mensajes.

### `server.js`

Configura y ejecuta el servidor de Socket.IO en el puerto 3000. Maneja las conexiones entrantes de los usuarios, retransmite los mensajes enviados por un usuario a todos los demás usuarios conectados excepto al remitente, y maneja eventos de desconexión.

### `chat.dart`

Define la interfaz de usuario para la pantalla de chat. Utiliza un `StreamController` para manejar la lista de mensajes y actualizar la UI en tiempo real cuando se recibe o envía un nuevo mensaje. Implementa la lógica para conectar al servidor de Socket.IO, enviar mensajes y recibir mensajes desde otros usuarios.

### `model.dart`

Contiene el modelo de datos utilizados en la aplicación `Message` mencionado en `chat.dart`, toma datos como la hora y si el mensaje es enviado por el mismo usuario; esto garantiza una mejor experiencia de usuario.

#### Personas que trabajaron en el proyecto

1. Kenner Barahona
2. Diego Andrade
3. Tatiana Guerrino
4. Dereck Perez
5. Christopher Rivera

