
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'citalblock',
    title: 'CITALBLOCK Infrastructure',
    description: 'Senior Full Stack Lead. Orchestrated the entire node management dashboard and core smart contract suite for institutional liquidity. Managed the transition to a high-throughput Go-based backend.',
    role: 'Senior Full Stack Dev',
    tags: ['Next.js', 'Go', 'Redis', 'EVM'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'drew-token',
    title: 'DREW Ecosystem',
    description: 'Architected the core tokenomics and 3D interface for the DREW token. Built a high-performance indexer in Golang to track real-time holder metrics and liquidity distributions.',
    role: 'Infrastructure Architect',
    tags: ['3D Web', 'Golang', 'Solidity', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1621504450181-5d356f63d3ee?auto=format&fit=crop&q=80&w=800' // Using thematic placeholder for 3D token
  },
  {
    id: 'drew-airdrop',
    title: 'DREW Airdrop Portal',
    description: 'Developed a scalable distribution engine capable of handling 100k+ simultaneous claims. Implemented custom Merkle tree verification and an interactive, high-engagement frontend.',
    role: 'Lead Full-Stack Dev',
    tags: ['React', 'Merkle Proofs', 'AWS', 'Web3.js'],
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800' // Using thematic placeholder for airdrop/network
  },
  {
    id: 'centraland',
    title: 'The Centraland Metaverse',
    description: 'Architected the GraphQL middleware layer and high-performance React dashboard for metaverse land management. Optimized state sync across distributed nodes.',
    role: 'Full Stack Engineer',
    tags: ['GraphQL', 'Node.js', 'Web3.js', 'AWS'],
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'truthfinance',
    title: 'TruthFinance ',
    description: 'Engineered a decentralized exchange aggregator with a custom Rust-based matching engine and a sub-100ms frontend optimized for rapid trade execution.',
    role: 'Lead Developer',
    tags: ['Rust', 'WASM', 'Tailwind', 'Solana'],
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kitachi',
    title: 'KITACHI Token presale',
    description: 'End-to-end development of a white-label NFT marketplace. Features include real-time bidding via WebSockets and custom royalty distribution smart contracts.',
    role: 'Full Stack Dev',
    tags: ['Socket.io', 'Express', 'React', 'IPFS'],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js 15', category: 'Frontend', level: 98 },
  { name: 'TypeScript', category: 'Frontend', level: 95 },
  { name: 'Tailwind / Framer', category: 'Frontend', level: 90 },
  { name: 'Node.js / Express', category: 'Backend', level: 92 },
  { name: 'Golang', category: 'Backend', level: 85 },
  { name: 'PostgreSQL / Prisma', category: 'Backend', level: 88 },
  { name: 'Solidity / Foundry', category: 'Blockchain', level: 95 },
  { name: 'Rust (Anchor/Fuel)', category: 'Blockchain', level: 80 },
  { name: 'Docker / K8s', category: 'Tools', level: 75 },
  { name: 'Ethers / Viem', category: 'Blockchain', level: 96 }
];
