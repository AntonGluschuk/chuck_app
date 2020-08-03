import React from 'react';
import { mount } from 'enzyme'
import App from './App';
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

describe("App component render the inner Content and SideBar components", () => {
    it('Should render Content component', () => {
        const wrapper = mount(<App/>);
        expect(wrapper.find(Content).length).toEqual(1);
    });
    it('Should render Sidebar component', () => {
        const wrapper = mount(<App/>);
        expect(wrapper.find(Sidebar).length).toEqual(1);
    });
});

