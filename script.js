document.addEventListener("DOMContentLoaded", function() {
    console.log("The site is loaded!");
    
    const banners = document.querySelectorAll('.banner');
    banners.forEach(banner => {
        banner.addEventListener('mouseover', () => {
            banner.style.transform = 'scale(1.05)';
            banner.style.transition = 'transform 0.3s ease-in-out';
        });
        banner.addEventListener('mouseout', () => {
            banner.style.transform = 'scale(1)';
        });
    });

    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.style.transition = 'color 0.5s ease-in-out';
        heading.addEventListener('mouseover', () => {
            heading.style.color = '#ff0000';
        });
        heading.addEventListener('mouseout', () => {
            heading.style.color = 'red';
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/submit_form.php', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById('response').innerHTML = response.response;
            } else {
                document.getElementById('response').innerHTML = "An error occurred while submitting the form.";
            }
        };

        xhr.send(formData);
    });
    

    const modal = document.getElementById("contact-modal");


    window.openModal = function() {
        modal.style.display = "block";
    }


    window.closeModal = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});