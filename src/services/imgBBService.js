async function uploadImageToImgBB(file) {
    const apiKey = "eb68a185f1d2d9ce66aabb30f9dc9e72"; // Reemplaza con tu clave de ImgBB
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    // Usa FormData para enviar la imagen
    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error al subir la imagen: ${response.statusText}`);
        }

        const data = await response.json();

        // Retorna la estructura personalizada
        return {
            imageId: data.data.id, // ID de la imagen
            url: data.data.url,    // URL directa de la imagen
        };
    } catch (error) {
        console.error("Error al subir la imagen a ImgBB:", error);
        throw error;
    }
}


export default uploadImageToImgBB