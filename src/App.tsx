import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/card";
import { useFoodData } from "./hooks/useFoodData";
import { CreateModal } from "./components/create-modal/createModal";

export default function App() {
  // criando lista de Objeto do Tipo FoodData
  const {data} = useFoodData();

  // Criando Estado do Moadal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    // Pegando o valor inserido por ultimo e inserindo o falor contrario
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {/* Mapeando a lista de objetos e criando componente se o array nao for vazio */}
        {data?.map(foodData => (
          <Card
            title={foodData.title}
            image={foodData.image}
            price={foodData.price}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}
