
// Ao clique do usuário, menu abre
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Fecha o dropdown menu
window.onclick = function(event) {
  if (!event.target.matches('.app-bar-open-drawer-button')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}