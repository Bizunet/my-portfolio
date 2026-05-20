// ── Images ──────────────────────────────────────────
import profile    from '../assets/images/profile.jpg'

import p01 from '../assets/images/p01_king.jpg'
import p02 from '../assets/images/p02_20th.jpg'
import p03 from '../assets/images/p03_christ.jpg'
import p04 from '../assets/images/p04_family.jpg'
import p05 from '../assets/images/p05_choir.jpg'
import p06 from '../assets/images/p06_medesat.jpg'
import p07 from '../assets/images/p07_ydk.jpg'
import p08 from '../assets/images/p08_evan.jpg'
import p09 from '../assets/images/p09_kahine_b.jpg'
import p10 from '../assets/images/p10_kahine_g.jpg'
import p11 from '../assets/images/p11_wamas.jpg'
import p12 from '../assets/images/p12_qatar.jpg'

import pr1 from '../assets/images/pr1_portrait.jpg'
import pr2 from '../assets/images/pr2_selam.jpg'

import l1  from '../assets/images/l1_harp.jpg'
import l2  from '../assets/images/l2_mashaya.jpg'
import l3  from '../assets/images/l3_night.jpg'
import l4  from '../assets/images/l4_fares.jpg'

// ── Portfolio Data ───────────────────────────────────
export { profile }

export const posters = [
  { id: 1,  img: p01, title: 'Worship The King',      sub: 'Season 6 — Worship Event',         featured: true  },
  { id: 2,  img: p02, title: '20th Anniversary',      sub: 'DDUECSF Milestone Poster',          featured: false },
  { id: 3,  img: p03, title: 'In Christ',             sub: 'Choir Night Event',                 featured: false },
  { id: 4,  img: p04, title: 'Family Day',            sub: 'Balemhiret — DDUECSF',              featured: false },
  { id: 5,  img: p05, title: 'Tmelkalbash',           sub: 'Choir Night Event',                 featured: false },
  { id: 6,  img: p06, title: 'BeEgziabher Medesat',  sub: 'Three-Day Conference',               featured: false },
  { id: 7,  img: p07, title: 'Yedem Kibr',            sub: 'Upcoming Choir Night — Fares Choir',featured: false },
  { id: 8,  img: p08, title: 'Evan Mobilizer',        sub: 'DDUECSF Media Campaign',            featured: false },
  { id: 9,  img: p09, title: 'Kahine Season 3',       sub: 'Concert Poster — Blue Edition',     featured: false },
  { id: 10, img: p10, title: 'Kahine Season 3',       sub: 'Concert Poster — Green Edition',    featured: false },
  { id: 11, img: p11, title: "Wamas Girl's",          sub: 'Fashion Collection Ad',             featured: false },
  { id: 12, img: p12, title: 'Qatar Airways',         sub: 'Commercial Ad Design',              featured: false },
]

export const printings = [
  { id: 1, img: pr1, title: 'Portrait Photo Print',  sub: 'Professional Photo Production'   },
  { id: 2, img: pr2, title: 'Selam — Peace Banner',  sub: 'Wide-Format Print · John 14:27'  },
]

export const logos = [
  { id: 1, img: l1, title: "David's Harp",    sub: 'Music Ministry · Logo Design',       bg: '#2a1005' },
  { id: 2, img: l2, title: 'Mashaya Coffee',  sub: 'Coffee House · Brand Identity',      bg: '#e91f8f20' },
  { id: 3, img: l3, title: 'Night Sky Type',  sub: 'Ethiopic Typography · Wordmark',     bg: '#0b1a3a' },
  { id: 4, img: l4, title: 'Fares Choir',     sub: 'DDUECSF Choir · Logo Design',        bg: '#1e1003' },
]

export const services = [
  { n:'01', title:'Event Poster Design',    desc:'High-impact posters for choir nights, concerts, and worship events — bold Ethiopic type meets contemporary layout.' },
  { n:'02', title:'Logo & Brand Identity',  desc:'Timeless logos and visual systems for choirs, cafés, ministries, and businesses designed with clarity.' },
  { n:'03', title:'Print Design',           desc:'Banners, certificates, and wide-format materials crafted for professional production.' },
  { n:'04', title:'Social Media Graphics',  desc:'Scroll-stopping content for Telegram, Instagram, TikTok, and Facebook.' },
  { n:'05', title:'Ethiopic Typography',    desc:'Expressive Amharic/Ge\'ez script transformed into striking display art and wordmarks.' },
  { n:'06', title:'Commercial Advertising', desc:'Ad creatives for airlines, fashion boutiques, and local businesses built to drive attention.' },
]
