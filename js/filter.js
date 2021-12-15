const products = [
  { lable: 'Samsung', model: 'A10s' },
  { lable: 'Motorolla', model: 'E398' },
  { lable: 'Nokia', model: '6233' },
  { lable: 'Siemens', model: 'C70' },
  { lable: 'Lenovo', model: 'A3000' },
  
];

const ref = {
  input: document.querySelector('.js-input-filter'),
  ulRef:document.querySelector('.js-list')
}

ref.input.addEventListener('input', _.debounce(filterChangeLable, 500));
// ref.input.addEventListener('input', _.debounce(filterChangeModel, 500));
const listItems = createItemList(products);

populateList(listItems);

function createItemList(items) { 
  return items.map(item => `<li>${item.lable} ${item.model}</li>`).join('')
}

function filterChangeLable(evt) { 
  
  const filter = evt.target.value.toLowerCase();
 
  const filterItemsLable = products.filter(item => item.lable.toLowerCase().includes(filter));

  const listItem = createItemList(filterItemsLable);
 populateList(listItem)
}

// function filterChangeModel(evt) { 
//   const modelFilter = evt.target.value.toLowerCase();

//   const filterItemsModel = products.filter(m => m.model.toLowerCase().includes(modelFilter));

//   const modelItem = createItemList(filterItemsModel);

//   populateList(modelItem)
  
// }

function populateList(marcup) { 
  ref.ulRef.innerHTML = marcup;
}