function openUrl(id, url, mesmaPagina=false) {
    document.getElementById(id).onclick = function () {
        if(mesmaPagina) {
            location.href = url;
        } else {
            window.open(url, '_blank');
        }
    }
}

openUrl(id="linkedin", url="https://www.linkedin.com/in/luan-cuba/");
openUrl(id="github", url="https://github.com/Lu4nzit0");
openUrl(id="email", url="mailto:luancuba.lc@gmail.com");

