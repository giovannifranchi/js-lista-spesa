
const addBtn = document.getElementById('add-btn');
const inputItem = document.getElementById('input-item');
const tableBody = document.getElementById('table-body');
const errorHandler = document.querySelector('.error-handler');
const errorMassage = 'Please, enter a valid item';




addBtn.addEventListener('click', ()=>{
    if(isFinite(inputItem.value) || inputItem.value == ''){
        errorHandler.innerHTML = errorMassage;
    }else {
        const row = document.createElement('tr');
        tableBody.append(row);
        const tCellItem = document.createElement('td');
        tCellItem.classList.add('align-middle');
        const tCellDelete = document.createElement('td');
        row.append(tCellItem);
        row.append(tCellDelete);
        tCellItem.innerHTML = inputItem.value;
        const btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.classList.add('btn');
        btnDelete.classList.add('btn-secondary');
        btnDelete.classList.add('delete');
        tCellDelete.append(btnDelete);
        const icon = document.createElement('i');
        icon.classList.add('fa-solid');
        icon.classList.add('fa-trash');
        btnDelete.append(icon);
        inputItem.value = '';
    }
    const btnDelete = document.querySelectorAll('.delete');
    for(let i = 0; i < btnDelete.length; i++){
        const button = btnDelete[i];
        button.addEventListener('click', ()=>{
            const btnCell = button.parentElement;
            btnCell.parentElement.remove();
        });
    }
});



