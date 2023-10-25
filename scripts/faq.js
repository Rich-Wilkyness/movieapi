import ExternalServices from "./ExternalServices.mjs";
import Faq from "./faqs.mjs";
import { loadFooter } from "./utilities.mjs";

loadFooter();

const element = document.querySelector(".faq-item");
const jsonFile = 'faqs';
const dataSource = new ExternalServices();
const faq = new Faq(dataSource, element, jsonFile);

faq.init();

