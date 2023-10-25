import { getLocalStorage, renderListWithTemplate, setLocalStorage } from "./utilities.mjs";

export function moviesDirectoryTemplate(movie, directory) {
    return `<div class="movie-directory-${directory}">
        <a href="" class="addToContinue" movie-data="${movie.name}">
        <img src="${movie.smallImage}" alt="${movie.name} image click to play">
        </a>
        </div>`
}
export function movieBannerTemplate(featuredMovie) {

}



export default class moviesDirectory {
    constructor(dataSource, element, jsonFile, name) {
        this.dataSource = dataSource;
        this.element = element;
        this.jsonFile = jsonFile;
        this.name = name;
        this.slideIndex = 0;
    }   
    async init() {
        const movies = await this.dataSource.getData(this.jsonFile);
        if (this.name === 'Continue') {
            const moviesContinue = this.renderContinueWatching(movies)
            this.renderMoviesDirectory(moviesContinue);
        } else {
            this.renderMoviesDirectory(movies);
        }
        this.slideShow();
        document.querySelectorAll('.addToContinue').forEach((element) => {
            element.addEventListener('click', this.addToContinueDirectory.bind(this));
        });
    }
    renderContinueWatching(movies) {
         const continueWatching = getLocalStorage("continueWatching");
         return continueWatching.map(name => {
            const movieMatch = movies.find(movie => movie.name === name);
            return movieMatch;
         });
    }
    renderMoviesDirectory(movies) {
        renderListWithTemplate((movie) => moviesDirectoryTemplate(movie, this.name), this.element, movies);
    }
    addToContinueDirectory(event) {

        // const movieData = event.currentTarget.getAttribute('movie-data');
        // const movie = JSON.parse(movieData);
        const movie = event.currentTarget.getAttribute('movie-data');

        let continueWatching = getLocalStorage("continueWatching");

        if(!continueWatching || !Array.isArray(continueWatching)) {
            continueWatching = []
        }
        const alreadyWatching = continueWatching.some((watchedMovie) => {
            return watchedMovie === movie;
        });

        if (!alreadyWatching) {
            continueWatching.push(movie);
            setLocalStorage("continueWatching", continueWatching);
        }
    }
     plusSlides(n) {
        this.slideIndex += n;
        this.slideShow();
    }
    slideShow() {
        const slides = document.querySelectorAll('.movie-directory' + '-' + this.name);

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        if (this.slideIndex >= slides.length) {
            this.slideIndex = 0;
        } else if (this.slideIndex < 0) {
            this.slideIndex = slides.length - 0;
        }
        let startIndex = this.slideIndex;
        let endIndex = this.slideIndex + 6;
        if (endIndex > slides.length) {
            startIndex = slides.length - 6;
            endIndex = startIndex + 6;
        }
        if (slides.length < 6) {
            for (let i = startIndex; i < slides.length; i++) {
                console.log(slides[i]);
                slides[i].style.display = 'block';
            }
        } else {
            for (let i = startIndex; i < endIndex; i++) {
                slides[i].style.display = 'block';
        }
        }
    }
}