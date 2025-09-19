import { AppHeader } from '@/components/app-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck, ShoppingCart } from 'lucide-react';

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
      </div>
    </div>
  );
}
