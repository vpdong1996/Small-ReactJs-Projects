const initialState = 
    [{
        id : 1,
        name : 'Iphone X 256GB',
        image : 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description : 'This is the new Generation',
        price : 500,
        stock : 10,
        rating : 4
        
    },
    {
        id : 2,
        name : 'Iphone 8 Plus',
        image : 'https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-1-400x460-1-400x460.png',
        description : 'This is the new Iphone',
        price : 400,
        stock : 15,
        rating :  5
    },
    {
        id : 3,
        name : 'Samsung Galaxy Note 9',
        image : 'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png',
        description : 'This is the new Generation',
        price : 500,
        stock : 5,
        rating : 4

        
    }
];

const products = (state = initialState,action) =>{
    switch(action.type){
        default : return [...state];
    }
}
export default products;