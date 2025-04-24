export default function ProductList({ products, onAddToBasket }) {
    return (
      <section className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">{product.price}€ <span>({product.store})</span></p>
            <button 
              className="add-button"
              onClick={() => onAddToBasket(product)}
            >
              Añadir a la cesta
            </button>
          </div>
        ))}
      </section>
    );
  }