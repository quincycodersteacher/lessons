const CookieJar = {

  init() {
    document.getElementById("addCookie").addEventListener("click", () => this.addCookie());
    this.displayCookies();
  },

  addCookie() {
    let cKey = document.getElementById('key').value;
    let cValue = document.getElementById('value').value;
    let d = new Date();
    let expDays = 1;
    d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    let myCookie = cKey + "=" + cValue + ";" + expires + ";path=/";

    document.cookie = myCookie;
    this.displayCookies();
  },

  getCookies() {
    const cookies = document.cookie.split(';');
    let cookieList = '';
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      let cookieName = cookie.split('=')[0];
      if (cookieName != '') {
        let deleteCookieButtonHTML = '<button onclick="CookieJar.deleteCookie(\''+cookieName+'\')">delete</button>';
        //alert(deleteCookieButtonHTML);
        cookieList = cookieList + cookie + deleteCookieButtonHTML+"<br/>";
      }
    }
    return cookieList;
  },

  deleteCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';  
    this.displayCookies();
  },

  displayCookies() {
    document.getElementById('cookieList').innerHTML = this.getCookies();
  }
}

CookieJar.init();