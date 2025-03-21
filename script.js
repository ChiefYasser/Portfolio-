var addClickListener = function (selector, callback) {
    var element = document.querySelector(selector);
    if (element) {
        element.addEventListener("click", callback);
    }
};
// 📩 Contact Form Submission
var form = document.querySelector("#contactForm");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.reset(); // Just resetting form without any API call
    });
}
// 📥 Download CV
addClickListener("#download-cv", function () {
    var cvUrl = "cv-nmar.pdf";
    var a = document.createElement("a");
    a.href = cvUrl;
    a.download = "cv-nmar.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
addClickListener("#c1", function () {
    var cvUrl = "jss.pdf";
    var a = document.createElement("a");
    a.href = cvUrl;
    a.download = "jss.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
addClickListener("#c2", function () {
    var cvUrl = "unix.pdf";
    var a = document.createElement("a");
    a.href = cvUrl;
    a.download = "unix.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
addClickListener("#c3", function () {
    var cvUrl = "ccc.pdf";
    var a = document.createElement("a");
    a.href = cvUrl;
    a.download = "ccc.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
// 🔗 Open LinkedIn Profile
addClickListener("#contact-linkedin", function () {
    window.open("https://www.linkedin.com/in/yassir-nmar-24813333b/", "_blank");
});
// 🐙 Open GitHub Profile
addClickListener("#github", function () {
    window.open("https://github.com/ChiefYasser", "_blank");
});
// 🌙 Dark Mode Toggle
var darkModeToggle = document.getElementById("theme-toggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
        var currentTheme = document.getElementById("theme-link");
        if (currentTheme) {
            var newTheme = currentTheme.getAttribute("href") === "style.css" ? "style2.css" : "style.css";
            currentTheme.setAttribute("href", newTheme);
            localStorage.setItem("theme", newTheme === "style2.css" ? "dark" : "light");
        }
    });
}
// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", function () {
    var savedTheme = localStorage.getItem("theme");
    var themeLink = document.getElementById("theme-link");
    if (themeLink && savedTheme) {
        themeLink.setAttribute("href", savedTheme === "dark" ? "style2.css" : "style.css");
    }
});
