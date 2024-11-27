import ProductDetails from "../ProductDetails/ProductDetails";
import CustomizationForm from "../CustomizationForm/CustomizationForm";
import { useEffect, useState } from "react";
import CampanasService from "../../../services/CampanasService";

const CustomizationProduct = () => {
  const [alloys, setAlloys] = useState([]);
  const [finishes, setFinishes] = useState([]);
  const [weightSizes, setWeightSizes] = useState([]);

  // Función para obtener los datos de la API
  const fetchData = async () => {
    console.log("fetching data");
    const newCampanasService = new CampanasService();
    const response = await newCampanasService.GetBellOptions();
    setAlloys(response?.alloys);
    setFinishes(response?.finishes);
    setWeightSizes(response?.weightSizes);

    console.log(finishes);
  };
  // carga de datos
  useEffect(() => {
    fetchData();
  }, []);

  const [selectedAlloy, setSelectedAlloy] = useState(null);
  const [selectedFinish, setSelectedFinish] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Funciones para manejar las selecciones
  const handleAlloyChange = (alloy) => {
    // filtrar la aleación seleccionada
    const aleacion = alloys.find((a) => a.type === alloy);

    setSelectedAlloy(aleacion);
  };

  const handleFinishChange = (finish) => {
    // filtrar el acabado seleccionado
    const acabado = finishes.find((f) => f.id === finish);
    setSelectedFinish(acabado);
  };

  const handleSizeChange = (size) => {
    // filtrar el tamaño seleccionado
    const tamaño = weightSizes.find((w) => w.id === size);
    setSelectedSize(tamaño);
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
        />
      </div>
    </main>
  );
};

export default CustomizationProduct;
