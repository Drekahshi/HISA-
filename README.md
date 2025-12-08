
HISA PEOPLES CHAIN
HISA PEOPLES CHAIN is a grassroots movement powered by Hedera's distributed ledger technology, connecting everyday Africans with agentic AI to address the 17 UN SDGs. It focuses on sustainability finance, ecotourism, conservation databases, telemedicine, economic inclusion, and cultural preservation through tokenized actions and rewards (e.g., $HISA, UMOJA, JANI, CULTURE tokens). Built on principles of Ubuntu, it enables ownership over data, culture, and finances, working on any device—including feature phones via USSD/SMS.

This repository contains the code for the HISA platform. Below are instructions to set it up and run locally for testing or judging.

https://hisa-chain-dapp.vercel.app/

Prerequisites
Node.js (version 14.0.0 or higher)
npm (comes with Node.js; version 6.0.0 or higher recommended)
Git
A Hedera testnet account (free from portal.hedera.com) for blockchain interactions
Optional: Postman for API testing, or a browser for the web interface
Ensure your system has at least 4GB of RAM and a stable internet connection (for Hedera network access).

Getting Started
Follow these steps to clone, set up, and run the project locally:

Clone the repository:

git clone https://github.com/Drekahshi/HISA.git
cd HISA
Install dependencies: All required packages, including the Hedera SDK (@hashgraph/sdk), are listed in package.json. Run:

npm install
Note: If @hashgraph/sdk isn't installed automatically or you need a specific version, run npm install @hashgraph/sdk explicitly.

If using Yarn: yarn install. This may take a few minutes.

Configure Hedera and Environment: HISA uses Hedera for smart contracts, token management (e.g., UMOJA for inflation hedging, JANI for conservation), and verification (e.g., AVL for AI/community consensus).

Copy .env.example to .env in the root directory.
Edit .env with your Hedera credentials (do NOT commit this file to Git):
HEDERA_NETWORK=testnet  # or 'mainnet' for production
MY_ACCOUNT_ID=0.0.123456  # Your Hedera account ID
MY_PRIVATE_KEY=302e0201...  # Your Ed25519 private key (keep secure!)
# Add other vars if needed, e.g., API keys for AI services or databases
For testing: Use Hedera testnet (free HBAR faucet available). Check network status at status.hedera.com.
If your setup involves databases (e.g., conservation or cultural DBs), install and configure them here (e.g., MongoDB: npm install mongoose if not already in dependencies).
Hedera Integrations and APIs
HISA leverages Hedera's ecosystem for real-time webhooks, APIs, and third-party tools to enable features like AI-driven verification, conservation tokenization, and SDG-aligned metrics. Below are setup instructions for key integrations used in the project. These are configured via the Hedera SDK and may require additional API keys—add them to your .env file.

Hedera Webhooks: Used for real-time notifications (e.g., transaction confirmations, token minting events for JANI or UMOJA).

Setup: Install any webhook handlers if not in dependencies (e.g., npm install express for a local server). Configure in code (e.g., /src/hedera/webhooks.js).
Local Testing: Run a mock webhook server: node src/hedera/webhook-server.js. Simulate events via Hedera Mirror Node API (add MIRROR_NODE_URL=https://testnet.mirrornode.hedera.com to .env).
Docs: Hedera Mirror Node Webhooks.
Dovu: Integrates for carbon credits and environmental data tokenization (e.g., for JANI conservation engine).

Setup: Add Dovu API key to .env (e.g., DOVU_API_KEY=your_key_here). Ensure @dovu/sdk or similar is installed via npm install.
Local Testing: Trigger a mock carbon offset: node src/integrations/dovu-test.js. Verify via console logs or Hedera explorer.
Guardian: For ESG reporting and tokenized securities (e.g., aligning with UMOJA's stability features).

Setup: Add Guardian credentials to .env (e.g., GUARDIAN_API_URL=https://api.guardian.example, GUARDIAN_TOKEN=your_token).
Local Testing: Run npm run test-guardian to simulate ESG data submission. Check for Hedera transaction IDs in output.
Docs: Guardian on Hedera.
Kabila: Hedera-based platform for African community projects (e.g., cultural databases and governance).

Setup: Configure Kabila endpoint in .env (e.g., KABILA_API= https://api.kabila.io, KABILA_KEY=your_key).
Local Testing: Test community consensus flows: node src/integrations/kabila-verify.js. Integrates with AVL for redundancy.
Hedera AI Studio ADK: AI development kit for agentic AI features (e.g., verification in AVL, culture-aware automation).

Setup: Install if needed (npm install @hedera/ai-studio-adk). Add API key to .env (e.g., HEDERA_AI_STUDIO_KEY=your_key).
Local Testing: Run AI models locally: npm run ai-studio-test. Simulate SDG actions (e.g., tree planting verification).
Docs: Hedera AI Studio.
Eliza Plugins: Custom plugins for chatbot/AI interactions (e.g., for mental health support or cultural storytelling in telemedicine).

Setup: Add plugin configs to .env (e.g., ELIZA_PLUGIN_ENDPOINT=https://eliza.example, ELIZA_API_KEY=your_key).
Local Testing: Start plugin server: node src/plugins/eliza.js. Test via browser console or API calls for voice/SMS interfaces.
OpenCovAI: Open-source AI for coverage/verification (e.g., health outcomes tracking, biodiversity via satellite AI).

Setup: Install dependencies if needed (npm install opencovai-sdk). Configure in .env (e.g., OPENCOVAI_MODEL=health-verifier, OPENCOVAI_KEY=your_key).
Local Testing: Run verification scripts: node src/integrations/opencovai-test.js. Integrates with ZK-proofs for privacy.
Note: All integrations use Hedera's Consensus Service (HCS) or Token Service (HTS) for immutable records. For local dev, use testnet to avoid costs. If APIs require sign-up, get keys from their respective docs.

Start the development server:

npm start
Alternative: npm run dev if using tools like Vite or Next.js. The console will show when it's ready (e.g., "Server running on http://localhost:3000").

View and test locally:

Open a browser and go to: http://localhost:3000 (or the port shown in the console).
For feature phone simulation: Test USSD/SMS interfaces via console logs or emulators (details in /docs if available).
Interact with Hedera features: Trigger actions like token minting or verifications—monitor transactions on Hedera Explorer.
The app should now be running locally, allowing you to test SDG-aligned features like tokenized actions, cultural archiving, or conservation tracking.

Usage
Web Interface: Navigate to http://localhost:3000. Log in with demo credentials (e.g., username: 'admin', password: 'password'—update with your actual demos).
Hedera Interactions: Use the dashboard to simulate actions (e.g., plant a tree → mint JANI token). View on testnet explorer.
API Testing: Send requests to endpoints like http://localhost:3000/api/tokenize (use Postman). For example:
curl -X POST http://localhost:3000/api/verify-action -d '{"action": "plant_tree"}'
Inclusive Access Testing: For feature phones, check SMS/USSD mocks in code (e.g., /src/inclusive-access).
Integration Testing: Test webhooks by simulating events; use Postman for Dovu/Guardian APIs; run AI scripts for Hedera AI Studio or OpenCovAI.
Refer to the SDG impact table in the project overview for metrics (e.g., verified via smart contracts).## Hedera User Integration

HISA supports seamless user integration via trusted Hedera wallet solutions on the testnet, enabling secure digital asset management and decentralized authentication.

**Supported Wallets:**

- **HashPack Wallet:**  
  - Primary option for Hedera users.
  - Users can link their [HashPack Wallet](https://www.hashpack.app/) directly to the app, facilitating secure authentication and signing of Hedera transactions on the testnet.
  - HashPack provides an in-browser extension or web-based interface for easy connection.

- **MetaMask (Hedera EVM Testnet):**  
  - For users familiar with Ethereum tooling, HISA supports Hedera's EVM-compatible network via MetaMask.
  - Connect your MetaMask wallet and switch to the Hedera testnet network to interact with HISA.
  - Enables EVM token and contract support on Hedera for broader compatibility.

**How to Connect:**

1. Choose your preferred wallet (HashPack or MetaMask).
2. Click the "Connect Wallet" button in HISA’s frontend.
3. Approve the connection and network selection in your wallet extension.
4. Begin managing digital assets and transacting on Hedera testnet.

**Tip:**  
Obtain test HBAR from the [Hedera Testnet Faucet](https://portal.hedera.com/register) for development and experimentation.

---

_This user-focused integration ensures both new and experienced blockchain users can easily onboard and engage with Hedera’s DLT ecosystem via HISA._


