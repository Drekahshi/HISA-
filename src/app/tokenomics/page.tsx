import { AppHeader } from '@/components/app-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck, ShoppingCart } from 'lucide-react';

export default function TokenomicsPage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="JANI Tokenomics"
        description="Understanding the economic model of the JANI ecosystem."
      />

      <div className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">3. JANI Tokenomics</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-4">
                <section>
                    <h3 className="text-xl font-semibold">3.1 Token Utility</h3>
                    <p>JANI Token provides multiple use cases, including:</p>
                    <h4 className="font-semibold">Governance and Voting</h4>
                    <p>Community participation through DAOs.</p>

                    <h4 className="font-semibold">Staking Rewards</h4>
                    <p>Incentives for long-term holders.</p>

                    <h4 className="font-semibold">Carbon Offset Utility</h4>
                    <p>Tradable credits for corporate sustainability and work with DOVU and Guardian. For a hectares of confirmed bamboo a unique NFT is minted that backs up Jani token to co2 offset activity in JANI ecosystem. This NFT will be a Co2 offset meme which will be burnt annually. It will serve as a measure for co2 offset in Jani ecosystem especially in the Jani token eg 1 Jani token is 10 kg of co2 offset annually and it will increase depending on co2 offset activities annually and growth of planted bamboo.A Farmers will be paid in Jani token for their co2 offset activities eg Jani Validators can tokenise his tea farm and from that he can earn some thing. This will be a way of rewarding and unlock liquidity that lying idle utilizing distributed ledger technology.</p>
                
                    <h4 className="font-semibold">NFT-based Conservation Tracking</h4>
                    <p>Unique digital assets linked to conservation projects. Climate change is one of the most pressing challenges of our time, and addressing it requires more than just scientific solutions—it demands creativity, innovation, and community engagement. Art has the unique power to inspire, educate, and mobilize people in ways that data alone cannot. By blending artistic expression with cutting-edge technology, we can create new pathways for environmental advocacy and action.</p>
                    <p>Our NFT project are rooted in this belief. Through digital art, we aim to raise awareness about the urgency of climate change and the importance of sustainable practices. Each NFT serves as a visual narrative, telling the story of our planet's fragile ecosystems and the need for collective action. By leveraging distributed ledger technology, we ensure transparency and traceability, allowing supporters to see the direct impact of their contributions.</p>
                    <p>This ideology is incorporated in JANI Ecosystem, which uses distributed ledger to incentivize conservation and reforestation. Just as JANI Token connects environmental restoration with financial rewards, our NFTs bridge art and activism, offering a creative way to support climate action. Together, we can harness the power of art and technology to inspire a global movement towards a more sustainable future.</p>
                    <p>A conservation NFT will be minted after 100 Jani tokens are minted. Different wallet address that support Jani activities will be given a chance to mint an NFT but must stake Jani tokens. Artist, Generative AI and even photographers will be given a chance to be creative and mint a 1 of 1 NFT. NFT allotment will depend on different factors eg bidding through lock up staking for liquidity, Lottery, Jani proof of work metrics, social media voting, buying a slot, liquidity provision metric, donations etc. Depending on how the NFT allotment process the NFT it can be Stored in a vault, Kept by the owner, Redeemed by the NFT holder, Destroyed after tokenization, Used Separately from the NFT. Join us in this innovative journey, where creativity meets conservation, and every piece of art becomes a step towards healing our planet.</p>
                
                    <h4 className="font-semibold">Ecosystem Services Payments and Real World Payment</h4>
                    <p>Financial rewards for conservation activities and increased utility for users for their day to day life.</p>

                    <h4 className="font-semibold">Corporate Certifications</h4>
                    <p>Recognition for companies supporting conservation efforts. Companies that donate and support will receive special certificate in NFT and physical copies that indicate that they are ESG compliant and support Jani ecosystem. Companies that lumber or log wood can pay us to plant trees that they mostly partake logging and we can plant them due to the respective nature of our businesses and still conserve the environment. Automotives and companies that emit co2 can purchase Jani token to show their commitment in reducing their carbon footprint efforts and can stake and earn rewards. JANI financial utility down to its basic state will be a unit of account a nominal unit of measure to hold value of the item it will be a medium of exchange and a store of value.</p>
                </section>
                
                <Separator />

                <section>
                    <h3 className="text-xl font-semibold">3.2 Token Distribution & Inflation Control</h3>
                    <ul>
                        <li><strong>Initial Supply:</strong> 50 million JANI tokens</li>
                        <li><strong>Annual Minting Cap:</strong> 1 million tokens</li>
                    </ul>
                    <h4 className="font-semibold">Minted Token Allocation:</h4>
                    <p><strong>50% - Staking Rewards</strong><br/>
                    The network shall be the pool operator and will be in charge of managing the pool and setting the pool fee. The annual staking rewards will be a percentage of the total supply. Slashing conditions will be for malicious actors. Penalty for early withdrawal is no reward. Coins can be locked for at least 21 days. One can join as an individual or joint if it is a group since there will be different pool groups. Minimum staking will be 1 coins. Ecosystem builders will earn more staking rewards eg validators, auditors local stake holders compared to other parties.</p>
                    <p><code>Stackers reward = stackers contribution / total staked in pool * total reward - pool fee</code></p>
                    <p>Example: If the total reward earned by the pool is 1000 coins and the pool fee is 50 coins and the total staked by the pool 10,000 coins and the stakers contribution is 500 coins he will earn 47.5 coins in 42 days.</p>
                    <p><code>Annually the staking reward will be stackers contribution / total staked in network * total stacking reward</code></p>

                    <p><strong>40% - Tree-planting Fund</strong><br/>
                    The global DAO shall decide which conservation project shall get the allocation.</p>
                    
                    <p><strong>10% - Liquidity Incentives</strong><br/>
                    Liquidity providers will be rewarded for their liquidity provision on DEXes.</p>
                </section>

                <Separator />
                
                <section>
                    <h3 className="text-xl font-semibold">3.3 Deflationary Mechanisms</h3>
                    <ul>
                        <li><strong>Token Reinvestment:</strong> 2% of each transaction will be used in conservation NFT projects</li>
                        <li><strong>Buyback Program:</strong> 10% of transaction fees reinvested in buybacks and fund bamboo projects</li>
                        <li><strong>Insurance:</strong> 3% of transaction fees will be used for insurance against any unforeseen risk that may occur in the seedlings nursery or when planted in the field eg Dying plants, vandalized plants etc.</li>
                    </ul>
                    <p>The rest of the transaction fees will be used in the network system infrastructure, Stable Jani liquidity and for overcollateralization for good risk management in network liquidity.</p>
                </section>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <ShieldCheck /> Verification & Trust (Hedera Guardian)
            </CardTitle>
            <CardDescription>
              JANI integrates Hedera Guardian to provide trust, transparency, and verifiability for all conservation assets.
            </CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none space-y-4">
            <section>
              <h3 className="text-xl font-semibold">Policy Engine</h3>
              <p>Guardian's policy engine automates and enforces compliance with international standards (e.g., Gold Standard VER). This ensures every conservation claim follows a verifiable, auditable workflow.</p>
            </section>
            <Separator />
            <section>
              <h3 className="text-xl font-semibold">Verifiable Credentials & MRV</h3>
              <p>The system issues tamper-proof digital certificates for every verified activity. Using automated data from IoT, satellites, and on-ground validators, JANI provides a robust Monitoring, Reporting, and Verification (MRV) process, making all data transparent and auditable.</p>
            </section>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <ShoppingCart /> Carbon Offset Marketplace (DOVU)
            </CardTitle>
            <CardDescription>
              JANI integrates with a DOVU-powered marketplace, turning verified conservation efforts into tradable carbon credits.
            </CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none space-y-4">
            <section>
              <h3 className="text-xl font-semibold">Tokenizing Carbon Credits</h3>
              <p>Each verified conservation asset, backed by Guardian's auditable data, is tokenized. This allows for the creation of high-quality, traceable carbon credits representing real-world environmental impact.</p>
            </section>
            <Separator />
            <section>
              <h3 className="text-xl font-semibold">Marketplace for ESG Assets</h3>
              <p>The marketplace allows individuals and corporations to purchase these tokenized carbon credits, providing a direct financial incentive for conservation projects. This creates a sustainable, market-driven funding model for continued environmental regeneration.</p>
            </section>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">4. Governance & Decentralization</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-4">
                 <h3 className="text-xl font-semibold">4.1 DAO Structure</h3>
                 <p>The JANI ecosystem integrates the principles of the <strong>W.L. Gore lattice model</strong> into a decentralized governance structure. This ensures transparency, inclusivity, and adaptability while empowering validators and local communities.</p>

                <h4 className="font-semibold">Local Validator DAO (L-DAO)</h4>
                <p><strong>Purpose</strong>: Empower local communities—such as Community Forest Associations (CFAs), youth groups, and women’s chamas—to lead conservation efforts.</p>
                <p><strong>Key Features</strong>:</p>
                <ul>
                    <li><strong>Peer Accountability</strong>: Leadership emerges from expertise and contribution, not hierarchy.</li>
                    <li><strong>Rotating Leadership</strong>: Roles shift dynamically based on project needs.</li>
                    <li><strong>Community Verification</strong>: Validators verify conservation activities like tree planting and sustainable land management.</li>
                    <li><strong>Incentive Structure</strong>: Validators earn staking rewards, governance rights, and recognition for active participation.</li>
                </ul>

                <h4 className="font-semibold">Global Validator DAO (G-DAO)</h4>
                <p><strong>Purpose</strong>: Provide transparency, strategic oversight, and sustainability at a continental and global scale.</p>
                <p><strong>Key Features</strong>:</p>
                <ul>
                    <li><strong>Decentralized Oversight</strong>: Composed of regional reps, NGOs, corporate partners, and scientific experts.</li>
                    <li><strong>Quadratic Voting</strong>: Prevents dominance by large stakeholders, ensuring fair decision-making.</li>
                    <li><strong>Specialized Committees</strong>: Technical, financial, and conservation oversight committees align activities with JANI’s mission.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">JANI Stable Coin</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
                <p>
                JANI stable is an ecosystem stable coin to hedge against volatility in the market to protect investors and users against unprecedented market volatility. It will be pegged to the Dollar (USD) and Kenya Green Bonds.
                </p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">JANI Green Bonds for Bamboo Reforestation</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-4">
               <p>JANI Green Bonds can finance bamboo reforestation, integrating blockchain-based conservation with sustainable funding. Bamboo is an ideal green investment due to its high carbon sequestration, rapid growth, and soil restoration benefits. They will be planted in batches that fit a hectare.</p>

                <h3 className="text-xl font-semibold">How It Works:</h3>
                <ul>
                    <li><strong>Green Bonds</strong> — The government of Kenya Issues Green bonds to Jani ecosystem, allowing to fund bamboo projects and other conservation projects in Jani ecosystem</li>
                    <li><strong>Smart Contract-Based Funding</strong> — Funds are released only when verified growth milestones are met</li>
                    <li><strong>Proof of Growth (PoG) for Bamboo</strong> — IoT and AI track CO₂ absorption, survival rates, and biomass expansion</li>
                    <li><strong>Carbon Credit Trading</strong> — Bamboo-linked carbon offsets can be sold to ESG investors & DeFi platforms (e.g., KlimaDAO)</li>
                    <li><strong>DAO Governance</strong> — The JANI DAO ensures transparent allocation of funds to bamboo projects</li>
                </ul>

                <h3 className="text-xl font-semibold">Implementation Plan:</h3>
                <ul>
                    <li><strong>Ololua Forest Bamboo Project</strong> — Fund bamboo planting for carbon sequestration & land restoration</li>
                    <li><strong>Community Forest Associations (CFAs)</strong> — Earn JANI tokens for maintaining bamboo forests</li>
                    <li><strong>Institutional Investors</strong> — Buy JANI Token which will have integrated green bonds Green Bonds to support climate-friendly investments</li>
                </ul>

                <h3 className="text-xl font-semibold">Next Steps:</h3>
                <ul>
                    <li>Develop smart contracts for bamboo bond issuance</li>
                    <li>Partner with carbon credit buyers & sustainability funds</li>
                    <li>Scale bamboo projects via CFAs & government partnerships</li>
                </ul>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
