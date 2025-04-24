export default function Categorias({ onSelectCategoria }) {
    const categorias = ["todas", "verduras/frutas", "bebidas", "carnes/pescados", "otros"];
  
    return (
      <div className="categorias">
        {categorias.map((cat) => (
          <button 
            key={cat} 
            onClick={() => onSelectCategoria(cat)}
            className="categoria-btn"
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }