// Script to open and close popup menu
var modal = document.getElementById("myModal");
var img = document.getElementById("menu");

img.onclick = function () {
    modal.style.display = "flex";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Script to rotate select-drop and change option as per selection
var select = document.getElementById("lang");
var selectWrapper = document.querySelector(".select-wrapper");

function handleArrowRotation() {
    if (select.classList.contains('open')) {
        select.classList.remove('open');
    } else {
        select.classList.add('open');
    }
}

select.addEventListener('click', function () {
    handleArrowRotation();
});

select.addEventListener('change', function () {
    select.classList.remove('open');

    // Move selected option to the top
    let selectedOption = select.options[select.selectedIndex];
    select.prepend(selectedOption);
});

// Script to refresh page when myaccount button is clicked in popup  menu
document.getElementById('menuAccount').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('myModal').style.display = 'none';
});

//Script for translation
const translations = {
    EN: {
        infoDiv: "Status: Active<br>Mobile no: 1234567890",
        recent: "Recently Play",
        daily: "Daily Play",
        unsubBtn: "Unsubscribe",
        footCont: "@ kidsStation",
        menuHome: "Home",
        menuAccount: "My Account",
        menuContact: "FAQ",
        menuTC: "T & C"
    },
    AR: {
        infoDiv: "الحالة: نشط<br>رقم الهاتف: 1234567890",
        recent: "لعب مؤخراً",
        daily: "لعب يومي",
        unsubBtn: "إلغاء الاشتراك",
        footCont: "@ kidsStation",
        menuHome: "الرئيسية",
        menuAccount: "حسابي",
        menuContact: "أسئلة شائعة",
        menuTC: "الشروط والأحكام"
    }
};

function translatePage(lang) {
    const text = translations[lang];
    document.getElementById('infoDiv').innerHTML = text.infoDiv;
    document.getElementById('recent').innerHTML = text.recent;
    document.getElementById('daily').innerHTML = text.daily;
    document.getElementById('unsubBtn').innerHTML = text.unsubBtn;
    document.getElementById('foot-cont').innerHTML = text.footCont;
    document.getElementById('menuHome').innerHTML = text.menuHome;
    document.getElementById('menuAccount').innerHTML = text.menuAccount;
    document.getElementById('menuContact').innerHTML = text.menuContact;
    document.getElementById('menuTC').innerHTML = text.menuTC;

    // Apply right-to-left direction for Arabic
    //document.body.style.direction = lang === 'AR' ? 'rtl' : 'ltr';
    //}
}

document.getElementById('lang').addEventListener('change', function () {
    localStorage.setItem('kidLang', this.value);
    translatePage(this.value);
});

// Initialize the page with the saved language from localStorage or default to English
document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('kidLang') || 'EN'; // Default to English if no language is saved
    document.getElementById('lang').value = savedLang; // Set the select element to the saved language
    translatePage(savedLang);
});