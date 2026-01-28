const navLinks = [
    {label: 'Why Callipsos', href: '#why-callipsos'},
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Supported Chains', href: '#chains' },
    { label: 'Team', href: '#team' },
    {label: 'Waitlist Signup', href: '#cta'},
    // { label: 'Docs', href: '#docs' },

];
const chains = [
    {
        name: 'Sui',
        logo: '/logos/sui.svg',
        color: '#6FBCF0',
        status: 'live',
        description: 'Native integration via Ika Network. Sub-second finality with Move smart contracts.',
        features: ['Native dWallet support', 'Sub-second signing', 'Move compatibility'],
    },
    {
        name: 'Ethereum',
        logo: '/logos/ethereum.svg',
        color: '#627EEA',
        status: 'live',
        description: 'Full EVM support. Access DeFi protocols, NFTs, and smart contracts securely.',
        features: ['ERC-20 & ERC-721', 'DeFi protocols', 'Smart contracts'],
    },
    {
        name: 'Base',
        logo: '/logos/base.svg',
        color: '#0052FF',
        status: 'live',
        description: 'Coinbase L2 with low fees. Perfect for high-frequency agent operations.',
        features: ['Low gas fees', 'Fast confirmations', 'Coinbase ecosystem'],
    },
    {
        name: 'Starknet',
        logo: '/logos/starknet.svg',
        color: '#EC796B',
        status: 'soon',
        description: 'ZK-rollup scaling with Cairo. Privacy-preserving agent transactions.',
        features: ['ZK proofs', 'Cairo contracts', 'Privacy features'],
    },
    {
        name: 'Solana',
        logo: '/logos/solana.svg',
        color: '#14F195',
        status: 'soon',
        description: 'High-throughput chain for rapid execution. 400ms block times.',
        features: ['65k TPS', 'Low latency', 'SPL tokens'],
    },
]

const team = [
    {
        name: 'Cyndie Kamau',
        role: 'Founder, Team Lead',
        focus: 'Strategy & Vision',
        photo: '/team/cyndie2.png',
        bio: 'Ex Nethermind, Polkadot Blockchain Academy alumnus. Maintained Substrate Telemetry infrastructure for the entire Polkadot ecosystem managing 200+ nodes. Obsessed with making AI agents safe for real money.',
        twitter: '@CyndieKamau',
        linkedin: '@cynthiakamau',
        github: 'CyndieKamau',
        expertise: ['UX & DevEx', 'Go-to-Market'],
    },
    {
        name: 'Andrew Miracle',
        role: 'Co-Founder, Technical Lead',
        focus: 'Architecture & Engineering',
        photo: '/team/andie.png',
        bio: 'Ex-infrastructure engineer at YC, Techstars, and OpenAI-backed companies. Built an impact analytics platform in 2019 that was adopted by Mastercard Foundation. Now building the safety layer for autonomous agents.',
        twitter: '@letandrewcook',
        github: 'koolamusic',
        linkedin: '@letandrewcook',
        expertise: ['Infrastructure', 'Distributed Systems'],
    },
    {
        name: 'Christine Okoth',
        role: 'Co-Founder, Full Stack',
        focus: 'Smart Contracts & Cross-Chain Integrations',
        photo: '/team/chriss.png',
        bio: 'Full Stack Blockchain Developer. Built the carbon footprint tracking infrastructure for the entire ICP protocol monitoring all 29+ SNS networks. Now focused on integrating Blockchain with AI agent infrastructure.',
        twitter: '@DiahChrissy',
        github: 'chriss1525',
        linkedin: '@christine-okoth',
        expertise: ['Smart Contracts', 'Cross-Chain Integrations'],
    },
]



export { navLinks, chains, team };