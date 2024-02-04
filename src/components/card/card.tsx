import "./card.css";

// Define o tipo de propriedade da função
interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, title, image }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>
      Valor: 
        <b> R${price}</b>
        
      </p>
    </div>
  );
}
