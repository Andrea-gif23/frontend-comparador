import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ListaCompraPDF from './ListaCompraPDF'; // Lo crearemos después

export default function Basket({ items }) {
  // Agrupa productos por supermercado
  const productosPorSuper = items.reduce((acc, item) => {
    if (!acc[item.store]) acc[item.store] = [];
    acc[item.store].push(item);
    return acc;
  }, {});

  return (
    <aside className="basket">
      <h2>🛍️ Lista de la compra ({items.length})</h2>
      
      {/* Lista agrupada por supermercado */}
      {Object.entries(productosPorSuper).map(([supermercado, productos]) => (
        <div key={supermercado} className="supermercado-group">
          <h3>{supermercado}</h3>
          <ul>
            {productos.map((item, index) => (
              <li key={index}>
                {item.name} - <strong>{item.price}€</strong>
              </li>
            ))}
          </ul>
          <p className="subtotal">
            Subtotal: <strong>
              {productos.reduce((sum, item) => sum + item.price, 0).toFixed(2)}€
            </strong>
          </p>
        </div>
      ))}

      {/* Botón para exportar a PDF */}
      <PDFDownloadLink 
        document={<ListaCompraPDF productosPorSuper={productosPorSuper} />}
        fileName="lista_compra.pdf"
        className="pdf-button"
      >
        {({ loading }) => (loading ? 'Generando PDF...' : '📄 Guardar como PDF')}
      </PDFDownloadLink>
    </aside>
  );
}