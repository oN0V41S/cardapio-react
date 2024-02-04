import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FooData";
import './modal.css'

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}
const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

interface ModalProps {
  closeModal(): void
}
export function CreateModal({closeModal}: ModalProps) {
  // Criando React Hooks para os campos do formulário
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess, isLoading } = useFoodDataMutate();

  // Função do Botão e Submit
  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image,
    };
    mutate(foodData);
  };

  // Hook para o valor de da variael inserida
  useEffect(() => {
    if(!isSuccess) return
    closeModal()
  }, [isSuccess])

  return(
  <div className="modal-overlay">
    <div className="modal-body">
      <h2>Cadastre um novo item no cardápio</h2>
      <form className="input-container">
        <Input label="Título" value={title} updateValue={setTitle} />
        <Input label="Preço" value={price} updateValue={setPrice} />
        <Input label="Imagem" value={image} updateValue={setImage} />
      </form>
      <button onClick={submit} className="btn-secondary">
        {isLoading ? 'postando' : 'postar'}
      </button>
    </div>
  </div>
  )
}

