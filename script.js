function goHome() {
    setActiveMenu("homeLink");
    hideAllPages();

    document.getElementById("homePage").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function createAppointment(event) {
    event.preventDefault();

    document.getElementById("successPopup").style.display = "flex";
    document.getElementById("appointmentFormPage").reset();
}

function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
    document.getElementById("appointmentFormPage").reset();
}

function hideAllPages() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("salonPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("appointmentPage").style.display = "none";
    document.getElementById("discoverPage").style.display = "none";
}

function showSalon() {
    setActiveMenu("salonLink");
    hideAllPages();

    document.getElementById("salonPage").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showDiscover() {
    hideAllPages();

    document.getElementById("discoverPage").style.display = "block";

    setActiveMenu("discoverLink");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const hairQuestions = [
    {
        category: "SAÇ YAPIN",
        question: "Saç yapın nasıl?",
        description: "Saçının doğal yapısına en yakın seçeneği seç.",
        options: ["Düz", "Dalgalı", "Kıvırcık"]
    },
    {
        category: "SAÇ TELİN",
        question: "Saç tellerin nasıl?",
        description: "Saç telinin kalınlığına en yakın seçeneği seç.",
        options: ["İnce", "Orta", "Kalın"]
    },
    {
        category: "DOĞAL RENGİN",
        question: "Doğal saç rengin hangisine daha yakın?",
        description: "Saçının işlem görmemiş doğal rengini düşün.",
        options: ["Siyah", "Koyu Kahve", "Kumral", "Sarı"]
    },
    {
        category: "DEĞİŞİM",
        question: "Nasıl bir görünüm istiyorsun?",
        description: "Saçında görmek istediğin değişimi seç.",
        options: [
            "Doğal",
            "Daha Aydınlık",
            "Belirgin Değişim",
            "Daha Koyu"
        ]
    },
    {
        category: "HEDEFİN",
        question: "Saçında en çok neyi değiştirmek istiyorsun?",
        description: "Senin için en önemli olan seçeneği seç.",
        options: ["Renk", "Kesim", "Hacim", "Bakım"]
    }
];

let currentQuestion = 0;
let hairAnswers = [];

function startHairTest() {
    document.querySelector(".discover-intro").style.display = "none";
    document.querySelector(".discover-number").style.display = "none";

    document.getElementById("hairQuiz").style.display = "block";

    currentQuestion = 0;
    hairAnswers = [];

    showHairQuestion();
}

function showHairQuestion() {
    const question = hairQuestions[currentQuestion];

    document.getElementById("quizCategory").textContent =
        question.category;

    document.getElementById("quizQuestion").textContent =
        question.question;

    document.getElementById("quizDescription").textContent =
        question.description;

    document.getElementById("quizCount").textContent =
        `0${currentQuestion + 1} / 05`;

    document.getElementById("progressFill").style.width =
        `${((currentQuestion + 1) / hairQuestions.length) * 100}%`;

    const optionsContainer =
        document.getElementById("quizOptions");

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "quiz-option";

        button.innerHTML = `
            <span>0${index + 1}</span>
            ${option}
        `;

        button.onclick = function () {
            selectHairAnswer(option);
        };

        optionsContainer.appendChild(button);
    });
}

const dateInput = document.querySelector('input[type="date"]');

const today = new Date().toISOString().split("T")[0];

dateInput.min = today;

dateInput.addEventListener("change", function () {
    const selectedDate = new Date(this.value);

    if (selectedDate.getDay() === 0) {
        alert("Pazar günleri hizmet vermemekteyiz.");
        this.value = "";
    }
});

function showContact() {
    setActiveMenu("contactLink");
    hideAllPages();

    document.getElementById("contactPage").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showGallery() {
    hideAllPages();

    document.getElementById("galleryPage").style.display = "block";

    setActiveMenu("galleryLink");

    window.scrollTo(0, 0);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".hidden").forEach(section => {
    observer.observe(section);
});

function setActiveMenu(id) {
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

const topBtn = document.getElementById("topBtn");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

function showAppointmentPage() {
    document.querySelector("nav").classList.remove("show");

    hideAllPages();

    document.getElementById("appointmentPage").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function toggleMenu() {
    document.querySelector("nav").classList.toggle("show");
    document.querySelector(".menu-overlay").classList.toggle("show");
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector("nav").classList.remove("show");
        document.querySelector(".menu-overlay").classList.remove("show");
    });
});

const reviews = [
    {
        text: "Saç rengim tam istediğim gibi oldu. Sonuçtan çok memnun kaldım.",
        name: "Elif K.",
        service: "Renklendirme"
    },
    {
        text: "Kesim tam istediğim gibi oldu. Saçıma neyin yakışacağı konusunda da çok yardımcı oldular.",
        name: "Zeynep A.",
        service: "Saç Kesimi"
    },
    {
        text: "Bakım sonrasında saçlarım çok daha canlı ve yumuşak görünüyordu. Çok memnun kaldım.",
        name: "İrem D.",
        service: "Saç Bakımı"
    }
];

let currentReview = 0;

const reviewText = document.querySelector(".review-text");
const reviewName = document.querySelector(".review-person strong");
const reviewService = document.querySelector(".review-person span");
const reviewCount = document.querySelector(".review-count");

const prevButton = document.querySelector(".review-prev");
const nextButton = document.querySelector(".review-next");

function showReview() {
    const review = reviews[currentReview];

    reviewText.textContent = review.text;
    reviewName.textContent = review.name;
    reviewService.textContent = review.service;

    reviewCount.textContent =
        `${String(currentReview + 1).padStart(2, "0")} / ${String(reviews.length).padStart(2, "0")}`;
}

nextButton.addEventListener("click", () => {
    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview();
});

prevButton.addEventListener("click", () => {
    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview();
});

showReview();

const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryFilters.forEach(filter => {
    filter.addEventListener("click", () => {
        galleryFilters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        galleryItems.forEach(item => {
            if (
                category === "all" ||
                item.dataset.category === category
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

const galleryItemsModal = document.querySelectorAll(".gallery-item");
const galleryModal = document.getElementById("galleryModal");
const galleryModalImage = document.getElementById("galleryModalImage");
const galleryClose = document.querySelector(".gallery-close");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");

let currentGalleryImage = 0;

galleryItemsModal.forEach((item, index) => {
    item.addEventListener("click", () => {
        const image = item.querySelector("img");

        currentGalleryImage = index;

        galleryModalImage.src = image.src;

        galleryModal.classList.add("active");

        document.body.style.overflow = "hidden";
    });
});

galleryClose.addEventListener("click", event => {
    event.stopPropagation();

    galleryModal.classList.remove("active");

    document.body.style.overflow = "";
});

galleryNext.addEventListener("click", event => {
    event.stopPropagation();

    currentGalleryImage++;

    if (currentGalleryImage >= galleryItemsModal.length) {
        currentGalleryImage = 0;
    }

    const image =
        galleryItemsModal[currentGalleryImage]
            .querySelector("img");

    galleryModalImage.src = image.src;
});

galleryPrev.addEventListener("click", event => {
    event.stopPropagation();

    currentGalleryImage--;

    if (currentGalleryImage < 0) {
        currentGalleryImage =
            galleryItemsModal.length - 1;
    }

    const image =
        galleryItemsModal[currentGalleryImage]
            .querySelector("img");

    galleryModalImage.src = image.src;
});

galleryModal.addEventListener("click", event => {
    if (event.target === galleryModal) {
        galleryModal.classList.remove("active");

        document.body.style.overflow = "";
    }
});

document.getElementById("galleryPage").style.display = "none";

function selectHairAnswer(answer) {
    hairAnswers.push(answer);

    currentQuestion++;

    if (currentQuestion < hairQuestions.length) {
        showHairQuestion();
    } else {
        showHairResult();
    }
}

function showHairResult() {
    document.getElementById("hairQuiz").style.display = "none";
    document.getElementById("hairResult").style.display = "block";

    const hairType = hairAnswers[0];
    const thickness = hairAnswers[1];
    const naturalColor = hairAnswers[2];
    const change = hairAnswers[3];
    const goal = hairAnswers[4];

    document.getElementById("resultHairType").textContent =
        hairType + " / " + thickness;

    let look = "";
    let description = "";
    let color = "";
    let cut = "";
    let care = "";

    if (goal === "Renk") {
        look = "Boyutlu ve Doğal Renk";

        description =
            "Doğal saç rengini tamamen kaybetmeden daha canlı ve boyutlu bir görünüm sana uygun olabilir.";

        color = "Mocha & Karamel Tonları";
        cut = "Yumuşak Katlar";
        care = "Renk Koruyucu Bakım";
    }

    else if (goal === "Kesim") {
        look = "Modern Katlı Kesim";

        description =
            "Saçının hareketini öne çıkaran modern ve doğal bir kesim tercih edebilirsin.";

        color = "Doğal Tonunu Koru";
        cut = "Katlı Kesim";
        care = "Nem Bakımı";
    }

    else if (goal === "Hacim") {
        look = "Hacimli ve Hareketli";

        description =
            "Saçına daha fazla hareket kazandıran hafif katlar ve hacim odaklı şekillendirme tercih edebilirsin.";

        color = "Doğal Işıltılar";
        cut = "Hacim Veren Katlar";
        care = "Hacim Bakımı";
    }

    else {
        look = "Sağlıklı ve Parlak";

        description =
            "Saçının doğal görünümünü koruyarak parlaklık ve yumuşaklık odaklı bir bakım tercih edebilirsin.";

        color = "Doğal Saç Tonun";
        cut = "Uçlardan Sağlıklı Kesim";
        care = "Yoğun Nem ve Parlaklık";
    }

    document.getElementById("resultLook").textContent =
        look;

    document.getElementById("resultDescription").textContent =
        description;

    document.getElementById("resultColor").textContent =
        color;

    document.getElementById("resultCut").textContent =
        cut;

    document.getElementById("resultCare").textContent =
        care;

    createColorPalette(change, naturalColor);
}

function createColorPalette(change, naturalColor) {
    const palette =
        document.getElementById("colorPalette");

    palette.innerHTML = "";

    let colors;

    if (change === "Daha Aydınlık") {
        colors = [
            ["#D6B38A", "Karamel"],
            ["#C7A17A", "Bal Köpüğü"],
            ["#A97855", "Sıcak Kumral"]
        ];
    }

    else if (change === "Daha Koyu") {
        colors = [
            ["#3B2722", "Espresso"],
            ["#56382F", "Çikolata"],
            ["#704B3D", "Mocha"]
        ];
    }

    else if (change === "Belirgin Değişim") {
        colors = [
            ["#6E3F35", "Kestane"],
            ["#9B604B", "Bakır Kahve"],
            ["#B88968", "Bronz"]
        ];
    }

    else {
        colors = [
            ["#49332D", "Koyu Kahve"],
            ["#704B3D", "Mocha"],
            ["#9A7059", "Doğal Kumral"]
        ];
    }

    colors.forEach(color => {
        const item = document.createElement("div");

        item.className = "color-item";

        item.innerHTML = `
            <span
                class="color-circle"
                style="background:${color[0]}"
            ></span>
            ${color[1]}
        `;

        palette.appendChild(item);
    });
}

function restartHairTest() {
    document.getElementById("hairResult").style.display = "none";
    document.getElementById("hairQuiz").style.display = "block";

    currentQuestion = 0;
    hairAnswers = [];

    showHairQuestion();
}