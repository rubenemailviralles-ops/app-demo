// Pitch Deck Presentation Data
const slideData = [
    {
        id: 1,
        subtitle: "Vision & Value Proposition",
        title: "Dispensary Management & Logistics System",
        bullets: [
            "<strong>High-Performance SPA:</strong> Responsive single-page app built on React, TypeScript, Vite, and Supabase.",
            "<strong>Local-First Fallback:</strong> Active local storage synchronization ensures continuous offline functionality.",
            "<strong>System Core Capabilities:</strong> Integrated security, inventory tracking, and loyalty controls in one system."
        ],
        visualName: "System Core Concept",
        visualAdvice: `<img src="vision_graphic.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Active Till Center Graphic Suggestion">`,
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Glowing central crest -->
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
                
                <defs>
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
                    <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="10" result="blur"/>
                    </filter>
                </defs>
            </svg>
        `,
        visualAdvice: `<img src="vision_graphic.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Active Till Center Graphic Suggestion">`,
        script: `<p>Intro details loaded in header banner.</p>`
    },
    {
        id: 2,
        subtitle: "Operational Gatekeeping",
        title: "Passcode-Protected Reception Portal",
        bullets: [
            "<strong>Passcode Security:</strong> Differentiated access via secure personal numeric codes for members and staff.",
            "<strong>Role-Based Workspace:</strong> Tailored dashboard layouts for Owners, Trusted Budtenders, Budtenders, and Members.",
            "<strong>Exempt Dues Policy:</strong> Lifetime Exempt members have membership dues elements hidden dynamically."
        ],
        visualName: "Access Control Grid Widget",
        visualAdvice: "A visual showing a numeric lock screen adjacent to active user permission badges (Owner, Trusted Budtender, Member) with custom checkbox indicators.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="30" width="70" height="140" rx="12" fill="#131720" stroke="#64ffda" stroke-width="1.5"/>
                <circle cx="46" cy="48" r="3.5" fill="#64ffda"/>
                <circle cx="60" cy="48" r="3.5" fill="#64ffda"/>
                <circle cx="74" cy="48" r="3.5" fill="#64ffda"/>
                <circle cx="88" cy="48" r="3.5" stroke="rgba(255,255,255,0.2)"/>
                
                <g fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)">
                    <rect x="35" y="65" width="12" height="12" rx="2"/>
                    <rect x="54" y="65" width="12" height="12" rx="2"/>
                    <rect x="73" y="65" width="12" height="12" rx="2"/>
                    <rect x="35" y="85" width="12" height="12" rx="2"/>
                    <rect x="54" y="85" width="12" height="12" rx="2"/>
                    <rect x="73" y="85" width="12" height="12" rx="2"/>
                    <rect x="35" y="105" width="12" height="12" rx="2"/>
                    <rect x="54" y="105" width="12" height="12" rx="2"/>
                    <rect x="73" y="105" width="12" height="12" rx="2"/>
                    <rect x="54" y="125" width="12" height="12" rx="2"/>
                </g>
                
                <g filter="url(#glowVioletAccess)">
                    <rect x="110" y="35" width="70" height="35" rx="8" fill="#131720" stroke="#9d4edd" stroke-width="1.5"/>
                    <text x="120" y="50" fill="#ffffff" font-size="8" font-family="sans-serif" font-weight="bold">OWNER</text>
                    <text x="120" y="60" fill="rgba(255,255,255,0.5)" font-size="5" font-family="sans-serif">Full System Admin</text>
                </g>
                <g>
                    <rect x="110" y="82" width="70" height="35" rx="8" fill="#131720" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                    <text x="120" y="97" fill="#ffffff" font-size="8" font-family="sans-serif" font-weight="bold">BUDTENDER</text>
                    <text x="120" y="107" fill="rgba(255,255,255,0.5)" font-size="5" font-family="sans-serif">Dispense & Registry</text>
                </g>
                <g>
                    <rect x="110" y="129" width="70" height="35" rx="8" fill="#131720" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                    <text x="120" y="144" fill="#ffffff" font-size="8" font-family="sans-serif" font-weight="bold">MEMBER</text>
                    <text x="120" y="154" fill="rgba(255,255,255,0.5)" font-size="5" font-family="sans-serif">Dues & Points stats</text>
                </g>
                <defs>
                    <filter id="glowVioletAccess" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#9d4edd" flood-opacity="0.25"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Secure check-in is the first line of defense. The portal employs passcode protection for members and staff.</p>
            <p>Based on the staff code inputted, the workspace dynamically structures itself—offering owners financial settings, budtenders standard till views, and members their private registry profile."</p>
        `
    },
    {
        id: 3,
        subtitle: "Sales & Stock Operations",
        title: "Interactive POS & Inventory Matrix",
        bullets: [
            "<strong>Real-Time Stock Grid:</strong> Categorized cards with strain indicators (Indica/Sativa/Hybrid) and THC/CBD ratios.",
            "<strong>Smart Warning Thresholds:</strong> Items glow in warning amber colors when inventory levels drop below limit levels.",
            "<strong>Category Campaign Engine:</strong> Easily manage custom categories with automatic 'Uncategorized' reassignment."
        ],
        visualName: "Active Stock & POS Grid",
        visualAdvice: `<img src="vision_graphic.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="Till Center POS Screenshot">`,
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="35" width="72" height="52" rx="8" fill="#131720" stroke="rgba(255,255,255,0.08)" stroke-width="1.2"/>
                <circle cx="34" cy="49" r="6" fill="#64ffda" opacity="0.2"/>
                <text x="34" y="52" fill="#64ffda" font-size="7" font-weight="900" font-family="sans-serif" text-anchor="middle">S</text>
                <text x="47" y="49" fill="#ffffff" font-size="7" font-weight="bold" font-family="sans-serif">Super Lemon</text>
                <text x="47" y="57" fill="rgba(255,255,255,0.4)" font-size="5" font-family="sans-serif">Stock: 25g</text>
                <rect x="30" y="68" width="28" height="7" rx="3.5" fill="rgba(255,255,255,0.04)"/>
                <text x="44" y="73" fill="rgba(255,255,255,0.6)" font-size="4.5" font-family="sans-serif" text-anchor="middle">THC: 22%</text>
                
                <g filter="url(#glowAmber)">
                    <rect x="108" y="35" width="72" height="52" rx="8" fill="#131720" stroke="#ffb703" stroke-width="1.5"/>
                    <circle cx="122" cy="49" r="6" fill="#ffb703" opacity="0.2"/>
                    <text x="122" y="52" fill="#ffb703" font-size="7" font-weight="900" font-family="sans-serif" text-anchor="middle">H</text>
                    <text x="135" y="49" fill="#ffffff" font-size="7" font-weight="bold" font-family="sans-serif">Blue Dream</text>
                    <text x="135" y="57" fill="#ffb703" font-size="5" font-weight="bold" font-family="sans-serif">Low Stock: 2g</text>
                    <rect x="118" y="68" width="28" height="7" rx="3.5" fill="rgba(255,255,255,0.04)"/>
                    <text x="132" y="73" fill="rgba(255,255,255,0.6)" font-size="4.5" font-family="sans-serif" text-anchor="middle">THC: 18%</text>
                </g>
                
                <rect x="20" y="105" width="72" height="52" rx="8" fill="#131720" stroke="rgba(255,255,255,0.08)" stroke-width="1.2"/>
                <circle cx="34" cy="119" r="6" fill="#9d4edd" opacity="0.2"/>
                <text x="34" y="122" fill="#9d4edd" font-size="7" font-weight="900" font-family="sans-serif" text-anchor="middle">I</text>
                <text x="47" y="119" fill="#ffffff" font-size="7" font-weight="bold" font-family="sans-serif">Afghani Kush</text>
                <text x="47" y="127" fill="rgba(255,255,255,0.4)" font-size="5" font-family="sans-serif">Stock: 48g</text>
                <rect x="30" y="138" width="28" height="7" rx="3.5" fill="rgba(255,255,255,0.04)"/>
                <text x="44" y="143" fill="rgba(255,255,255,0.6)" font-size="4.5" font-family="sans-serif" text-anchor="middle">THC: 24%</text>
                
                <rect x="108" y="105" width="72" height="52" rx="8" fill="#131720" stroke="rgba(255,255,255,0.08)" stroke-width="1.2"/>
                <circle cx="122" cy="119" r="6" fill="#64ffda" opacity="0.2"/>
                <text x="122" y="122" fill="#64ffda" font-size="7" font-weight="900" font-family="sans-serif" text-anchor="middle">S</text>
                <text x="135" y="119" fill="#ffffff" font-size="7" font-weight="bold" font-family="sans-serif">Durban Poison</text>
                <text x="135" y="127" fill="rgba(255,255,255,0.4)" font-size="5" font-family="sans-serif">Stock: 14g</text>
                <rect x="118" y="138" width="28" height="7" rx="3.5" fill="rgba(255,255,255,0.04)"/>
                <text x="132" y="143" fill="rgba(255,255,255,0.6)" font-size="4.5" font-family="sans-serif" text-anchor="middle">THC: 20%</text>
                
                <defs>
                    <filter id="glowAmber" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#ffb703" flood-opacity="0.3"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "At checkout, speed and accuracy are crucial. Our dynamic POS catalog filters items instantly by category and features strain tags.</p>
            <p>If inventory levels drop below minimum stock points, the interface automatically flashes amber alerts, warning budtenders before a product completely runs dry."</p>
        `
    },
    {
        id: 4,
        subtitle: "Loyalty & Campaigns",
        title: "Integrated Multi-Layered Discount Engine",
        bullets: [
            "<strong>Visit Milestones:</strong> Configure rewards applied on specific check-in visits (e.g. 10% off every 4th visit).",
            "<strong>Stacked Campaigns:</strong> Combine item-specific campaign discounts with membership VIP tier benefits.",
            "<strong>Staff Allowances:</strong> Apply role-based discounts (e.g., Budtender benefits) automatically at check-out."
        ],
        visualName: "Milestone Campaign Layout",
        visualAdvice: "A visual check-in tracker timeline card displaying completed check-in nodes and a glowing unlocked discount node at the milestone.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#glowVioletCampaign)">
                    <rect x="25" y="30" width="150" height="140" rx="18" fill="#131720" stroke="#9d4edd" stroke-width="1.5"/>
                    <rect x="30" y="35" width="140" height="130" rx="14" fill="#0d1118"/>
                </g>
                <text x="40" y="55" fill="#9d4edd" font-size="8" font-family="sans-serif" font-weight="900">LOYALTY MILESTONES</text>
                <text x="40" y="65" fill="rgba(255,255,255,0.5)" font-size="6" font-family="sans-serif">Campaign: 4th Visit 10% Discount</text>
                
                <line x1="50" y1="110" x2="150" y2="110" stroke="rgba(255,255,255,0.08)" stroke-width="4" stroke-linecap="round"/>
                <line x1="50" y1="110" x2="116" y2="110" stroke="#64ffda" stroke-width="4" stroke-linecap="round"/>
                
                <circle cx="50" cy="110" r="8" fill="#0d1118" stroke="#64ffda" stroke-width="2"/>
                <path d="M47 110L49 112L53 108" stroke="#64ffda" stroke-width="1.2" stroke-linecap="round"/>
                <text x="50" y="130" fill="rgba(255,255,255,0.4)" font-size="5.5" font-family="sans-serif" text-anchor="middle">Visit 1</text>
                
                <circle cx="83" cy="110" r="8" fill="#0d1118" stroke="#64ffda" stroke-width="2"/>
                <path d="M80 110L82 112L86 108" stroke="#64ffda" stroke-width="1.2" stroke-linecap="round"/>
                <text x="83" y="130" fill="rgba(255,255,255,0.4)" font-size="5.5" font-family="sans-serif" text-anchor="middle">Visit 2</text>
                
                <circle cx="116" cy="110" r="8" fill="#0d1118" stroke="#64ffda" stroke-width="2"/>
                <path d="M113 110L115 112L119 108" stroke="#64ffda" stroke-width="1.2" stroke-linecap="round"/>
                <text x="116" y="130" fill="rgba(255,255,255,0.4)" font-size="5.5" font-family="sans-serif" text-anchor="middle">Visit 3</text>
                
                <g class="animate-pulse">
                    <circle cx="150" cy="110" r="11" fill="#131720" stroke="url(#violetTealGrad)" stroke-width="2.5" filter="url(#glowTealCampaign)"/>
                    <text x="150" y="113" fill="#64ffda" font-size="6.5" font-weight="900" font-family="sans-serif" text-anchor="middle">10%</text>
                </g>
                <text x="150" y="132" fill="#64ffda" font-size="5.5" font-family="sans-serif" font-weight="bold" text-anchor="middle">REWARD</text>
                <defs>
                    <linearGradient id="violetTealGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#9d4edd"/>
                        <stop offset="100%" stop-color="#64ffda"/>
                    </linearGradient>
                    <filter id="glowVioletCampaign" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#9d4edd" flood-opacity="0.12"/>
                    </filter>
                    <filter id="glowTealCampaign" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#64ffda" flood-opacity="0.4"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "The platform features a multi-layered discount engine. You can set visit thresholds—for example, automatically applying a 10% discount on every 4th check-in.</p>
            <p>These discount layers stack cleanly alongside category campaigns and VIP member benefits, while protecting your core profit margins."</p>
        `
    },
    {
        id: 5,
        subtitle: "Business Intelligence",
        title: "Financial Ledgers & Predictive Analytics",
        bullets: [
            "<strong>Real-time Margin Tracking:</strong> Monitor Gross Revenue, estimated wholesale costs, and Net Real Profit on the fly.",
            "<strong>Predictive Forecasts:</strong> Project expected check-outs and weekly/monthly revenues using velocity calculators.",
            "<strong>Consolidated Audit Ledgers:</strong> Record returns history calendars and close daily registers to commit audited reports."
        ],
        visualName: "Predictive Analytics Forecast",
        visualAdvice: "A coordinates timeline showing past transaction revenues, projecting forward as a glowing, dotted predictive curve indicating weekly and monthly trends.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="30" x2="30" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                <line x1="30" y1="150" x2="170" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                <path d="M30 130 L60 115 L90 100 L120 70" stroke="#9d4edd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <g filter="url(#glowTealLine)">
                    <path d="M120 70 L135 55 L150 48 L170 35" stroke="#64ffda" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4"/>
                </g>
                <circle cx="120" cy="70" r="4.5" fill="#9d4edd" stroke="#0d1118" stroke-width="1.5"/>
                <circle cx="150" cy="48" r="4.5" fill="#64ffda" stroke="#0d1118" stroke-width="1.5"/>
                <g filter="url(#glowWidgetForecast)">
                    <rect x="100" y="16" width="70" height="20" rx="5" fill="#131720" stroke="#64ffda" stroke-width="0.75"/>
                    <text x="135" y="28" fill="#64ffda" font-size="6" font-weight="900" font-family="sans-serif" text-anchor="middle">PREDICTIVE: +24%</text>
                </g>
                <defs>
                    <filter id="glowTealLine" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#64ffda" flood-opacity="0.3"/>
                    </filter>
                    <filter id="glowWidgetForecast" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#64ffda" flood-opacity="0.2"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Data-driven decisions require foresight. The platform tracks daily ticket averages and average checkout velocities.</p>
            <p>Using predictive expectancy models, the system projects estimated revenue and visit metrics over 7-day and 30-day horizons, helping operators manage stock requirements and staff levels proactively."</p>
        `
    },
    {
        id: 6,
        subtitle: "System Lockdown",
        title: "Lockdown Security Protocols",
        bullets: [
            "<strong>Inspector Block:</strong> Blocks developer tool keyboard shortcuts and disables browser right-click menus globally.",
            "<strong>Anti-Debugger Loop:</strong> Runs real-time interval triggers that freeze execution if developer consoles are opened.",
            "<strong>Content Protection:</strong> Blocks copy, paste, text selection, drag-and-drop, and inspect hooks entirely."
        ],
        visualName: "Security Shield Status",
        visualAdvice: "A visual showing a central shield padlock element, surrounded by scanning digital matrix blocks and blocked keyboard warning signals.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#glowShield)">
                    <path d="M100 30 L150 50 V110 C150 140 120 165 100 172 C80 165 50 140 50 110 V50 L100 30 Z" fill="#131720" stroke="#ff4d4d" stroke-width="2"/>
                </g>
                <rect x="88" y="90" width="24" height="18" rx="3" fill="rgba(255, 77, 77, 0.15)" stroke="#ff4d4d" stroke-width="1.5"/>
                <path d="M93 90 V80 C93 75 96 72 100 72 C104 72 107 75 107 80 V90" stroke="#ff4d4d" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="100" cy="100" r="76" stroke="rgba(255, 77, 77, 0.15)" stroke-width="1" stroke-dasharray="6 12"/>
                <text x="100" y="132" fill="#ff4d4d" font-size="7" font-weight="bold" font-family="sans-serif" text-anchor="middle" letter-spacing="0.05em">SECURED</text>
                <defs>
                    <filter id="glowShield" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#ff4d4d" flood-opacity="0.3"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Intellectual property and data protection are paramount. Our platform implements absolute lockdown protocols.</p>
            <p>Standard keyboard shortcut hooks, right-click, selection, and copy-paste events are blocked globally, while debugger loops freeze execution if an unauthorized user attempts to open developer consoles."</p>
        `
    },
    {
        id: 7,
        subtitle: "Compliance & Value",
        title: "Membership Legal Compliance & Ledger",
        bullets: [
            "<strong>Gram Consumption Log:</strong> Track consumed weight quantities per member to adhere to local legal custody limits.",
            "<strong>Private Registry Directory:</strong> Secure private registries log visit counts and compliance status logs safely.",
            "<strong>Closed-Loop Economy:</strong> Support points-buying token modes to completely isolate product dispensing from physical payments."
        ],
        visualName: "Closed Loop Token Sync",
        visualAdvice: "A visual showing a safe, closed-loop token database, demonstrating the flow from cash collections into loyalty point wallets.",
        visualSvg: `
            <svg class="placeholder-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50 V150" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-linecap="round"/>
                <path d="M70 150 H130" stroke="rgba(255,255,255,0.2)" stroke-width="4" stroke-linecap="round"/>
                <line x1="50" y1="70" x2="150" y2="70" stroke="#64ffda" stroke-width="2.5" stroke-linecap="round"/>
                
                <g filter="url(#glowTealCompliance)">
                    <line x1="50" y1="70" x2="35" y2="115" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                    <line x1="50" y1="70" x2="65" y2="115" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                    <path d="M30 115 H70 A20 20 0 0 1 30 115 Z" fill="#131720" stroke="#64ffda" stroke-width="1.5"/>
                    <text x="50" y="110" fill="#64ffda" font-size="8" font-weight="900" font-family="sans-serif" text-anchor="middle">R</text>
                </g>
                <g filter="url(#glowTealCompliance)">
                    <line x1="150" y1="70" x2="135" y2="115" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                    <line x1="150" y1="70" x2="165" y2="115" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                    <path d="M130 115 H170 A20 20 0 0 1 130 115 Z" fill="#131720" stroke="#64ffda" stroke-width="1.5"/>
                    <text x="150" y="110" fill="#64ffda" font-size="7" font-weight="900" font-family="sans-serif" text-anchor="middle">g</text>
                </g>
                <circle cx="100" cy="95" r="14" fill="#0d1118" stroke="#9d4edd" stroke-width="1.5"/>
                <path d="M96 95L99 98L105 92" stroke="#9d4edd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                    <filter id="glowTealCompliance" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#64ffda" flood-opacity="0.2"/>
                    </filter>
                </defs>
            </svg>
        `,
        script: `
            <p><strong>Script:</strong> "Compliance is our ultimate objective. Private clubs and grow associations must track member logs and consumed quotas to maintain legal custody protections.</p>
            <p>By logging lifetime grams per member, automating dues, and running point-buying configurations, the software ensures operators separate cannabis distribution from retail transactions, protecting their legal model."</p>
        `
    }
];

// Extract the 6 value propositions (exclude introductory slide 1)
const cardsData = slideData.filter(slide => slide.id !== 1);

// DOM Elements
const dashboardGrid = document.getElementById("dashboardGrid");
const zoomOverlay = document.getElementById("zoomOverlay");
const zoomCardContainer = document.getElementById("zoomCard");
const zoomCloseBtn = document.getElementById("zoomCloseBtn");
const footerControls = document.getElementById("footerControls");

const slideStatusIndicator = document.getElementById("slideStatusIndicator");
const progressDotsContainer = document.getElementById("progressDotsContainer");
const mainLayout = document.getElementById("mainLayout");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

let activeZoomIndex = null;

// Initialize Progress Dots (for overlay navigation)
function initProgressDots() {
    progressDotsContainer.innerHTML = "";
    cardsData.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.title = `Go to slide ${index + 1}`;
        dot.addEventListener("click", () => {
            if (typeof stopAutoplay === 'function') stopAutoplay();
            zoomCard(index);
        });
        progressDotsContainer.appendChild(dot);
    });
}

// Render Dashboard grid list
function renderDashboard() {
    dashboardGrid.innerHTML = "";
    cardsData.forEach((data, index) => {
        const cardEl = document.createElement("div");
        cardEl.className = "grid-card";
        
        cardEl.innerHTML = `
            <div class="grid-card-info">
                <span class="grid-card-subtitle">${data.subtitle}</span>
                <h3 class="grid-card-title">${data.title}</h3>
            </div>
            <div class="grid-card-preview">
                <div class="mini-visual-graphic">
                    ${data.visualSvg}
                </div>
            </div>
        `;
        
        cardEl.addEventListener("click", () => {
            zoomCard(index);
        });
        
        dashboardGrid.appendChild(cardEl);
    });
}

// Open and Zoom card overlay
function zoomCard(index) {
    activeZoomIndex = index;
    const data = cardsData[index];
    if (!data) return;

    // Reset slide entry animations to ensure visibility (transition opacity: 0 to 1)
    zoomCardContainer.classList.remove("active");
    void zoomCardContainer.offsetWidth; // Force layout recalculation

    // Slide html injection
    // Bullet html parser and generation
    const bulletsHtml = data.bullets.map((b, idx) => {
        const strongMatch = b.match(/<strong>(.*?)<\/strong>/);
        let title = "";
        let desc = b;
        if (strongMatch) {
            title = strongMatch[1].replace(/:$/, "").trim();
            desc = b.replace(strongMatch[0], "").trim();
            if (desc.startsWith(":")) {
                desc = desc.substring(1).trim();
            }
        }
        return `
            <li class="collapsible-bullet" style="--anim-delay: ${0.32 + idx * 0.1}s">
                <div class="bullet-trigger">
                    <span class="bullet-arrow">▼</span>
                    <strong>${title}:</strong>
                </div>
                <div class="bullet-content">
                    <p>${desc}</p>
                </div>
            </li>
        `;
    }).join("");
    
    zoomCardContainer.innerHTML = `
        <div class="slide-content-area">
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

    // Add interactive click listeners for collapsible bullet menu triggers on mobile/tablet viewports
    const triggers = zoomCardContainer.querySelectorAll('.bullet-trigger');
    triggers.forEach(trig => {
        trig.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                const parentLi = trig.closest('.collapsible-bullet');
                if (parentLi) {
                    parentLi.classList.toggle('active');
                }
            }
        });
    });

    zoomCardContainer.classList.add("active");

    // Update Status Indicator
    slideStatusIndicator.textContent = `Capability ${index + 1} / ${cardsData.length}`;

    // Update Nav buttons
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === cardsData.length - 1;

    // Update dots active class
    const dots = progressDotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, dotIdx) => {
        if (dotIdx === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    // Show zoomed elements smoothly
    zoomOverlay.classList.add("show");
    
    // Smoothly popup control elements
    footerControls.classList.remove("hidden");

    // Reset progress bar time elapsed on slide change
    if (typeof autoplayInterval !== 'undefined' && autoplayInterval) {
        autoplayTimeElapsed = 0;
        const pBar = document.getElementById("autoplayProgressBar");
        if (pBar) pBar.style.width = "0%";
    }
}

// Close Zoom Overlay
function closeZoom() {
    activeZoomIndex = null;
    zoomOverlay.classList.remove("show");
    
    // Hide controls smoothly
    footerControls.classList.add("hidden");

    // Terminate autoplay on close
    if (typeof stopAutoplay === 'function') {
        stopAutoplay();
    }
}

function nextZoomCard() {
    if (activeZoomIndex !== null && activeZoomIndex < cardsData.length - 1) {
        if (typeof stopAutoplay === 'function') stopAutoplay();
        zoomCard(activeZoomIndex + 1);
    }
}

function prevZoomCard() {
    if (activeZoomIndex !== null && activeZoomIndex > 0) {
        if (typeof stopAutoplay === 'function') stopAutoplay();
        zoomCard(activeZoomIndex - 1);
    }
}

// Lightbox functions
function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || "Enlarged Visual Preview";
    imageLightbox.classList.add("show");
}

function closeLightbox() {
    imageLightbox.classList.remove("show");
}

// Event Listeners
prevBtn.addEventListener("click", prevZoomCard);
nextBtn.addEventListener("click", nextZoomCard);

if (zoomCloseBtn) {
    zoomCloseBtn.addEventListener("click", closeZoom);
}

if (zoomOverlay) {
    zoomOverlay.addEventListener("click", (e) => {
        if (e.target === zoomOverlay) {
            closeZoom();
        }
    });
}

if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
}

if (imageLightbox) {
    imageLightbox.addEventListener("click", (e) => {
        if (e.target === imageLightbox || e.target === lightboxImage || e.target === lightboxClose) {
            closeLightbox();
        }
    });
}

// Keybindings
document.addEventListener("keydown", (e) => {
    if (activeZoomIndex !== null) {
        // Navigation keys inside zoom overlay
        if (e.key === "ArrowRight" || e.key === "Space") {
            e.preventDefault();
            nextZoomCard();
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            prevZoomCard();
        }
    }
    
    // Lightbox escape key or close zoom on Escape
    if (e.key === "Escape") {
        if (imageLightbox.classList.contains("show")) {
            closeLightbox();
        } else if (activeZoomIndex !== null) {
            closeZoom();
        }
    }
});

// Try Live App Modal DOM Selections & Logic
const tryLiveBtn = document.getElementById("tryLiveBtn");
const tryLiveModal = document.getElementById("tryLiveModal");
const tryLiveCloseBtn = document.getElementById("tryLiveCloseBtn");

// Show Toast helper
function showToast(message) {
    let toast = document.getElementById("toastAlert");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toastAlert";
        toast.className = "toast-alert";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

if (tryLiveBtn) {
    tryLiveBtn.addEventListener("click", () => {
        tryLiveModal.classList.add("show");
    });
}

if (tryLiveCloseBtn) {
    tryLiveCloseBtn.addEventListener("click", () => {
        tryLiveModal.classList.remove("show");
    });
}

if (tryLiveModal) {
    tryLiveModal.addEventListener("click", (e) => {
        if (e.target === tryLiveModal) {
            tryLiveModal.classList.remove("show");
        }
    });
}

// Copy passcode to clipboard and open live Vercel app
document.querySelectorAll(".live-role-card").forEach(card => {
    const btn = card.querySelector(".launch-role-btn");
    const passcode = card.getAttribute("data-passcode");
    const roleBadge = card.querySelector(".role-badge");
    const roleName = roleBadge ? roleBadge.textContent : "Selected Role";
    
    if (btn && passcode) {
        btn.addEventListener("click", () => {
            navigator.clipboard.writeText(passcode).then(() => {
                showToast(`${roleName} Passcode (${passcode}) copied! Opening live app...`);
                setTimeout(() => {
                    window.open("https://smoking-goblin-420.vercel.app/", "_blank");
                }, 800);
            }).catch(err => {
                console.error("Clipboard copy failed: ", err);
                window.open("https://smoking-goblin-420.vercel.app/", "_blank");
            });
        });
    }
});

// Autoplay Presentation Deck Automation
let autoplayInterval = null;
const autoplayTimeout = 7000; // 7 seconds per slide
let autoplayTimeElapsed = 0;

const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const progressBar = document.getElementById("autoplayProgressBar");

function startAutoplay() {
    if (autoplayInterval) return;
    
    if (playIcon) playIcon.classList.add("hidden");
    if (pauseIcon) pauseIcon.classList.remove("hidden");
    if (playBtn) {
        playBtn.classList.add("playing");
        playBtn.title = "Pause Autoplay";
    }
    
    autoplayTimeElapsed = 0;
    if (progressBar) progressBar.style.width = "0%";
    
    autoplayInterval = setInterval(() => {
        autoplayTimeElapsed += 100;
        const percent = (autoplayTimeElapsed / autoplayTimeout) * 100;
        if (progressBar) progressBar.style.width = `${percent}%`;
        
        if (autoplayTimeElapsed >= autoplayTimeout) {
            autoplayTimeElapsed = 0;
            if (progressBar) progressBar.style.width = "0%";
            
            // Loop slides
            if (activeZoomIndex !== null) {
                if (activeZoomIndex < cardsData.length - 1) {
                    zoomCard(activeZoomIndex + 1);
                } else {
                    zoomCard(0); // Cycle back to slide 1
                }
            }
        }
    }, 100);
}

function stopAutoplay() {
    if (!autoplayInterval) return;
    
    clearInterval(autoplayInterval);
    autoplayInterval = null;
    autoplayTimeElapsed = 0;
    
    if (playIcon) playIcon.classList.remove("hidden");
    if (pauseIcon) pauseIcon.classList.add("hidden");
    if (playBtn) {
        playBtn.classList.remove("playing");
        playBtn.title = "Autoplay Slides";
    }
    if (progressBar) progressBar.style.width = "0%";
}

function toggleAutoplay() {
    if (autoplayInterval) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
}

if (playBtn) {
    playBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAutoplay();
    });
}

// Initialization
renderDashboard();
initProgressDots();
closeZoom(); // Start with zoomed overlays hidden
