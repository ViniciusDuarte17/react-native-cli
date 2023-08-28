import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Logo from "../../../../assets/logo.png";
import { carregaTopo } from "../../../../service/carregaDados";

 class Topo extends React.Component {

    state = {
        topo: {
            boasVindas: '',
            legenda: ''
        }
    }

    atualizaTopo(): void {
        const retorno = carregaTopo()
        this.setState({topo: retorno})
    }

    componentDidMount(): void {
        this.atualizaTopo()
    }

    render() {
        return(
            <View style={estilos.topo}>
                <Image source={Logo} style={estilos.img} />
                <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
                <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
            </View>
        )
    }

}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16
    },
    img: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 42,
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight:26,
        color:'#A3A3A3'
    }

})

export default Topo