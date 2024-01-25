window.onload = function () {
    const encEmail = "a2V2aW4ua2lyY2huZXI5OEBnbWFpbC5jb20=";
    const form = document.getElementById("contact");
    form.setAttribute("href", "mailto:".concat(atob(encEmail)));
};