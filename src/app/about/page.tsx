import { AppHeader } from '@/components/app-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="About JANI"
        description="Blockchain-Powered Conservation & Environmental Regeneration"
      />

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Abstract</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              JANI Hisa is a Hedera-powered database framework designed to incentivize environmental conservation efforts, with a strong focus on conservation, protection, preservation and restoration through reforestation, afforestation, agroforestry, and sustainable land management practices on both land and below the sea. Built on the energy-efficient distributed ledger, JANI ecosystem fosters transparency, decentralized governance, and financial sustainability for Community Forest Associations (CFAs) eg seedling user groups and other CFA user groups and environmental stakeholders.
            </p>
            <p>
              Additionally, JANI promotes youth and women empowerment by providing leadership roles and financial incentives. Each verified tree planted results in the minting of one JANI token, directly linking environmental restoration with financial rewards. JANI ecosystem believes in carbon footprint reduction using nature based solution individuals, businesses and companies can join us in our valiant mission. This is JANI's economic model, governance framework, verification mechanisms, and strategies for scalability and adoption.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none space-y-4">
            <section>
              <h3 className="text-xl font-semibold">1.1 Challenges in Conservation</h3>
              <p>Current conservation initiatives face several key challenges:</p>
              <ul>
                <li><strong>Lack of Transparency</strong> — No clear verification system for conservation efforts</li>
                <li><strong>Financial Instability</strong> — Community-led projects rely heavily on inconsistent funding sources</li>
                <li><strong>Stakeholder Fragmentation</strong> — Lack of coordination among conservation groups, government bodies, and businesses</li>
                <li><strong>Carbon Offset Inefficiencies</strong> — Unverifiable impact metrics hinder the adoption of carbon offset programs</li>
                <li><strong>Limited Inclusion</strong> — Insufficient opportunities for youth and women in conservation initiatives</li>
                <li><strong>Long-Term Viability Issues</strong> — Absence of structured financial models for sustainability</li>
              </ul>
            </section>
            <Separator />
            <section>
              <h3 className="text-xl font-semibold">1.2 JANI's Solution</h3>
              <p>JANI Token leverages blockchain technology to resolve these issues by:</p>
              <ul>
                <li>Establishing a <strong>decentralized database ledger</strong> for tracking all conservation activities that use the Jani system</li>
                <li>Implementing <strong>smart contract-driven reward mechanisms</strong> for verified conservation efforts</li>
                <li>Integrating <strong>IoT and AI verification</strong> to ensure proper tree planting and growth monitoring</li>
                <li>Creating a <strong>self-sustaining financial model</strong> that minimizes reliance on grants</li>
                <li>Promoting <strong>youth and women empowerment</strong> through governance roles and financial incentives. JANI promotes youth and women empowerment by providing leadership roles and financial incentives. Jani ecosystem supports microfinance women and youth groups offering them better staking APY and Jani blockchain infrastructure in their various microfinance group (chamas) which makes them transparent and accountable</li>
                <li><strong>Partnering with CFAs, governments, and NGOs</strong> to drive real-world adoption</li>
                <li>Integrating <strong>carbon offset markets</strong> for corporate sustainability compliance</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">2. Technical Infrastructure</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none space-y-4">
            <section>
                <h3 className="text-xl font-semibold">2.1 Blockchain Platforms</h3>
                <ul>
                    <li><strong>Network:</strong> HEDERA (Energy Efficient)</li>
                    <li><strong>Consensus Mechanism:</strong> Proof of Growth (PoG) — One JANI token is minted per verified tree planted which is supposed to be in the Jani ledger which will be updated monthly</li>
                    <li><strong>Smart Contract Language:</strong> Solidity 0.8.x</li>
                    <li><strong>Gas Fees:</strong> &lt; $0.1 per transaction</li>
                </ul>
            </section>
            <Separator />
            <section>
                <h3 className="text-xl font-semibold">2.2 Verification Mechanisms</h3>
                <ul>
                    <li><strong>IoT Sensors, integrated devices & Agentic AI</strong> — GPS-tagged tree tracking, AI-based health monitoring</li>
                    <li><strong>Satellite Monitoring</strong> — Machine learning-powered biodiversity and canopy analysis</li>
                    <li><strong>VALIDATORS</strong> — Validators will be our primary verification mechanism</li>
                    <li><strong>Mobile App</strong> — Enables offline/online data collection, biometric verification, geotagging and other validator tools metrics</li>
                    <li><strong>Real-Time Impact Dashboard</strong> — Tracks tree survival rates, biodiversity progress, and carbon sequestration</li>
                </ul>
            </section>
          </CardContent>
        </Card>

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
      </div>
    </div>
  );
}
