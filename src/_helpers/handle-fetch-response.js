export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          console.log("Error handling response")
        }
        return data;
    });
}