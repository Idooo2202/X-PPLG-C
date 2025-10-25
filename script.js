const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// animasi scroll smooth
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// nambahin smooth scroll ke semua nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})

// fade in animasi
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -50px 0px",
// }

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("fade-in-up")
//     }
//   })
// }, observerOptions)


// document.addEventListener("DOMContentLoaded", () => {
//   const elementsToAnimate = document.querySelectorAll(".comic-panel, .project-card, .section-header, .hero-image, .struktur")
//   elementsToAnimate.forEach((el) => observer.observe(el))
// })

// fungsi project modal/popup
function openProject(projectId) {
  window.open(`kenangan${projectId}.html`)
}

// handling contact
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault()

  // ambil dari data
  const formData = new FormData(e.target)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // basic validasi
  if (!name || !email || !subject || !message) {
    showAlert("Please fill in all fields!", "error")
    return
  }

  // validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showAlert("Please enter a valid email address!", "error")
    return
  }

  // simulasi dari submit
  showAlert("TERIMAKASIH, saya akan menghubungimu lagi esok", "succes")
  e.target.reset()

  // jadi gini le disini kamu harus mengetik kemana kamu akan mengirim data ke server kamu
  // fetch('/submit-contact', { method: 'POST', body: formData })
})

// alert sistem dari feedback
function showAlert(message, type = "info") {
  const existingAlert = document.querySelector(".alert")
  if (existingAlert) {
    existingAlert.remove()
  }

  const alert = document.createElement("div")
  alert.className = `alert alert-${type}`
  alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "var(--primary)" : "var(--destructive)"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--comic-panel-shadow);
        z-index: 1001;
        font-weight: 600;
        animation: slideInRight 0.3s ease-out;
    `
  alert.textContent = message

  // menambahkan slide in animasi
  const style = document.createElement("style")
  style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `
  document.head.appendChild(style)

  document.body.appendChild(alert)

  // biar auto refresh ketika 5 detik tidak di sentuh
  setTimeout(() => {
    alert.style.animation = "slideInRight 0.3s ease-out reverse"
    setTimeout(() => alert.remove(), 300)
  }, 5000)
}

// menambahkan efek bouncing ke fakta fakta kelas x pplg c
document.querySelectorAll(".skill-badge").forEach((badge) => {
  badge.addEventListener("mouseenter", () => {
    badge.style.animation = "bounce 0.6s ease-out"
  })

  badge.addEventListener("animationend", () => {
    badge.style.animation = ""
  })
})

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  if (hero && scrolled < window.innerHeight) {
    //parallax speed sama limit
    const parallaxSpeed = 1
    const maxTransform = 100 // limit maximal transform
    const transform = Math.min(scrolled * parallaxSpeed, maxTransform)
    hero.style.transform = `translateY(${transform}px)`
  }
})

// nambahin efek ketikan di hero tittle
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// initialize efek ketikan ketika load page
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
  }
})

