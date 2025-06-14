import {render , screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header_react from '../Header_react';
import { Provider } from 'react-redux';//jest understands only the jsx but we used redux which is from react-redux -> so import
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';//{Link} is from react-router-dom  -> so import
import { fireEvent } from '@testing-library/react';


it("should load header Component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header_react/>
            </Provider>       
        </BrowserRouter>    
    );
    const loginButton = screen.getByText('login');
    expect(loginButton).toBeInTheDocument();
});

it("should load header Component with a Cart",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header_react/>
            </Provider>       
        </BrowserRouter>    
    );
    const Cart = screen.getByTestId('cart-link');
    expect(Cart).toBeInTheDocument();
});

it("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header_react/>
            </Provider>       
        </BrowserRouter>    
    );
    const loginButton = screen.getByRole('button',{name:'login'});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button',{name:'logout'});
    expect(logoutButton).toBeInTheDocument();
});