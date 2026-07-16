if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/instalar/sw.js')
        .then(registration => {
          console.log('ServiceWorker registrado con éxito:', registration.scope);
        })
        .catch(error => {
          console.log('Fallo en el registro del ServiceWorker:', error);
        });
    });
  }
