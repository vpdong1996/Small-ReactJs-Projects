import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductActionPage from './pages/ProductActionPage/ProdcutActionPage';


const routes = [{
    path : '/',
    exact: true,
    main : () => <HomePage />
    },
    {
    path : '/product',
    exact: false,
    main : () => <ProductPage />
    },
    {
    path : '/products/add',
    exact: false,
    main : ({history}) => <ProductActionPage history={history} />
        },
    {
    path : '/products/:id/add',
    exact: false,
    main : ({history,match}) => <ProductActionPage history={history} match={match}/>
    },
    {
    path : '',
    exact: false,
    main : () => <NotFound />
    },
    
];

export default routes;
