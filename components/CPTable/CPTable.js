import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'react-native-paper';
import { StyleSheet, Alert } from 'react-native';

export default function CPTable({ rows, titles, showResult, deleteItem }) {
    const [stateRows, updateRows] = useState(rows);
    const [stateTitles, updateTitle] = useState(titles);
    const [stateTotal, updateTotal] = useState(0);

    let tableTitle = [];
    let tableRows = [];

    function calcTotal() {
        let result = 0;

        for (var i in stateRows) {
            result += parseInt(stateRows[i].price);
        }

        return result;
    }

    function actionDeleteItem(i) {
        Alert.alert(
            'Atenção',
            'Deseja deletar este item do orçamento',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        delete stateRows[i];
                        updateRows(stateRows);
                        updateTotal(calcTotal());
                    }
                },
            ],
            { cancelable: false }
        )
    }

    function mountTitleTable() {
        for (var i in stateTitles) {
            const currentItem = stateTitles[i];
            tableTitle.push(
                <DataTable.Title key={i} style={i <= 1 ? styles.alignLeft : styles.title}>{currentItem}</DataTable.Title>
            );
        }
    }

    function mountRowTable() {
        for (var i in stateRows) {
            const currentIndex = i;
            const rows = Object.values(stateRows[i]);
            const cells = [];

            for (var j in rows) {
                const currentCell = rows[j];
                cells.push(
                    <DataTable.Cell key={j} style={j <= 1 ? styles.alignLeft : styles.cell}>{currentCell}</DataTable.Cell>
                );
            }

            tableRows.push(
                <DataTable.Row key={i} style={styles.row} onPress={deleteItem ? () => actionDeleteItem(currentIndex) : () => false} >
                    {cells}
                </DataTable.Row>
            );
        }
    }

    const init = function () {
        mountTitleTable();
        mountRowTable();
    }

    init();

    useEffect(() => {
        if (showResult) {
            updateTotal(calcTotal());
        }
    }, []);

    return (
        <DataTable style={styles.table}>
            <DataTable.Header style={styles.header}>
                {tableTitle}
            </DataTable.Header>
            {tableRows}
            {
                showResult ? (
                    <DataTable.Row style={styles.showResult}>
                        <DataTable.Cell style={styles.alignLeft}>Valor Total</DataTable.Cell>
                        <DataTable.Cell style={styles.cell}>{stateTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</DataTable.Cell>
                    </DataTable.Row>
                ) : (<></>)
            }
        </DataTable>
    );

};

CPTable.propTypes = {
    rows: PropTypes.array.isRequired,
    titles: PropTypes.array.isRequired,
    showResult: PropTypes.bool,
    deleteItem: PropTypes.bool,
};

const styles = StyleSheet.create({
    cell: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    alignLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    showResult: {
        backgroundColor: '#ccc',
        marginTop: 40,
    },
});
