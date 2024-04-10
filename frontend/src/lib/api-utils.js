const getCountriesData = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_COUNTRIES_URL}/all`);
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        return await response.json();
        
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

const submitOrder = async (order) => {
    
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
}


const ApiUtils = {
    getCountriesData,
    submitOrder
}
export default ApiUtils