export type Category = 'Web' | 'Mobile'

export interface IProject {
  name: string
  description: string
  image_path: string
  deployed_url: string
  category: Category
  key_techs: string[]
}

export const projectsData: IProject[] = [
  {
    name: 'AlKhattaba',
    description:
      'This is a matrimonial matchmaking application tailored to the Islamic culture',
    image_path:
      'https://play-lh.googleusercontent.com/D8OYBtzdTsdEEBKmNXOfrITb0CLYp0MQzOu8kh0Ra0C2fdaKkDFSNnuqjNDyIWLutRw=s360-rw',
    deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
    category: 'Mobile',
    key_techs: [
      'React-Native',
      'MobX',
      'Typescript',
      'RxJS',
      'Node.js',
      'express.js',
    ],
  },
  {
    name: 'Farah',
    description:
      'This is a matchmaking application powered by Artificial Intelligence and tailored to cultures.',
    image_path:
      'https://play-lh.googleusercontent.com/_SIpjRwzDzli_gleMN83qDKVvvDkJhp5w5OOYetAE5YRTx0JjGazyvbRlLv-_5uvkI1O=s180-rw',
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.thefarahapp',
    category: 'Mobile',
    key_techs: [
      'React-Native',
      'MobX',
      'Typescript',
      'RxJS',
      'Node.js',
      'express.js',
    ],
  },
  {
    name: 'Washmen',
    description:
      'This is a digital laundry and dry cleaning service in the UAE.',
    image_path:
      'https://play-lh.googleusercontent.com/numyB5gIrxNn6CsZVuviMxY6xcgNVqN_w-BZFwrYanPk8SfgITLdCMqMUCAO6aj-Mqbs=s180-rw',
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.getwashmen.app',
    category: 'Mobile',
    key_techs: [
      'React-Native',
      'Redux',
      'Typescript',
      'JavaScript',
      'Node.js',
      'sails.js',
    ],
  },
  {
    name: 'SupremeWindows',
    description:
      'This is a driver app for supremewindows online system that includes best road options and scanning for items',
    image_path: 'https://www.supremewindows.net/images/logo.png',
    deployed_url: '',
    category: 'Mobile',
    key_techs: ['React-Native', 'MobX', 'Typescript'],
  },

  {
    name: 'Washmen',
    description:
      'This is a PWA (Progressive Web App) that can be integrated with any partner mobile app',
    image_path:
      'https://play-lh.googleusercontent.com/numyB5gIrxNn6CsZVuviMxY6xcgNVqN_w-BZFwrYanPk8SfgITLdCMqMUCAO6aj-Mqbs=s180-rw',
    deployed_url: 'https://app.washmen.com/',
    category: 'Web',
    key_techs: [
      'React',
      'Redux',
      'Typescript',
      'JavaScript',
      'Node.js',
      'sails.js',
    ],
  },
  {
    name: 'AlKhattaba',
    image_path:
      'https://play-lh.googleusercontent.com/D8OYBtzdTsdEEBKmNXOfrITb0CLYp0MQzOu8kh0Ra0C2fdaKkDFSNnuqjNDyIWLutRw=s360-rw',
    category: 'Web',
    deployed_url: 'https://blog.alkhattaba.com/',
    description: 'This is a wordpress blog for AlKhattaba app',
    key_techs: ['Wordpress', 'PHP'],
  },
  {
    name: 'Paramount',
    image_path: '/assets/paramount-logo.png',
    category: 'Web',
    deployed_url: '',
    description:
      'This is a B2B web-based software that automates receipts for huge companies, so they can go paperless.',
    key_techs: ['React', 'Redux', 'Typescript'],
  },
  {
    name: 'Farah',
    image_path:
      'https://play-lh.googleusercontent.com/_SIpjRwzDzli_gleMN83qDKVvvDkJhp5w5OOYetAE5YRTx0JjGazyvbRlLv-_5uvkI1O=s180-rw',
    category: 'Web',
    deployed_url: 'https://farah.app/',
    description: 'This is a landing website for farah app',
    key_techs: ['HTML', 'CSS', 'JavaScript'],
  },
]
