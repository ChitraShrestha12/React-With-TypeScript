import Card from "./Card";
import type { ProductDetails } from "../types";
interface CardListProps {
  products: ProductDetails[];
}
function CardList({ products }: CardListProps) {
  return (
    <section className="card-container">
      {products?.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          category={product.category}
          images={product.images}
        />
      ))}
    </section>
  );
}
export default CardList;
