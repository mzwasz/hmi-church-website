import { useEffect, useRef, useState } from "react";

import {

  ArrowRight,

  CalendarDays,

  CheckCircle2,

  Clock,

  Heart,

  MapPin,

  Menu,

  MessageCircle,

  Phone,

  Users,

  X,

} from "lucide-react";

function App() {

  const [mobileMenu, setMobileMenu] = useState(false);

  const [currentVideo, setCurrentVideo] = useState(0);

  const videoRefs = useRef([]);

  const videos = [

    "/videos/hmi-hero1.mp4",

    "/videos/hmi-hero2.mp4",

  ];

  const prayerNumber = "26876022924";

  const prayerMessage = encodeURIComponent(

    "Hello House of Mercy International Church. I would like to submit a prayer request.\n\nMy prayer request is:"

  );

  const prayerLink = `https://wa.me/${prayerNumber}?text=${prayerMessage}`;

  // Crossfade to the next clip when the active video finishes.

  const handleVideoEnd = (endedIndex) => {

    const nextIndex = (endedIndex + 1) % videos.length;

    const nextVideo = videoRefs.current[nextIndex];

    if (nextVideo) nextVideo.currentTime = 0;

    setCurrentVideo(nextIndex);

  };

  const selectVideo = (index) => {

    if (index === currentVideo) return;

    const nextVideo = videoRefs.current[index];

    if (nextVideo) nextVideo.currentTime = 0;

    setCurrentVideo(index);

  };

  // Only the visible clip plays; muted playback is permitted by browsers.

  useEffect(() => {

    videoRefs.current.forEach((video, index) => {

      if (!video) return;

      if (index === currentVideo) {

        const playPromise = video.play();

        if (playPromise && typeof playPromise.catch === "function") {

          playPromise.catch(() => {});

        }

      } else {

        video.pause();

      }

    });

  }, [currentVideo]);

  // Close the mobile menu when the screen becomes large.

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth >= 1024) {

        setMobileMenu(false);

      }

    };

    window.addEventListener("resize", handleResize);

    return () => {

      window.removeEventListener("resize", handleResize);

    };

  }, []);

  return (

    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* =========================================================

          TOP BAR

      ========================================================= */}

      <div className="bg-[#07156f] px-4 py-2 text-sm text-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <p className="hidden sm:block">

            Welcome to House of Mercy International Church

          </p>

          <div className="ml-auto flex items-center gap-4">

            <a

              href="tel:+26876022924"

              className="flex items-center gap-2 transition hover:text-[#f5bd32]"

            >

              <Phone size={14} />

              <span>+268 7602 2924</span>

            </a>

            <a

              href={prayerLink}

              target="_blank"

              rel="noreferrer"

              className="hidden items-center gap-2 font-bold text-[#f5bd32] sm:flex"

            >

              <MessageCircle size={14} />

              Prayer Line

            </a>

          </div>

        </div>

      </div>

      {/* =========================================================

          NAVIGATION

      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}

          <a

            href="#home"

            className="flex items-center gap-3"

            onClick={() => setMobileMenu(false)}

          >

            <img

              src="/images/hmi-logo.jpg"

              alt="House of Mercy International Church logo"

              className="h-14 w-14 rounded-full object-cover shadow-md"

            />

            <div className="hidden sm:block">

              <div className="text-sm font-black uppercase tracking-wide text-[#07156f]">

                House of Mercy

              </div>


            <section className="welcome-leadership bg-[#07156f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
              <div className="welcome-message mx-auto max-w-4xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#f5bd32]/60 text-[#f5bd32]">
                  <Cross size={26} strokeWidth={1.7} aria-hidden="true" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#f5bd32] sm:text-sm">
                  A Message From Our Leadership
                </p>
                <h2 className="section-title mt-3 text-3xl text-white sm:text-4xl lg:text-5xl">
                  A Welcome from Our Church Leadership
                </h2>

                <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#f5bd32]" />

                <div className="mx-auto mt-8 max-w-3xl space-y-5 text-left text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  <h3 className="text-center text-xl font-bold leading-snug text-white sm:text-2xl">
                    Welcome to House of Mercy International Church
                  </h3>
                  <p>
                    Grace and peace to you in the name of our Lord Jesus Christ.
                  </p>
                  <p>
                    We warmly welcome you to House of Mercy International Church, a place where you can grow in faith, experience the love of God, and find a community that walks together in Christ. Whether you are visiting for the first time or have been part of our church family for years, we pray that you will feel at home in God's presence.
                  </p>
                  <p>
                    Our heart is to help people <span className="capitalize font-bold text-[#f5bd32]">believe</span> in Christ, <span className="capitalize font-bold text-[#f5bd32]">belong</span> to a loving church family, and <span className="capitalize font-bold text-[#f5bd32]">become</span> all that God has called them to be. We look forward to worshipping, growing, and serving together with you.
                  </p>
                  <p>
                    May the Lord bless you and your family abundantly.
                  </p>
                  <p className="pt-1">
                    With love and prayers,
                    <br />
                    <strong className="text-white">The Church Leadership</strong>
                    <br />
                    House of Mercy International Church
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f5bd32] px-6 py-3 font-black text-[#07156f] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ffd36b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Plan Your Visit
                  <ArrowRight size={18} />
                </a>
              </div>
            </section>
              <div className="text-xs font-bold tracking-[0.18em] text-[#b47b08]">

                INTERNATIONAL CHURCH

              </div>

            </div>

          </a>

          {/* Desktop navigation */}

          <nav className="hidden items-center gap-7 lg:flex">

            <a href="#home" className="nav-link">

              Home

            </a>

            <a href="#about" className="nav-link">

              About

            </a>

            <a href="#ministries" className="nav-link">

              Ministries

            </a>

            <a href="#worship" className="nav-link">

              Worship

            </a>

            <a href="#services" className="nav-link">

              Services

            </a>

            <a href="#contact" className="nav-link">

              Contact

            </a>

          </nav>

          {/* Desktop prayer button */}

          <div className="hidden lg:block">

            <a

              href={prayerLink}

              target="_blank"

              rel="noreferrer"

              className="prayer-glow flex items-center gap-2 rounded-full bg-[#07156f] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-[#0b21a3]"

            >

              <Heart size={17} />

              Request Prayer

            </a>

          </div>

          {/* Mobile menu button */}

          <button

            onClick={() => setMobileMenu(!mobileMenu)}

            className="rounded-lg p-2 text-[#07156f] lg:hidden"

            aria-label="Toggle navigation menu"

          >

            {mobileMenu ? <X size={27} /> : <Menu size={27} />}

          </button>

        </div>

        {/* Mobile navigation */}

        {mobileMenu && (

          <div className="border-t border-slate-100 bg-white px-5 py-6 shadow-lg lg:hidden">

            <div className="flex flex-col gap-5">

              {[

                ["Home", "home"],

                ["About", "about"],

                ["Ministries", "ministries"],

                ["Worship", "worship"],

                ["Services", "services"],

                ["Contact", "contact"],

              ].map(([label, target]) => (

                <a

                  key={target}

                  href={`#${target}`}

                  onClick={() => setMobileMenu(false)}

                  className="font-bold text-slate-700 transition hover:text-[#07156f]"

                >

                  {label}

                </a>

              ))}

              <a

                href={prayerLink}

                target="_blank"

                rel="noreferrer"

                className="prayer-glow mt-2 flex items-center justify-center gap-2 rounded-full bg-[#07156f] px-5 py-3 font-bold text-white"

              >

                <Heart size={17} />

                Request Prayer

              </a>

            </div>

          </div>

        )}

      </header>

      {/* =========================================================

          HERO — VIDEO

      ========================================================= */}

      <section
        id="home"
        className="hero-section relative isolate overflow-hidden border-b-4 border-[#f5bd32] bg-[#07156f]"
      >
        {/* Full-screen worship video background */}
        <div className="hero-video-background absolute inset-0 overflow-hidden" aria-hidden="true">
          {videos.map((videoSrc, index) => (
            <video
              key={videoSrc}
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              autoPlay={index === 0}
              muted
              playsInline
              preload="auto"
              onEnded={() => handleVideoEnd(index)}
              className={`hero-background-video absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ease-in-out ${
                currentVideo === index
                  ? "z-10 scale-100 opacity-100"
                  : "z-0 scale-[1.03] opacity-0"
              }`}
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ))}
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="hero-content relative z-20 mx-auto flex min-h-[inherit] w-full max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="max-w-2xl">
            <img
              src="/images/hmi-logo.jpg"
              alt="House of Mercy International Church"
              className="mb-3 h-12 w-12 rounded-full border-2 border-[#f5bd32] object-cover shadow-xl sm:h-14 sm:w-14"
            />

            <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#f5bd32]/50 bg-[#07156f]/35 px-3 py-1.5 text-[11px] font-bold text-[#f5bd32] backdrop-blur-sm sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#f5bd32]" />
              HOUSE OF MERCY INTERNATIONAL CHURCH
            </div>

            <h1 className="text-5xl font-black leading-[0.96] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="hero-word hero-word-one">Believe.</span>
              <span className="hero-word hero-word-two text-[#f5bd32]">Belong.</span>
              <span className="hero-word hero-word-three">Become.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-6 text-white sm:text-lg sm:leading-7">
              A church where all are loved, introduced to Christ, purpose is found, and lives are transformed.
            </p>

            <div className="hero-actions mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#services"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f5bd32] px-6 py-3 font-black text-[#07156f] shadow-xl transition hover:-translate-y-1 hover:bg-[#ffd36b]"
              >
                Join Us This Sunday
                <ArrowRight size={19} />
              </a>
              <a
                href={prayerLink}
                target="_blank"
                rel="noreferrer"
                className="prayer-glow flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-[#07156f]/25 px-6 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#07156f]"
              >
                <MessageCircle size={19} />
                I Need Prayer
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white drop-shadow-md">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-[#f5bd32]" />
                Every Sunday
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#f5bd32]" />
                8:30 AM – 10:30 AM
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#f5bd32]" />
                Mahlanya
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 z-30 flex items-center gap-3 sm:bottom-7 sm:right-8" aria-label="Hero video selection">
          {videos.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => selectVideo(index)}
              aria-label={`Play hero video ${index + 1}`}
              aria-pressed={currentVideo === index}
              className={`h-3 rounded-full border border-white/70 shadow-sm transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5bd32] ${
                currentVideo === index
                  ? "w-8 border-[#f5bd32] bg-[#f5bd32]"
                  : "w-3 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================

          WELCOME / ABOUT

      ========================================================= */}

      <section

        id="about"

        className="bg-white px-4 py-20 sm:px-6 lg:px-8"

      >

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="section-label">

              WELCOME TO HMI

            </p>

            <h2 className="section-title">

              A place to discover

              <span className="text-[#07156f]">

                {" "}faith, purpose and family.

              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              We exist to help people believe the gospel of Jesus Christ,

              belong to a church, and become everything that God desires,

              so that we might be used by Him and for His glory.

            </p>

            <a

              href="#ministries"

              className="mt-8 inline-flex items-center gap-2 font-bold text-[#07156f]"

            >

              Discover our church

              <ArrowRight size={18} />

            </a>

          </div>

          {/* Three values */}

          <div className="grid gap-4 sm:grid-cols-3 lg:gap-5">

            {[

              {

                number: "01",

                title: "Believe",

                text: "Discover Christ and grow in faith.",

              },

              {

                number: "02",

                title: "Belong",

                text: "Find community and spiritual family.",

              },

              {

                number: "03",

                title: "Become",

                text: "Walk boldly into your God-given purpose.",

              },

            ].map((item) => (

              <div

                key={item.number}

                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-xl"

              >

                <div className="text-3xl font-black text-[#f5bd32]">

                  {item.number}

                </div>

                <h3 className="mt-3 font-black text-[#07156f]">

                  {item.title}

                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================

          SERVICES / LOCATIONS

      ========================================================= */}

      <section

        id="services"

        className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"

      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="section-label">

              JOIN US

            </p>

            <h2 className="section-title">

              Worship With Us

            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">

              Come as you are. Worship with us, connect with God's people

              and experience the presence of God.

            </p>

          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            {/* Mahlanya */}

            <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1">

              <img

                src="/images/mahlanya-service.jpg"

                alt="HMI Sunday service at Bible Society Mahlanya"

                className="h-72 w-full bg-[#e2f4f7] object-contain"

              />

              <div className="p-7">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-sm font-black uppercase tracking-widest text-[#b47b08]">

                      Sunday Worship

                    </p>

                    <h3 className="mt-2 text-2xl font-black text-[#07156f]">

                      Bible Society — Mahlanya

                    </h3>

                  </div>

                  <div className="rounded-xl bg-[#07156f] p-3 text-white">

                    <CalendarDays size={24} />

                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">

                  <span className="flex items-center gap-2">

                    <Clock

                      size={18}

                      className="text-[#f5bd32]"

                    />

                    8:30 AM – 10:30 AM

                  </span>

                  <span className="flex items-center gap-2">

                    <MapPin

                      size={18}

                      className="text-[#f5bd32]"

                    />

                    Mahlanya

                  </span>

                </div>

                <a

                  href="#contact"

                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#07156f]"

                >

                  Get directions

                  <ArrowRight size={18} />

                </a>

              </div>

            </div>

            {/* Manzini */}

            <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1">

              <img

                src="/images/manzini-service.jpg"

                alt="HMI gathering in Manzini"

                className="h-72 w-full bg-[#07156f] object-contain"

              />

              <div className="p-7">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-sm font-black uppercase tracking-widest text-[#b47b08]">

                      Manzini Gathering

                    </p>

                    <h3 className="mt-2 text-2xl font-black text-[#07156f]">

                      Elihle Christian School

                    </h3>

                  </div>

                  <div className="rounded-xl bg-[#f5bd32] p-3 text-[#07156f]">

                    <MapPin size={24} />

                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">

                  <span className="flex items-center gap-2">

                    <Clock

                      size={18}

                      className="text-[#f5bd32]"

                    />

                    11:00 AM – 1:00 PM

                  </span>

                  <span className="flex items-center gap-2">

                    <MapPin

                      size={18}

                      className="text-[#f5bd32]"

                    />

                    Coats Valley

                  </span>

                </div>

                <a

                  href="#contact"

                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#07156f]"

                >

                  Get directions

                  <ArrowRight size={18} />

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================

          MINISTRIES

      ========================================================= */}

      <section

        id="ministries"

        className="bg-white px-4 py-20 sm:px-6 lg:px-8"

      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="section-label">

              OUR COMMUNITY

            </p>

            <h2 className="section-title">

              There is a place for you here.

            </h2>

            <p className="mt-5 leading-7 text-slate-600">

              HMI has ministries and fellowship opportunities designed to

              strengthen the Christian family and create opportunities

              for people to serve.

            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[

              "Children's Ministry",

              "Youth Ministry",

              "Young Adults",

              "Women's Fellowship",

              "Men's Fellowship",

              "Couples Fellowship",

              "Bible Study & Prayer",

              "Serving Ministry",

            ].map((ministry, index) => (

              <div

                key={ministry}

                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f5bd32] hover:shadow-xl"

              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07156f] font-black text-[#f5bd32]">

                  {String(index + 1).padStart(2, "0")}

                </div>

                <h3 className="mt-5 font-black text-slate-900">

                  {ministry}

                </h3>

                <div className="mt-4 h-1 w-8 rounded-full bg-[#f5bd32] transition-all group-hover:w-14" />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================

          WORSHIP / PRAYER

      ========================================================= */}

      <section

        id="worship"

        className="relative overflow-hidden bg-[#07156f] px-4 py-20 sm:px-6 lg:px-8"

      >

        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#f5bd32]/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f5bd32]">

              PRAYER

            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">

              Whatever you're carrying,

              <span className="text-[#f5bd32]">

                {" "}bring it to God.

              </span>

            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">

              Our church believes in praying together, standing with one

              another and seeking God in every circumstance.

            </p>

            <a

              href={prayerLink}

              target="_blank"

              rel="noreferrer"

              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f5bd32] px-7 py-4 font-black text-[#07156f] shadow-xl transition hover:-translate-y-1 hover:bg-[#ffd36b]"

            >

              <MessageCircle size={20} />

              Send a Prayer Request

            </a>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5bd32] text-[#07156f]">

              <Heart size={26} />

            </div>

            <blockquote className="mt-7 text-2xl font-bold leading-relaxed text-white">

              “A church where all are loved, introduced to Christ,

              purpose is found, and lives are transformed.”

            </blockquote>

            <div className="mt-6 h-1 w-16 bg-[#f5bd32]" />

            <p className="mt-4 text-sm font-semibold text-blue-200">

              House of Mercy International Church

            </p>

          </div>

        </div>

      </section>

      {/* =========================================================

          COMMUNITY / WHY HMI

      ========================================================= */}

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-3">

            <div className="rounded-3xl bg-[#07156f] p-8 text-white">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5bd32] text-[#07156f]">

                <Heart size={27} />

              </div>

              <h3 className="mt-7 text-2xl font-black">

                A Church of Love

              </h3>

              <p className="mt-4 leading-7 text-blue-100">

                A welcoming church community where people can encounter

                Christ and experience genuine Christian fellowship.

              </p>

            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5bd32] text-[#07156f]">

                <Users size={27} />

              </div>

              <h3 className="mt-7 text-2xl font-black text-[#07156f]">

                A Church Family

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                Grow alongside children, young people, adults, couples,

                families and fellow believers.

              </p>

            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07156f] text-[#f5bd32]">

                <CheckCircle2 size={27} />

              </div>

              <h3 className="mt-7 text-2xl font-black text-[#07156f]">

                A Place to Serve

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                Discover opportunities to use your gifts and serve God,

                His church and the community.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================

          CONTACT

      ========================================================= */}

      <section

        id="contact"

        className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"

      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="section-label">

              COME AND WORSHIP

            </p>

            <h2 className="section-title">

              We would love to welcome you.

            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Phone */}

            <a

              href="tel:+26876022924"

              className="rounded-2xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"

            >

              <Phone

                className="mx-auto text-[#07156f]"

                size={30}

              />

              <h3 className="mt-4 font-black text-[#07156f]">

                Call Us

              </h3>

              <p className="mt-2 text-slate-600">

                +268 7602 2924

              </p>

            </a>

            {/* WhatsApp */}

            <a

              href={prayerLink}

              target="_blank"

              rel="noreferrer"

              className="rounded-2xl bg-[#07156f] p-7 text-center text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"

            >

              <MessageCircle

                className="mx-auto text-[#f5bd32]"

                size={30}

              />

              <h3 className="mt-4 font-black">

                WhatsApp

              </h3>

              <p className="mt-2 text-blue-100">

                Connect with HMI

              </p>

            </a>

            {/* Location */}

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">

              <MapPin

                className="mx-auto text-[#07156f]"

                size={30}

              />

              <h3 className="mt-4 font-black text-[#07156f]">

                Find Us

              </h3>

              <p className="mt-2 text-slate-600">

                Bible Society — Mahlanya

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================

          FOOTER

      ========================================================= */}

      <footer className="bg-[#050d4b] px-4 py-12 text-white sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            {/* Church */}

            <div>

              <img

                src="/images/hmi-logo.jpg"

                alt="House of Mercy International Church"

                className="h-20 w-20 rounded-full border-2 border-[#f5bd32]"

              />

              <h3 className="mt-5 text-xl font-black">

                House of Mercy International Church

              </h3>

              <p className="mt-3 max-w-sm leading-7 text-blue-200">

                Believe. Belong. Become.

              </p>

            </div>

            {/* Quick links */}

            <div>

              <h4 className="font-black text-[#f5bd32]">

                Quick Links

              </h4>

              <div className="mt-4 flex flex-col gap-3 text-blue-200">

                <a href="#home" className="transition hover:text-white">

                  Home

                </a>

                <a href="#about" className="transition hover:text-white">

                  About

                </a>

                <a href="#ministries" className="transition hover:text-white">

                  Ministries

                </a>

                <a href="#services" className="transition hover:text-white">

                  Services

                </a>

                <a href="#contact" className="transition hover:text-white">

                  Contact

                </a>

              </div>

            </div>

            {/* Connect */}

            <div>

              <h4 className="font-black text-[#f5bd32]">

                Connect With Us

              </h4>

              <p className="mt-4 text-blue-200">

                +268 7602 2924

              </p>

              <p className="mt-2 text-blue-200">

                Bible Society — Mahlanya

              </p>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-blue-300">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <p>

                © {new Date().getFullYear()} House of Mercy International Church.

                All rights reserved.

              </p>

              <p className="text-[#f5bd32]">

                #BelieveBelongBecome

              </p>

            </div>

          </div>

        </div>

      </footer>

    </div>

  );

}

export default App;
