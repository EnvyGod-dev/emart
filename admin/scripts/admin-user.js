document.addEventListener("DOMContentLoaded", function () {
    const users = [
        { name: "Бат", email: "bat@example.com" },
        { name: "Сараа", email: "saraa@example.com" },
        { name: "Анхаа", email: "ankhaa@example.com" },
        { name: "Нараа", email: "naraa@example.com" }
    ];

    const tbody = document.querySelector("tbody");

    // Хэрэглэгч бүрийн мэдээллийг хүснэгтэнд нэмэх
    users.forEach((user, index) => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="editUser(${index})">Засах</button>
                    <button onclick="deleteUser(${index})">Устгах</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
});

// Хэрэглэгч засах функц
function editUser(index) {
    alert(`Хэрэглэгчийг засах (Дугаар: ${index + 1})`);
    // Энд засварлах логик оруулна
}

// Хэрэглэгч устгах функц
function deleteUser(index) {
    alert(`Хэрэглэгчийг устгах (Дугаар: ${index + 1})`);
}
