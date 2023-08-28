import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

interface Props {
  onPress: () => void;
  editavel: boolean;
  preenchido: boolean;
  grande: boolean;
}

export const Estrela: React.FC<Props> = ({
  onPress,
  editavel,
  preenchido,
  grande,
}) => {
  const getImg = () => {
    if (preenchido) {
      return estrela;
    } else {
      return estrelaCinza;
    }
  };
  const estilos = estilosFuncao(grande);
  return (
    <TouchableOpacity onPress={onPress} disabled={!editavel}>
      <Image source={getImg()} style={estilos.estrela} />
    </TouchableOpacity>
  );
};

const estilosFuncao = (grande: boolean) =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
