document.addEventListener('DOMContentLoaded', function() {
    const dropdownHeader = document.querySelector('.dropdown-header');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    dropdownHeader.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
        dropdownToggle.classList.toggle('active');
    });
});