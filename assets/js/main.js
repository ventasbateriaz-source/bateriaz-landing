
/* ========================================
   BATERIAZ - FUNCIONES PRINCIPALES
======================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Año automático en el pie de página
    const currentYear = new Date().getFullYear();
    const copyright = document.querySelector("[data-current-year]");

    if (copyright) {
        copyright.textContent = currentYear;
    }

    // Registrar clics en WhatsApp para futuras mediciones
    const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me/"]'
    );

    whatsappLinks.forEach((link) => {
        link.addEventListener("click", () => {
            console.info("Contacto por WhatsApp seleccionado.");
        });
    });

    // Registrar clics en llamadas telefónicas
    const phoneLinks = document.querySelectorAll(
        'a[href^="tel:"]'
    );

    phoneLinks.forEach((link) => {
        link.addEventListener("click", () => {
            console.info("Contacto telefónico seleccionado.");
        });
    });
});
