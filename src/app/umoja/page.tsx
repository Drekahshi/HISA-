// This component is rendered on the server and sent to the client.
// To use client-side features like hooks, we need to add 'use client'.
'use client';

import { AppHeader } from '@/components/app-header';
import { ConnectWalletButton } from '@/components/connect-wallet-button';

// We are defining a new React component called UmojaPage.
export default function UmojaPage() {
  return (
    // The main container for the page content.
    <div className="flex flex-col gap-8 text-foreground">
      {/* 
        This is a custom CSS block for this page only. 
        It helps create the unique look and feel for Umoja Hisa.
      */}
      <style jsx global>{`
        /* 
          We're setting up some color variables to use throughout the page.
          This makes it easy to change the color scheme later.
        */
        :root {
          --umoja-primary: #2563EB;
          --umoja-secondary: #10B981;
          --umoja-accent: #F59E0B;
          --umoja-dark: #1F2937;
          --umoja-light: #F9FAFB;
          --umoja-purple: #7C3AED;
          --umoja-pink: #EC4899;
          --umoja-error: #DC2626;
        }

        /* 
          This section creates the animated gradient background.
          It slowly shifts between different colors.
        */
        .umoja-container {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          padding: 2rem;
          background: linear-gradient(135deg, 
              #2563EB 0%, 
              #1E40AF 25%, 
              #10B981 50%, 
              #7C3AED 75%, 
              #EC4899 100%);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* 
          These are the small, floating particles in the background.
          They add a bit of magic to the page.
        */
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          animation: float 25s infinite linear;
          opacity: 0;
        }
        
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        /* We're setting different animation delays for each particle to make them look random. */
        .particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; animation-duration: 30s; }
        .particle:nth-child(2) { top: 60%; left: 80%; animation-delay: 5s; animation-duration: 25s; }
        .particle:nth-child(3) { top: 40%; left: 40%; animation-delay: 10s; animation-duration: 35s; }
        .particle:nth-child(4) { top: 80%; left: 30%; animation-delay: 15s; animation-duration: 28s; }
        .particle:nth-child(5) { top: 10%; left: 70%; animation-delay: 20s; animation-duration: 32s; }
        
        /* 
          This is the main content area inside the container.
          We use a semi-transparent background to create a "glass" effect.
        */
        .umoja-content {
          position: relative;
          z-index: 10;
          background: rgba(249, 250, 251, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 25px;
          box-shadow: 
              0 20px 60px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        /* Styling for the header section of the content. */
        .umoja-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 35px;
            background: white;
            padding: 20px 30px;
            border-radius: 18px;
            box-shadow: 
                0 10px 40px rgba(0, 0, 0, 0.08),
                0 1px 3px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Styling for the main page title. */
        .page-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 26px;
            font-weight: 700;
            background: linear-gradient(135deg, var(--umoja-primary), var(--umoja-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* General styles for all cards on the page. */
        .card {
            background: white;
            border-radius: 18px;
            padding: 25px;
            box-shadow: 
                0 10px 40px rgba(0, 0, 0, 0.08),
                0 1px 3px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        /* A decorative line at the top of each card. */
        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--umoja-primary), var(--umoja-secondary), var(--umoja-accent));
        }
        
        /* Make the card lift up when you hover over it. */
        .card:hover {
            transform: translateY(-6px);
            box-shadow: 
                0 20px 60px rgba(0, 0, 0, 0.12),
                0 8px 25px rgba(37, 99, 235, 0.1);
        }
        
        /* Styles for the header section of a card. */
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .card-title {
            font-size: 18px;
            font-weight: 700;
            color: var(--umoja-dark);
            font-family: 'Space Grotesk', sans-serif;
        }
        
        /* The colorful icon on each card. */
        .card-icon {
            width: 55px;
            height: 55px;
            border-radius: 14px;
            background: linear-gradient(135deg, var(--umoja-primary), var(--umoja-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 22px;
            box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
            transition: all 0.3s ease;
        }
        
        .card:hover .card-icon {
            transform: rotate(8deg) scale(1.05);
        }
        
        /* The large number statistic in each card. */
        .stat-number {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 6px;
            background: linear-gradient(135deg, var(--umoja-dark), var(--umoja-primary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-family: 'Space Grotesk', sans-serif;
        }
        
        .stat-label {
            color: #6B7280;
            font-size: 14px;
            font-weight: 500;
        }
        
        /* Header for different sections like "Tokens" and "Features". */
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }
        
        .section-title-main {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 24px;
            font-weight: 700;
            background: linear-gradient(135deg, var(--umoja-dark), var(--umoja-primary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        /* The "View All" link. */
        .view-all {
            background: linear-gradient(135deg, var(--umoja-primary), var(--umoja-secondary));
            color: white;
            text-decoration: none;
            font-weight: 600;
            padding: 10px 20px;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            font-size: 14px;
        }
        
        .view-all:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
        }
        
        /* Styles for the token cards. */
        .token-card {
            background: white;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 
                0 10px 40px rgba(0, 0, 0, 0.08),
                0 1px 3px rgba(0, 0, 0, 0.05);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .token-card:hover {
            transform: translateY(-8px);
            box-shadow: 
                0 25px 70px rgba(0, 0, 0, 0.12),
                0 10px 40px rgba(37, 99, 235, 0.1);
        }
        
        .token-header {
            height: 120px;
            background: linear-gradient(135deg, var(--umoja-primary), var(--umoja-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 48px;
            position: relative;
            overflow: hidden;
        }
        
        /* Specific colors for each token type. */
        .token-header.umot { background: linear-gradient(135deg, #2563EB, #1E40AF); }
        .token-header.umos { background: linear-gradient(135deg, #10B981, #059669); }
        .token-header.umoo { background: linear-gradient(135deg, #7C3AED, #5B21B6); }
        
        .token-header::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent);
            animation: shimmer 4s ease-in-out infinite;
        }
        
        @keyframes shimmer {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
        }
        
        .token-content { padding: 25px; }
        
        .token-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--umoja-dark);
            font-family: 'Space Grotesk', sans-serif;
        }
        
        .token-subtitle {
            color: #6B7280;
            font-size: 13px;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
        }
        
        .token-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .token-stat {
            text-align: center;
            padding: 12px;
            background: #F8FAFC;
            border-radius: 10px;
        }
        
        .token-stat-value {
            font-size: 18px;
            font-weight: 700;
            color: var(--umoja-primary);
            margin-bottom: 4px;
            font-family: 'Space Grotesk', sans-serif;
        }
        
        .token-stat-label {
            font-size: 11px;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .token-actions { display: flex; gap: 10px; }
        
        .token-action {
            flex: 1; padding: 10px; border: none;
            border-radius: 10px; font-weight: 600; font-size: 13px;
            cursor: pointer; transition: all 0.3s ease;
        }
        
        .token-action.primary {
            background: linear-gradient(135deg, var(--umoja-primary), var(--umoja-secondary));
            color: white;
        }
        
        .token-action.secondary { background: #F1F5F9; color: var(--umoja-dark); }
        
        .token-action:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        /* Styles for the feature cards at the bottom of the page. */
        .feature-card {
            background: white; border-radius: 18px; padding: 25px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative; overflow: hidden;
        }
        
        .feature-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 25px rgba(37, 99, 235, 0.1);
        }
        
        .feature-icon {
            width: 60px; height: 60px; border-radius: 16px;
            background: linear-gradient(135deg, var(--umoja-primary), var(--umoja-secondary));
            display: flex; align-items: center; justify-content: center;
            color: white; font-size: 24px; margin-bottom: 20px;
            box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
        }
        
        .feature-title {
            font-size: 18px; font-weight: 700; margin-bottom: 10px;
            color: var(--umoja-dark); font-family: 'Space Grotesk', sans-serif;
        }
        
        .feature-desc { color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 15px; }
        
        .feature-status {
            display: inline-block; padding: 4px 12px; border-radius: 20px;
            font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
        }
        
        .feature-status.active { background: rgba(16, 185, 129, 0.1); color: #059669; }
        .feature-status.coming-soon { background: rgba(245, 158, 11, 0.1); color: #D97706; }

      `}</style>

      {/* This is the AppHeader component from JANI, making the page feel integrated. */}
      <AppHeader
        title="Umoja Hisa"
        description="A Blockchain Financial Ecosystem"
      />
      
      {/* The main container with the cool animated background. */}
      <div className="umoja-container">
        {/* The floating particles are added here. */}
        <div className="floating-particles">
          {[...Array(5)].map((_, i) => <div key={i} className="particle"></div>)}
        </div>
        
        {/* The main content area with the glass effect. */}
        <div className="umoja-content">
          <div className="umoja-header">
            <h1 className="page-title">Dashboard Overview</h1>
            <ConnectWalletButton />
          </div>

          {/* This grid shows key statistics about the ecosystem. */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Total Value Locked</h3>
                <div className="card-icon"><i className="fas fa-lock"></i></div>
              </div>
              <div className="stat-number">$42.8M</div>
              <div className="stat-label">+12.4% from last month</div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Total Revenue</h3>
                <div className="card-icon"><i className="fas fa-chart-pie"></i></div>
              </div>
              <div className="stat-number">$2.4M</div>
              <div className="stat-label">+8.2% from last month</div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Active Users</h3>
                <div className="card-icon"><i className="fas fa-users"></i></div>
              </div>
              <div className="stat-number">28.5K</div>
              <div className="stat-label">+15.7% from last month</div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Transactions</h3>
                <div className="card-icon"><i className="fas fa-exchange-alt"></i></div>
              </div>
              <div className="stat-number">186.4K</div>
              <div className="stat-label">+22.3% from last month</div>
            </div>
          </div>

          <div className="section-header">
            <h2 className="section-title-main">UMOJA Ecosystem Tokens</h2>
            <a href="#" className="view-all">View All</a>
          </div>

          {/* This grid displays the different types of tokens in the ecosystem. */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <div className="token-card">
              <div className="token-header umot"><i className="fas fa-coins"></i></div>
              <div className="token-content">
                <h3 className="token-title">UMOT</h3>
                <p className="token-subtitle">Governance Token</p>
                <div className="token-stats">
                  <div className="token-stat"><div className="token-stat-value">$3.42</div><div className="token-stat-label">Price</div></div>
                  <div className="token-stat"><div className="token-stat-value">+7.2%</div><div className="token-stat-label">24H Change</div></div>
                </div>
                <div className="token-actions">
                  <button className="token-action primary">Buy</button>
                  <button className="token-action secondary">Stake</button>
                </div>
              </div>
            </div>

            <div className="token-card">
              <div className="token-header umos"><i className="fas fa-gem"></i></div>
              <div className="token-content">
                <h3 className="token-title">UMOS</h3>
                <p className="token-subtitle">Utility Token</p>
                <div className="token-stats">
                  <div className="token-stat"><div className="token-stat-value">$1.27</div><div className="token-stat-label">Price</div></div>
                  <div className="token-stat"><div className="token-stat-value">+3.8%</div><div className="token-stat-label">24H Change</div></div>
                </div>
                <div className="token-actions">
                  <button className="token-action primary">Buy</button>
                  <button className="token-action secondary">Earn</button>
                </div>
              </div>
            </div>

            <div className="token-card">
              <div className="token-header umoo"><i className="fas fa-crown"></i></div>
              <div className="token-content">
                <h3 className="token-title">UMOO</h3>
                <p className="token-subtitle">Rewards Token</p>
                <div className="token-stats">
                  <div className="token-stat"><div className="token-stat-value">$0.89</div><div className="token-stat-label">Price</div></div>
                  <div className="token-stat"><div className="token-stat-value">+12.4%</div><div className="token-stat-label">24H Change</div></div>
                </div>
                <div className="token-actions">
                  <button className="token-action primary">Buy</button>
                  <button className="token-action secondary">Farm</button>
                </div>
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2 className="section-title-main">Ecosystem Features</h2>
            <a href="#" className="view-all">Explore All</a>
          </div>

          {/* This grid showcases the features available in the ecosystem. */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-piggy-bank"></i></div>
              <h3 className="feature-title">Staking</h3>
              <p className="feature-desc">Earn rewards by staking your tokens and contributing to network security.</p>
              <span className="feature-status active">Active</span>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-hand-holding-usd"></i></div>
              <h3 className="feature-title">Lending</h3>
              <p className="feature-desc">Borrow and lend assets across multiple chains with competitive rates.</p>
              <span className="feature-status active">Active</span>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-exchange-alt"></i></div>
              <h3 className="feature-title">Exchange</h3>
              <p className="feature-desc">Trade tokens with low fees and minimal slippage on our DEX.</p>
              <span className="feature-status active">Active</span>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-palette"></i></div>
              <h3 className="feature-title">NFT Marketplace</h3>
              <p className="feature-desc">Create, buy and sell unique digital assets on our NFT platform.</p>
              <span className="feature-status active">Active</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-users"></i></div>
              <h3 className="feature-title">Governance</h3>
              <p className="feature-desc">Participate in platform decisions by voting with your governance tokens.</p>
              <span className="feature-status active">Active</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-link"></i></div>
              <h3 className="feature-title">Cross-chain</h3>
              <p className="feature-desc">Transfer assets between different blockchain networks seamlessly.</p>
              <span className="feature-status coming-soon">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
