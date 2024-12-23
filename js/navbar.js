let link_text_table = {
    "index": "Főoldal",
    "kavek": "Kávéfajták",
    "suti": "Sütemények",
    "blog": "Blog"
}

document.body.onload = makeNavbar(["index", "kavek", "logo", "suti", "blog"]);

let nav_open = false;

function makeNavbar(args) {
    let navbar = document.createElement("div");

    navbar.className = "navbar";
    navbar.classList.add("entergroup2");
    
    let nav_logic = document.createElement("div");

    nav_logic.className = "logic";

    args.forEach(element => {
        if (element != "logo") {
            let menuopt = document.createElement("a");
            menuopt.href = element + ".html";
            menuopt.className = "navlink";

            let opt_txt = document.createElement("p");
            let txtnode = document.createTextNode(link_text_table[element]);
            opt_txt.appendChild(txtnode);

            menuopt.appendChild(opt_txt);
            nav_logic.appendChild(menuopt);
        }
        else {
            let menulogo = document.createElement("div");
            menulogo.className = "logo";

            let logo_img = document.createElement("img");
            logo_img.src = "pics/logo.png"

            menulogo.appendChild(logo_img);
            nav_logic.appendChild(menulogo);
        }
    });
    
    navbar.appendChild(nav_logic);

    document.body.appendChild(navbar);

    responsive();

    window.onresize = function(event) {
        responsive();
    };
}

function show_hide_nav() {
    if (nav_open) {
        document.body.getElementsByClassName("navbar")[0].classList.remove("fullscreen");
    } else {
        document.body.getElementsByClassName("navbar")[0].classList.add("fullscreen");
    }

    nav_open = !nav_open;
}

function responsive() {
    if (window.innerWidth <= 750) {
        document.body.getElementsByClassName("logo")[0].setAttribute( "onclick", "show_hide_nav()" );
    }
    else {
        document.body.getElementsByClassName("logo")[0].setAttribute( "onclick", "" );
        document.body.getElementsByClassName("navbar")[0].classList.remove("fullscreen");
    }
}