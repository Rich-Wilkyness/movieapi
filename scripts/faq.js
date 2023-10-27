import ExternalServices from "./ExternalServices.mjs";
import Faq from "./faqs.mjs";
<<<<<<< HEAD
import { loadFooter } from "./utilities.mjs";

loadFooter();
=======

>>>>>>> 7de7ebf3141da3f52ff3ce8d77c658e33c801903

const element = document.querySelector(".faq-item");
const jsonFile = 'faqs';
const dataSource = new ExternalServices();
const faq = new Faq(dataSource, element, jsonFile);

faq.init();

<<<<<<< HEAD
=======


>>>>>>> 7de7ebf3141da3f52ff3ce8d77c658e33c801903
