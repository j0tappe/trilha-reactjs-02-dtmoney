import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransaction } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransaction();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        deposit: 0,
        withdraw: 0,
        total: 0,
    })

    console.log(transactions);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas imagem" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-Br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas imagem" />
                </header>
                <strong> -
                    {new Intl.NumberFormat('pt-Br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total imagem" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-Br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}