import { useState, useEffect } from "react";
import { ILista } from "src/@types/lista";
import { carregaProdutores } from "../service/carregaDados";


export const useProdutor = () => {
    const [titulo, setTitulo] = useState<string>('');
    const [list, setList] = useState<ILista[]>([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setList(retorno.lista);
      }, []);


    return [titulo, list]
}