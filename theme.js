//Dark Mode

  const themeStylesheet = document.getElementById('theme');

  const storedTheme = parseInt(localStorage.getItem("themevalue")) || 0;
  if(storedTheme == 0){
        themeStylesheet.href = 'light-theme.css';
        document.getElementById('toplogo').src = "images/logo.svg";
        document.getElementById('scrollmark').src = "images/scroll.svg";
  }else if (storedTheme == 1) {
        themeStylesheet.href = 'dark-theme.css';
        document.getElementById('toplogo').src = "images/logo_dark.svg";
        document.getElementById('scrollmark').src = "images/scroll_dark.svg";
  }

  const themeToggle = document.getElementById('themetoggle');

    function toggle(){
      // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark-theme.css';
            localStorage.setItem('themevalue','1');

            document.getElementById('toplogo').src = "images/logo_dark.svg";
            document.getElementById('scrollmark').src = "images/scroll_dark.svg";



        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-theme.css';
            localStorage.setItem('themevalue','0');

            document.getElementById('toplogo').src = "images/logo.svg";
            document.getElementById('scrollmark').src = "images/scroll.svg";


        }

    }

    themeToggle.addEventListener('click', toggle);



//ViewMore Button

    function displaymorework() {
      var x = document.getElementById("hiddenworkrows");
      var y = document.getElementById("viewmorebtn");
      if ( window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
           x.style.display = 'block';
           y.style.display = 'none';
       } else {
           x.style.display = 'none';
       }
    }
