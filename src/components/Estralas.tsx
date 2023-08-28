import React, {useState} from "react";
import {  StyleSheet, View } from "react-native";
import { Estrela } from "./Estrela";


interface Props {
    quantidade: number,
    editavel: boolean,
    grande: boolean
}

export const Estrelas: React.FC<Props> = (
    {
        quantidade: quantidadeAntiga,
        editavel = false,
        grande = false
    },
   
) => {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga)
   
    const RenderEstrelas: React.FC = () => {
        let listaEstrelas = [];

        for(let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                    key={i}
                    onPress={() => setQuantidade(i+1)}
                    grande={grande}
                    preenchido={ i < quantidade}
                    editavel={editavel}
                />
            )
        }
        return listaEstrelas
    }
  
    return(
        <View style={estilos.estrelas}>
           <RenderEstrelas />
        </View>
    )
} 

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
   
})