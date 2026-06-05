import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  FaWhatsapp,
  FaYoutube,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
} from '../../utils/icons';
import Button from '../ui/Button';
import SacredBackdrop from '../ui/SacredBackdrop';
import { site, telLink, whatsappLink, primaryPhoneDigits } from '../../data/site';
import { trustIndicators } from '../../data/content';
import logoImg from '../../assets/images/logo.png';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const heroVideoUrl =
  'https://res.cloudinary.com/dynbpb9u0/video/upload/v1780651530/WhatsApp_Video_2026-06-05_at_14.42.57_kh5244.mp4';

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <SacredBackdrop variant="default" stars={55} />
      {/* bottom veil so it melts into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-cosmic-veil" />

      <div className="container-luxe relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:gap-14"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            {/* Badge */}
            <motion.div
              variants={item}
              className="glass-gold mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gold"
            >
              <img src={logoImg} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
              25+ Years Experience
            </motion.div>

            {/* Brand line */}
            <motion.p
              variants={item}
              className="mb-4 font-sanskrit text-sm uppercase tracking-[0.35em] text-ivory/60"
            >
              {site.brandLine} {site.name}
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="font-display text-4xl font-semibold leading-[1.08] text-ivory sm:text-6xl lg:text-7xl text-balance"
            >
              Unlock Your Destiny Through
              <span className="mt-1 block text-gold-gradient-animate">Vedic Wisdom</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg"
            >
              Vedic Astrology • Numerology • Vastu • Spiritual Healing • Poojas &amp; Homas
            </motion.p>

            <motion.div
              variants={item}
              className="mt-5 flex flex-col items-center justify-center gap-3 text-sm text-ivory/65 sm:flex-row sm:flex-wrap lg:justify-start"
            >
              <a
                href={site.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-ivory/80 transition hover:border-gold/50 hover:text-gold"
              >
                <FaYoutube className="h-4 w-4 text-gold" />
                YouTube {site.youtubeHandle}
              </a>
              <span className="max-w-xl">
                Astrology services are communicated in {site.serviceLanguages.join(', ')}.
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
            >
              <Button href="#contact" variant="gold" size="lg" icon={CalendarDays} iconRight={false}>
                Book Consultation
              </Button>
              <Button
                href={telLink(primaryPhoneDigits)}
                variant="glass"
                size="lg"
                icon={Phone}
                iconRight={false}
              >
                Call Now
              </Button>
              <Button
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={FaWhatsapp}
                iconRight={false}
              >
                WhatsApp Consultation
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.ul
              variants={item}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:justify-start"
            >
              {trustIndicators.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-ivory/70">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gold/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 bg-cosmic-950/70 shadow-glow-lg">
              <video
                ref={videoRef}
                className="h-auto w-full object-contain"
                src={heroVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Shiva Shakthi Jyothisha Madom introduction video"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cosmic-950/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause hero video' : 'Play hero video'}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-cosmic-950/75 text-ivory shadow-glass backdrop-blur-md transition hover:border-gold/60 hover:text-gold"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute hero video' : 'Mute hero video'}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-cosmic-950/75 text-ivory shadow-glass backdrop-blur-md transition hover:border-gold/60 hover:text-gold"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/40 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5 text-gold/70" />
        </motion.span>
      </motion.a>
    </section>
  );
}
