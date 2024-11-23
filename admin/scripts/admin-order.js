document.addEventListener("DOMContentLoaded", function () {
    const orderData = [
        { id: "001", user: "Бат", total: "250,000₮", status: "Хүлээгдэж байна" },
        { id: "002", user: "Сараа", total: "150,000₮", status: "Хүргэгдсэн" },
        { id: "003", user: "Анхаа", total: "350,000₮", status: "Цуцлагдсан" }
    ];

    const tbody = document.querySelector("tbody");

    orderData.forEach(order => {
        const row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.user}</td>
                <td>${order.total}</td>
                <td>${order.status}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
});
