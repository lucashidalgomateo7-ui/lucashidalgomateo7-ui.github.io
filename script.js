document.addEventListener('DOMContentLoaded', () => {
    const inputMsg = document.getElementById('userMessage');
    const charNum = document.getElementById('charNum');
    const downloadBtn = document.getElementById('downloadBtn');

    // Actualizador de caracteres en tiempo real
    inputMsg.addEventListener('input', () => {
        const currentLength = inputMsg.value.length;
        charNum.textContent = currentLength;

        if (currentLength === 40) {
            charNum.style.color = 'red';
            charNum.style.fontWeight = 'bold';
        } else {
            charNum.style.color = '#6B7280';
            charNum.style.fontWeight = 'normal';
        }
    });

    // Función para crear y descargar el archivo .txt
    downloadBtn.addEventListener('click', () => {
        const text = inputMsg.value.trim();

        if (text === "") {
            alert("El mensaje está vacío. Escribe algo antes de generar el archivo.");
            return;
        }

        // Crear un Blob (Objeto de datos binarios) con el contenido del texto
        const blob = new Blob([text], { type: 'text/plain' });

        // Crear un enlace temporal en memoria
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'mensaje_lucas_hidalgo.txt'; // Nombre del archivo que se descargará

        // Simular un clic en el enlace para forzar la descarga
        document.body.appendChild(a);
        a.click();

        // Limpiar
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);

        // Vaciar el input después de descargar
        inputMsg.value = "";
        charNum.textContent = "0";
    });
});