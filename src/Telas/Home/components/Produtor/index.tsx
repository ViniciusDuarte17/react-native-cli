import React, { useMemo, useReducer } from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ILista} from '../../../../@types/lista';
import { Estrelas } from '../../../../components/Estralas';


const distanciaMentro = (distancia: number) => {
 
  return `${distancia} m`
}

export const Produtor = ({nome, distancia, estrelas, imagem}: ILista) => {
 
  const [ selecionado, inverteSelecionado ] = useReducer(
    (selecionado) => !selecionado,
    false
  );

  const distanciaTexto = useMemo(
    () => distanciaMentro(distancia),
    []
  )

  return (
    <TouchableOpacity style={estilos.container} onPress={ inverteSelecionado }>
      <Image style={estilos.img} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.card}>
        <View style={estilos.conteudoNomeEstrala}>
          <Text style={estilos.texto}>{nome}</Text>
          <Estrelas 
            editavel={selecionado}
            grande={selecionado}
            quantidade={estrelas} 
            />
        </View>

        <View>
          <Text style={estilos.distancia}>{distanciaTexto}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: '5%',
    borderColor: '#20232a',
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    alignItems: 'center',
    paddingVertical: '4%',
    marginHorizontal: 16,
    borderRadius: 6,

    // android
    elevation: 4,

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conteudoNomeEstrala: {
    flexDirection: 'column',
    borderColor: '#20232a',
    marginLeft: 8,
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 6,
  },

  texto: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  estrelas: {
    marginLeft: 8,
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: 'bold',
    opacity: 0.6,
    paddingEnd: '5%'
  }
});
