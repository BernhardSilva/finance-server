export const stringToDollar = (stringToDollar) => {
	if (typeof stringToDollar === 'string') {
		const numericString = stringToDollar.replace(/[^0-9.]/g, '');
		const numberValue = Number(numericString);
		return numberValue;
	}
	return stringToDollar
};

export const numberToDollarString = (numberValue) => {
	if (typeof numberValue === 'string') {
		return numberValue;
	}
	const formattedValue = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(numberValue);
	return formattedValue;
};
