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
  let newList = list as ILista[]

  const topoList = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}> {titulo as string} </Text>
      </>
    );
  };

  const listOrderBy = newList.sort( (a: ILista, b: ILista): number => {
      if(a.nome > b.nome) {
        return 1
      } else if( a.nome < b.nome) {
        return -1
      }
      return 0
  }) 

  return (
    <>
      <FlatList
        data={ listOrderBy as ILista[]}
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
