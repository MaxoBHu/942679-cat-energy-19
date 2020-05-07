var slideIndex = 1;
showSlides(slideIndex);


function plusSlide()
{
    showSlides(slideIndex += 1);
}

function minusSlide()
{
    showSlides(slideIndex -= 1);
}


function currentSlide(n)
{
    showSlides(slideIndex = n);
}


function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("slider__item");
    var points = document.getElementsByClassName("switch__item");
    if (n > slides.length)
    {
        slideIndex = 1
    }
    if (n < 1)
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < points.length; i++)
    {
        points[i].className = points[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    points[slideIndex - 1].className += " active";
}
