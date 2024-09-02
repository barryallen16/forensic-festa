
  function displayTeamInfo() {
    const teamName = localStorage.getItem('registeredTeam');
    console.log('Retrieved team name:', teamName); // Debugging line
  
    if (teamName) {
      document.getElementById('teamNameDisplay').textContent = teamName;
      document.getElementById('teamCircle').textContent = teamName.charAt(0).toUpperCase();
    } else {
      document.getElementById('teamNameDisplay').textContent = '';
      document.getElementById('teamCircle').textContent = 'T'; // Default placeholder or letter
    }
  }
  
  window.onload = function() {
    displayTeamInfo();
    displayTeamRank();
  };

function showlogout(){
  const logoutOption = document.getElementById('logoutOption');
        // Toggle the visibility of the logout option
        if (logoutOption.style.display === 'block') {
            logoutOption.style.display = 'none';
        } else {
            logoutOption.style.display = 'block';
        }
}
function logout() {
    // For example, you might redirect to a logout route or clear session data
    window.location.href = 'register.html'; // Redirect to logout route
}
      
  // fetch(csvUrl)
  //   .then(response => response.text())
  //   .then(data => {
  //     Papa.parse(data, {
  //       header: true,
  //       skipEmptyLines: true,
  //       complete: function(results) {
  //         const data = results.data;
  //         const scores = {};

  //         // Process each row in the CSV
  //         data.forEach(row => {
  //           const teamName = row['team name'];
  //           const score = row['sum Score'];

  //           if (teamName && !isNaN(score)) {
  //             if (!scores[teamName]) {
  //               scores[teamName] = 0;
  //             }
  //             scores[teamName] += parseFloat(score);
  //           }
  //         });

  //         const sortedTeams = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  //         const totalTeams = sortedTeams.length;
  //         const tbody = document.querySelector('#leaderboard tbody');
  //         const teamRank=document.getElementById("team-rank");
  //         // Variable to store the rank of the registered team
  //         let registeredTeamRank = -1;

  //         sortedTeams.forEach((team, index) => {
  //           const row = document.createElement('tr');
  //           const positionCell = document.createElement('td');
  //           const teamCell = document.createElement('td');
  //           const scoreCell = document.createElement('td');

  //           positionCell.textContent = index + 1;
  //           teamCell.textContent = team;
  //           scoreCell.textContent = scores[team];

  //           row.appendChild(positionCell);
  //           row.appendChild(teamCell);
  //           row.appendChild(scoreCell);
  //           tbody.appendChild(row);

  //           // Check if this is the registered team
  //           if (team === localStorage.getItem('registeredTeam')) {
  //             registeredTeamRank = index + 1;
  //           }
  //         });
          
  //         // Log the rank of the registered team in "current/total" format
  //         if (registeredTeamRank > -1) {
  //             teamRank.textContent=`# ${registeredTeamRank}/${totalTeams}`;
  //           console.log(`The registered team's rank is: ${registeredTeamRank}/${totalTeams}`);
  //         } else {

  //           console.log('The registered team is not in the leaderboard.');
  //         }
  //       }
  //     });
  //   })
  //   .catch(error => console.error('Error fetching data:', error));
  function displayTeamRank() {
    const registeredTeam = localStorage.getItem('registeredTeam');


    const csvUrl = 'https://docs.google.com/spreadsheets/d/1of0XnXDCFkMODGwnKZoY54xIUK_D__iq8jq0C8oMFm4/pub?output=csv';
  
    fetch(csvUrl)
        .then(response => response.text())
        .then(data => {
            Papa.parse(data, {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    const data = results.data;
                    const scores = {};

                    // Process each row in the CSV
                    data.forEach(row => {
                        const teamName = row['team name'];
                        const score = row['sum Score'];

                        if (teamName && !isNaN(score)) {
                            scores[teamName] = (scores[teamName] || 0) + parseFloat(score);
                        }
                    });

                    const sortedTeams = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
                    const totalTeams = sortedTeams.length;
                    // const registeredTeamRank = sortedTeams.indexOf(registeredTeam) + 1;

                    // // Display the rank of the registered team
                    // if (registeredTeamRank > 0) {
                    //     teamRankElement.textContent = `# ${registeredTeamRank} / ${totalTeams}`;
                    // } else {
                    //     teamRankElement.textContent = "Team not found in the leaderboard.";
                    // }
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const baseUrls = {
  1: 'https://docs.google.com/forms/d/e/1FAIpQLSd4Z7lJlPdsOkTEgY_g_6921ZFsHvWvMS8ybqKZPss4JUAg8A/viewform?usp=pp_url',
  2: 'https://docs.google.com/forms/d/e/1FAIpQLSeG-1q8b0-GfFLEPxG4hq5TnITMIXv65u2pepL9yu5_EzV2Lw/viewform?usp=pp_url',
  3: 'https://docs.google.com/forms/d/e/1FAIpQLSfKZUeLPbeAjFDuOaAi4Tcmv4B9cG4svKVPwbLK8C47YcOmFw/viewform?usp=pp_url',
  4: 'https://docs.google.com/forms/d/e/1FAIpQLScNMftMdHux0R1dakc5uljjZdu59kZrgYR1afC9IzqnIaVjaA/viewform?usp=pp_url',
  5: 'https://docs.google.com/forms/d/e/1FAIpQLSeTWpYyOSRWH6NwRBEP3aSJY16KeTH-y8XMK3V6TXZVNdxjYQ/viewform?usp=pp_url',
  6:'https://docs.google.com/forms/d/e/1FAIpQLSfVMFosArEMNkWCp1Z4FuO1LUBe_Gbe4Psruiz4NQdavm8cLg/viewform?usp=pp_url',
  7:'https://docs.google.com/forms/d/e/1FAIpQLScLg6FESe1PRvN7NppL_4P-9zdlZq6K_Uh72UglJ7aOuseHTQ/viewform?usp=pp_url',
  8:'https://docs.google.com/forms/d/e/1FAIpQLSfqiAybAzfEZArWKWd6T_FB4_FXF23w35_14p11ztA1rmI6Aw/viewform?usp=pp_url',
  9:'https://docs.google.com/forms/d/e/1FAIpQLSe7wQlvEz9Or4swYQ4nvdWzNtAtf1VHKASWWMeH3xhI2-sYGA/viewform?usp=pp_url',
  10:'https://docs.google.com/forms/d/e/1FAIpQLScj_DahyXypySJongVoPgs6Htv88uZvviCHHy7fd-lja_oGbg/viewform?usp=pp_url'
};

const entryIds = {
  1: 'entry.1506590875',
  2: 'entry.1744483946',
  3: 'entry.1419978430',
  4: 'entry.847611036',
  5: 'entry.1569512084',
  6:'entry.415397325',
  8:'entry.1187783073',
  7:'entry.1527825068',
  9:'entry.1519106754',
  10:'entry.612350200'
};



function openModal(modalId) {
    const teamName = localStorage.getItem('registeredTeam');
    if (!teamName) return; // Ensure teamName exists

    const modalElement = document.getElementById(`modal-${modalId}`);
    if (!modalElement) {
        console.error(`Modal with ID modal-${modalId} not found.`);
        return; // Add this to prevent errors
    }

    modalElement.style.display = 'block';
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');

    const formUrl = baseUrls[modalId];
    const entryId = entryIds[modalId];
    const fullFormUrl = `${formUrl}&${entryId}=${encodeURIComponent(teamName)}`;

    console.log(`Opening modal-${modalId} with URL:`, fullFormUrl);

    const iframe = document.createElement('iframe');
    iframe.src = fullFormUrl;
    iframe.width = '700';
    iframe.height = '500';
    iframe.style.border = 'none';
    iframe.style.margin = '0';
    iframe.textContent = 'Loading...';

    const classToAppend = document.querySelector(`#modal-${modalId} .modal-content`);

    classToAppend.innerHTML = ''; // Clear previous content
    classToAppend.appendChild(iframe);
}


function closeModal(modalId) {
    document.getElementById(`modal-${modalId}`).style.display = 'none';
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
}


// Close modal when clicking outside of it
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}