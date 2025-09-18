'use client';

import { AppHeader } from '@/components/app-header';
import { ConnectWalletButton } from '@/components/connect-wallet-button';

export default function ChatPage() {
  return (
    <div className="flex flex-col gap-8 text-foreground">
      <style jsx global>{`
        :root {
          --chat-primary: #B8860B; /* Golden for African heritage */
          --chat-secondary: #228B22; /* Forest green */
          --chat-accent: #DC143C; /* Crimson for cultural vitality */
          --chat-dark: #1F2937;
          --chat-light: #F9FAFB;
          --chat-purple: #4B0082;
          --chat-orange: #FF4500;
        }

        .chat-container {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          padding: 2rem;
          background: linear-gradient(135deg, 
              #B8860B 0%, 
              #228B22 25%, 
              #DC143C 50%, 
              #4B0082 75%, 
              #FF4500 100%);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

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
        
        .particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; animation-duration: 30s; }
        .particle:nth-child(2) { top: 60%; left: 80%; animation-delay: 5s; animation-duration: 25s; }
        .particle:nth-child(3) { top: 40%; left: 40%; animation-delay: 10s; animation-duration: 35s; }
        .particle:nth-child(4) { top: 80%; left: 30%; animation-delay: 15s; animation-duration: 28s; }
        .particle:nth-child(5) { top: 10%; left: 70%; animation-delay: 20s; animation-duration: 32s; }
        
        .chat-content {
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

        .chat-header {
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
        
        .page-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 26px;
            font-weight: 700;
            background: linear-gradient(135deg, var(--chat-primary), var(--chat-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

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
        
        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--chat-primary), var(--chat-secondary), var(--chat-accent));
        }
        
        .card:hover {
            transform: translateY(-6px);
            box-shadow: 
                0 20px 60px rgba(0, 0, 0, 0.12),
                0 8px 25px rgba(184, 134, 11, 0.1);
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .card-title {
            font-size: 18px;
            font-weight: 700;
            color: var(--chat-dark);
            font-family: 'Space Grotesk', sans-serif;
        }
        
        .card-icon {
            width: 55px;
            height: 55px;
            border-radius: 14px;
            background: linear-gradient(135deg, var(--chat-primary), var(--chat-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 22px;
            box-shadow: 0 6px 20px rgba(184, 134, 11, 0.3);
            transition: all 0.3s ease;
        }
        
        .card:hover .card-icon {
            transform: rotate(8deg) scale(1.05);
        }
        
        .stat-number {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 6px;
            background: linear-gradient(135deg, var(--chat-dark), var(--chat-primary));
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
            background: linear-gradient(135deg, var(--chat-dark), var(--chat-primary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .view-all {
            background: linear-gradient(135deg, var(--chat-primary), var(--chat-secondary));
            color: white;
            text-decoration: none;
            font-weight: 600;
            padding: 10px 20px;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(184, 134, 11, 0.3);
            font-size: 14px;
        }
        
        .view-all:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(184, 134, 11, 0.4);
        }

        .culture-card {
            background: white;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 
                0 10px 40px rgba(0, 0, 0, 0.08),
                0 1px 3px rgba(0, 0, 0, 0.05);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .culture-card:hover {
            transform: translateY(-8px);
            box-shadow: 
                0 25px 70px rgba(0, 0, 0, 0.12),
                0 10px 40px rgba(184, 134, 11, 0.1);
        }
        
        .culture-header {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 48px;
            position: relative;
            overflow: hidden;
        }
        
        .culture-header.oral { background: linear-gradient(135deg, #B8860B, #9A7B0A); }
        .culture-header.music { background: linear-gradient(135deg, #228B22, #1E7E1E); }
        .culture-header.craft { background: linear-gradient(135deg, #DC143C, #B8112A); }
        .culture-header.language { background: linear-gradient(135deg, #4B0082, #3D006D); }
        
        .culture-header::before {
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
        
        .culture-content { padding: 25px; }
        .culture-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--chat-dark);
            font-family: 'Space Grotesk', sans-serif;
        }
        
        .culture-subtitle {
            color: #6B7280;
            font-size: 13px;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
        }
        
        .culture-meta {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .culture-stat {
            text-align: center;
            padding: 12px;
            background: #F8FAFC;
            border-radius: 10px;
        }
        
        .culture-stat-value {
            font-size: 18px;
            font-weight: 700;
            color: var(--chat-primary);
            margin-bottom: 4px;
            font-family: 'Space Grotesk', sans-serif;
        }
        
        .culture-stat-label {
            font-size: 11px;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .culture-actions { display: flex; gap: 10px; }
        
        .culture-action {
            flex: 1; padding: 10px; border: none;
            border-radius: 10px; font-weight: 600; font-size: 13px;
            cursor: pointer; transition: all 0.3s ease;
        }
        
        .culture-action.primary {
            background: linear-gradient(135deg, var(--chat-primary), var(--chat-secondary));
            color: white;
        }
        
        .culture-action.secondary { background: #F1F5F9; color: var(--chat-dark); }
        
        .culture-action:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .feature-card {
            background: white; border-radius: 18px; padding: 25px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative; overflow: hidden;
        }
        
        .feature-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 25px rgba(184, 134, 11, 0.1);
        }
        
        .feature-icon {
            width: 60px; height: 60px; border-radius: 16px;
            background: linear-gradient(135deg, var(--chat-primary), var(--chat-secondary));
            display: flex; align-items: center; justify-content: center;
            color: white; font-size: 24px; margin-bottom: 20px;
            box-shadow: 0 8px 25px rgba(184, 134, 11, 0.3);
        }
        
        .feature-title {
            font-size: 18px; font-weight: 700; margin-bottom: 10px;
            color: var(--chat-dark); font-family: 'Space Grotesk', sans-serif;
        }
        
        .feature-desc { color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 15px; }
        
        .feature-status {
            display: inline-block; padding: 4px 12px; border-radius: 20px;
            font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
        }
        
        .feature-status.active { background: rgba(34, 139, 34, 0.1); color: #059669; }
        .feature-status.coming-soon { background: rgba(255, 69, 0, 0.1); color: #FF4500; }

      `}</style>
      <AppHeader
        title="Culture Hisa"
        description="African Cultural Heritage Platform"
      />
      <div className="chat-container">
        <div className="floating-particles">
          {[...Array(5)].map((_, i) => <div key={i} className="particle"></div>)}
        </div>
        <div className="chat-content">
          <div className="chat-header">
            <h1 className="page-title">Cultural Heritage Dashboard</h1>
            <ConnectWalletButton />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Cultural Assets</h3>
                    <div className="card-icon"><i className="fas fa-archive"></i></div>
                </div>
                <div className="stat-number">12.5K</div>
                <div className="stat-label">+156 new this week</div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Active Contributors</h3>
                    <div className="card-icon"><i className="fas fa-user-friends"></i></div>
                </div>
                <div className="stat-number">3.2K</div>
                <div className="stat-label">+89 joined recently</div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">CHAT Tokens Earned</h3>
                    <div className="card-icon"><i className="fas fa-coins"></i></div>
                </div>
                <div className="stat-number">847K</div>
                <div className="stat-label">+12.3% this month</div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Languages Preserved</h3>
                    <div className="card-icon"><i className="fas fa-globe"></i></div>
                </div>
                <div className="stat-number">47</div>
                <div className="stat-label">5 new dialects added</div>
            </div>
          </div>
          
          <div className="section-header">
            <h2 className="section-title-main">Featured Cultural Heritage</h2>
            <a href="#" className="view-all">Explore All</a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="culture-card">
                <div className="culture-header oral"><i className="fas fa-microphone"></i></div>
                <div className="culture-content">
                    <h3 className="culture-title">Luo Oral Traditions</h3>
                    <p className="culture-subtitle">Western Kenya Heritage</p>
                    <div className="culture-meta">
                        <div className="culture-stat"><div className="culture-stat-value">127</div><div className="culture-stat-label">Stories</div></div>
                        <div className="culture-stat"><div className="culture-stat-value">4.8★</div><div className="culture-stat-label">Rating</div></div>
                    </div>
                    <div className="culture-actions">
                        <button className="culture-action primary">Listen</button>
                        <button className="culture-action secondary">Share</button>
                    </div>
                </div>
            </div>
            <div className="culture-card">
                <div className="culture-header music"><i className="fas fa-drum"></i></div>
                <div className="culture-content">
                    <h3 className="culture-title">Akan Drumming</h3>
                    <p className="culture-subtitle">Ghana Traditional Music</p>
                    <div className="culture-meta">
                        <div className="culture-stat"><div className="culture-stat-value">89</div><div className="culture-stat-label">Rhythms</div></div>
                        <div className="culture-stat"><div className="culture-stat-value">4.9★</div><div className="culture-stat-label">Rating</div></div>
                    </div>
                    <div className="culture-actions">
                        <button className="culture-action primary">Play</button>
                        <button className="culture-action secondary">Learn</button>
                    </div>
                </div>
            </div>
            <div className="culture-card">
                <div className="culture-header craft"><i className="fas fa-palette"></i></div>
                <div className="culture-content">
                    <h3 className="culture-title">Maasai Beadwork</h3>
                    <p className="culture-subtitle">East African Crafts</p>
                    <div className="culture-meta">
                        <div className="culture-stat"><div className="culture-stat-value">54</div><div className="culture-stat-label">Patterns</div></div>
                        <div className="culture-stat"><div className="culture-stat-value">4.7★</div><div className="culture-stat-label">Rating</div></div>
                    </div>
                    <div className="culture-actions">
                        <button className="culture-action primary">View</button>
                        <button className="culture-action secondary">Collect</button>
                    </div>
                </div>
            </div>
            <div className="culture-card">
                <div className="culture-header language"><i className="fas fa-comments"></i></div>
                <div className="culture-content">
                    <h3 className="culture-title">Shona Language</h3>
                    <p className="culture-subtitle">Zimbabwe Linguistics</p>
                    <div className="culture-meta">
                        <div className="culture-stat"><div className="culture-stat-value">2.1K</div><div className="culture-stat-label">Phrases</div></div>
                        <div className="culture-stat"><div className="culture-stat-value">4.6★</div><div className="culture-stat-label">Rating</div></div>
                    </div>
                    <div className="culture-actions">
                        <button className="culture-action primary">Study</button>
                        <button className="culture-action secondary">Practice</button>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="section-header">
            <h2 className="section-title-main">Platform Features</h2>
            <a href="#" className="view-all">Learn More</a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                <h3 className="feature-title">AI Verification</h3>
                <p className="feature-desc">Advanced AI models verify authenticity of cultural content with community validation.</p>
                <span className="feature-status active">Active</span>
            </div>
            <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-coins"></i></div>
                <h3 className="feature-title">CHAT Rewards</h3>
                <p className="feature-desc">Earn tokens for contributing verified cultural heritage content to the platform.</p>
                <span className="feature-status active">Active</span>
            </div>
            <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-mobile-alt"></i></div>
                <h3 className="feature-title">USSD Access</h3>
                <p className="feature-desc">Feature phone users can contribute via USSD codes, bridging the digital divide.</p>
                <span className="feature-status active">Active</span>
            </div>
            <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-users"></i></div>
                <h3 className="feature-title">Community Governance</h3>
                <p className="feature-desc">Community elders and cultural experts validate and curate content together.</p>
                <span className="feature-status active">Active</span>
            </div>
            <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-lock"></i></div>
                <h3 className="feature-title">Sacred Content Protection</h3>
                <p className="feature-desc">Smart contracts protect sacred materials with community-defined access controls.</p>
                <span className="feature-status active">Active</span>
            </div>
            <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-vr-cardboard"></i></div>
                <h3 className="feature-title">VR Cultural Tours</h3>
                <p className="feature-desc">Immersive virtual reality experiences of African cultural sites and ceremonies.</p>
                <span className="feature-status coming-soon">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
