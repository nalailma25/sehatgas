document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userTableBody = document.getElementById("userTableBody");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    function renderTable() {
        userTableBody.innerHTML = "";
        users.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <button class="edit" onclick="editUser(${index})">Edit</button>
                    <button class="delete" onclick="deleteUser(${index})">Hapus</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    function saveToLocalStorage() {
        localStorage.setItem("users", JSON.stringify(users));
    }

    userForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;

        users.push({ name, email, role });
        saveToLocalStorage();
        renderTable();
        userForm.reset();
    });

    window.deleteUser = function (index) {
        users.splice(index, 1);
        saveToLocalStorage();
        renderTable();
    };

    window.editUser = function (index) {
        const user = users[index];
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("role").value = user.role;

        users.splice(index, 1);
        saveToLocalStorage();
        renderTable();
    };

    renderTable();
});
