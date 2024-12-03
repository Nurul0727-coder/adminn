const data = []
async function fetchData(params) {
    const response = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD');
    const data = await response.json();
    return data;
}
fetchData();