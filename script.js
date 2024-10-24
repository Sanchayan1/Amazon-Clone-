
let slides = document.querySelectorAll('.slides img');

let currentSlide = 0;


// Function to show the next slide querySelectorAll

function showNextSlide() {

    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');

}


// Set interval to show the next slide every 3 seconds

setInterval(showNextSlide, 3000);


// Show the first slide

slides[0].classList.add('active');


 


const prevButton = document.getElementById('prev');

        const nextButton = document.getElementById('next');

        const productContainers = document.querySelectorAll('.product-container');


        let currentContainer = 0;


        nextButton.addEventListener('click', () => {

            currentContainer = (currentContainer + 1) % productContainers.length;

            updateProducts();

        });


        prevButton.addEventListener('click', () => {

            currentContainer = (currentContainer - 1 + productContainers.length) % productContainers.length;

            updateProducts();

        });


        function updateProducts() {

            productContainers.forEach((container, index) => {

                if (index === currentContainer) {

                    container.classList.remove('hidden');

                } else {

                    container.classList.add('hidden');

                }

            });

        }






