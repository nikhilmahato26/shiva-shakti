import { motion } from 'framer-motion';
import {
  Phone,
  FaWhatsapp,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
} from '../../utils/icons';
import Button from '../ui/Button';
import SacredBackdrop from '../ui/SacredBackdrop';
import { site, telLink, whatsappLink, primaryPhoneDigits } from '../../data/site';
import { trustIndicators } from '../../data/content';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <SacredBackdrop variant="default" stars={55} />
      {/* bottom veil so it melts into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-cosmic-veil" />

      <div className="container-luxe relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="glass-gold mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-glow" />
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

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
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
            className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            {trustIndicators.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-ivory/70">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                {t}
              </li>
            ))}
          </motion.ul>
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
