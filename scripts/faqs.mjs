import { renderListWithTemplate } from "./utilities.mjs";

export function faqTemplate(faq) {
    return `<div class="faq-question">
            <h3>${faq.question}</h3>
            <img src="/movieapi/public/images/icons/icons8-plus-50.png" alt="plus icon">
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>`
}

export default class Faq {
    constructor(dataSource, element, jsonFile) {
        this.dataSource = dataSource;
        this.element = element;
        this.jsonFile = jsonFile;
    }
    async init() {
        const faqs = await this.dataSource.getData(this.jsonFile);
        this.renderFaq(faqs);
        this.showAnswer();
    }
    renderFaq(faqs) {
        renderListWithTemplate(faqTemplate, this.element, faqs);
    }
    async showAnswer() {
        const faqQuestions = document.querySelectorAll(".faq-question");

        faqQuestions.forEach(function (question) {
            question.addEventListener("click", function () {
                const answer = question.nextElementSibling;
                console.log(answer);
                answer.style.display = answer.style.display === "block" ? "none" : "block";
            });
        });
    }
}