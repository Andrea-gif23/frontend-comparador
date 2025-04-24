import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: { padding: 30 },
  header: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
  supermercado: { fontSize: 16, marginTop: 10, marginBottom: 5, color: '#3498db' },
  item: { fontSize: 12, marginLeft: 10, marginBottom: 3 },
  subtotal: { fontSize: 14, marginTop: 5, fontWeight: 'bold' }
});

const ListaCompraPDF = ({ productosPorSuper }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>🏪 Lista de la Compra</Text>
      
      {Object.entries(productosPorSuper).map(([supermercado, productos]) => (
        <View key={supermercado}>
          <Text style={styles.supermercado}>{supermercado}</Text>
          {productos.map((item, index) => (
            <Text key={index} style={styles.item}>
              • {item.name} - {item.price}€
            </Text>
          ))}
          <Text style={styles.subtotal}>
            Subtotal {supermercado}: {productos.reduce((sum, item) => sum + item.price, 0).toFixed(2)}€
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default ListaCompraPDF;