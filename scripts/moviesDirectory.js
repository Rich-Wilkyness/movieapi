import { loadFooter, loadHeader } from "./utilities.mjs";
import ExternalServices from "./ExternalServices.mjs";
import moviesDirectory from "./movies.mjs";


loadHeader();
loadFooter();

const namePopular = 'Popular';
const elementPopular = document.querySelector("#popular");
const jsonFilePopular = 'movies';
const dataSourcePopular = new ExternalServices();
const movieDirectoryPopular = new moviesDirectory(dataSourcePopular, elementPopular, jsonFilePopular, namePopular);

movieDirectoryPopular.init();

const nameContinue = 'Continue';
const elementContinue = document.querySelector("#continue-watching");
const jsonFileContinue = 'movies';
const dataSourceContinue = new ExternalServices();
const movieDirectoryContinue = new moviesDirectory(dataSourceContinue, elementContinue, jsonFileContinue, nameContinue);

movieDirectoryContinue.init();



const movieDirectories = {
    Popular: movieDirectoryPopular,
    Continue: movieDirectoryContinue
};

document.addEventListener("DOMContentLoaded", function() {
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');

    prevButtons.forEach(prevButton => {
        prevButton.addEventListener("click", function() {
            const directoryId = this.getAttribute('directory');
            const currentMovieDirectory = movieDirectories[directoryId];
            currentMovieDirectory.plusSlides(-6);
        });
    });

    nextButtons.forEach(nextButton => {
        nextButton.addEventListener("click", function() {
            const directoryId = this.getAttribute('directory');
            const currentMovieDirectory = movieDirectories[directoryId];
            currentMovieDirectory.plusSlides(6);
        });
    });
});

