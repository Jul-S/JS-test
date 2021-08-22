const url = "https://reqres.in/api/users";

fetch(url)
    .then(res => res.json())
    .then(data => renderUsers(data.data.slice(0, 3)));

function renderUsers(array) {
    const list = document.createElement("ul");

    for (const user of array) {
        const listElement = document.createElement("li");
        const headerElement = document.createElement("h1");
        headerElement.innerHTML = user["first_name"];
        listElement.appendChild(headerElement);
        list.appendChild(listElement);
    }

    document.body.appendChild(list);
}