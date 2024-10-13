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
document.getElementById('menuTC').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('myModal').style.display = 'none';
});

// Script for translation
const translations = {
    EN: {
        tncTitle: "terms and condition",
        tncDetails: [
            "Acceptance of Terms: By using KidsStation, you agree to these terms.",
            "User Eligibility: Users must be 18 or older, or have parental/guardian consent.",
            "Account Registration: Keep account info confidential; you're responsible for activities.",
            "Code of Conduct: Follow a code of conduct; no cheating, harassment, or inappropriate behavior.",
            "Intellectual Property: OutrixWave Infotech Pvt. Ltd. owns all intellectual property; no reproduction without permission.",
            "Payment Terms: Pay all specified fees; payments are non-refundable. Termination: OutrixWave Infotech Pvt. Ltd. can terminate/suspend access without notice for violations.",
            "Disclaimer of Warranty: KidsStation is provided \"as is\" without any warranties.",
            "Limitation of Liability: OutrixWave Infotech Pvt. Ltd. is not liable for indirect, incidental, or consequential damages.",
            "Governing Law: Governed by the laws of Mumbai, Maharastra; disputes subject to Mumbai, Maharastra courts."
        ],
        footCont: "@ kidsStation",
        menuHome: "Home",
        menuAccount: "My Account",
        menuContact: "FAQ",
        menuTC: "T & C"
    },
    AR: {
        tncTitle: "الشروط والأحكام",
        tncDetails: [
            "قبول الشروط: باستخدام KidsStation، أنت توافق على هذه الشروط.",
            "أهلية المستخدم: يجب أن يكون عمر المستخدمين 18 عامًا أو أكبر، أو أن يحصلوا على موافقة أحد الوالدين أو الوصي.",
            "تسجيل الحساب: احتفظ بمعلومات الحساب سرية؛ أنت مسؤول عن الأنشطة.",
            "قواعد السلوك: اتبع قواعد السلوك؛ لا غش، تحرش، أو سلوك غير لائق.",
            "الملكية الفكرية: تمتلك شركة OutrixWave Infotech Pvt. Ltd. جميع حقوق الملكية الفكرية؛ ولا يجوز إعادة إنتاجها دون إذن.",
            "شروط الدفع: دفع جميع الرسوم المحددة؛ المدفوعات غير قابلة للاسترداد. الإنهاء: يمكن لـ OutrixWave Infotech Pvt. Ltd. إنهاء/تعليق الوصول دون إشعار في حالة الانتهاكات.",
            "إخلاء المسؤولية: KidsStation يتم تقديمه \"كما هو\" دون أي ضمانات.",
            "تحديد المسؤولية: OutrixWave Infotech Pvt. Ltd. غير مسؤولة عن الأضرار غير المباشرة أو العرضية أو التبعية.",
            "القانون الحاكم: خاضع لقوانين Mumbai, Maharastra;؛ المنازعات تخضع لمحاكم Mumbai, Maharastra;."
        ],
        footCont: "@ KidsStation",
        menuHome: "الرئيسية",
        menuAccount: "حسابي",
        menuContact: "أسئلة شائعة",
        menuTC: "الشروط والأحكام"
    }
};

function translatePage(lang) {
    const text = translations[lang];
    document.getElementById('tnc-title').innerHTML = text.tncTitle;

    const tncDetailsList = document.getElementById('tnc-details').querySelector('ul');
    tncDetailsList.innerHTML = text.tncDetails.map(item => `<li>${item}</li>`).join('');

    document.getElementById('foot-cont').innerHTML = text.footCont;
    document.getElementById('menuHome').innerHTML = text.menuHome;
    document.getElementById('menuAccount').innerHTML = text.menuAccount;
    document.getElementById('menuContact').innerHTML = text.menuContact;
    document.getElementById('menuTC').innerHTML = text.menuTC;

    // Apply right-to-left direction for Arabic
    tncDetailsList.style.direction = lang === 'AR' ? 'rtl' : 'ltr';
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