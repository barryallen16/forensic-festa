var sidenav= document.querySelector(".side-navbar")
var on=document.getElementById("one")
function show(){
    sidenav.style.left="0"
}
on.addEventListener("click",function(){
    sidenav.style.left="-60%"
})
function toggleSidebar() {
    var sidenav = document.querySelector(".side-navbar");
    var isSidebarOpen = sidenav.style.left === "0%";

    if (isSidebarOpen) {
        sidenav.style.left = "-60%"; // Hide sidebar
    } else {
        sidenav.style.left = "0"; // Show sidebar
    }
}

// Open sidebar when menu toggle is clicked
document.querySelector(".navbar-menu-toggle").addEventListener("click", toggleSidebar);

// Close sidebar when clicking on sidebar links
document.querySelectorAll('.sidenavbar-link a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector(".side-navbar").style.left = "-60%"; // Hide sidebar
    });
});

// Close sidebar when clicking outside of it
window.addEventListener('click', function(event) {
    var sidenav = document.querySelector(".side-navbar");
    var menuToggle = document.querySelector(".navbar-menu-toggle");

    // Close sidebar if clicking outside and it's open
    if (sidenav.style.left === "0%" && !sidenav.contains(event.target) && event.target !== menuToggle) {
        sidenav.style.left = "-60%"; // Hide sidebar
}
});