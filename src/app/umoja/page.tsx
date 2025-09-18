'use client';

import { useEffect } from 'react';

export default function UmojaPage() {
    useEffect(() => {
        const toggleButton = document.querySelector('.sidebar-toggle');
        const leftSidebar = document.querySelector('.sidebar.left');
        const rightSidebar = document.querySelector('.sidebar.right');

        const handleToggle = () => {
            leftSidebar?.classList.toggle('active');
            rightSidebar?.classList.toggle('active');
        };

        if (toggleButton) {
            toggleButton.addEventListener('click', handleToggle);
        }

        const cards = document.querySelectorAll('.card, .token-card, .feature-card');
        
        const handleMouseEnter = (e: Event) => {
            (e.currentTarget as HTMLElement).style.zIndex = '20';
        };

        const handleMouseLeave = (e: Event) => {
            (e.currentTarget as HTMLElement).style.zIndex = '';
        };

        cards.forEach(card => {
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            if (toggleButton) {
                toggleButton.removeEventListener('click', handleToggle);
            }
            cards.forEach(card => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                :root {
                    --primary: #2563EB; /* Blue */
                    --secondary: #10B981; /* Emerald */
                    --accent: #F59E0B; /* Amber */
                    --success: #059669;
                    --warning: #D97706;
                    --error: #DC2626;
                    --dark: #1F2937;
                    --light: #F9FAFB;
                    --white: #FFFFFF;
                    --purple: #7C3AED;
                    --pink: #EC4899;
                    --left-sidebar-width: 320px;
                    --right-sidebar-width: 90px;
                    --header-height: 80px;
                    --glass-bg: rgba(37, 99, 235, 0.1);
                    --glass-border: rgba(37, 99, 235, 0.2);
                }
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Inter', sans-serif;
                }
                
                body {
                    color: #1F2937;
                    display: flex;
                    min-height: 100vh;
                    background: linear-gradient(135deg, 
                        #2563EB 0%, 
                        #1E40AF 25%, 
                        #10B981 50%, 
                        #7C3AED 75%, 
                        #EC4899 100%);
                    background-size: 400% 400%;
                    animation: gradientShift 20s ease infinite;
                    position: relative;
                    overflow-x: hidden;
                }
                
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                body::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(124, 58, 237, 0.3) 0%, transparent 50%);
                    pointer-events: none;
                    z-index: -1;
                }
                
                /* Floating particles */
                .floating-particles {
                    position: fixed;
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
                }
                
                @keyframes float {
                    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
                }
                
                /* Left Sidebar */
                .sidebar.left {
                    width: var(--left-sidebar-width);
                    background: var(--glass-bg);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid var(--glass-border);
                    color: white;
                    height: 100vh;
                    position: fixed;
                    overflow-y: auto;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1000;
                    box-shadow: 
                        0 8px 32px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                
                .sidebar.left::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(145deg, 
                        rgba(37, 99, 235, 0.1) 0%, 
                        rgba(16, 185, 129, 0.1) 50%, 
                        rgba(124, 58, 237, 0.1) 100%);
                    z-index: -1;
                }
                
                .sidebar.left .logo-container {
                    padding: 25px;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                }
                
                .sidebar.left .logo {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 26px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                }
                
                .sidebar.left .logo-icon {
                    margin-right: 12px;
                    font-size: 30px;
                    background: linear-gradient(135deg, #2563EB, #10B981);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: iconGlow 3s ease-in-out infinite alternate;
                }
                
                @keyframes iconGlow {
                    from { filter: drop-shadow(0 0 5px rgba(37, 99, 235, 0.5)); }
                    to { filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.8)); }
                }
                
                .sidebar.left .logo-text {
                    background: linear-gradient(90deg, #FFFFFF, #F9FAFB);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .sidebar.left .nav-section {
                    padding: 20px 0;
                }
                
                .sidebar.left .section-title {
                    text-transform: uppercase;
                    font-size: 11px;
                    font-weight: 600;
                    padding: 0 25px;
                    margin-bottom: 15px;
                    color: rgba(255, 255, 255, 0.7);
                    letter-spacing: 1.2px;
                }
                
                .sidebar.left .nav-button {
                    display: flex;
                    align-items: center;
                    padding: 14px 25px;
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    font-weight: 500;
                    font-size: 14px;
                    border-left: 3px solid transparent;
                    position: relative;
                    cursor: pointer;
                }
                
                .sidebar.left .nav-button::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 0;
                    background: linear-gradient(90deg, rgba(37, 99, 235, 0.2), rgba(16, 185, 129, 0.2));
                    transition: width 0.3s ease;
                }
                
                .sidebar.left .nav-button:hover::before {
                    width: 100%;
                }
                
                .sidebar.left .nav-button:hover {
                    color: white;
                    border-left-color: var(--primary);
                    transform: translateX(8px);
                    background: rgba(255, 255, 255, 0.05);
                }
                
                .sidebar.left .nav-button.active {
                    background: linear-gradient(90deg, rgba(37, 99, 235, 0.3), rgba(16, 185, 129, 0.1));
                    color: white;
                    border-left-color: var(--primary);
                    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.2);
                }
                
                .sidebar.left .nav-button i {
                    margin-right: 14px;
                    font-size: 18px;
                    width: 24px;
                    text-align: center;
                    transition: transform 0.3s ease;
                }
                
                .sidebar.left .nav-button:hover i {
                    transform: scale(1.1) rotate(5deg);
                }
                
                .sidebar.left .divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    margin: 15px 20px;
                }
                
                /* Right Sidebar */
                .sidebar.right {
                    width: var(--right-sidebar-width);
                    background: var(--glass-bg);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid var(--glass-border);
                    color: white;
                    height: 100vh;
                    position: fixed;
                    right: 0;
                    overflow-y: auto;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 30px;
                    box-shadow: 
                        -8px 0 32px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                
                .sidebar.right::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(145deg, 
                        rgba(124, 58, 237, 0.1) 0%, 
                        rgba(236, 72, 153, 0.1) 50%, 
                        rgba(245, 158, 11, 0.1) 100%);
                    z-index: -1;
                }
                
                .sidebar.right .toolbar-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    margin: 10px 0;
                    color: white;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border-radius: 18px;
                    background: rgba(255, 255, 255, 0.1);
                    font-size: 22px;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                }
                
                .sidebar.right .toolbar-button::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
                    transition: all 0.4s ease;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                }
                
                .sidebar.right .toolbar-button:hover::before {
                    width: 80px;
                    height: 80px;
                }
                
                .sidebar.right .toolbar-button:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.05) rotate(5deg);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
                }
                
                /* Main Content */
                .main-content {
                    flex: 1;
                    margin-left: var(--left-sidebar-width);
                    margin-right: var(--right-sidebar-width);
                    padding: 25px;
                    background: rgba(249, 250, 251, 0.95);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 20px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    box-shadow: 
                        0 20px 60px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.5);
                    position: relative;
                    z-index: 10;
                }
                
                .header {
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
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .search-bar {
                    display: flex;
                    align-items: center;
                    background: var(--light);
                    border-radius: 50px;
                    padding: 12px 24px;
                    width: 320px;
                    border: 2px solid transparent;
                    transition: all 0.3s ease;
                }
                
                .search-bar:focus-within {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                }
                
                .search-bar i {
                    color: var(--primary);
                    margin-right: 12px;
                    font-size: 16px;
                }
                
                .search-bar input {
                    border: none;
                    background: transparent;
                    padding: 10px 0;
                    width: 100%;
                    color: #1F2937;
                    font-size: 15px;
                }
                
                .search-bar input::placeholder {
                    color: #9CA3AF;
                }
                
                .wallet-button {
                    background: linear-gradient(135deg, var(--primary), var(--purple));
                    border: none;
                    color: white;
                    padding: 12px 24px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 600;
                    margin-left: 15px;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
                }
        
                .wallet-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
                    background: linear-gradient(135deg, #1D4ED8, #7C3AED);
                }
        
                .wallet-button i {
                    font-size: 1em;
                }
                
                .user-menu {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .notification-btn {
                    position: relative;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .notification-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
                }
                
                .notification-badge {
                    position: absolute;
                    top: -2px;
                    right: -2px;
                    width: 18px;
                    height: 18px;
                    background: var(--error);
                    border-radius: 50%;
                    font-size: 11px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid white;
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                
                .user-avatar {
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--purple), var(--pink));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    border: 3px solid white;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }
                
                .user-avatar:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
                }
                
                /* Dashboard Cards */
                .dashboard-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 25px;
                    margin-bottom: 35px;
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
                    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
                }
                
                .card:hover {
                    transform: translateY(-6px);
                    box-shadow: 
                        0 20px 60px rgba(0, 0, 0, 0.12),
                        0 8px 25px rgba(37, 99, 235, 0.1);
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
                    color: var(--dark);
                    font-family: 'Space Grotesk', sans-serif;
                }
                
                .card-icon {
                    width: 55px;
                    height: 55px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
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
                
                .stat-number {
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 6px;
                    background: linear-gradient(135deg, var(--dark), var(--primary));
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
                
                /* Section Headers */
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
                    background: linear-gradient(135deg, var(--dark), var(--primary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .view-all {
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
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
                
                /* Token Cards */
                .tokens-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 25px;
                    margin-bottom: 35px;
                }
                
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
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 48px;
                    position: relative;
                    overflow: hidden;
                }
                
                .token-header.umot { background: linear-gradient(135deg, #2563EB, #1E40AF); }
                .token-header.umos { background: linear-gradient(135deg, #10B981, #059669); }
                .token-header.umoo { background: linear-gradient(135deg, #7C3AED, #5B21B6); }
                
                .token-header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent);
                    animation: shimmer 4s ease-in-out infinite;
                }
                
                @keyframes shimmer {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                }
                
                .token-content {
                    padding: 25px;
                }
                
                .token-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: var(--dark);
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
                    color: var(--primary);
                    margin-bottom: 4px;
                    font-family: 'Space Grotesk', sans-serif;
                }
                
                .token-stat-label {
                    font-size: 11px;
                    color: #6B7280;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .token-actions {
                    display: flex;
                    gap: 10px;
                }
                
                .token-action {
                    flex: 1;
                    padding: 10px;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 13px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .token-action.primary {
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    color: white;
                }
                
                .token-action.secondary {
                    background: #F1F5F9;
                    color: var(--dark);
                }
                
                .token-action:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }
                
                /* Feature Grid */
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 25px;
                }
                
                .feature-card {
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
                
                .feature-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 
                        0 20px 60px rgba(0, 0, 0, 0.12),
                        0 8px 25px rgba(37, 99, 235, 0.1);
                }
                
                .feature-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 24px;
                    margin-bottom: 20px;
                    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
                }
                
                .feature-title {
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: var(--dark);
                    font-family: 'Space Grotesk', sans-serif;
                }
                
                .feature-desc {
                    color: #6B7280;
                    font-size: 14px;
                    line-height: 1.6;
                    margin-bottom: 15px;
                }
                
                .feature-status {
                    display: inline-block;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .feature-status.active {
                    background: rgba(16, 185, 129, 0.1);
                    color: var(--success);
                }
                
                .feature-status.coming-soon {
                    background: rgba(245, 158, 11, 0.1);
                    color: var(--warning);
                }
                
                /* Responsive Design */
                @media (max-width: 1200px) {
                    .sidebar.left {
                        width: 85px;
                    }
                    
                    .sidebar.left .logo-text, 
                    .sidebar.left .button-text, 
                    .sidebar.left .section-title {
                        display: none;
                    }
                    
                    .sidebar.left .logo-container {
                        justify-content: center;
                        padding: 20px 0;
                    }
                    
                    .sidebar.left .nav-button {
                        justify-content: center;
                        padding: 18px 0;
                    }
                    
                    .sidebar.left .nav-button i {
                        margin-right: 0;
                    }
                    
                    .main-content {
                        margin-left: 85px;
                    }
                }
                
                @media (max-width: 768px) {
                    .dashboard-cards {
                        grid-template-columns: 1fr;
                    }
                    
                    .tokens-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .features-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                    }
                    
                    .search-bar {
                        width: 100%;
                    }
                    
                    .sidebar.left {
                        transform: translateX(-100%);
                    }
                    
                    .sidebar.right {
                        transform: translateX(100%);
                    }
                    
                    .main-content {
                        margin-left: 0;
                        margin-right: 0;
                        padding: 15px;
                    }
                    
                    .sidebar-toggle {
                        display: block;
                        position: fixed;
                        top: 20px;
                        left: 20px;
                        z-index: 2000;
                        background: var(--primary);
                        color: white;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 20px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    }
                    
                    .sidebar.active {
                        transform: translateX(0);
                    }
                }
                
                /* Mobile toggle button */
                .sidebar-toggle {
                    display: none;
                }
                
                /* Add particles */
                .particle:nth-child(1) {
                    top: 20%;
                    left: 20%;
                    animation-delay: 0s;
                    animation-duration: 30s;
                }
                
                .particle:nth-child(2) {
                    top: 60%;
                    left: 80%;
                    animation-delay: 5s;
                    animation-duration: 25s;
                }
                
                .particle:nth-child(3) {
                    top: 40%;
                    left: 40%;
                    animation-delay: 10s;
                    animation-duration: 35s;
                }
                
                .particle:nth-child(4) {
                    top: 80%;
                    left: 30%;
                    animation-delay: 15s;
                    animation-duration: 28s;
                }
                
                .particle:nth-child(5) {
                    top: 10%;
                    left: 70%;
                    animation-delay: 20s;
                    animation-duration: 32s;
                }
            `}</style>
            <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>

            <div className="sidebar left">
                <div className="logo-container">
                    <div className="logo">
                        <i className="fas fa-coins logo-icon"></i>
                        <span className="logo-text">UMOJA HISA</span>
                    </div>
                </div>

                <div className="nav-section">
                    <div className="section-title">Main</div>
                    <div className="nav-button active">
                        <i className="fas fa-home"></i>
                        <span className="button-text">Dashboard</span>
                    </div>
                    <div className="nav-button">
                        <i className="fas fa-wallet"></i>
                        <span className="button-text">Wallet</span>
                    </div>
                    <div className="nav-button">
                        <i className="fas fa-exchange-alt"></i>
                        <span className="button-text">Transactions</span>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="nav-section">
                    <div className="section-title">Financial</div>
                    <div className="nav-button">
                        <i className="fas fa-chart-line"></i>
                        <span className="button-text">Invest</span>
                    </div>
                    <div className="nav-button">
                        <i className="fas fa-hand-holding-usd"></i>
                        <span className="button-text">Lending</span>
                    </div>
                    <div className="nav-button">
                        <i className="fas fa-piggy-bank"></i>
                        <span className="button-text">Staking</span>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="nav-section">
                    <div className="section-title">NFT</div>
                    <div className="nav-button">
                        <i className="fas fa-palette"></i>
                        <span className="button-text">Marketplace</span>
                    </div>
                    <div className="nav-button">
                        <i className="fas fa-paint-brush"></i>
                        <span className="button-text">Create</span>
                    </div>
                    <div className="nav-button">
                        <i className="fas fa-images"></i>
                        <span className="button-text">My Collection</span>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="nav-section">
                    <div className="section-title">Community</div>
                    <div className="nav-button">
                        <i className="fas fa-users"></i>
                        <span className="button-text">Governance</span>
                    </div>
                    <div className="nav-button">
                        <i className="fas fa-graduation-cap"></i>
                        <span className="button-text">Academy</span>
                    </div>
                    <div className="nav-button">
                        <i className="fas fa-life-ring"></i>
                        <span className="button-text">Support</span>
                    </div>
                </div>
            </div>

            <div className="sidebar right">
                <div className="toolbar-button">
                    <i className="fas fa-cog"></i>
                </div>
                <div className="toolbar-button">
                    <i className="fas fa-bell"></i>
                </div>
                <div className="toolbar-button">
                    <i className="fas fa-chart-bar"></i>
                </div>
                <div className="toolbar-button">
                    <i className="fas fa-exchange-alt"></i>
                </div>
                <div className="toolbar-button">
                    <i className="fas fa-question-circle"></i>
                </div>
                <div className="toolbar-button">
                    <i className="fas fa-moon"></i>
                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <h1 className="page-title">Dashboard Overview</h1>
                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search tokens, NFTs, or addresses..." />
                    </div>
                    <button className="wallet-button" id="connectWalletBtn">
                        <i className="fas fa-wallet"></i>
                        <span>Connect Wallet</span>
                    </button>
                    <div className="user-menu">
                        <div className="notification-btn">
                            <i className="fas fa-bell"></i>
                            <span className="notification-badge">3</span>
                        </div>
                        <div className="user-avatar">
                            JD
                        </div>
                    </div>
                </div>

                <div className="dashboard-cards">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Total Value Locked</h3>
                            <div className="card-icon">
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                        <div className="stat-number">$42.8M</div>
                        <div className="stat-label">+12.4% from last month</div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Total Revenue</h3>
                            <div className="card-icon">
                                <i className="fas fa-chart-pie"></i>
                            </div>
                        </div>
                        <div className="stat-number">$2.4M</div>
                        <div className="stat-label">+8.2% from last month</div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Active Users</h3>
                            <div className="card-icon">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="stat-number">28.5K</div>
                        <div className="stat-label">+15.7% from last month</div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Transactions</h3>
                            <div className="card-icon">
                                <i className="fas fa-exchange-alt"></i>
                            </div>
                        </div>
                        <div className="stat-number">186.4K</div>
                        <div className="stat-label">+22.3% from last month</div>
                    </div>
                </div>

                <div className="section-header">
                    <h2 className="section-title-main">UMOJA Ecosystem Tokens</h2>
                    <a href="#" className="view-all">View All</a>
                </div>

                <div className="tokens-grid">
                    <div className="token-card">
                        <div className="token-header umot">
                            <i className="fas fa-coins"></i>
                        </div>
                        <div className="token-content">
                            <h3 className="token-title">UMOT</h3>
                            <p className="token-subtitle">Governance Token</p>

                            <div className="token-stats">
                                <div className="token-stat">
                                    <div className="token-stat-value">$3.42</div>
                                    <div className="token-stat-label">Price</div>
                                </div>
                                <div className="token-stat">
                                    <div className="token-stat-value">+7.2%</div>
                                    <div className="token-stat-label">24H Change</div>
                                </div>
                            </div>

                            <div className="token-actions">
                                <button className="token-action primary">Buy</button>
                                <button className="token-action secondary">Stake</button>
                            </div>
                        </div>
                    </div>

                    <div className="token-card">
                        <div className="token-header umos">
                            <i className="fas fa-gem"></i>
                        </div>
                        <div className="token-content">
                            <h3 className="token-title">UMOS</h3>
                            <p className="token-subtitle">Utility Token</p>

                            <div className="token-stats">
                                <div className="token-stat">
                                    <div className="token-stat-value">$1.27</div>
                                    <div className="token-stat-label">Price</div>
                                </div>
                                <div className="token-stat">
                                    <div className="token-stat-value">+3.8%</div>
                                    <div className="token-stat-label">24H Change</div>
                                </div>
                            </div>

                            <div className="token-actions">
                                <button className="token-action primary">Buy</button>
                                <button className="token-action secondary">Earn</button>
                            </div>
                        </div>
                    </div>

                    <div className="token-card">
                        <div className="token-header umoo">
                            <i className="fas fa-crown"></i>
                        </div>
                        <div className="token-content">
                            <h3 className="token-title">UMOO</h3>
                            <p className="token-subtitle">Rewards Token</p>

                            <div className="token-stats">
                                <div className="token-stat">
                                    <div className="token-stat-value">$0.89</div>
                                    <div className="token-stat-label">Price</div>
                                </div>
                                <div className="token-stat">
                                    <div className="token-stat-value">+12.4%</div>
                                    <div className="token-stat-label">24H Change</div>
                                </div>
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

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-piggy-bank"></i>
                        </div>
                        <h3 className="feature-title">Staking</h3>
                        <p className="feature-desc">Earn rewards by staking your tokens and contributing to network security.</p>
                        <span className="feature-status active">Active</span>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>
                        <h3 className="feature-title">Lending</h3>
                        <p className="feature-desc">Borrow and lend assets across multiple chains with competitive rates.</p>
                        <span className="feature-status active">Active</span>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-exchange-alt"></i>
                        </div>
                        <h3 className="feature-title">Exchange</h3>
                        <p className="feature-desc">Trade tokens with low fees and minimal slippage on our DEX.</p>
                        <span className="feature-status active">Active</span>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-palette"></i>
                        </div>
                        <h3 className="feature-title">NFT Marketplace</h3>
                        <p className="feature-desc">Create, buy and sell unique digital assets on our NFT platform.</p>
                        <span className="feature-status active">Active</span>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="feature-title">Governance</h3>
                        <p className="feature-desc">Participate in platform decisions by voting with your governance tokens.</p>
                        <span className="feature-status active">Active</span>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-link"></i>
                        </div>
                        <h3 className="feature-title">Cross-chain</h3>
                        <p className="feature-desc">Transfer assets between different blockchain networks seamlessly.</p>
                        <span className="feature-status coming-soon">Coming Soon</span>
                    </div>
                </div>
            </div>

            <div className="sidebar-toggle">
                <i className="fas fa-bars"></i>
            </div>
        </>
    );
}
