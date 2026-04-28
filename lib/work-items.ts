export type EmbedMode = 'document' | 'video' | 'video-gallery' | 'social' | 'folder'

export interface VideoClip {
  title: string
  youtubeId: string
}

export interface WorkItem {
  id: string
  title: string
  description: string
  type: string
  embedMode: EmbedMode
  embedUrl: string
  directUrl: string
  videos?: VideoClip[]
}

export const workItems: WorkItem[] = [
  {
    id: '01',
    title: 'Brandsell Campaigns',
    description: 'TV, video, and broadcast production oversight',
    type: 'VIDEO',
    embedMode: 'video-gallery',
    embedUrl: '',
    directUrl: 'https://www.youtube.com/watch?v=Imqk0tjOWZY',
    videos: [
      { title: 'Tremclad Turbo "PSSSSHT"', youtubeId: 'c8vsWYM2RKY' },
      { title: 'Colour Spark "Greatest Colours of All Time"', youtubeId: 'e6WZcKRa9h8' },
      { title: 'Rust-Oleum Low Odour "The Nose"', youtubeId: 'cXb5-Xbh31I' },
      { title: 'Concrobium: Defend Your Home', youtubeId: 'Imqk0tjOWZY' },
    ],
  },
  {
    id: '02',
    title: 'Influencer Content',
    description: 'Creator briefs and influencer campaign copy',
    type: 'REEL',
    embedMode: 'social',
    embedUrl: 'https://www.instagram.com/reel/DOMKXqfj9E5/embed/',
    directUrl: 'https://www.instagram.com/reel/DOMKXqfj9E5/',
  },
  {
    id: '03',
    title: 'Ad Copy',
    description: 'Print, digital, and OOH campaign headlines',
    type: 'PDF',
    embedMode: 'document',
    embedUrl: 'https://drive.google.com/file/d/1dRLnXpT0ahRfkx9pJTxICn4hkKmnFfp4/preview',
    directUrl: 'https://drive.google.com/file/d/1dRLnXpT0ahRfkx9pJTxICn4hkKmnFfp4/view',
  },
  {
    id: '04',
    title: 'Presentations',
    description: 'Decks for pitches, ops plans, and campaigns',
    type: 'SLIDES',
    embedMode: 'document',
    embedUrl: 'https://docs.google.com/presentation/d/1uo4rpEJNlm7SJI-FfqMm2rP8nJvEmsGpgolZRzo7qyU/embed?start=false&loop=false',
    directUrl: 'https://docs.google.com/presentation/d/1uo4rpEJNlm7SJI-FfqMm2rP8nJvEmsGpgolZRzo7qyU/edit',
  },
  {
    id: '05',
    title: 'Photoshop & Graphics',
    description: 'Visual design, banners, and social assets',
    type: 'FOLDER',
    embedMode: 'folder',
    embedUrl: 'https://drive.google.com/embeddedfolderview?id=1BuB16F-6V8PpjVKqRKwpB_JGyUg5c-k2&usp=sharing',
    directUrl: 'https://drive.google.com/drive/folders/1BuB16F-6V8PpjVKqRKwpB_JGyUg5c-k2',
  },
  {
    id: '06',
    title: 'Press Releases',
    description: 'News announcements and media communications',
    type: 'PDF',
    embedMode: 'document',
    embedUrl: 'https://drive.google.com/file/d/1_4yS-4xpmLLqZGmLMnkXSg3SxgHO4sdw/preview',
    directUrl: 'https://drive.google.com/file/d/1_4yS-4xpmLLqZGmLMnkXSg3SxgHO4sdw/view',
  },
  {
    id: '07',
    title: 'Brochures & Product Knowledge',
    description: 'Sales enablement and product sell sheets',
    type: 'PDF',
    embedMode: 'document',
    embedUrl: 'https://drive.google.com/file/d/18epSnR0_Xya4FRxeVtQ78kjY3m_P3hN1/preview',
    directUrl: 'https://drive.google.com/file/d/18epSnR0_Xya4FRxeVtQ78kjY3m_P3hN1/view',
  },
  {
    id: '08',
    title: 'Articles',
    description: 'Freelance and ghostwritten long-form editorial',
    type: 'PDF',
    embedMode: 'document',
    embedUrl: 'https://drive.google.com/file/d/1AkpwIE9RDMagxued51v8M8M0djYTzyLE/preview',
    directUrl: 'https://drive.google.com/file/d/1AkpwIE9RDMagxued51v8M8M0djYTzyLE/view',
  },
  {
    id: '09',
    title: 'Blog Posts',
    description: 'Brand blog content across consumer categories',
    type: 'DOC',
    embedMode: 'document',
    embedUrl: 'https://docs.google.com/document/d/1nlqNAti8WXbELawPUTuWIkYaExgGp9vAKZOZrfkNMCc/preview',
    directUrl: 'https://docs.google.com/document/d/1nlqNAti8WXbELawPUTuWIkYaExgGp9vAKZOZrfkNMCc/edit',
  },
  {
    id: '10',
    title: 'Links',
    description: 'Published work across external platforms',
    type: 'DOC',
    embedMode: 'document',
    embedUrl: 'https://docs.google.com/document/d/1OvKmSkSWgRc3OZXHbaxLLuT5IzQYyEKNSH5JNCXE_2k/preview',
    directUrl: 'https://docs.google.com/document/d/1OvKmSkSWgRc3OZXHbaxLLuT5IzQYyEKNSH5JNCXE_2k/edit',
  },
]

export const skills = [
  'Brand Strategy',
  'TV Production',
  'Influencer Marketing',
  'Content Systems',
  'AI Workflows',
  'Creative Direction',
  'Copywriting',
  'Omnichannel Activation',
  'Press & PR',
  'Retail Marketing',
]

export const metrics = [
  { value: 58, suffix: '%+', label: 'Sales lift from omnichannel launches' },
  { value: 75, suffix: '%',  label: 'ROAS improvement' },
  { value: 50, suffix: '%',  label: 'Content output increase' },
  { value: 35, suffix: '%',  label: 'Brand awareness growth' },
]
