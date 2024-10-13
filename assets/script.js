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

// Script to refresh page when home button is clicked in popup  menu
document.getElementById('menuHome').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.reload();
});

// Script to animate various components
const tabs = document.querySelectorAll('.tab');
const elements = {
    bannerText1: document.getElementById('bannerText1'),
    bannerText2: document.getElementById('bannerText2'),
    bannerText3: document.getElementById('bannerText3'),
    subheading1: document.getElementById('sub-heading1'),
    subheading2: document.getElementById('sub-heading2'),
    subheading3: document.getElementById('sub-heading3'),
    subheading4: document.getElementById('sub-heading4'),
    engcont: document.getElementById('eng-cont'),
    arbcont: document.getElementById('arb-cont'),
    footcont: document.getElementById('foot-cont'),
    engstory: document.getElementById('eng-story'),
    englearn: document.getElementById('eng-learn'),
    arblearn: document.getElementById('arb-learn'),
    arbsong: document.getElementById('arb-song'),
    maincontent: document.getElementById('main-content'),
    arbmore: document.getElementById('arb-more')
};

const setDisplay = (elList, display) => elList.forEach(el => el.style.display = display);
const setPosition = (el, top, left) => { el.style.top = top; el.style.left = left; };

function handleTabClick(clickedTab) {
    tabs.forEach(tab => tab.style.opacity = tab === clickedTab ? '1' : '0.3');

    const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
    const isSmallScreen = screenHeight <= 731;

    if (clickedTab.id === 'tab2') {
        elements.maincontent.style.height = screenWidth <= 431 ? '728.49vw' : '3135px';
        elements.footcont.style.top = screenWidth <= 431 ? '722.33vw' : '3106px';
        elements.arbcont.style.top = screenWidth <= 431 ? '148.14vw' : '638px';
        elements.subheading3.style.top = screenWidth <= 431 ? '155.35vw' : '668px';
        elements.arblearn.style.top = screenWidth <= 431 ? '165.12vw' : '713px';
        setPosition(elements.bannerText1, screenWidth <= 431 ? '39.07vw' : '168px', '13px');
        setPosition(elements.bannerText2, screenWidth <= 431 ? '8.14vw' : '35px', '13px');
        setPosition(elements.bannerText3, screenWidth <= 431 ? '39.07vw' : '168px', '284px');

        setDisplay([elements.subheading2, elements.engstory, elements.subheading4, elements.arbsong], 'none');
        setDisplay([elements.subheading1, elements.englearn, elements.arbcont, elements.subheading3, elements.arbmore, elements.arblearn], 'flex');

        elements.bannerText1.style.opacity = '0';
        elements.bannerText2.style.opacity = '1';
        elements.bannerText3.style.opacity = '0';
    } else if (clickedTab.id === 'tab3') {
        elements.maincontent.style.height = isSmallScreen ? '932px' : '100vh';
        elements.footcont.style.top = isSmallScreen ? '912px' : '98vh';

        setDisplay([elements.subheading1, elements.englearn, elements.arbcont, elements.subheading3, elements.subheading2, elements.arblearn, elements.engstory, elements.arbmore], 'none');
        setDisplay([elements.engcont, elements.subheading4, elements.arbsong], 'flex');

        setPosition(elements.subheading4, screenWidth <= 431 ? '83.49vw' : '359px', '');
        setPosition(elements.arbsong, screenWidth <= 431 ? '78.14vw' : '336px', '');
        setPosition(elements.bannerText1, screenWidth <= 431 ? '39.07vw' : '168px', '13px');
        setPosition(elements.bannerText2, screenWidth <= 431 ? '39.07vw' : '168px', '148px');
        setPosition(elements.bannerText3, screenWidth <= 431 ? '8.14vw' : '35px', '13px');

        elements.bannerText1.style.opacity = '0';
        elements.bannerText2.style.opacity = '0';
        elements.bannerText3.style.opacity = '1';
    } else {
        elements.maincontent.style.height = isSmallScreen ? '932px' : '100vh';
        elements.footcont.style.top = isSmallScreen ? '912px' : '212.09vw';

        setDisplay([elements.subheading1, elements.englearn, elements.arbcont, elements.subheading3, elements.subheading4, elements.arblearn, elements.arbsong, elements.arbmore], 'none');
        setDisplay([elements.engcont, elements.subheading2, elements.engstory], 'flex');

        setPosition(elements.subheading2, screenWidth <= 431 ? '83.49vw' : '359px', '');
        setPosition(elements.engstory, screenWidth <= 431 ? '93.72vw' : '404px', '');
        setPosition(elements.bannerText1, screenWidth <= 431 ? '8.14vw' : '35px', '13px');
        setPosition(elements.bannerText2, screenWidth <= 431 ? '39.07vw' : '168px', '148px');
        setPosition(elements.bannerText3, screenWidth <= 431 ? '39.07vw' : '168px', '284px');

        elements.bannerText1.style.opacity = '1';
        elements.bannerText2.style.opacity = '0';
        elements.bannerText3.style.opacity = '0';
    }
}

// Add event listeners to tabs
tabs.forEach(tab => tab.addEventListener('click', () => handleTabClick(tab)));

// Script for translation
document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        EN: {
            bannerText1: "Kids Story", bannerText2: "Kids Learning", bannerText3: "Kids Song",
            tab1Text: "Kids Story", tab2Text: "Kids Learning", tab3Text: "Kids Song",
            myAccountText: "My Account", englishHeading: "English", learnText: "Kids Learning",
            learnCounting: "Learn Counting", crystallization: "Crystallization", realAndVirtual: "Real and Virtual",
            storyText: "Kids Story", rapunzel: "Rapunzel", elvesAndShoemaker: "Elves and the Shoemaker",
            arabicHeading: "Arabic", arabicLearnText: "Kids Learning", surahAlIkhlas: "Surah Al-Ikhlas",
            surahAlSharh: "Surah Al-Sharh", fractionsInMath: "Fractions in Math", songText: "Kids Song",
            ramadanSong: "Welcome, Ramadan Song for Children", footerText: "@ kidsStation", menuHome: "Home",
            menuAccount: "My Account", menuContact: "FAQ", menuTC: "T & C", animalSound: "Animal Sound",
            arabicSounds: "Arabic Alphabets Sounds", bodyOrgan: "Body Organ", compareNumbers: "Compare Numbers",
            countriesFlag: "Countries' Flag", earthPlanet: "Earth Planet", familyMembers: "Family Members",
            fruitsNames: "Fruits and Vegetables Names", geometricShapes: "Geometric Shapes",
            houseVocabulary: "House Vocabulary", brainWork: "How Does Your Brain Work",
            learnTable: "Learn Addition Table", learnColors: "Learn The Colors", learnNumbers: "Learn The Numbers",
            learnCount: "Learn To Count", livingThing: "Living and Non-living Thing",
            materialsWorld: "Materials in My World", monthsYear: "Months of the Year", oppositesWords: "Opposites of Words",
            fiveSenses: "Our Five Senses", recycling: "Recycling", seasonsYear: "Seasons of the Year",
            environment: "The Environment", solarSystem: "The Solar System", trafficLight: "Traffic Light",
            transportationVehicles: "Transportation Vehicles", weatherCondition: "Weather Condition", weekDays: "Week Days",
            whatRain: "What is Rain", animalsLive: "Where Animals Live"
        },
        AR: {
            bannerText1: "قصة الأطفال", bannerText2: "تعلم الاطفال", bannerText3: "أغنية للأطفال",
            tab1Text: "قصة الأطفال", tab2Text: "تعلم الأطفال", tab3Text: "أغاني الأطفال",
            myAccountText: "حسابي", englishHeading: "الإنجليزية", learnText: "تعلم الأطفال",
            learnCounting: "تعلم العد", crystallization: "التبلور", realAndVirtual: "الواقعي والافتراضي",
            storyText: "قصة الأطفال", rapunzel: "رابونزل", elvesAndShoemaker: "الأقزام وصانع الأحذية",
            arabicHeading: "العربية", arabicLearnText: "تعلم الأطفال", surahAlIkhlas: "سورة الإخلاص",
            surahAlSharh: "سورة الشرح", fractionsInMath: "الكسور في الرياضيات", songText: "أغاني الأطفال",
            ramadanSong: "أغنية رمضان للأطفال", footerText: "@ kidsStation", menuHome: "بيت",
            menuAccount: "حسابي", menuContact: "التعليمات", menuTC: "الشروط والأحكام", animalSound: "صوت الحيوان",
            arabicSounds: "أصوات الأبجدية العربية", bodyOrgan: "عضو الجسم", compareNumbers: "مقارنة الأرقام",
            countriesFlag: "علم البلدان", earthPlanet: "كوكب الأرض", familyMembers: "أفراد العائلة",
            fruitsNames: "أسماء الفواكه والخضروات", geometricShapes: "الأشكال الهندسية", houseVocabulary: "مفردات البيت",
            brainWork: "كيف يعمل دماغك", learnTable: "تعلم جدول الجمع", learnColors: "تعلم الألوان",
            learnNumbers: "تعلم الأرقام", learnCount: "تعلم العد", livingThing: "الأشياء الحية وغير الحية",
            materialsWorld: "المواد في عالمي", monthsYear: "شهور السنة", oppositesWords: "الأضداد من الكلمات",
            fiveSenses: "حواسنا الخمسة", recycling: "إعادة التدوير", seasonsYear: "فصول السنة", environment: "البيئة",
            solarSystem: "النظام الشمسي", trafficLight: "إشارة المرور", transportationVehicles: "مركبات النقل",
            weatherCondition: "حالة الطقس", weekDays: "أيام الأسبوع", whatRain: "ما هو المطر", animalsLive: "أين تعيش الحيوانات"
        }
    };

    function setLanguage(lang) {
        Object.keys(translations[lang]).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = translations[lang][id];
        });

        // const infoList = document.getElementById("infoList");
        // if (infoList) {
        //     infoList.style.textAlign = lang === "AR" ? "right" : "left";
        //     infoList.style.direction = lang === "AR" ? "rtl" : "ltr";
        // }
    }

    document.getElementById("lang").addEventListener("change", function () {
        localStorage.setItem('kidLang', this.value);
        setLanguage(this.value);
    });

    const savedLang = localStorage.getItem('kidLang') || 'EN';
    document.getElementById('lang').value = savedLang;
    setLanguage(savedLang);
});

// Script to play video in iframe
document.querySelectorAll('.learning').forEach(function (element) {
    element.addEventListener('click', function () {
        var videoUrl = this.getAttribute('data-video-url');
        var iframeContainer = document.getElementById('iframeContainer');
        var videoIframe = document.getElementById('videoIframe');

        videoIframe.src = videoUrl;
        iframeContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

function closeVideo(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    var iframeContainer = document.getElementById('iframeContainer');
    var videoIframe = document.getElementById('videoIframe');

    iframeContainer.style.display = 'none';
    document.body.style.overflow = 'scroll';
    videoIframe.src = '';
}

document.getElementById('closeBtn').addEventListener('click', closeVideo);
document.getElementById('closeBtn').addEventListener('touchstart', closeVideo);