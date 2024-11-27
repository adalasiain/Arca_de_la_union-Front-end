import ProductDetails from "../ProductDetails/ProductDetails";
import CustomizationForm from "../CustomizationForm/CustomizationForm";
import { useEffect, useState } from "react";
import CampanasService from "../../../services/CampanasService";
import Modal from "../Modal/Modal";
import PedidosService from "../../../services/PedidosService";

const CustomizationProduct = () => {
  const [alloys, setAlloys] = useState([]);
  const [finishes, setFinishes] = useState([]);
  const [weightSizes, setWeightSizes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customNotes, setCustomNotes] = useState("");
  const [selectedAlloy, setSelectedAlloy] = useState(null);
  const [selectedFinish, setSelectedFinish] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    mailingAddress: "",
  });
  const [order, setOrder] = useState({});
  const [isOrderCreated, setIsOrderCreated] = useState(false);
  const [errors, setErrors] = useState({}); // Estado para manejar errores

  const total = selectedAlloy?.pricePerKg * selectedSize?.weight || 0;

  // Obtener datos de la API
  const fetchData = async () => {
    try {
      const newCampanasService = new CampanasService();
      const response = await newCampanasService.GetBellOptions();
      setAlloys(response?.alloys || []);
      setFinishes(response?.finishes || []);
      setWeightSizes(response?.weightSizes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAlloyChange = (alloy) => {
    const aleacion = alloys.find((a) => a.type === alloy);
    setSelectedAlloy(aleacion);
  };

  const handleFinishChange = (finish) => {
    const acabado = finishes.find((f) => f.id === finish);
    setSelectedFinish(acabado);
  };

  const handleSizeChange = (size) => {
    const tamaño = weightSizes.find((w) => w.id === size);
    setSelectedSize(tamaño);
  };

  const handleCustomerDataChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  // Validar que todos los campos requeridos estén completos
  const validateForm = () => {
    const newErrors = {};
    if (!selectedAlloy) newErrors.alloy = "Please select an alloy.";
    if (!selectedFinish) newErrors.finish = "Please select a finish.";
    if (!selectedSize) newErrors.size = "Please select a size.";
    if (!customer.name) newErrors.name = "Name is required.";
    if (!customer.email) newErrors.email = "Email is required.";
    if (!customer.phone) newErrors.phone = "Phone number is required.";
    if (!customer.mailingAddress) newErrors.address = "Mailing address is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMessage = (orderId) => {
    const phoneNumber = "5217713317692"; // Número del vendedor
    const baseURL = "https://example.com"; 
    const orderURL = `${baseURL}/orders/${orderId}`; // URL dinámica para el pedido
  
    const message = `New order created:\n\nAlloy: ${selectedAlloy?.type}\nFinish: ${selectedFinish?.finish}\nSize: ${selectedSize?.weight}kg\nTotal: $${total.toFixed(
      2
    )}\n\nCustomer: ${customer.name}\nPhone: ${customer.phone}\n\nView order details: ${orderURL}`;
  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const handlePay = async () => {
    if (!validateForm()) return; // Detener si la validación falla

    try {
      const newOrder = new PedidosService();
      const data = {
        alloy: selectedAlloy,
        finish: selectedFinish,
        weightSize: selectedSize,
        totalPrice: total,
        customNote: customNotes,
        customer: customer,
      };
      await newOrder.addPedido(data);
       // Guardar el pedido y obtener el ID generado
    const savedOrder = await newOrder.addPedido(data);
    const orderId = savedOrder.orderId; // Asegúrate de que el servicio devuelva un campo `id` único

    setOrder(data);
    setIsOrderCreated(true);

    // Enviar mensaje con la URL dinámica
    sendMessage(orderId)
      console.log("Order created:", data);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-full bg-[#b87333] bg-opacity-60 p-4">
      <div className="flex flex-col sm:flex-row rounded-3xl bg-[#eeeeee] w-full max-w-6xl mx-auto shadow-lg">
        <ProductDetails
          finishImages={selectedFinish?.images}
          alloy={selectedAlloy}
          size={selectedSize}
        />
        <CustomizationForm
          alloys={alloys}
          finishes={finishes}
          weightSizes={weightSizes}
          handleAlloyChange={handleAlloyChange}
          handleFinishChange={handleFinishChange}
          handleSizeChange={handleSizeChange}
          selectedAlloy={selectedAlloy}
          selectedFinish={selectedFinish}
          selectedSize={selectedSize}
          customNotes={customNotes}
          setCustomNotes={setCustomNotes}
          handlePay={() => setIsModalOpen(true)}
          errors={errors}
        />

        <Modal
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          customerData={customer}
          handleCustomerDataChange={handleCustomerDataChange}
          handlePay={handlePay}
          errors={errors}
        />
        
      </div>
    </main>
  );
};

export default CustomizationProduct;

