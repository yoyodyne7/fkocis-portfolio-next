import { HoverPreviewProvider } from '@/components/ui/HoverPreview'
import { SiteNav } from '@/components/nav/SiteNav'
import { SectionRow } from '@/components/ui/SectionRow'
import { Hero } from '@/components/sections/Hero'
import { Metrics } from '@/components/sections/Metrics'
import { VideoShowcase } from '@/components/sections/VideoShowcase'
import { InfluencerList } from '@/components/sections/InfluencerList'
import { StrategyGrid } from '@/components/sections/StrategyGrid'
import { Vision } from '@/components/sections/Vision'
import { WritingGrid } from '@/components/sections/WritingGrid'
import { PressReleases } from '@/components/sections/PressReleases'
import { CoverageLinks } from '@/components/sections/CoverageLinks'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <HoverPreviewProvider>
      <SiteNav />
      <main>
        <Hero />
        <Metrics />
        <FeaturedProject />

        <SectionRow id="work-video" num="01" title="Video &amp; TV Production" right="4 campaigns" />
        <VideoShowcase />

        <SectionRow num="02" title="Influencer &amp; Creator" right="3 campaigns" />
        <InfluencerList />

        <SectionRow num="03" title="Strategy &amp; Presentations" right="2 docs" />
        <StrategyGrid />

        <SectionRow id="vision-sec" num="04" title="Vision" />
        <Vision />

        <SectionRow id="writing-sec" num="05" title="Writing &amp; Content" right="4 samples" />
        <WritingGrid />

        <SectionRow num="06" title="Press Releases" right="3 releases" />
        <PressReleases />

        <SectionRow num="07" title="Coverage &amp; Links" right="3 links" />
        <CoverageLinks />

        <SectionRow id="contact" num="08" title="Contact" />
        <Contact />
      </main>
    </HoverPreviewProvider>
  )
}
