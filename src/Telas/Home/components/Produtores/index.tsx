import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {ILista} from '../../../../@types/lista';
import {Produtor} from '../Produtor';
import { useProdutor } from '../../../../hooks/useProdutor';

interface Props {
  topo: React.ComponentType;
}

const Produtores: React.FC<Props> = ({topo: Topo}) => {
  const [titulo, list] = useProdutor()

  const topoList = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}> {titulo as string} </Text>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={ list as ILista[]}
        renderItem={({item} ) => <Produtor {...item } />}
        keyExtractor={item => item.nome}
        ListHeaderComponent={() => topoList()}
      />
   
    </>
  );
};

const estilos = StyleSheet.create( {
    titulo: {
        marginVertical: '5%',
        marginLeft: '5%',
        fontSize: 24,
        color: '#000',
        lineHeight: 26,
        opacity: 0.75
    }
} )

export default Produtores;
