import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

// import { carregaProdutores } from '../../../servicos/carregaDados';
import useProdutores from '../../../hooks/UseProdutores';
import Produtor from './Produtor';

export default function Produtores({ topo: Topo }) {
  const [titulo, lista] = useProdutores();


  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={TopoLista}
      keyExtractor={({ id }) => id}
      data={lista}
      renderItem={({ item }) => <Produtor {...item} />}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
