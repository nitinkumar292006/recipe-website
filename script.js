let btn = document.querySelector(".join-us");
let main = document.querySelector(".container");

btn.addEventListener("click", (btn) => {
    main.classList.remove("hidden");
})
document.addEventListener("mouseup", (e) => {
    if (!main.contains(e.target) && !btn.contains(e.target)) {
        main.classList.add("hidden");
    }
})


// ************************Catorgery Selaction Method******************************




const categoryButtons = document.querySelectorAll('.btn');
const itemsContainer = document.querySelector('.catogery-box');
const allItems = document.querySelectorAll('.item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Show the items container if hidden
        itemsContainer.classList.remove('hidden');

        // Show/hide items based on category
        allItems.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});