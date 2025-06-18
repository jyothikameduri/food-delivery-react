import {render,screen} from '@testing-library/react';
import RestaurantCard from '../RestaurantCards';
import '@testing-library/jest-dom';
import MOCK_DATA from '../Mocks/resCardMock.json';

it('should render RestaurantCard component with props Data',()=>{
    render(<RestaurantCard {...MOCK_DATA.info}/>); //spread is used here -> see how the props are send in ur code

    const name = screen.getByText('Theobroma');
    expect(name).toBeInTheDocument();
})

