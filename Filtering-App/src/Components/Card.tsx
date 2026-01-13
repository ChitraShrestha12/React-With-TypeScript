interface CardProps {
  key: number;
  title: string;
  category: string;
  images: string;
}
function Card({title, category, images }: CardProps) {
  return (
    <div className="card">
      <img src={images} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>Category: {category}</p>
    </div>
  );
}
export default Card;
