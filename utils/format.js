export const usdToNumber = (currencyString) => {
	const numericValue = parseFloat(currencyString.replace(/[^0-9.-]+/g, ''));
	return numericValue;
};
