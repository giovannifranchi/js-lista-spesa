const items = [
    'Pane',
    'Mele', 
    'Pere',
    'Burro',
    'Caffé',
    'Cipolle'
];

const list = document.getElementById('items-list');

let index = 0;

while(index < items.length){
    let item = document.createElement('li');
    item.innerHTML = items[index];
    list.append(item);
    index = index + 1;
}