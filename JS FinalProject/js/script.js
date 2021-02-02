  $( function() {                                                       //JQUERY UI
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  } );

const _theme = document.getElementsByClassName("themeBtn");             //getElementsByClassName method
const _selectedTheme = document.getElementById("selectedTheme");

function chooseCategory(value) {                                        //Onclick custom Function with paramters
    sessionStorage.setItem("theme",value);
    console.log(value);
    _selectedTheme.innerHTML = "Theme selected is " + value;            //innerHTML property
}