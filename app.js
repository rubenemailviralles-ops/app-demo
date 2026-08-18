// Pitch Deck Presentation Data
const slideData = [
    {
        id: 1,
        subtitle: "Vision",
        title: "The Modern Club Experience, Redefined",
        bullets: [
            "<strong>Unified Ecosystem:</strong> POS, inventory control, and memberships running seamlessly in a single app.",
            "<strong>Tailor-Made Design:</strong> Purpose-built for the unique legal and operational flows of private clubs and dispensaries.",
            "<strong>Frictionless Operations:</strong> Minimize wait times, automate member tracking, and eliminate system fragmentation."
        ],
        visualName: "Unified Hub View",
        visualAdvice: `<img src="vision_graphic.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Active Till Center Graphic Suggestion">`,
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Glowing central engine -->
                <circle cx="100" cy="100" r="32" fill="url(#hubGrad)" filter="url(#glowFilter)" opacity="0.6"/>
                <circle cx="100" cy="100" r="18" fill="#0d1118" stroke="#64ffda" stroke-width="2.5"/>
                <circle cx="100" cy="100" r="8" fill="url(#neonTealGrad)"/>
                
                <!-- Double Concentric Orbit Rings -->
                <circle class="animate-rotate" cx="100" cy="100" r="58" stroke="rgba(100, 255, 218, 0.25)" stroke-width="1.5" stroke-dasharray="6 8"/>
                <circle class="animate-rotate" style="animation-direction: reverse; animation-duration: 25s;" cx="100" cy="100" r="78" stroke="rgba(157, 78, 221, 0.2)" stroke-width="1" stroke-dasharray="12 16"/>
                
                <!-- Connecting Laser Channels -->
                <line x1="100" y1="52" x2="100" y2="82" stroke="url(#lineTeal)" stroke-width="1.5" stroke-dasharray="2 2"/>
                <line x1="140" y1="123" x2="116" y2="109" stroke="url(#lineViolet)" stroke-width="1.5" stroke-dasharray="2 2"/>
                <line x1="60" y1="123" x2="84" y2="109" stroke="url(#linePink)" stroke-width="1.5" stroke-dasharray="2 2"/>
                
                <!-- POS Node (Top) -->
                <g class="animate-pulse">
                    <circle cx="100" cy="40" r="14" fill="#131720" stroke="#64ffda" stroke-width="2" filter="url(#shadowTeal)"/>
                    <rect x="94" y="34" width="12" height="12" rx="2" fill="rgba(100, 255, 218, 0.1)"/>
                    <path d="M96 40H104M98 37H102M98 43H102" stroke="#64ffda" stroke-width="1"/>
                </g>
                
                <!-- Stock Node (Bottom Right) -->
                <g>
                    <circle cx="150" cy="128" r="14" fill="#131720" stroke="#9d4edd" stroke-width="2" filter="url(#shadowViolet)"/>
                    <path d="M144 125L150 120L156 125V132C156 133 155 134 154 134H146C145 134 144 133 144 132V125Z" fill="rgba(157, 78, 221, 0.15)" stroke="#9d4edd" stroke-width="1"/>
                    <line x1="147" y1="127" x2="153" y2="127" stroke="#9d4edd" stroke-width="1"/>
                </g>
                
                <!-- Member Node (Bottom Left) -->
                <g>
                    <circle cx="50" cy="128" r="14" fill="#131720" stroke="#f72585" stroke-width="2" filter="url(#shadowPink)"/>
                    <path d="M46 134C46 130 48 128 50 128C52 128 54 130 54 134" stroke="#f72585" stroke-width="1.2" stroke-linecap="round"/>
                    <circle cx="50" cy="124" r="3.5" stroke="#f72585" stroke-width="1.2"/>
                </g>
                
                <defs>
                    <!-- Gradients -->
                    <radialGradient id="hubGrad" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                        <stop offset="0%" stop-color="#64ffda" stop-opacity="0.6"/>
                        <stop offset="60%" stop-color="#9d4edd" stop-opacity="0.2"/>
                        <stop offset="100%" stop-color="#0a0c10" stop-opacity="0"/>
                    </radialGradient>
                    <linearGradient id="neonTealGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#64ffda"/>
                        <stop offset="100%" stop-color="#2a9d8f"/>
                    </linearGradient>
                    <linearGradient id="lineTeal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#64ffda"/><stop offset="100%" stop-color="#64ffda" stop-opacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="lineViolet" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="0%" stop-color="#9d4edd"/><stop offset="100%" stop-color="#9d4edd" stop-opacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="linePink" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stop-color="#f72585"/><stop offset="100%" stop-color="#f72585" stop-opacity="0.1"/>
                    </linearGradient>
                    
                    <!-- Glow filters -->
                    <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="10" result="blur"/>
                    </filter>
                    <filter id="shadowTeal" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#64ffda" flood-opacity="0.3"/>
                    </filter>
                    <filter id="shadowViolet" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#9d4edd" flood-opacity="0.3"/>
                    </filter>
                    <filter id="shadowPink" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#f72585" flood-opacity="0.3"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Hook:</strong> "Good morning/afternoon, everyone. Managing a private social club or a dispensary is unique, demanding, and highly regulated. Yet, most venues are forced to stitch together a generic retail POS, a separate spreadsheet for memberships, and a disconnected inventory system."</p>
            <p><strong>Pitch:</strong> "Today, we are introducing a solution designed specifically for you. This is an all-in-one platform that handles your till, manages compliance-friendly points, tracks live inventory, and automates member tiers—all within a single, elegant interface. Let's look at how we solve your daily operational bottlenecks."</p>
        `
    },
    {
        id: 2,
        subtitle: "The Problem",
        title: "The Core Challenge: Disconnected Systems & Compliance",
        bullets: [
            "<strong>Compliance Friction:</strong> Traditional systems lack point-based or gift/transfer club transaction models needed for legal compliance.",
            "<strong>Member Tracking Lag:</strong> Cashiers can't instantly see member history, tier levels, or check-in statuses at checkout.",
            "<strong>Inventory Blind Spots:</strong> Disconnected systems make it impossible to calculate real-time margins and track shrinkage."
        ],
        visualName: "Disconnected Infrastructure Diagram",
        visualAdvice: "A split diagram representing the old approach: disconnected silos of POS, membership ledger spreadsheets, and inventory charts with warning red icons indicating data flow bottlenecks.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Silo 1: POS Card -->
                <g filter="url(#glowRed)">
                    <rect x="20" y="30" width="65" height="45" rx="10" fill="#131720" stroke="#ff4d4d" stroke-width="1.5"/>
                    <rect x="28" y="38" width="49" height="12" rx="4" fill="rgba(255, 77, 77, 0.08)"/>
                    <!-- Small mock graphs -->
                    <line x1="32" y1="44" x2="48" y2="44" stroke="#ff4d4d" stroke-width="1.5" stroke-linecap="round"/>
                    <line x1="32" y1="58" x2="58" y2="58" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1"/>
                    <line x1="32" y1="64" x2="48" y2="64" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1"/>
                    <circle cx="68" cy="61" r="5" fill="#ff4d4d" opacity="0.2"/>
                    <text x="68" y="64" fill="#ff4d4d" font-size="7" font-weight="bold" font-family="sans-serif" text-anchor="middle">!</text>
                </g>
                
                <!-- Silo 2: Excel Card -->
                <g filter="url(#glowRed)">
                    <rect x="115" y="30" width="65" height="45" rx="10" fill="#131720" stroke="#ff4d4d" stroke-width="1.5"/>
                    <rect x="123" y="38" width="49" height="12" rx="4" fill="rgba(255, 77, 77, 0.08)"/>
                    <line x1="127" y1="44" x2="145" y2="44" stroke="#ff4d4d" stroke-width="1.5" stroke-linecap="round"/>
                    <!-- Grid cells -->
                    <rect x="127" y="56" width="10" height="6" fill="rgba(255, 255, 255, 0.1)"/>
                    <rect x="140" y="56" width="10" height="6" fill="rgba(255, 255, 255, 0.1)"/>
                    <rect x="153" y="56" width="15" height="6" fill="rgba(255, 255, 255, 0.1)"/>
                </g>
                
                <!-- Silo 3: Members Card -->
                <g filter="url(#glowRed)">
                    <rect x="67" y="120" width="65" height="45" rx="10" fill="#131720" stroke="#ff4d4d" stroke-width="1.5"/>
                    <rect x="75" y="128" width="49" height="12" rx="4" fill="rgba(255, 77, 77, 0.08)"/>
                    <line x1="79" y1="134" x2="102" y2="134" stroke="#ff4d4d" stroke-width="1.5" stroke-linecap="round"/>
                    
                    <circle cx="84" cy="151" r="4.5" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
                    <line x1="93" y1="148" x2="114" y2="148" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1"/>
                    <line x1="93" y1="154" x2="106" y2="154" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1"/>
                </g>
                
                <!-- Broken Laser Lines with Warning Marks -->
                <g class="animate-pulse">
                    <!-- Path 1 to 2 -->
                    <path d="M85 53H115" stroke="#ff4d4d" stroke-width="1.5" stroke-dasharray="4 4"/>
                    <!-- Path 1 to 3 -->
                    <path d="M60 75V120" stroke="#ff4d4d" stroke-width="1.5" stroke-dasharray="4 4"/>
                    <!-- Path 2 to 3 -->
                    <path d="M140 75V120" stroke="#ff4d4d" stroke-width="1.5" stroke-dasharray="4 4"/>
                    
                    <!-- Broken symbols -->
                    <line x1="97" y1="48" x2="103" y2="58" stroke="#ff4d4d" stroke-width="2" stroke-linecap="round"/>
                    <line x1="55" y1="94" x2="65" y2="100" stroke="#ff4d4d" stroke-width="2" stroke-linecap="round"/>
                    <line x1="135" y1="94" x2="145" y2="100" stroke="#ff4d4d" stroke-width="2" stroke-linecap="round"/>
                </g>
                
                <defs>
                    <filter id="glowRed" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#ff4d4d" flood-opacity="0.15"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Why does a standard retail POS fail a private club or dispensary? Because you are not a standard retail shop.</p>
            <p>Standard retail tools don't understand that a member might be exchanging points rather than cash for compliance, or that a member's discounts depend on their monthly tier status.</p>
            <p>Operating with disconnected systems leads to longer checkouts, compliance risks, and invisible profit leaks. We solve these problems at the root."</p>
        `
    },
    {
        id: 3,
        subtitle: "Key Feature: POS & Till",
        title: "The Integrated Till & Point-of-Sale",
        bullets: [
            "<strong>Instant Member Lookup:</strong> Scan a card or search a name to view purchase history and preference notes instantly.",
            "<strong>Yoco Terminal Integration:</strong> Fast, card-present transactions with auto-synced payments to reduce operator error.",
            "<strong>Compliant Transaction Modes:</strong> Switch between cash, card, and membership points with a single tap."
        ],
        visualName: "Interactive Till & Cart",
        visualAdvice: "Show the POS checkout flow on screen, displaying a cart sidebar containing tier-discount summaries, point redemption checkboxes, and Yoco sync indicators.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Terminal Shell -->
                <g filter="url(#glowTeal)">
                    <rect x="50" y="25" width="100" height="150" rx="16" fill="#131720" stroke="#64ffda" stroke-width="2"/>
                    <!-- Dark inner face -->
                    <rect x="58" y="33" width="84" height="134" rx="10" fill="#0d1118"/>
                </g>
                
                <!-- Display Screen -->
                <rect x="64" y="42" width="72" height="52" rx="6" fill="#131c26" stroke="rgba(100, 255, 218, 0.25)" stroke-width="1.2"/>
                
                <!-- Screen Layout -->
                <text x="72" y="56" fill="#64ffda" font-size="8" font-family="sans-serif" font-weight="800">APPROVED</text>
                <text x="72" y="67" fill="rgba(255,255,255,0.8)" font-size="6" font-family="sans-serif">MEMBER: A. SMITH</text>
                <text x="72" y="75" fill="rgba(255,255,255,0.5)" font-size="5" font-family="sans-serif">POINTS: +150 PTS</text>
                
                <!-- Total Price Tag -->
                <rect x="70" y="81" width="60" height="9" rx="3.5" fill="rgba(100, 255, 218, 0.1)"/>
                <text x="100" y="88" fill="#64ffda" font-size="6" font-weight="bold" font-family="sans-serif" text-anchor="middle">TOTAL: R 1,250.00</text>
                
                <!-- Keyboard Keys Grid -->
                <g fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="0.75">
                    <!-- Row 1 -->
                    <rect x="66" y="102" width="18" height="10" rx="2"/>
                    <rect x="91" y="102" width="18" height="10" rx="2"/>
                    <rect x="116" y="102" width="18" height="10" rx="2"/>
                    <!-- Row 2 -->
                    <rect x="66" y="117" width="18" height="10" rx="2"/>
                    <rect x="91" y="117" width="18" height="10" rx="2"/>
                    <rect x="116" y="117" width="18" height="10" rx="2"/>
                    <!-- Row 3 -->
                    <rect x="66" y="132" width="18" height="10" rx="2"/>
                    <rect x="91" y="132" width="18" height="10" rx="2"/>
                    <rect x="116" y="132" width="18" height="10" rx="2"/>
                </g>
                
                <!-- Action keys colored -->
                <rect x="66" y="147" width="18" height="10" rx="2" fill="#ff4d4d" stroke="none"/>
                <rect x="91" y="147" width="18" height="10" rx="2" fill="#ffb703" stroke="none"/>
                <rect x="116" y="147" width="18" height="10" rx="2" fill="#52b788" stroke="none"/>
                
                <!-- Card Slide Laser Line -->
                <path class="animate-dash" d="M100 12 L100 24" stroke="#64ffda" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M96 20L100 24L104 20" stroke="#64ffda" stroke-width="2" stroke-linejoin="round"/>
                
                <defs>
                    <filter id="glowTeal" x="-15%" y="-15%" width="130%" height="130%">
                        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#64ffda" flood-opacity="0.15"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Let's dive into the core of daily operations: the Till. Our POS interface is built for speed and context.</p>
            <p>The moment a member approaches the counter, the operator has access to their purchase history and custom tier discounts.</p>
            <p>Payments are completed in seconds, and thanks to our native Yoco terminal integration, card amounts are pushed automatically to the terminal. This eliminates manual input errors and speeds up customer queues during rush hours."</p>
        `
    },
    {
        id: 4,
        subtitle: "Loyalty & Compliance",
        title: "Visit-Based Milestones & Rewards",
        bullets: [
            "<strong>Milestone Retention Tracks:</strong> Automatically track member check-ins and reward repeat visits (e.g., a 20% discount on their 4th visit).",
            "<strong>Compliance-Friendly Incentives:</strong> Standard-compliant reward cycles built to align with local club regulations and gift/transfer models.",
            "<strong>Custom Reward Rules:</strong> Set specific milestones, visit thresholds, expiration dates, and tier-specific reward multipliers on the fly."
        ],
        visualName: "Visit Progress Tracker Widget",
        visualAdvice: "A check-in tracker showing visit milestone circles, with visits 1-3 completed and visit 4 glowing with an unlocked 20% discount reward.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Member Card Layout -->
                <g filter="url(#glowVioletCard)">
                    <rect x="25" y="30" width="150" height="140" rx="18" fill="#131720" stroke="#9d4edd" stroke-width="1.5"/>
                    <rect x="30" y="35" width="140" height="130" rx="14" fill="#0d1118"/>
                </g>
                
                <!-- Member Profile Header -->
                <circle cx="56" cy="62" r="14" fill="rgba(157, 78, 221, 0.15)" stroke="#9d4edd" stroke-width="1"/>
                <path d="M50 69C50 65 52 63 56 63C60 63 62 65 62 69" stroke="#9d4edd" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="56" cy="57" r="3.5" stroke="#9d4edd" stroke-width="1.5"/>
                
                <!-- Member Details Text Lines -->
                <rect x="78" y="52" width="65" height="7" rx="3.5" fill="rgba(255, 255, 255, 0.1)"/>
                <rect x="78" y="64" width="40" height="5" rx="2.5" fill="rgba(255, 255, 255, 0.05)"/>
                
                <!-- Progress Line Track -->
                <line x1="50" y1="120" x2="150" y2="120" stroke="rgba(255,255,255,0.08)" stroke-width="4" stroke-linecap="round"/>
                <line x1="50" y1="120" x2="116" y2="120" stroke="#64ffda" stroke-width="4" stroke-linecap="round"/>
                
                <!-- Node 1: Completed -->
                <circle cx="50" cy="120" r="10" fill="#0d1118" stroke="#64ffda" stroke-width="2"/>
                <path d="M47 120L49 122L53 118" stroke="#64ffda" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <text x="50" y="140" fill="rgba(255,255,255,0.4)" font-size="6" font-family="sans-serif" text-anchor="middle">V1</text>
                
                <!-- Node 2: Completed -->
                <circle cx="83" cy="120" r="10" fill="#0d1118" stroke="#64ffda" stroke-width="2"/>
                <path d="M80 120L82 122L86 118" stroke="#64ffda" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <text x="83" y="140" fill="rgba(255,255,255,0.4)" font-size="6" font-family="sans-serif" text-anchor="middle">V2</text>
                
                <!-- Node 3: Completed -->
                <circle cx="116" cy="120" r="10" fill="#0d1118" stroke="#64ffda" stroke-width="2"/>
                <path d="M113 120L115 122L119 118" stroke="#64ffda" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <text x="116" y="140" fill="rgba(255,255,255,0.4)" font-size="6" font-family="sans-serif" text-anchor="middle">V3</text>
                
                <!-- Node 4: Milestone unlocked! (Glowing Violet/Teal) -->
                <g class="animate-pulse">
                    <circle cx="150" cy="120" r="14" fill="#131720" stroke="url(#violetTealGrad)" stroke-width="2.5" filter="url(#glowTealSync)"/>
                    <text x="150" y="123" fill="#64ffda" font-size="6.5" font-weight="900" font-family="sans-serif" text-anchor="middle">20%</text>
                </g>
                <text x="150" y="142" fill="#64ffda" font-size="6" font-family="sans-serif" font-weight="bold" text-anchor="middle">REWARD!</text>
                
                <defs>
                    <linearGradient id="violetTealGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#9d4edd"/>
                        <stop offset="100%" stop-color="#64ffda"/>
                    </linearGradient>
                    <filter id="glowVioletCard" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#9d4edd" flood-opacity="0.12"/>
                    </filter>
                    <filter id="glowTealSync" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#64ffda" flood-opacity="0.4"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Driving member retention shouldn't require complex calculations. Our platform features a direct, visit-based milestone loyalty engine.</p>
            <p>When a member checks in, the system tracks their visit count. On their 4th visit, the POS automatically triggers a 20% discount (or custom club reward). It’s easy for staff, exciting for members, and compliant in gift/transfer legal structures."</p>
        `
    },
    {
        id: 5,
        subtitle: "Key Feature: Memberships",
        title: "Flexible Membership Tiers & Subscriptions",
        bullets: [
            "<strong>Custom Recurring Pricing:</strong> Charge weekly, monthly, or annual fees automatically to secure predictable cash flow.",
            "<strong>Tier-Based Benefits:</strong> Automatically apply specific discounts on stock based on the member's active tier (e.g., VIP gets 15% off).",
            "<strong>Check-In Rewards:</strong> Reward frequent check-ins with points, vouchers, or automatic tier upgrades."
        ],
        visualName: "Membership Tier Stack Mockup",
        visualAdvice: "Show a side-by-side card mockup illustrating multiple tiers: Gold Member (showing 10% discount configurations) and VIP Member (showing 15% discount configurations and recurring pricing tags).",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Card 1: Gold Tier (Left) -->
                <g filter="url(#goldShadow)">
                    <rect x="20" y="35" width="72" height="130" rx="14" fill="#131720" stroke="#f4a261" stroke-width="1.5"/>
                    <rect x="25" y="40" width="62" height="120" rx="10" fill="#0d1118"/>
                    
                    <!-- Golden details -->
                    <rect x="32" y="48" width="22" height="5" rx="2.5" fill="#f4a261" opacity="0.8"/>
                    <text x="32" y="74" fill="#ffffff" font-size="11" font-weight="900" font-family="sans-serif">GOLD</text>
                    <text x="32" y="90" fill="rgba(255,255,255,0.6)" font-size="6.5" font-family="sans-serif">10% Off Stock</text>
                    <text x="32" y="102" fill="rgba(255,255,255,0.6)" font-size="6.5" font-family="sans-serif">2x Check-In Pts</text>
                    
                    <!-- Price Tag -->
                    <text x="32" y="142" fill="#f4a261" font-size="12" font-weight="bold" font-family="sans-serif">R 250</text>
                    <text x="68" y="142" fill="rgba(255,255,255,0.4)" font-size="6" font-family="sans-serif">/mo</text>
                </g>
                
                <!-- Card 2: VIP Tier (Right) -->
                <g filter="url(#vipShadow)">
                    <rect x="108" y="35" width="72" height="130" rx="14" fill="#131720" stroke="#64ffda" stroke-width="2"/>
                    <rect x="113" y="40" width="62" height="120" rx="10" fill="#0d1118"/>
                    
                    <!-- Teal details -->
                    <rect x="120" y="48" width="22" height="5" rx="2.5" fill="#64ffda" opacity="0.8"/>
                    <text x="120" y="74" fill="#ffffff" font-size="11" font-weight="900" font-family="sans-serif">VIP</text>
                    <text x="120" y="90" fill="rgba(255,255,255,0.6)" font-size="6.5" font-family="sans-serif">15% Off Stock</text>
                    <text x="120" y="102" fill="rgba(255,255,255,0.6)" font-size="6.5" font-family="sans-serif">4x Check-In Pts</text>
                    <text x="120" y="114" fill="rgba(255,255,255,0.6)" font-size="6.5" font-family="sans-serif">Custom Events</text>
                    
                    <!-- Price Tag -->
                    <text x="120" y="142" fill="#64ffda" font-size="12" font-weight="bold" font-family="sans-serif">R 450</text>
                    <text x="156" y="142" fill="rgba(255,255,255,0.4)" font-size="6" font-family="sans-serif">/mo</text>
                    
                    <!-- Selection Indicator badge -->
                    <circle cx="162" cy="48" r="6.5" fill="#64ffda"/>
                    <path d="M159 48L161 50L165 46" stroke="#0d1118" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                
                <defs>
                    <filter id="goldShadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#f4a261" flood-opacity="0.1"/>
                    </filter>
                    <filter id="vipShadow" x="-15%" y="-15%" width="130%" height="130%">
                        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#64ffda" flood-opacity="0.15"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Memberships are the lifeblood of a private club. We make managing them effortless.</p>
            <p>You can create unlimited membership tiers with custom recurring billing cycles. The app handles the billing status, and when members scan in, the POS automatically applies their tier-based discounts.</p>
            <p>This turns casual visitors into loyal members and secures predictable subscription revenue for your venue."</p>
        `
    },
    {
        id: 6,
        subtitle: "Financial Insights",
        title: "Automated Profit & ROI Tracking",
        bullets: [
            "<strong>Automatic Margin Calculation:</strong> Instantly calculates gross margin per item based on unit cost vs. sale price.",
            "<strong>Fast Stock Controls:</strong> Quickly add, edit, or delete items, and use quick toggles to apply temporary discounts on the fly.",
            "<strong>Consolidated ROI Dashboard:</strong> Track inventory asset costs, daily cash sales, and membership subscription revenues in one place."
        ],
        visualName: "ROI Analytics Chart Preview",
        visualAdvice: "Show a line chart comparing Inventory Valuation & Costs with Net Sales Revenue, demonstrating the calculation of profit margins and visual indicators for discount toggle effects.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Grid background -->
                <line x1="30" y1="30" x2="170" y2="30" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                <line x1="30" y1="60" x2="170" y2="60" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                <line x1="30" y1="90" x2="170" y2="90" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                <line x1="30" y1="120" x2="170" y2="120" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                
                <!-- Graph Axes -->
                <line x1="30" y1="30" x2="30" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                <line x1="30" y1="150" x2="170" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                
                <!-- Bottom Area Chart Fill -->
                <path d="M30 150 L60 120 L90 100 L120 70 L150 55 L170 50 L170 150 Z" fill="url(#areaGrad)" opacity="0.15"/>
                
                <!-- Cost line (Static Red) -->
                <path d="M30 135 L60 130 L90 128 L120 122 L150 120 L170 120" stroke="#f72585" stroke-width="1.5" stroke-dasharray="3 3"/>
                
                <!-- Net profit Line (Glowing Green) -->
                <g filter="url(#glowGreenLine)">
                    <path d="M30 130 L60 110 L90 95 L120 68 L150 52 L170 45" stroke="#64ffda" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                
                <!-- Data tooltip node -->
                <circle cx="150" cy="52" r="4.5" fill="#64ffda" stroke="#0d1118" stroke-width="1.5"/>
                <circle cx="150" cy="120" r="3.5" fill="#f72585" stroke="#0d1118" stroke-width="1.5"/>
                
                <!-- Margin visual callout -->
                <g filter="url(#glowWidget)">
                    <rect x="110" y="16" width="60" height="20" rx="5" fill="#131720" stroke="#64ffda" stroke-width="1"/>
                    <text x="140" y="28" fill="#64ffda" font-size="7" font-weight="900" font-family="sans-serif" text-anchor="middle">NET ROI +64%</text>
                </g>
                
                <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#64ffda"/>
                        <stop offset="100%" stop-color="#64ffda" stop-opacity="0"/>
                    </linearGradient>
                    <filter id="glowGreenLine" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#64ffda" flood-opacity="0.3"/>
                    </filter>
                    <filter id="glowWidget" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#64ffda" flood-opacity="0.2"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "To scale your business, you need clear financial visibility. Our platform automates your profit tracking by comparing your unit costs against actual sales in real time.</p>
            <p>Adding or adjusting stock takes seconds, and with our quick discount toggles, staff can run happy hour specials instantly.</p>
            <p>The system dynamically updates your inventory asset value and outputs your total ROI, combining till sales with recurring membership fees."</p>
        `
    },
    {
        id: 7,
        subtitle: "Integrations & Sync",
        title: "One-Click Data Sync & Live Integration",
        bullets: [
            "<strong>One-Click Data Export:</strong> Export detailed accounting records to PDF or CSV for easy tax submission and bookkeeper reviews.",
            "<strong>Live Menu Sync:</strong> Instantly update your website menu when stock levels change, ensuring members always see what's in stock.",
            "<strong>Hardware Ecosystem:</strong> Plug-and-play compatibility with receipt printers, barcode scanners, and Yoco card terminals."
        ],
        visualName: "Cloud & Export Sync Grid",
        visualAdvice: "Show a sync connectivity flow, showing the Club POS app core communicating outwards to CSV files, Web portals, and external hardware (card readers and printers).",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Concentric spinning engine glow -->
                <circle cx="100" cy="95" r="28" fill="url(#syncGrad)" opacity="0.3"/>
                <circle class="animate-rotate" cx="100" cy="95" r="22" stroke="#64ffda" stroke-width="1.5" stroke-dasharray="6 4"/>
                <!-- Database Core icon -->
                <g filter="url(#glowTealSync)">
                    <rect x="91" y="83" width="18" height="24" rx="4" fill="#131720" stroke="#64ffda" stroke-width="1.5"/>
                    <line x1="94" y1="89" x2="106" y2="89" stroke="#64ffda" stroke-width="1"/>
                    <line x1="94" y1="95" x2="106" y2="95" stroke="#64ffda" stroke-width="1"/>
                    <line x1="94" y1="101" x2="106" y2="101" stroke="#64ffda" stroke-width="1"/>
                </g>
                
                <!-- Cloud Sync Arrows -->
                <g class="animate-pulse" stroke="#64ffda" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M100 63V72M100 63L96 67M100 63L104 67" />
                    <path d="M100 127V118M100 127L104 123M100 127L96 123" />
                </g>
                
                <!-- PDF/CSV Export File Card (Left) -->
                <g filter="url(#glowVioletFile)">
                    <rect x="20" y="40" width="38" height="42" rx="6" fill="#131720" stroke="#9d4edd" stroke-width="1.5"/>
                    <!-- Corner fold -->
                    <path d="M50 40 L58 48 V82" stroke="none" />
                    <rect x="26" y="48" width="14" height="4" fill="#9d4edd"/>
                    <!-- Mock text lines -->
                    <line x1="26" y1="58" x2="52" y2="58" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                    <line x1="26" y1="64" x2="44" y2="64" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                    <line x1="26" y1="70" x2="48" y2="70" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                    <!-- File tag text -->
                    <text x="39" y="80" fill="#9d4edd" font-size="5" font-family="sans-serif" font-weight="bold" text-anchor="middle">.CSV</text>
                </g>
                
                <!-- Web Portal Live Sync (Right) -->
                <g filter="url(#glowVioletFile)">
                    <rect x="142" y="40" width="38" height="42" rx="6" fill="#131720" stroke="#9d4edd" stroke-width="1.5"/>
                    <!-- Browser header -->
                    <rect x="142" y="40" width="38" height="8" rx="6" fill="rgba(157, 78, 221, 0.15)" stroke="none"/>
                    <!-- dots -->
                    <circle cx="147" cy="44" r="1" fill="#9d4edd"/>
                    <circle cx="150" cy="44" r="1" fill="#9d4edd"/>
                    <circle cx="153" cy="44" r="1" fill="#9d4edd"/>
                    <!-- content lines -->
                    <rect x="148" y="54" width="26" height="5" rx="1.5" fill="rgba(255,255,255,0.1)"/>
                    <line x1="148" y1="66" x2="170" y2="66" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                    <line x1="148" y1="72" x2="162" y2="72" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                </g>
                
                <!-- Yoco Payment Terminal (Bottom) -->
                <g filter="url(#glowTealSync)">
                    <rect x="83" y="140" width="34" height="44" rx="8" fill="#131720" stroke="#64ffda" stroke-width="1.5"/>
                    <!-- card reader slot and keypad mocks -->
                    <rect x="88" y="145" width="24" height="12" rx="2" fill="#0d1118"/>
                    <!-- card mock sticking out -->
                    <line x1="88" y1="165" x2="112" y2="165" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                    <line x1="88" y1="170" x2="104" y2="170" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                </g>
                
                <!-- Laser Sync Lines with dash arrays -->
                <path class="animate-dash" d="M80 80 L58 68" stroke="#9d4edd" stroke-width="1" stroke-dasharray="4 4"/>
                <path class="animate-dash" d="M120 80 L142 68" stroke="#9d4edd" stroke-width="1" stroke-dasharray="4 4"/>
                <path class="animate-dash" d="M100 112 L100 140" stroke="#64ffda" stroke-width="1.5" stroke-dasharray="4 4"/>
                
                <defs>
                    <radialGradient id="syncGrad" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stop-color="#64ffda"/>
                        <stop offset="100%" stop-color="#64ffda" stop-opacity="0"/>
                    </radialGradient>
                    <filter id="glowTealSync" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#64ffda" flood-opacity="0.2"/>
                    </filter>
                    <filter id="glowVioletFile" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#9d4edd" flood-opacity="0.15"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Finally, we ensure your data is never locked in a silo. With one click, you can export clean, structured financial and inventory logs to PDF or CSV for your bookkeeper.</p>
            <p>Even better, when you adjust inventory levels in the club, the platform automatically syncs your menu to your live website, ensuring members know exactly what is available before they arrive.</p>
            <p>It’s simple, robust, and connects your physical location with your digital presence."</p>
        `
    }
];

// App States
let currentSlideIndex = 0;

// DOM Elements
const slideCard = document.getElementById("slideCard");
const visualAdviceContent = document.getElementById("visualAdviceContent");
const slideStatusIndicator = document.getElementById("slideStatusIndicator");
const progressDotsContainer = document.getElementById("progressDotsContainer");
const togglePresenterBtn = document.getElementById("togglePresenterBtn");
const mainLayout = document.getElementById("mainLayout");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Initialize Slide Viewer
function initApp() {
    createNavigationDots();
    renderSlide(currentSlideIndex);
    setupEventListeners();
}

// Render specific slide by index
function renderSlide(index) {
    const data = slideData[index];
    
    // Transition effect trigger
    slideCard.classList.remove("active");
    
    setTimeout(() => {
        // Construct Slide content
        const bulletsHtml = data.bullets.map(bullet => `<li>${bullet}</li>`).join("");
        
        slideCard.innerHTML = `
            <div class="slide-info-panel">
                <span class="slide-subtitle">${data.subtitle}</span>
                <h2 class="slide-title">${data.title}</h2>
                <ul class="slide-bullets">
                    ${bulletsHtml}
                </ul>
            </div>
            <div class="slide-visual-panel">
                <div class="visual-container">
                    <div class="visual-graphic">
                        ${data.visualSvg}
                    </div>
                </div>
            </div>
        `;
        
        // Update presenter details
        if (data.visualAdvice.trim().startsWith("<")) {
            visualAdviceContent.innerHTML = data.visualAdvice;
        } else {
            visualAdviceContent.innerHTML = `<p>${data.visualAdvice}</p>`;
        }
        
        // Update counters
        slideStatusIndicator.textContent = `Slide ${index + 1} / ${slideData.length}`;
        
        // Update dots
        updateActiveDot(index);
        
        // Fade in card
        slideCard.classList.add("active");
    }, 150);
}

// Create progress indicator dots
function createNavigationDots() {
    progressDotsContainer.innerHTML = "";
    slideData.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            currentSlideIndex = index;
            renderSlide(currentSlideIndex);
        });
        progressDotsContainer.appendChild(dot);
    });
}

// Update the active dot styling
function updateActiveDot(activeIndex) {
    const dots = progressDotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// Navigation helpers
function nextSlide() {
    if (currentSlideIndex < slideData.length - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0; // Wrap around
    }
    renderSlide(currentSlideIndex);
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = slideData.length - 1; // Wrap around
    }
    renderSlide(currentSlideIndex);
}

// Setup events
function setupEventListeners() {
    // Navigation buttons
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
    
    // Toggle Presenter Desk function
    function togglePresenterMode() {
        const isActive = mainLayout.classList.toggle("presenter-mode-active");
        togglePresenterBtn.classList.toggle("active", isActive);
        
        // Rotate/update tab arrow icon direction based on state
        const tabArrowIcon = document.getElementById("tabArrowIcon");
        if (isActive) {
            tabArrowIcon.style.transform = "rotate(0deg)";
        } else {
            tabArrowIcon.style.transform = "rotate(180deg)";
        }
    }

    // Toggle Presenter Desk from header and tab buttons
    togglePresenterBtn.addEventListener("click", togglePresenterMode);
    
    const sidebarToggleTab = document.getElementById("sidebarToggleTab");
    if (sidebarToggleTab) {
        sidebarToggleTab.addEventListener("click", togglePresenterMode);
    }
    
    // Accordion functionality for collapsible sections
    const collapsibleSections = document.querySelectorAll(".collapsible-section");
    collapsibleSections.forEach(section => {
        const titleEl = section.querySelector(".section-title");
        if (titleEl) {
            titleEl.addEventListener("click", () => {
                section.classList.toggle("active");
            });
        }
    });

    // Lightbox modal logic
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImg = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");

    // Event delegation to capture clicks on images in the advice box
    document.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG" && e.target.closest(".advice-box")) {
            const imgSrc = e.target.getAttribute("src");
            lightboxImg.setAttribute("src", imgSrc);
            lightbox.style.display = "flex";
            setTimeout(() => {
                lightbox.classList.add("active");
            }, 10);
        }
    });

    // Close Lightbox function
    function closeLightbox() {
        lightbox.classList.remove("active");
        setTimeout(() => {
            lightbox.style.display = "none";
        }, 300);
    }

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox || e.target === lightboxImg || e.target === lightboxClose) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
            e.preventDefault();
            nextSlide();
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            prevSlide();
        } else if (e.key.toLowerCase() === "p") {
            // Toggle presenter mode with 'P' key
            e.preventDefault();
            togglePresenterMode();
        } else if (e.key === "Escape" && lightbox.classList.contains("active")) {
            // Close lightbox on Escape
            closeLightbox();
        }
    });
}

// Start app
window.addEventListener("DOMContentLoaded", initApp);
