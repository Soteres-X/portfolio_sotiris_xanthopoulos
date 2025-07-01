const scrollToTopButton = $("#scrollToTop");
const aboutMeSection = $("#aboutMe");



$(document).ready(function(){
    if (window.pageYOffset > 100) {
        scrollToTopButton.addClass("fixed");
        scrollToTopButton.removeClass("hidden");
    } else {
        scrollToTopButton.addClass("hidden");
        scrollToTopButton.removeClass("fixed");
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function getTopmostElementInViewport() {
        let topmostElement = null;
        let minTop = window.innerHeight;

        $(".check-viewport").each(function() {
            const element = this;
            if (isElementInViewport(element)) {
                const rect = element.getBoundingClientRect();
                if (rect.top < minTop) {
                    minTop = rect.top;
                    topmostElement = element;
                }
            }
        });

        return topmostElement;
    }

    function runForTopElementInViewport() {
        const topElement = getTopmostElementInViewport();

        $(".button").each(function() {
            $(this).removeClass("hover:bg-sky-800 text-white bg-gray-800 active bg-midnightNavy hover-bg-sky");
            $(this).addClass("hover-bg-midnightNavy hover-font-white text-midnightNavy hover-bg-sky");
            $("#skillsImage").attr("src", "./images/laptop-code.svg");
        });

        if (topElement) {
            switch(topElement.id){
                case "aboutMe":
                    $("#aboutMeButton").addClass("hover:bg-sky-800 text-white bg-gray-800 bg-midnightNavy hover-bg-sky");
                    $("#aboutMeButton").removeClass("hover-bg-midnightNavy hover-font-white text-midnightNavy hover-bg-sky");
                    break;
                case "education":
                    $("#educationButton").addClass("hover:bg-sky-800 text-white bg-gray-800 bg-midnightNavy hover-bg-sky");
                    $("#educationButton").removeClass("hover-bg-midnightNavy hover-font-white text-midnightNavy hover-bg-sky");
                    break;
                case "workExperience":
                    $("#workExperienceButton").addClass("hover:bg-sky-800 text-white bg-gray-800 bg-midnightNavy hover-bg-sky");
                    $("#workExperienceButton").removeClass("hover-bg-midnightNavy hover-font-white text-midnightNavy hover-bg-sky");
                    break;
                case "skills":
                    $("#skillsButton").addClass("hover:bg-sky-800 active text-white bg-gray-800 bg-midnightNavy hover-bg-sky");
                    $("#skillsImage").attr("src", "./images/laptop-codeWhite.svg");
                    $("#skillsButton").removeClass("hover-bg-midnightNavy hover-font-white text-midnightNavy hover-bg-sky");
                    break;
                case "projects":
                    $("#projectsButton").addClass("hover:bg-sky-800 text-white bg-gray-800 bg-midnightNavy hover-bg-sky");
                    $("#projectsButton").removeClass("hover-bg-midnightNavy hover-font-white text-midnightNavy hover-bg-sky");
                    break;
            };
        } else {
            console.log("No element is currently in the viewport");
        }
    }

    runForTopElementInViewport();
    $(window).on("scroll resize", runForTopElementInViewport);
});

$("#skillsButton").hover(function(){
    $("#skillsImage").attr("src", "./images/laptop-codeWhite.svg");
}, function(){
    console.log(!$("#skillsButton").hasClass("active"));
    if(!$("#skillsButton").hasClass("active")){
        $("#skillsImage").attr("src", "./images/laptop-code.svg");
    }
    
});

$(".button").on("click", function(event){
    $(".button").each(function() {
        $(this).removeClass("active");
    });
    var buttonClicked = event.currentTarget.id;
    $("#" + buttonClicked).addClass("active");
    if(buttonClicked = "themeButton"){
        $("html").toggleClass('dark');
    };
    
});

$(window).on('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.addClass("fixed");
        scrollToTopButton.removeClass("hidden");
    } else {
        scrollToTopButton.addClass("hidden");
        scrollToTopButton.removeClass("fixed");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}             