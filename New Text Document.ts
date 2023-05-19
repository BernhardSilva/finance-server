const dataKpi = [
	{
		_id: '63bf8239f03239e002001612',
		totalProfit: 212000,
		totalRevenue: 283000,
		totalExpenses: 71000,
		expensesByCategory: { salaries: 38000, supplies: 13000, services: 10000 },
		__v: 0,
		createdAt: '2023-05-17T09:55:09.397Z',
		updatedAt: '2023-05-17T09:55:09.397Z'
	}
];

// const data = [
//     [ { name: 'salaries', value: 38000 }, { name: 'salaries of Total', value: 33000 } ],
//     [ { name: 'supplies', value: 13000 }, { name: 'supplies of Total', value: 58000 } ],
//     [ { name: 'services', value: 10000 }, { name: 'services of Total', value: 61000 } ]
//   ]

if (dataKpi) {

	const dataExpenses = dataKpi[0].totalExpenses;
	console.log('dataExpenses:', dataExpenses);
    


}
