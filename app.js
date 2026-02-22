
// menu bar
const menuBtn = document.querySelector('.menu')
const drop_menu = document.querySelector('.drop-menu nav')

menuBtn.addEventListener('click', function() {
  if(drop_menu.style.height == '0px' || drop_menu.style.height == '') {
    drop_menu.style.height = '350px'
  } else {
    drop_menu.style.height = '0px'
  }
})

// dark mood

const btn = document.querySelectorAll(".fa-sun");
document.body.setAttribute("mood", window.localStorage.getItem("mood"));

btn.forEach((ele) => {
  window.localStorage.getItem("mood") == "light" || document.body.getAttribute("mood") == 'null'
    ? ele.classList.replace("fa-moon", "fa-sun")
    : ele.classList.replace("fa-sun", "fa-moon")
});

btn.forEach((ele) => {
  ele.onclick = function () {
    if (document.body.getAttribute("mood") == "light" || document.body.getAttribute("mood") == 'null') {
      window.localStorage.setItem("mood", "dark");
      document.body.setAttribute("mood", window.localStorage.getItem("mood"));
    } else {
      window.localStorage.setItem("mood", "light");
      document.body.setAttribute("mood", window.localStorage.getItem("mood"));
    }

    btn.forEach((ele) => {
      window.localStorage.getItem("mood") == "light"
        ? ele.classList.replace("fa-moon", "fa-sun")
        : ele.classList.replace("fa-sun", "fa-moon");
    });
  };
});
