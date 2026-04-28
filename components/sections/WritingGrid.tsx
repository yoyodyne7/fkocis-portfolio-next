'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const articles = [
  {
    num: '01',
    type: 'Blog Post · Concrobium',
    title: "Don't Let Mold Sink Your Real Estate Deal",
    href: 'https://www.concrobium.com/pro/attic-attack/',
    paragraphs: [
      "The temperature isn't the only thing warming up this time of year. Spring is the unofficial start of peak real estate sales season — the frost disappears and the market starts booming with folks looking for a simple change of scenery or families looking for bigger spaces.",
      "The sales window is tight since anyone with kids is looking to close a deal and move in before the start of the new school year. There's not a lot of time to contend with unforeseen problems that will affect your ability to close the transaction at top dollar. All it takes is a home inspector taking a quick look in your attic and finding mold to put the kybosh on an otherwise done deal.",
      "For major mold outbreaks, we always recommend you call in the professionals — but depending on the severity of the problem you may be able to tackle the job yourself with the powerful one-two punch of Concrobium Mold Control and Concrobium Mold Stain Eraser.",
      "The first step in treating mold is to always ensure you've eliminated the cause of the moisture. If you don't treat the source of the moisture, the mold will keep coming back.",
      "Once you've dealt with the moisture issue, apply Concrobium Mold Control directly to affected surfaces and allow to dry. Non-toxic Concrobium Mold Control will eliminate the mold and contains no bleach, VOCs or other harmful chemicals that may be unsafe to use in confined, unventilated spaces.",
      "The next step is to treat any embedded mold stains with the oxidizing power of Concrobium Mold Stain Eraser. It pulls mold stains out of building materials without using bleach or giving surfaces a washed-out look.",
      "Once you've allowed Concrobium Mold Stain Eraser to dry, treat the attic with one more round of Concrobium Mold Control to create an invisible anti-microbial shield to keep mold from coming back.",
      "A moldy attic doesn't have to keep you from getting top dollar out of your next home sale. Don't panic, and definitely don't reach for bleach — it's toxic and it doesn't work on porous surfaces like most building materials. Harness the power of Concrobium Mold Solutions to solve all your mold problems.",
    ],
  },
  {
    num: '02',
    type: 'Blog Post · Concrobium',
    title: "'Tis the Season... For Mold?",
    href: 'https://www.concrobium.com/pro/en-can/resources/',
    paragraphs: [
      "At this very festive time of year, the last thing anyone is thinking about is mold. Typically, mold has a hard time growing in cold, dry conditions — so most of the places around your home susceptible to a mold outbreak are pretty safe. But that doesn't mean mold won't take hold this holiday season.",
      "If, like many people, you've bought a live Christmas tree for the holidays this year, you may end up with an unwanted present from an invisible guest — hint: it's not courtesy a jolly elf and eight tiny reindeer.",
      "According to Allergist Dr. Weily Soong with the Alabama Allergy & Asthma Center: \"Sometimes people may confuse sneezing and runny nose with cold symptoms when instead they're allergic to the tree. It's what some doctors call Christmas Tree Syndrome. But it's usually not the tree itself that makes you sick — mold in the tree or chemicals sprayed on it to preserve it are the problem, which can trigger allergy symptoms or cause an asthma attack. Mold loves moisture, so when you put the water in the tree it's a great place for mold to grow, so it releases mold spores and people become allergic.\"",
      "According to Dr. Soong, Christmas trees are full of moisture anyway because they're stored outdoors — so mold is already growing on it before you even buy one.",
      "If you notice any adverse reaction to your tree, you might want to think about buying an artificial one for next year. But if you suspect your tree has mold, try using Concrobium Mold Control Aerosol. It's great for getting into those tough-to-reach places between branches (just make sure you do it before you hang the lights) and it leaves an antimicrobial shield so you can worry less about mold and concentrate on making merry.",
      "Happy Holidays from the Concrobium Mold Solutions family to yours.",
    ],
  },
  {
    num: '03',
    type: 'Freelance · Finance',
    title: 'Unusual Account Opening Bonuses',
    href: null,
    paragraphs: [
      "Aside from paying taxes and dying, a bank account is pretty much a given on life's inevitability checklist.",
      "Financial institutions march in lock-step regarding interest rates & fees. And with several branches & ATMs in every neighbourhood — and online banking — proximity isn't much of a determining factor. Choosing a bank sometimes comes down to an account opening incentive.",
      "The \"free toaster\" offer has become a well-worn cliché of FI marketing. It's a relic of a bygone era, but it doesn't mean banking institutions aren't still offering interesting perks. While Canadian banks are notoriously conservative with these incentives (the same conservatism kept us mostly dry during the financial storms of the past few years), the following are some of the more interesting ways bankers abroad attempt to court your cash.",
      "ANTI-VIRUS SOFTWARE — With more people conducting their banking online, free anti-virus software as an incentive seems like a no-brainer. Bank of America offers 12 months of McAfee anti-virus software protection when you sign up for an account — protecting your banking transactions and making your computer safe from phishers, hackers, and things that go bump in the net.",
      "MANEKI NEKO — In 2010, Union Bank in Washington State offered an ethnic variation on the piggy bank. Maneki neko, or Fortune Cat, is a traditional Japanese ceramic sculpture said to bring good luck to its owner. Along with the cat, the account came with a $125 bonus when you establish one qualifying service — thus immediately improving your fortunes.",
      "STEAKS — Sovereign Bank offers a king's ransom of swag via 18 pages of their customer referral program's brochure. Refer enough friends and the bank will send you 16 Omaha Steaks filet mignons. Refer enough friends after that and they'll throw in the barbecue to grill them on.",
      "GUNS — Possibly the most infamous account opening incentive came from North Country Bank & Trust in Northern Michigan, which offered depositors their choice of firearm for opening a CD account. Later lampooned by Michael Moore in Bowling for Columbine, the bank insists it was set up.",
      "VIDEO GAMES — In Spain, potential customers were encouraged to join Open Bank or Santander with the promise of a free X-Box Kinect System. Not to be outdone, CAM Savings Bank offered new customers a Wii Sports pack to get the ball rolling on their savings account.",
      "TENTS — Giftsforbanking.com, a digital offshoot of Flushing Savings Bank, offered a Eureka 2-person tent for a minimum $5,000 deposit in a 2-year CD account. For a mere $100,000 5-year deposit, customers could select the \"Ultimate NYC Package\" — hotel, airfare, and food.",
      "BAG OF RICE — Possibly the least glam but most practical incentive in banking history was offered by California's Hanmi Bank in 2009: a free cheque book, a coffee mug, and a bag of rice. Frugal, practical, and arguably sensible.",
      "CAR WASHES — In 2010, Illinois' Plaza Bank gave new customers 10 free car washes for opening a Free Checking Account with Online Banking and a minimum deposit of $100 — giving folks one more reason to keep their vehicles clean while chasing the dream of being filthy rich.",
    ],
  },
  {
    num: '04',
    type: 'Freelance · Tech',
    title: 'Running Your Own Bitcoin Node',
    href: null,
    paragraphs: [
      "TL;DR: There are lots of reasons to run your own node and secure your assets, and you don't need to have a programming background to get started.",
      "You've done your research. You've got your wallet set up. You've secured your seed phrase. You've bought some Bitcoin. Now what?",
      "If you're like me, you go down a bit of a Reddit hole and start thinking about the benefits of running your own bitcoin node. I'm not talking about a mining node — those require powerful, specialised computers with application-specific integrated circuits (ASICs) that are very expensive. If you have an old laptop and a vague inclination towards learning a bit about the Linux OS (or you could grab a Raspberry Pi if you're feeling adventurous), I strongly encourage you to run your own verification node.",
      "REASON 1: TRUST — By running your own node and connecting a bitcoin wallet to it, you can verify transactions you receive. This is achieved by storing a local copy of the bitcoin ruleset and blockchain which you know to be valid — letting you independently ensure that the bitcoin you receive are legitimate.",
      "You may have gone through the trouble of getting yourself a Ledger Nano X to secure your private keys offline, but if you're using the Ledger Live app to check on your assets, you're still relying on Ledger's node to verify them. Running your own node eliminates that third-party trust.",
      "REASON 2: PRIVACY — Running your own node reduces your reliance on third parties, which has the additional benefit of protecting your privacy. When you use a \"hot\" wallet connected to your browser, you expose your IP address, possibly your transaction history, and other identifiable information to your wallet's service provider. You can also configure your node to run on the Tor protocol, adding an additional layer of protection.",
      "REASON 3: DECENTRALISATION — When you run your own node at home, you operate an entire working copy of the bitcoin blockchain at your unique physical location — one that no one can prevent you from accessing. Whether it's a country banning bitcoin, a power outage, or a natural disaster, the decentralised nature of the Bitcoin network means the blockchain continues to run unhindered. Every additional node makes it just a little bit more secure.",
      "If you're looking for something more turnkey, you can use Umbrel or MyNode — though be aware of the trade-offs when relying on a third-party service.",
      "UPDATE: A former Umbrel developer (still in his teens — a story deserving of its own post) has launched a completely open-source version of the Umbrel platform called Citadel. Between the ease of set-up, the helpful Telegram group, and the easy-to-use app store, I'm really impressed and couldn't be happier.",
    ],
  },
]

function ArticleRow({
  num, type, title, href, paragraphs, isOpen, onToggle, onClose,
}: (typeof articles)[number] & { isOpen: boolean; onToggle: () => void; onClose: () => void }) {
  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        className="work-item-row"
        onClick={onToggle}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        style={{
          display: 'grid',
          gridTemplateColumns: '3rem 1fr auto auto',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '1.5rem var(--side-pad)',
          borderBottom: isOpen ? 'none' : '1px solid var(--color-border)',
          color: 'var(--color-ink)',
          transition: 'background .12s',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <span className="font-mono-dm" style={{ fontSize: '0.65rem', color: 'var(--color-border)' }}>
          {num}
        </span>
        <span
          className="work-row-title"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, transition: 'color .2s' }}
        >
          {title}
        </span>
        <span
          className="work-row-cat font-mono-dm"
          style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted)', textAlign: 'right' }}
        >
          {type}
        </span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-mono-dm"
            style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textDecoration: 'none', lineHeight: 1 }}
            aria-label="View original"
          >
            ↗
          </a>
        ) : (
          <span style={{ width: '1rem' }} />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
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
                style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-green)', marginBottom: '1rem' }}
              >
                {type}
              </div>

              <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '2rem', maxWidth: '44rem' }}>
                {title}
              </h3>

              <div style={{ maxWidth: '44rem' }}>
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-mono-dm"
                    style={{ fontSize: '0.75rem', lineHeight: 1.9, color: 'var(--color-muted)', marginBottom: '1rem' }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function WritingGrid() {
  const [openNum, setOpenNum] = useState<string | null>(null)

  return (
    <div style={{ borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
      {/* Ghost word */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '2rem',
          left: '-1rem',
          fontSize: 'clamp(5rem, 14vw, 13rem)',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          color: 'var(--color-ghost)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        WORDS
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {articles.map((a) => (
          <ArticleRow
            key={a.num}
            {...a}
            isOpen={openNum === a.num}
            onToggle={() => setOpenNum(openNum === a.num ? null : a.num)}
            onClose={() => setOpenNum(null)}
          />
        ))}
      </div>

      <style>{`
        .work-item-row:hover { background: #fff; }
        .work-item-row:hover .work-row-title { color: var(--color-pink); }
        @media (max-width: 900px) {
          .work-item-row { grid-template-columns: 2.5rem 1fr auto !important; }
          .work-row-cat { display: none; }
        }
      `}</style>
    </div>
  )
}
