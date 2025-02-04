// Actualiza la fecha y hora en el pie de página
document.addEventListener("DOMContentLoaded", () => {
    const footerDate = document.getElementById("footer-date");

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        footerDate.textContent = now.toLocaleDateString('es-ES', options);
    }

    // Actualiza cada segundo
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

// Hacer clic en las imágenes para abrir una versión ampliada
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");

    // Crear el modal de imagen
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
    modal.style.display = "none";  // Initially hidden
    document.body.appendChild(modal);

    const modalImage = document.createElement("img");
    modalImage.style.maxWidth = "90%";
    modalImage.style.maxHeight = "90%";
    modal.appendChild(modalImage);

    // Función para cerrar el modal
    const closeModal = () => {
        modal.style.display = "none";
    };

    modal.addEventListener("click", closeModal);

    galleryImages.forEach(image => {
        image.style.cursor = "pointer"; // Cambia el cursor al pasar sobre la imagen
        image.addEventListener("click", () => {
            modalImage.src = image.src; // Asigna la imagen ampliada al modal
            modal.style.display = "flex"; // Muestra el modal
        });
    });
});
