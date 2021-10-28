//Adapter to use Enzyme and Jest
import '@testing-library/jest-dom';

//Enzyme for react 17 requires installing: npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
