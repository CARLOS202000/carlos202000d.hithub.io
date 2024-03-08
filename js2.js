document.addEventListener("DOMContentLoaded", function() {
    var giftButton = document.getElementById("giftButton");
    
    giftButton.addEventListener("click", function() {
        var sparkles = document.getElementById("sparkles");
        sparkles.classList.add("show");
        setTimeout(function() {
            window.location.href = "./regalo.html";
        }, 1000); // Delay de 1 segundo antes de redirigir
    });
});



// document.addEventListener("DOMContentLoaded", function() {
//     var giftButton = document.getElementById("giftButton");
    
//     giftButton.addEventListener("click", function() {
//       window.location.href = "./regalo.html";
//     });
//   });
  
// Función para la explosión y redirección
function explodeAndRedirect() {
    var giftButton = document.getElementById('giftButton');
    giftButton.style.animation = 'explode-animation 0.5s forwards'; // Aplica la animación de explosión

    setTimeout(function() {
        // Redirección después de la animación
        window.location.href = './regalo.html';
    }, 500); // Ajusta este valor para que coincida con la duración de la animación
}

 // Función para la explosión y redirección
function explodeAndRedirect() {
    var body = document.querySelector('body');
    var giftButton = document.getElementById('giftButton');
    giftButton.style.animation = 'explode-animation 0.5s forwards'; // Aplica la animación de explosión

    setTimeout(function() {
        body.classList.add('loading'); // Agrega la clase 'loading' al cuerpo
        setTimeout(function() {
            // Redirección después de un breve retraso
            window.location.href = './regalo.html';
        }, 500); // Ajusta este valor para que coincida con la duración de la animación
    }, 500); // Ajusta este valor para que coincida con la duración de la animación de explosión
}
