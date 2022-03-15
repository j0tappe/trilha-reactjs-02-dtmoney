import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Salário',
        type: 'deposit',
        category: 'Extra',
        amount: 750,
        createdAt: new Date('2021-03-08 18:00:00'),
      },
      {
        id: 2,
        title: 'Passe Mensal',
        type: 'withdraw',
        category: 'Transporte',
        amount: 40,
        createdAt: new Date('2021-03-01 08:30:00'),
      },
      ],
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);