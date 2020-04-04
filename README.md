# Dependências

## react-native-paper
https://callstack.github.io/react-native-paper/data-table.html


### Parâmetros obrigatórios são:

#### titles
> const titles = ['titulo01', 'titulo02', 'titulo03', 'titulo04'];

#### rows 
> const rows = [{ 
>        id: 1, 
>        product: 'Painel Modular 14x12 extremme 01', 
>        qtd: 1, 
>        price: "340,00" 
>}];


#### showResult

Deve passar true ou falso (boolean) para informar se deverá ser exibido na tabela o row que exibe o valor total dos items da tabela.

#### deleteItem

Deve passar true ou false (boolean) para habilitar ou não a opção de deletar o item. Se passar true a opção de deletar o item fica disponível permitindo que quando o usuário clicar no item da tabela apareça um poup-up perguntando se deseja deletar aquele item da tabela.

### Importe o componente na página

```
import CPTable from '../components/CPTable';
```

### Adicione o componente dentro do return da página
```
<CPTable rows={rows} titles={titles} showResult={true} deleteItem={true} />
```

![Captura de Tela 2020-04-03 às 17 53 09](https://user-images.githubusercontent.com/31771420/78404222-4b982480-75d4-11ea-9a6d-d9f00c020808.png)