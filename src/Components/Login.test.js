import React from 'react';
import { withRouter } from 'react-router-dom';
import { configure, render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import expect from 'expect';
import Login from './Login';
import renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

describe('<Login/> Component', () => {
    const initialState = {
        LoginReducer:
        {
            msg: '',
            status: true,
            newUser: true
        }
    }; 
     const mockStore = configureStore();
    //  const createStore = configureStore();
     let store ;
    //  let actualStore;

     beforeEach(() => {
        store = mockStore(initialState);
      //  actualStore = createStore(LoginReducer);
    });
   
    test('should contain Login class with snapshot', () => {
        const wrapper = shallow(<Login store = {store}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    test('should contain input field with password classname', () => {
        const wrapper = shallow(<Login store = {store}/>);
        expect(wrapper.exists('input.password'));
    });

    test('checking props', () => {
        const wrapper = shallow(<Login store = {store}/>);
      // wrapper.setProps({newUser:true});
        console.log("wrapper debug  ",wrapper.props())
        expect(wrapper.prop('data').newUser).toEqual(initialState.LoginReducer.newUser);
    });

});