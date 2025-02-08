document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-button");
    const themeSelector = document.getElementById("theme-selector");
    const images = document.querySelectorAll(".image-container img");

    // Toggle theme selector visibility
    themeButton.addEventListener("click", () => {
        themeSelector.classList.toggle("hidden");
    });

    // Change background when an image is clicked
    images.forEach((img) => {
        img.addEventListener("click", function () {
            let imageUrl = img.getAttribute("src"); // Get full image path
            console.log("Selected Image:", imageUrl); // Debugging

            if (imageUrl) {
                document.body.style.backgroundImage = `url('${imageUrl}')`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
                document.body.style.backgroundRepeat = "no-repeat";
                themeSelector.classList.add("hidden"); // Hide selector after choosing
            } else {
                console.error("Image path not found!");
            }
        });
    });

    // Close theme selector when clicking outside
    document.addEventListener("click", (e) => {
        if (!themeSelector.contains(e.target) && !themeButton.contains(e.target)) {
            themeSelector.classList.add("hidden");
        }
    });
});
