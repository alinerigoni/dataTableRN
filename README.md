# Dependências

## react-native-paper
https://callstack.github.io/react-native-paper/data-table.html


### Adicione a linha abaixo nos imports da página que deseja usar o componente.

import { CPTable } from '../../components/CPTable';

### Dentro do return adicione a tag do componente.
<CPTable rows={rows} titles={titles} showResult={true} deleteItem={true} />

### Parâmetros obrigatórios são:

#### titles
const titles = ['titulo01', 'titulo02', 'titulo03', 'titulo04'];

#### rows  - (A lógica está preparada para inserir apenas os valores de cada chave do objeto) 
const rows = [
        { id: 1, product: 'Painel Modular 14x12 extremme 01', qtd: 1, price: "340,00" },
        { id: 2, product: 'Painel Modular 14x12 extremme 02', qtd: 2, price: "480,00" },
        { id: 3, product: 'Painel Modular 14x12 extremme 03', qtd: 1, price: "790,00" },
        { id: 4, product: 'Painel Modular 14x12 extremme 03', qtd: 2, price: "790,00" },
        { id: 5, product: 'Painel Modular 14x12 extremme 03', qtd: 1, price: "790,00" },
        { id: 6, product: 'Painel Modular 14x12 extremme 03', qtd: 2, price: "790,00" },
];


#### showResult
Deve passar true ou falso (boolean) para informar se deverá ser exibido na tabela o row que exibe o valor total dos items da tabela.

#### deleteItem
Deve passar true ou false (boolean) para habilitar ou não a opção de deletar o item. Se passar true a opção de deletar o item fica disponível permitindo que quando o usuário clicar no item da tabela apareça um poup-up perguntando se deseja deletar aquele item da tabela.

