import React from 'react';
import { ScrollView } from 'react-native';
import { CPTable } from '../../components/CPTable';


export default function PGTable (){
    const titles = ['ID', 'Produto', 'QTD', 'Valor'];
    const rows = [
        { id: 1, product: 'Painel Modular 14x12 extremme 01', qtd: 1, price: "340,00" },
        { id: 2, product: 'Painel Modular 14x12 extremme 02', qtd: 2, price: "480,00" },
        { id: 3, product: 'Painel Modular 14x12 extremme 03', qtd: 1, price: "590,00" },
        { id: 4, product: 'Painel Modular 14x12 extremme 03', qtd: 2, price: "290,00" },
        { id: 5, product: 'Painel Modular 14x12 extremme 03', qtd: 1, price: "190,00" },
        { id: 6, product: 'Painel Modular 14x12 extremme 03', qtd: 2, price: "690,00" },
    ];

    return (
        <ScrollView>
            <CPTable rows={rows} titles={titles} showResult={true} deleteItem={true} />
        </ScrollView>
    );
};
