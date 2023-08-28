import React, { Text, View } from "react-native";
import Topo from "./components/Topo";
import Produtores from "./components/Produtores";


export default function Home () {

    return <Produtores topo={Topo} />
}