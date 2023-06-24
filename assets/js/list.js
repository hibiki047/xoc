var links = [
    {
        url: "https://xoc.pages.dev/",
        description: "Database",
        logo: "./assets/images/logo/tamoe.png",
    },
]

function generate_html_from_link(data) {
    var content_row = document.createElement("div");
    //Title
    var row_title_container = document.createElement("div");
    var row_title = document.createElement("a");
    row_title.classList.add("link", "underline", "grid-link");
    row_title.href = data.url;
    row_title_container.appendChild(row_title);
    //logo get(if any)
    if (data.logo) {
        row_title.innerText = "";
        var row_title_logo = document.createElement("img");
        row_title_logo.classList.add("link", "underline", "link-logo");
        row_title_logo.src = data.logo;
        row_title_logo.alt = data.description;
        row_title_logo.title = `${data.url}: ${data.description}`;
        row_title.appendChild(row_title_logo);
    }

    content_row.appendChild(row_title_container);
    return content_row;
}

var general = document.getElementById("grid-ae");

for (var i = 0; i < links.length; i++) {
    general === null || general === void 0 ? void 0 : general.appendChild(generate_html_from_link(links[i]));
}