import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$ 2.000</td>
                        <td>Venda</td>
                        <td>02/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.000</td>
                        <td>Casa</td>
                        <td>17/02/2022</td>
                    </tr>
                </tbody>
            </table>



        </Container>
    )
}