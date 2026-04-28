'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const pressItems = [
  {
    num: '01',
    badge: 'Product Launch · Rust-Oleum Canada',
    title: "Say Goodbye to Guesswork: Colour Spark Launch",
    date: 'May 2023',
    paragraphs: [
      "FOR IMMEDIATE RELEASE",
      "Concord, ON, May 4, 2023 — Rust-Oleum Canada, the home of market-leading paint, woodcare, automotive and high-performance coating brands, has launched its first-ever pre-tinted wall paints, Colour Spark. In a market with countless paint colour options, this all-in-one paint and primer stands out with its professionally curated pre-tinted hues that are both affordable and convenient.",
      "\"We wanted to reinvent and simplify the painting experience to make it easier and less confusing for homeowners, renters, DIYers, and pros by creating a high-performance, pre-tinted paint line and easy online and in-store experience,\" says Vice President and General Manager, Rust-Oleum Canada, Maurice Lobreau. \"It was important for us to bridge the gap in the renovation process by making our line more accessible. We want to show consumers just how easy it is to achieve trends-based home design without any headaches.\"",
      "Colour Spark offers homeowners, DIYers, and pros a collection of 13 consumer-friendly, pre-tinted hues that are highly versatile and intentionally designed to work together in harmony. The paints come in both interior and exterior formulations and two contrasting finishes — eggshell and semi-gloss — making them perfect for high-traffic spaces and ideal for all kitchens and living spaces, including bathrooms.",
      "As part of a meticulous and research-driven process, Rust-Oleum Canada partnered with colour and design expert Leigh-Ann Allaire Perrault to develop the perfect palette. From soft, ethereal tints to grounded, earthy neutrals, Colour Spark is designed to inspire consumers to confidently make colour decisions that reflect their unique style and personality.",
      "\"We began the palette development process by assessing more than 500 popular, top-selling hues from across the consumer coatings industry, and then after carefully categorizing each by saturation, value and hue family, we eliminated redundancies,\" says Allaire Perrault. \"The result is a hyper-curated collection of colours that individually merge timeless sophistication with in-vogue style.\"",
      "Renowned real estate mogul and HGTV personality Scott McGillivray has also put his stamp of approval on Colour Spark. \"Whether you're an expert painter or considering taking on your first DIY project, Rust-Oleum's Colour Spark has got you covered. With a designer-selected colour palette and built-in primer, you can simply grab a can right off the shelves and start painting. It's paint and protection rolled into one for an affordable price.\"",
      "Find Colour Spark in-store at Walmart Canada, Home Depot, RONA, Lowe's, Amazon.ca, and RénoDépôt.ca, or visit colourspark.ca.",
    ],
  },
  {
    num: '02',
    badge: 'Event · Spotlight Toronto',
    title: "PintxosTO: Toronto's Top Chefs Take on Tapas",
    date: 'Jun 2014',
    paragraphs: [
      "FOR IMMEDIATE RELEASE",
      "June 23, 2014 – Toronto — Spotlight Toronto Events (Suresh Doss & Frank Kocis) brought you noodles (SLURP!), dim sum (Yumcha) — now, just in time for summer, they bring you tapas.",
      "PintxosTO is a summer block party with good food, good wine and good times. Inspired by the small-plates style of eating popular throughout many parts of the world, we've taken the Spanish influence as a point of departure — letting chefs take classic cues and remix the tapas theme in any direction they choose. Our event celebrates the Latin influence that has popped up across the city over the past 18 months.",
      "We're also very excited to be partnering with the popular Spanish pilsner Estrella Damm — brewed in Barcelona with 100% natural local Mediterranean ingredients since 1876 — to bring an authentic Spanish beverage to the streets of Toronto.",
      "Spotlight Toronto Events is thrilled to announce the vendor line-up for PintxosTO presented by Estrella Damm: Bar Isabel, Barsa Taberna, Buca, Cava, Chiado, Marben, Torito, Patria, Pimenton, Portland Variety, Salt Wine Bar.",
      "Some vendors will also be accepting digital payment courtesy of local start-up Tab Payments — a simple and elegant alternative to traditionally paying and splitting restaurant bills.",
      "EVENT DETAILS — Date: Sunday July 6, 2014 · Time: 11 am – 4 pm · Location: Parking Lot at 495 Wellington Street West · Tickets: $10 General Admission",
      "For more information contact: Suresh Doss (416.803.1705 suresh@foodtruckeats.ca) or Frank Kocis (416.270.9796 frank@foodtruckeats.ca)",
    ],
  },
  {
    num: '03',
    badge: 'Event · Food Truck Eats',
    title: 'SLURP Noodlefest at The Great Hall',
    date: 'Feb 2013',
    paragraphs: [
      "FOR IMMEDIATE RELEASE",
      "February 5, 2013 – Toronto — Suresh Doss and Frank Kocis, the co-producers behind Food Truck Eats, Toronto's ongoing series of wildly popular events celebrating gourmet street food culture, proudly present their latest pop-up experience: SLURP Noodlefest!",
      "On Sunday March 3rd, some of Toronto's best and brightest chefs will converge on The Great Hall and use their noodle to deliver their unique culinary spin on pho, ramen, and other popular noodle dishes, as well as a wide array of globally-inspired street food snacks.",
      "Featured Chefs: Cindy Arman (Babi & Co.), Victor Barry (Splendido), Carl Heinrich (Richmond Station, Top Chef Canada Season 2 winner), Adam Hynam-Smith (El Gastronomo Vagabundo), Nick Liu (Gwailo), Nuit Regular (Sukhothai), Eric Wood (The Hawthorne).",
      "Continuing in the spirit of previous Food Truck Eats events, SLURP Noodlefest will also feature some of the best in local brewing and distilling from Amsterdam Brewery, Tromba Tequila, and Dillion's Distillery.",
      "A very limited number of tickets will be available for what will undoubtedly be one of the hottest events of the winter culinary calendar.",
      "EVENT DETAILS — What: SLURP Noodlefest · Where: The Great Hall, 1087 Queen Street West · When: Sunday March 3rd, 12 pm – 5 pm · Tickets: $10",
      "For more information contact: Suresh Doss (416.803.1705 suresh@foodtruckeats.ca) or Frank Kocis (416.270.9796 frank@foodtruckeats.ca)",
    ],
  },
]

function PressRow({
  num, badge, title, date, paragraphs, isOpen, onToggle, onClose,
}: (typeof pressItems)[number] & { isOpen: boolean; onToggle: () => void; onClose: () => void }) {
  const canExpand = paragraphs !== null

  return (
    <div>
      <div
        role={canExpand ? 'button' : undefined}
        tabIndex={canExpand ? 0 : undefined}
        onClick={canExpand ? onToggle : undefined}
        onKeyDown={canExpand ? (e) => e.key === 'Enter' && onToggle() : undefined}
        style={{
          display: 'grid',
          gridTemplateColumns: '3rem 1fr auto',
          gap: '1.5rem',
          alignItems: 'start',
          padding: '2rem var(--side-pad)',
          borderBottom: isOpen ? 'none' : '1px solid var(--color-border)',
          transition: 'background .12s',
          cursor: canExpand ? 'pointer' : 'default',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '')}
      >
        <div className="font-mono-dm" style={{ fontSize: '0.62rem', color: 'var(--color-border)', paddingTop: '0.2rem' }}>
          {num}
        </div>
        <div>
          <div
            className="font-mono-dm"
            style={{ fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-green)', marginBottom: '0.4rem' }}
          >
            {badge}
          </div>
          <div style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '0.5rem' }}>
            {title}
          </div>
        </div>
        <div className="font-mono-dm press-date" style={{ fontSize: '0.62rem', color: 'var(--color-muted)', whiteSpace: 'nowrap', paddingTop: '0.2rem', textAlign: 'right' }}>
          {date}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && paragraphs && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}
          >
            <div style={{ background: 'var(--color-bg)', padding: '3rem var(--side-pad)', position: 'relative' }}>
              <button
                onClick={onClose}
                className="font-mono-dm"
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'var(--color-ghost)',
                  border: 'none',
                  color: 'var(--color-ink)',
                  fontSize: '0.72rem',
                  cursor: 'pointer',
                  padding: '4px 10px',
                  borderRadius: 4,
                  letterSpacing: '0.05em',
                }}
              >
                ✕ close
              </button>

              <div
                className="font-mono-dm"
                style={{ fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-green)', marginBottom: '1rem' }}
              >
                {badge}
              </div>

              <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '2rem', maxWidth: '44rem' }}>
                {title}
              </h3>

              <div style={{ maxWidth: '44rem' }}>
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-mono-dm"
                    style={{
                      fontSize: i === 0 ? '0.6rem' : '0.75rem',
                      lineHeight: 1.9,
                      color: i === 0 ? 'var(--color-pink)' : 'var(--color-muted)',
                      marginBottom: i === 0 ? '1.5rem' : '1rem',
                      textTransform: i === 0 ? 'uppercase' : 'none',
                      letterSpacing: i === 0 ? '0.1em' : 'normal',
                      fontWeight: i === 0 ? 600 : 400,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .press-date { display: none; }
        }
      `}</style>
    </div>
  )
}

export function PressReleases() {
  const [openNum, setOpenNum] = useState<string | null>(null)

  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      {pressItems.map((item) => (
        <PressRow
          key={item.num}
          {...item}
          isOpen={openNum === item.num}
          onToggle={() => setOpenNum(openNum === item.num ? null : item.num)}
          onClose={() => setOpenNum(null)}
        />
      ))}
    </div>
  )
}
