let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
function showContent(contentId) {
  let contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  let selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }
}
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
function showContent(id, btn) {
  document.querySelectorAll(".content").forEach(function (el) {
    el.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".intro-tab").forEach(function (tab) {
    tab.classList.remove("active");
  });
  btn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var text = "Hoàng Trọng Thịnh";
  var i = 0;
  var isDeleting = false;
  var speed = 90;
  var delayAfterTyping = 1000;
  var delayAfterDeleting = 500;

  function typeLoop() {
    var el = document.getElementById("typing-name");
    if (!isDeleting) {
      el.innerHTML = text.substring(0, i + 1);
      i++;
      if (i === text.length) {
        setTimeout(() => {
          isDeleting = true;
          typeLoop();
        }, delayAfterTyping);
        return;
      }
    } else {
      el.innerHTML = text.substring(0, i - 1);
      i--;
      if (i === 0) {
        setTimeout(() => {
          isDeleting = false;
          typeLoop();
        }, delayAfterDeleting);
        return;
      }
    }
    setTimeout(typeLoop, speed);
  }
  typeLoop();

  // Language switcher
  const langSwitcher = document.getElementById("lang-toggle");
  if (langSwitcher) {
    const enBtn = langSwitcher.querySelectorAll("button")[0];
    const viBtn = langSwitcher.querySelectorAll("button")[1];
    // Nội dung song ngữ mẫu
    const translations = {
      en: {
        menu: ["Home", "About", "Services", "Skills", "Portfolio", "Contact"],
        homeTitle: "Hello, I am",
        homeDesc:
          "I am working in web development and design. I love creating beautiful, intuitive web designs with HTML, CSS, and making them interactive with JavaScript.",
        downloadCV: "Download CV",
        aboutTitle: "About <span>Hoàng Trọng Thịnh</span>",
        aboutIntro: "INTRODUCTION",
        aboutTabs: ["👤 Personal Info", "💼 Career Orientation", "🧩 Hobbies"],
        aboutContent: [
          "Currently, I am a second-year student majoring in Information Technology at Ho Chi Minh City University of Transport. I always strive to be dynamic, constantly seeking new knowledge, and have a special passion for technology. Through each real project, I strive to learn, develop myself, and accumulate experience to improve day by day.",
          "I aim to become a software engineer with a solid foundation in system development and information security. In addition to improving programming skills, I am particularly interested in information security – a field that requires carefulness, analysis, and systematic problem-solving. I want to build software solutions that not only optimize performance but also ensure security and reliability in today's digital environment.",
          "I spend my free time watching movies, listening to music, and exploring new technology trends. Keeping up with technology is not only a passion but also helps me expand my knowledge and inspire my learning journey.",
        ],
        aboutReadMore: "Read More",
        servicesTitle: "My <span>Services</span>",
        services: [
          {
            title: "Web Development",
            desc: "I design personal, business, and landing page websites with modern interfaces, SEO standards, compatible with all devices. Ensuring fast loading speed, good security, and easy management for customers.",
            btn: "Read More",
          },
          {
            title: "Canva Design",
            desc: "Creative posters, banners, social media posts, and advertising publications with a youthful, unique style, helping you stand out and effectively convey your message.",
            btn: "Read More",
          },
          {
            title: "Video Editing",
            desc: "Cutting, editing, and producing videos as required for personal, study, or media projects. Ensuring sharp images, vivid effects, suitable content, and desired duration.",
            btn: "Read More",
          },
        ],
        skillsTitle: "My Skills",
        whatIKnow: "what i know",
        skillsDesc:
          "Proficient in technologies such as HTML, CSS, JavaScript, ReactJs, and MySQL, I am capable of building modern, high-performance, and easily maintainable websites. Experience working with development teams and good communication skills help me complete work on time and with high quality.",
        knowMore: "Know more !",
        portfolioTitle: "Latest <span>Projects</span>",
        contactTitle: "Contact me",
        contactLeftTitle: "Contact",
        contactLeftDesc:
          "If you have any questions, suggestions, or cooperation opportunities, please send me information via the form next to or the email below.",
        contactName: "Name",
        contactAddress: "Address",
        contactEmail: "Email",
        contactCity: "Ho Chi Minh City",
        contactFormTitle: "Message me",
        contactForm: ["Name", "Email", "Subject", "Message..", "Send message"],
      },
      vi: {
        menu: [
          "Trang Chủ",
          "Giới Thiệu",
          "Dịch Vụ",
          "Kỹ Năng",
          "Dự Án",
          "Liên Hệ",
        ],
        homeTitle: "Xin Chào, Tôi là",
        homeDesc:
          "Tôi đang làm việc trong lĩnh vực phát triển và thiết kế web. Tôi thích tạo ra những thiết kế web đẹp mắt, trực quan bằng HTML, CSS và làm cho chúng trở nên tương tác bằng JavaScript",
        downloadCV: "Download CV",
        aboutTitle: "Về <span>Hoàng Trọng Thịnh</span>",
        aboutIntro: "GIỚI THIỆU",
        aboutTabs: [
          "👤 Thông tin cá nhân",
          "💼 Định Hướng Nghề Nghiệp",
          "🧩 Sở thích",
        ],
        aboutContent: [
          "Hiện tại tôi là sinh viên năm hai chuyên ngành Công Nghệ Thông Tin, Trường Đại học Giao thông vận tải TP. HCM. Tôi luôn hướng tới sự năng động, không ngừng tìm kiếm những kiến thức mới mẻ và có niềm yêu thích đặc biệt dành cho lĩnh vực công nghệ. Thông qua từng dự án thực tế, tôi nỗ lực học hỏi, phát triển bản thân và tích lũy kinh nghiệm để hoàn thiện hơn từng ngày.",
          "Tôi định hướng trở thành một kỹ sư phần mềm có nền tảng vững chắc về phát triển hệ thống và bảo mật thông tin. Bên cạnh việc nâng cao kỹ năng lập trình, tôi đặc biệt quan tâm đến lĩnh vực an toàn thông tin – nơi đòi hỏi sự cẩn trọng, phân tích và giải quyết vấn đề một cách hệ thống. Tôi mong muốn xây dựng các giải pháp phần mềm không chỉ tối ưu hiệu suất mà còn đảm bảo tính bảo mật và tin cậy trong môi trường công nghệ số ngày nay.",
          "Tôi dành thời gian rảnh để xem phim, nghe nhạc và khám phá những xu hướng công nghệ mới. Việc theo dõi sự phát triển của công nghệ không chỉ là đam mê mà còn giúp tôi mở rộng kiến thức và truyền cảm hứng cho con đường học tập của mình.",
        ],
        aboutReadMore: "Read More",
        servicesTitle: "Dịch Vụ <span>Của Tôi</span>",
        services: [
          {
            title: "Phát triển web",
            desc: "Tôi nhận thiết kế website cá nhân, doanh nghiệp, landing page với giao diện hiện đại, chuẩn SEO, tương thích mọi thiết bị. Đảm bảo tốc độ tải nhanh, bảo mật tốt và dễ dàng quản trị cho khách hàng.",
            btn: "Read More",
          },
          {
            title: "Thiết kế Canva",
            desc: "Sáng tạo poster, banner, bài đăng mạng xã hội và ấn phẩm quảng cáo bằng Canva với phong cách trẻ trung, độc đáo, giúp bạn nổi bật giữa đám đông và truyền tải thông điệp một cách hiệu quả nhất.",
            btn: "Read More",
          },
          {
            title: "Chỉnh sửa video",
            desc: "Cắt ghép, dựng và biên tập video theo yêu cầu cho các dự án cá nhân, học tập hoặc truyền thông. Đảm bảo hình ảnh sắc nét, hiệu ứng sinh động, phù hợp nội dung và đúng thời lượng mong muốn.",
            btn: "Read More",
          },
        ],
        skillsTitle: "Kĩ Năng Của Tôi",
        whatIKnow: "what i know",
        skillsDesc:
          "Thành thạo các công nghệ như HTML, CSS, JavaScript, ReactJs và MySQL, tôi có khả năng xây dựng website hiện đại, tối ưu hiệu suất và dễ dàng bảo trì. Kinh nghiệm phối hợp với các nhóm phát triển, cùng kỹ năng giao tiếp tốt giúp tôi hoàn thành công việc đúng tiến độ và đạt chất lượng cao.",
        knowMore: "Know more !",
        portfolioTitle: "Dự Án <span>Gần Nhất</span>",
        contactTitle: "Contact me",
        contactLeftTitle: "Liên hệ",
        contactLeftDesc:
          "Nếu bạn có bất kỳ câu hỏi, góp ý hay cơ hội hợp tác nào, hãy gửi cho mình thông tin qua form bên cạnh hoặc email bên dưới.",
        contactName: "Name",
        contactAddress: "Address",
        contactEmail: "Email",
        contactCity: "Thành Phố Hồ Chí Minh",
        contactFormTitle: "Nhắn tin cho tôi",
        contactForm: ["Name", "Email", "Subject", "Message..", "Send message"],
      },
    };
    function setLang(lang) {
      // Menu
      document.querySelectorAll(".navbar a").forEach((el, i) => {
        el.textContent = translations[lang].menu[i];
      });
      // Home
      document.querySelector(".home-content h3").textContent =
        translations[lang].homeTitle;
      document.querySelector(".home-content p").textContent =
        translations[lang].homeDesc;
      document.querySelector(".home-content .btn").textContent =
        translations[lang].downloadCV;
      // About
      document.querySelector(".about-content .heading").innerHTML =
        translations[lang].aboutTitle;
      document.querySelector(".intro-title").textContent =
        translations[lang].aboutIntro;
      document.querySelectorAll(".intro-tab").forEach((el, i) => {
        el.textContent = translations[lang].aboutTabs[i];
      });
      document.getElementById("personal").textContent =
        translations[lang].aboutContent[0];
      document.getElementById("career").textContent =
        translations[lang].aboutContent[1];
      document.getElementById("hobbies").textContent =
        translations[lang].aboutContent[2];
      document.querySelector(".about-content .btn").textContent =
        translations[lang].aboutReadMore;
      // Services
      document.querySelector(".services .heading").innerHTML =
        translations[lang].servicesTitle;
      document.querySelectorAll(".services-box h3").forEach((el, i) => {
        el.textContent = translations[lang].services[i].title;
      });
      document.querySelectorAll(".services-box p").forEach((el, i) => {
        el.textContent = translations[lang].services[i].desc;
      });
      document.querySelectorAll(".services-box .btn").forEach((el, i) => {
        el.textContent = translations[lang].services[i].btn;
      });
      // Skills
      document.querySelector(".skills-title h2").textContent =
        translations[lang].skillsTitle;
      document.querySelector(".what-i-know").textContent =
        translations[lang].whatIKnow;
      document.querySelector(".skills-content .left p").textContent =
        translations[lang].skillsDesc;
      document.querySelector(".skills-content .left a").textContent =
        translations[lang].knowMore;
      // Portfolio
      document.querySelector(".portfolio .heading").innerHTML =
        translations[lang].portfolioTitle;
      // Contact
      document.querySelector(".contact .title").textContent =
        translations[lang].contactTitle;
      document.querySelector(".contact-content .left .text").textContent =
        translations[lang].contactLeftTitle;
      document.querySelector(".contact-content .left p").textContent =
        translations[lang].contactLeftDesc;
      let infoHeads = document.querySelectorAll(
        ".contact-content .icons .head"
      );
      infoHeads[0].textContent = translations[lang].contactName;
      infoHeads[1].textContent = translations[lang].contactAddress;
      infoHeads[2].textContent = translations[lang].contactEmail;
      let infoSubs = document.querySelectorAll(
        ".contact-content .icons .sub-title"
      );
      infoSubs[1].textContent = translations[lang].contactCity;
      document.querySelector(".contact-content .right .text").textContent =
        translations[lang].contactFormTitle;
      let formFields = document.querySelectorAll(
        ".contact-content .right form input, .contact-content .right form textarea"
      );
      formFields[0].placeholder = translations[lang].contactForm[0];
      formFields[1].placeholder = translations[lang].contactForm[1];
      formFields[2].placeholder = translations[lang].contactForm[2];
      formFields[3].placeholder = translations[lang].contactForm[3];
      document.querySelector(
        ".contact-content .right form button"
      ).textContent = translations[lang].contactForm[4];
    }
    enBtn.onclick = function () {
      enBtn.style.background = "var(--main-color)";
      enBtn.style.color = "#fff";
      viBtn.style.background = "#eee";
      viBtn.style.color = "var(--main-color)";
      setLang("en");
    };
    viBtn.onclick = function () {
      viBtn.style.background = "var(--main-color)";
      viBtn.style.color = "#fff";
      enBtn.style.background = "#eee";
      enBtn.style.color = "var(--main-color)";
      setLang("vi");
    };
  }
});

// Particle Background Effect
(function () {
  const canvas = document.getElementById("particle-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const colors = ["#ffb199", "#ff7b54", "#f9624e", "#fff3e6"];
  const particleCount = 90;
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 1.8 + Math.random() * 2.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        alpha: 0.5 + Math.random() * 0.5,
      });
    }
  }
  createParticles();
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    }
  }
  function updateParticles() {
    for (let p of particles) {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
  }
  function animate() {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animate);
  }
  animate();
})();
