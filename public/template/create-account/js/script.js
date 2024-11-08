const usersData = [
    {   
        logo: 'img/user.png',
        fName: "Moksedul Islam",
        designation: "Web Developer",
        link: '#',
    },
    {   
        logo: 'img/sumit.webp',
        fName: "Sumit Saha",
        designation: "Web Developer",
        link: '#',
    },
    {   
        logo: 'img/mahmudullah.png',
        fName: "Mahamudullah",
        designation: "Crickter",
        link: '#',
    },
    {   
        logo: 'img/mustafiz.webp',
        fName: "Mustafuzur Rahman",
        designation: "Crickter",
        link: '#',
    },
    {   
        logo: 'img/user.png',
        fName: "Moksedul Islam",
        designation: "Web Developer",
        link: '#',
    },
    {   
        logo: 'img/sumit.webp',
        fName: "Sumit Saha",
        designation: "Web Developer",
        link: '#',
    },
    {   
        logo: 'img/mahmudullah.png',
        fName: "Mahamudullah",
        designation: "Crickter",
        link: '#',
    },
    {   
        logo: 'img/mustafiz.webp',
        fName: "Mustafuzur Rahman",
        designation: "Crickter",
        link: '#',
    },
];
let userForm = document.getElementById("userForm");
let userList = document.getElementById("userList");
let fName = document.getElementById("fName");
let designation = document.getElementById("designation");
let loading = document.getElementById('loading');
let btnText = document.getElementById('btnText');
let accoutnCreateSuccess = document.querySelector(".accoutnCreateSuccess");

loading.style = "display:none";

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loading.style = "display:block";
    btnText.style = "display:none";
    setTimeout(() => {
        let listItem = document.createElement("li");
        let userLogoDiv = document.createElement("div");
        let userLogo = document.createElement("img");
        userLogo.src = 'img/user.png';
        let userDetails = document.createElement("div");
        let userName = document.createElement("a");
        let userDesignation = document.createElement("p");

        userName.href = "#";
        userName.textContent = fName.value;
        userDesignation.textContent = designation.value;
        let userLink = document.createElement("a");
        userLink.href = '#';
        userLink.id = "profileLink";

        userLogoDiv.appendChild(userLogo);
        listItem.appendChild(userLogoDiv);
        userDetails.appendChild(userName);
        userDetails.appendChild(userLink);
        userDetails.appendChild(userDesignation);
        listItem.appendChild(userDetails);

        userList.prepend(listItem);

        // push to userlist
        usersData.push({
            logo: userLogo.src = 'img/user.png',
            fName: fName.value,
            designation: designation.value,
            link: '#',
        });

        console.log(usersData);
        fName.value ='';
        designation.value ='';
        loading.style = "display:none";
        btnText.style = "display:block";
        accoutnCreateSuccess.style = "display:block";
        setTimeout(() => {
            accoutnCreateSuccess.style = "display:none";
        }, 5000);
    }, 2000);
})

let userLength = usersData.length;

for(i = 0; i < userLength; i++){
    let listItem = document.createElement("li");
    let userLogoDiv = document.createElement("div");
    let userLogo = document.createElement("img");
    let userDetails = document.createElement("div");
    let userName = document.createElement("a");
    let userDesignation = document.createElement("p");
    let userLink = document.createElement("a");
    userLink.href = '#';
    userLink.id = "profileLink";

    userLogo.src = usersData[i].logo;
    userName.href = usersData[i].link;
    userName.textContent = usersData[i].fName;
    userDesignation.textContent = usersData[i].designation;

    userLogoDiv.appendChild(userLogo);
    listItem.appendChild(userLogoDiv);
    userDetails.appendChild(userName);
    userDetails.appendChild(userLink);
    userDetails.appendChild(userDesignation);
    listItem.appendChild(userDetails);
    userList.append(listItem);
}

