class PedidosService {
  constructor() {
    this.serverUri= "https://arcadelaalianzaserver.onrender.com";
    // this.serverUri = "http://localhost:8080";
    this.pedidos = [];
  }

  async addPedido(pedido) {
    const response = await fetch(`${this.serverUri}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),

    });

    console.log(response)

    const data = await response.json();
    console.log(data);
    this.pedidos.push(data);
    return data;

  }

  getPedidos() {
    return this.pedidos;
  }
}

export default PedidosService;