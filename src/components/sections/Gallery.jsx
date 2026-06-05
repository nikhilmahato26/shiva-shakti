import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from '../../utils/icons';
import SacredBackdrop from '../ui/SacredBackdrop';

const mediaItems = [
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dynbpb9u0/video/upload/v1780658790/WhatsApp_Video_2026-06-05_at_16.55.47_ddpcow.mp4',
    label: 'Shiva Shakthi Jyothisha Madom — Video 1',
  },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dynbpb9u0/video/upload/v1780658797/WhatsApp_Video_2026-06-05_at_15.17.16_fiqitd.mp4',
    label: 'Shiva Shakthi Jyothisha Madom — Video 2',
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780658798/WhatsApp_Image_2026-06-05_at_15.19.41_box3bk.jpg',
    label: 'Shiva Shakthi Jyothisha Madom — Photo 1',
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780658798/WhatsApp_Image_2026-06-05_at_15.18.14_fcfee9.jpg',
    label: 'Shiva Shakthi Jyothisha Madom — Photo 2',
  },
];

function VideoCard({ src, label }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-cosmic-950/70 shadow-glow">
      <video
        ref={ref}
        src={src}
        aria-label={label}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto object-contain"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cosmic-950/60 via-transparent to-transparent" />
      <div className="absolute bottom-3 right-3 z-10 flex gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? 'Pause' : 'Play'}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-cosmic-950/80 text-ivory backdrop-blur-md transition hover:border-gold/60 hover:text-gold"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-cosmic-950/80 text-ivory backdrop-blur-md transition hover:border-gold/60 hover:text-gold"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

function ImageCard({ src, label }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gold/25 bg-cosmic-950/70 shadow-glow">
      <img
        src={src}
        alt={label}
        className="w-full h-auto object-contain transition duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-24 lg:py-32">
      <SacredBackdrop variant="alt" stars={30} />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-cosmic-veil" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-cosmic-veil" />

      <div className="container-luxe relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-sanskrit text-xs uppercase tracking-[0.35em] text-gold/70">
            U Media's
          </p>
          <h2 className="font-display text-4xl font-semibold text-ivory sm:text-5xl">
            Shiva Shakthi
          </h2>
          <p className="mt-2 font-sanskrit text-lg tracking-widest text-gold-gradient-animate">
            Jyothisha Madom
          </p>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <p className="mx-auto mt-6 max-w-xl text-base text-ivory/60">
            A glimpse into our sacred space and divine consultations
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {mediaItems.map((item) => (
            <motion.div key={item.src} variants={fadeUp}>
              {item.type === 'video' ? (
                <VideoCard src={item.src} label={item.label} />
              ) : (
                <ImageCard src={item.src} label={item.label} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
