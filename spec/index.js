import chai from "chai";
import { JSDOM } from "jsdom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const { window, document } = new JSDOM(
  "<!doctype html><html><body></body></html>"
);

global.window = window;
global.document = document;

global.expect = chai.expect;
global.assert = chai.assert;

Enzyme.configure({ adapter: new Adapter() });
