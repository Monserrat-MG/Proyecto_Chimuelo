const botonCarta = document.getElementById("botonCarta");
const carta = document.getElementById("cartaContenido");

botonCarta.addEventListener("click", () => {
    const estaOculta = carta.classList.toggle("oculta");

    botonCarta.textContent = estaOculta
        ? "Abrir cartita ✉"
        : "Cerrar cartita ♡";

    botonCarta.setAttribute("aria-expanded", String(!estaOculta));
});

const misiones = [
    {
        icono: "☀️",
        titulo: "Misión 01: Las buenas",
        mensaje:
            "Celebrar tus logros, reírnos por cualquier tontería " +
            "y compartir los momentos bonitos contigo. " +
            "Quiero que sepas que tus alegrías también me importan. 🤎"
    },
    {
        icono: "☁️",
        titulo: "Misión 02: Las malas",
        mensaje:
            "No siempre voy a tener la solución perfecta, pero " +
            "quiero escucharte, acompañarte y recordarte que " +
            "no tienes que fingir estar bien conmigo. Aquí también " +
            "hay espacio para tus días difíciles. 🫂"
    },
    {
        icono: "💌",
        titulo: "Misión 03: Operación migajeo",
        mensaje:
            "AGENTE DAMYANTI, REPORTE DE MISIÓN: JAJAJAJA. " +
            "Procederemos a analizar el mensaje, consultar con " +
            "la compañera y recordar que las dos merecemos " +
            "cariño bonito y no andar recogiendo migajas. " +
            "Atentamente: tu cómplice de confianza. 🕵️‍♀️"
    },
    {
        icono: "🤎",
        titulo: "Misión 04: Cuidarnos",
        mensaje:
            "Cuando alguna de las dos se sienta mal, podemos " +
            "escucharnos, pedir ayuda y darnos el tiempo que " +
            "necesitemos. No tenemos que ser fuertes todo el " +
            "tiempo para merecer compañía y cariño. ✨"
    }
];

const botonesMision = document.querySelectorAll("[data-mision]");
const resultado = document.getElementById("resultadoMision");

botonesMision.forEach((boton) => {
    boton.addEventListener("click", () => {
        const indice = Number(boton.dataset.mision);
        const mision = misiones[indice];

        if (!mision) return;

        botonesMision.forEach((otroBoton) => {
            otroBoton.classList.remove("activa");
            otroBoton.setAttribute("aria-pressed", "false");
        });

        boton.classList.add("activa");
        boton.setAttribute("aria-pressed", "true");

        resultado.innerHTML = `
            <span class="resultado-icono">${mision.icono}</span>
            <h3>${mision.titulo}</h3>
            <p></p>
        `;

        resultado.querySelector("p").textContent = mision.mensaje;
    });
});

const botonSorpresa = document.getElementById("botonSorpresa");
const sorpresa = document.getElementById("sorpresa");

botonSorpresa.addEventListener("click", () => {
    const estaOculta = sorpresa.classList.toggle("oculta");

    botonSorpresa.textContent = estaOculta
        ? "Hay algo más... 🤎"
        : "Volver a guardar el secreto ♡";

    botonSorpresa.setAttribute("aria-expanded", String(!estaOculta));

    if (!estaOculta) {
        sorpresa.scrollIntoView({
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "auto" : "smooth",
            block: "center"
        });
    }
});