const url = 'http://localhost:3070';

export async function getClubs() {
    try {
        const data = await fetch(`${url}/clubs`);
        const response = await data.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}