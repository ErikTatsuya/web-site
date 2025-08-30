async function get_request(){
    const response = await fetch('http://127.0.0.1:8000/');
    const data = await response.json();
    console.log(data);
    document.getElementById("paragraph_result").textContent = `Result: ${JSON.stringify(data.random_number)}`;
}