import React, { useState, useReducer, useMemo } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Estrelas from '../../../componentes/Estrelas';

const distanciaEmMetros = (distancia) => {
  return `${distancia}m`;
};

export default function Produtor({ nome, imagem, distancia, estrelas }) {
  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia]
  );

  return (
    <TouchableOpacity onPress={inverterSelecionado} style={estilos.cartao}>
      <Image style={estilos.imagem} source={imagem} acessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}> {nome} </Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={estilos.distancia}> {distanciaTexto} </Text>
      </View>
    </TouchableOpacity>
  );
}
const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    //android
    elevation: 1.5,
    //ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
