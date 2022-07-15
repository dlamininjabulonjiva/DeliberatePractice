const FormatCurrency = (currency: number) : string => {
    const numberFormat =
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currency);
    return numberFormat; 
}

export default FormatCurrency;