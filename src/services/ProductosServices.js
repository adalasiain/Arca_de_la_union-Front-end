class ProductosService {
    constructor() {
        this.serverUri = "https://arcadelaalianzaserver.onrender.com"
    }
    async GetProductsList() {
        try {
            const response = await fetch(`${this.serverUri}/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error al obtener los productos", error);
        }
    }
}

export default ProductosService;