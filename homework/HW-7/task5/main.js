function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1,'Petro','Petrov','petro@gmail.com', '+123456777', [{title: 'tv', price: 13000},{title: 'phone', price: 25000},{title: 'phone', price: 25000}]),
    new Client(2,'Ivan','Ivanov','ivan@gmail.com', '+123456771', [{title: 'tv', price: 10000}]),
    new Client(3,'Arkadiy','ogitok','arkadiy@gmail.com', '+123456772', [{title: 'watch', price: 16000},{title: 'laptop', price: 50000}]),
    new Client(4,'Stepan','Stepanov','stepan@gmail.com', '+123456773', [{title: 'mouse', price: 1000},{title: 'game-console', price: 20000}]),
    new Client(5,'Anatoly','Anatolyov','anatoly@gmail.com', '+123456774', [{title: 'keyboard', price: 1500},{title: 'tv', price: 20000},{title: 'phone', price: 25000}]),
]

let clients1 = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clients1);