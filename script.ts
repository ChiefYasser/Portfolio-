const addClickListener = (selector: string, callback: () => void): void => {
    const element = document.querySelector(selector) as HTMLButtonElement | null;
    if (element) {
        element.addEventListener("click", callback);
    }
};


const form = document.querySelector("#contactForm") as HTMLFormElement | null;
if (form) {
    form.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();
        form.reset(); // Just resetting form without any API call
    });
}


addClickListener("#download-cv", () => {
    const cvUrl = "cv-nmar.pdf";
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "cv-nmar.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
addClickListener("#c1", () => {
    const cvUrl = "jss.pdf";
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "jss.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
addClickListener("#c2", () => {
    const cvUrl = "unix.pdf";
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "unix.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
addClickListener("#c3", () => {
    const cvUrl = "ccc.pdf";
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "ccc.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});



addClickListener("#contact-linkedin", () => {
    window.open("https://www.linkedin.com/in/yassir-nmar-24813333b/", "_blank");
});

// 🐙 Open GitHub Profile
addClickListener("#github", () => {
    window.open("https://github.com/ChiefYasser", "_blank");
});


const darkModeToggle = document.getElementById("theme-toggle") as HTMLButtonElement | null;
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        const currentTheme = document.getElementById("theme-link") as HTMLLinkElement | null;
        if (currentTheme) {
            const newTheme = currentTheme.getAttribute("href") === "style.css" ? "style2.css" : "style.css";
            currentTheme.setAttribute("href", newTheme);
            localStorage.setItem("theme", newTheme === "style2.css" ? "dark" : "light");
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const themeLink = document.getElementById("theme-link") as HTMLLinkElement | null;
    if (themeLink && savedTheme) {
        themeLink.setAttribute("href", savedTheme === "dark" ? "style2.css" : "style.css");
    }
});
