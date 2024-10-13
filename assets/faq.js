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
document.getElementById('menuContact').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('myModal').style.display = 'none';
});

// Script for translation
const translations = {
    EN: {
        tncTitle: "Frequently Asked Questions",
        footCont: "@ kidsStation",
        menuHome: "Home",
        menuAccount: "My Account",
        menuContact: "FAQ",
        menuTC: "T & C",
        faqs: [
            {
                question: "What is [Your Company/Product/Service]?",
                answer: "[Provide a brief description of your company, product, or service.]"
            },
            {
                question: "How do I [Perform a Specific Action/Use a Feature]?",
                answer: "[Instructions on how to perform the action or use the feature.]"
            },
            {
                question: "What are the Benefits of [Your Product/Service]?",
                answer: "[Highlight the key benefits or advantages of your product or service.]"
            },
            {
                question: "How Can I Contact Customer Support?",
                answer: "[Provide contact information for customer support, including email, phone number, and/or any other relevant channels.]"
            },
            {
                question: "What Payment Methods Do You Accept?",
                answer: "[List the payment methods accepted, such as credit cards, PayPal, etc.]"
            },
            {
                question: "Is There a Refund Policy?",
                answer: "[Explain your refund policy, including any conditions or restrictions.]"
            },
            {
                question: "How Secure is My Personal Information?",
                answer: "[Assure users about the security measures in place to protect their personal information.]"
            }
        ]
    },
    AR: {
        tncTitle: "أسئلة مكررة",
        footCont: "@ kidsStation",
        menuHome: "الرئيسية",
        menuAccount: "حسابي",
        menuContact: "أسئلة شائعة",
        menuTC: "الشروط والأحكام",
        faqs: [
            {
                question: "ما هو [منتج/خدمة شركتك]؟",
                answer: "[قدم وصفاً موجزاً لشركتك أو منتجك أو خدمتك.]"
            },
            {
                question: "كيف أ [أداء إجراء معين/استخدام ميزة]؟",
                answer: "[تعليمات حول كيفية أداء الإجراء أو استخدام الميزة.]"
            },
            {
                question: "ما هي فوائد [منتجك/خدمتك]؟",
                answer: "[سلط الضوء على الفوائد أو المزايا الرئيسية لمنتجك أو خدمتك.]"
            },
            {
                question: "كيف يمكنني الاتصال بدعم العملاء؟",
                answer: "[قدم معلومات الاتصال بدعم العملاء، بما في ذلك البريد الإلكتروني ورقم الهاتف وأي قنوات أخرى ذات صلة.]"
            },
            {
                question: "ما طرق الدفع التي تقبلونها؟",
                answer: "[قائمة بطرق الدفع المقبولة، مثل بطاقات الائتمان و PayPal، إلخ.]"
            },
            {
                question: "هل هناك سياسة لاسترداد الأموال؟",
                answer: "[اشرح سياسة الاسترداد الخاصة بك، بما في ذلك أي شروط أو قيود.]"
            },
            {
                question: "ما مدى أمان معلوماتي الشخصية؟",
                answer: "[أكد للمستخدمين بشأن التدابير الأمنية المتخذة لحماية معلوماتهم الشخصية.]"
            }
        ]
    }
};

function translatePage(lang) {
    const text = translations[lang];
    document.getElementById('tnc-title').innerHTML = text.tncTitle;

    // Update FAQ questions and answers
    text.faqs.forEach((faq, index) => {
        const questionElem = document.getElementById(`question${index + 1}`);
        const answerElem = document.getElementById(`answer${index + 1}`);

        if (questionElem && answerElem) {
            questionElem.innerHTML = faq.question;
            answerElem.innerHTML = faq.answer;
        } else {
            console.error(`FAQ element with ID question${index + 1} or answer${index + 1} not found.`);
        }
    });

    document.getElementById('foot-cont').innerHTML = text.footCont;
    document.getElementById('menuHome').innerHTML = text.menuHome;
    document.getElementById('menuAccount').innerHTML = text.menuAccount;
    document.getElementById('menuContact').innerHTML = text.menuContact;
    document.getElementById('menuTC').innerHTML = text.menuTC;

    // Apply right-to-left direction for Arabic
    document.getElementById('tnc-details').style.direction = lang === 'AR' ? 'rtl' : 'ltr';
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

// Script to expand FAQ and their answers
const accordionItems = document.querySelectorAll(".faq");

accordionItems.forEach((item) => {
    const header = item.querySelector(".expand-btn");
    const body = item.querySelector(".answer");
    const faqBox = item.closest('.faq-box');

    header.addEventListener("click", () => {
        body.classList.toggle("collapsed");

        if (window.innerWidth < 728) {
            faqBox.classList.add('transition-height');
            faqBox.style.height = body.classList.contains("collapsed") ? 'auto' : '29.77vw';
        } else {
            faqBox.classList.add('transition-height');
            faqBox.style.height = body.classList.contains("collapsed") ? 'auto' : '128px';
        }

        if (body.classList.contains("collapsed")) {
            body.style.height = "0";
            body.style.padding = "0";
        } else {
            if (window.innerWidth < 728) {
                body.style.height = '9.30vw';
                body.style.padding = '3.26vw';
            } else {
                body.style.height = '40px';
                body.style.padding = '14px';
            }
        }

        // Toggle icon
        const icon = header.querySelector('img');
        if (icon.src.includes('btn-icon')) {
            icon.src = 'assets/images/btn-minus-icon.png';
        } else {
            icon.src = 'assets/images/btn-icon.png';
        }
    });
});