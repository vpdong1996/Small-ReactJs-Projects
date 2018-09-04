import React  from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import NotFound from './components/NotFound';
import Login from './components/Login';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : (location) => <About location={location}/>
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/products',
        exact : false,
        main : (match) => <Products match={match} />
    },
    {
        path : '/login',
        exact : false,
        main : (location) => <Login location={location} />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
]

export default routes;