import React from 'react';
import { shallow } from 'enzyme'; // shallow is used to render just the component we wish to test rather than the whole application
import axios from 'axios'; // loading the component as we will need to overwrite it
import Todo from './Todo';

jest.mock('axios'); // mock the whole of axios so that we can overwrite functions during the test
it('will get Todos from the api', async () => {
  // create a fake data structure
  const data = [{
    text: 'some text',
    completed: false,
    id: 1,
  }];
  // implement the fake data to return
  axios.get.mockImplementation(() => Promise.resolve({
    data,
  }));
  // load the component and execute the function that we want to test
  const wrapper = shallow(<Todo label="What do you want to do?" />);
  const instance = wrapper.instance();
  await instance.getTodos();
  // assert that the component state is what we expect it to be
  expect(wrapper.state().todos).toBe(data);
});
