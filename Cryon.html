<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=yes">
  <title>Cryon · Ultra Wealth Control</title>
  <!-- Font Awesome 6.7.2 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
  <!-- CanvasJS -->
  <script src="https://cdn.canvasjs.com/canvasjs.min.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    body {
      background: #0a0a0a;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 16px;
    }
    .app {
      max-width: 920px;
      width: 100%;
      background: rgba(16, 16, 16, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 48px;
      padding: 24px 20px 12px;
      box-shadow: 0 30px 80px rgba(0,0,0,0.95), 0 0 0 1px rgba(255, 180, 40, 0.06);
      border: 1px solid rgba(60, 60, 60, 0.3);
    }

    .text-light { color: #f0f0f0; }
    .text-muted { color: #8a8a8a; }
    .text-amber { color: #f5b342; }
    .text-green { color: #2ecc71; }
    .text-red { color: #e74c3c; }
    .text-gold { color: #f1c40f; }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .logo-text {
      font-weight: 800;
      font-size: 1.8rem;
      letter-spacing: -0.5px;
      background: linear-gradient(135deg, #f5b342, #e6a030, #f5b342);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      cursor: default;
    }
    .hamburger {
      background: rgba(40,40,40,0.5);
      border: none;
      color: #ddd;
      font-size: 1.6rem;
      padding: 4px 16px;
      border-radius: 40px;
      backdrop-filter: blur(4px);
      cursor: pointer;
      border: 1px solid #333;
      transition: 0.2s;
    }
    .hamburger:hover { background: #2a2a2a; color: #f5b342; }

    /* Wealth Stats - now with edit buttons */
    .wealth-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px;
      margin: 16px 0 18px;
    }
    .wealth-card {
      background: rgba(30, 30, 30, 0.5);
      backdrop-filter: blur(4px);
      border-radius: 24px;
      padding: 14px 16px;
      border: 1px solid rgba(60, 60, 60, 0.2);
      transition: 0.2s;
      position: relative;
    }
    .wealth-card:hover { border-color: rgba(245, 180, 66, 0.3); }
    .wealth-label {
      font-size: 0.7rem;
      color: #8a8a8a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .wealth-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      margin-top: 4px;
      cursor: pointer;
      transition: 0.2s;
    }
    .wealth-value:hover { color: #f5b342; }
    .wealth-change {
      font-size: 0.8rem;
      font-weight: 600;
    }
    .wealth-edit {
      background: transparent;
      border: none;
      color: #8a8a8a;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 2px 8px;
      border-radius: 20px;
      transition: 0.2s;
    }
    .wealth-edit:hover {
      background: rgba(245, 180, 66, 0.15);
      color: #f5b342;
    }
    .wealth-input {
      background: #1a1a1a;
      border: 1px solid #3a3a3a;
      border-radius: 20px;
      padding: 4px 12px;
      color: #fff;
      font-weight: 600;
      font-size: 1.2rem;
      width: 120px;
      display: none;
    }
    .wealth-input.active { display: inline-block; }
    .wealth-value.hidden { display: none; }

    .balance-wrap {
      padding: 4px 0;
    }
    .total-balance {
      font-size: 3.6rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #fff;
      line-height: 1;
      text-shadow: 0 0 40px rgba(245, 180, 66, 0.08);
    }
    .change-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px 8px 14px;
      border-radius: 100px;
      font-weight: 700;
      font-size: 1.1rem;
      background: rgba(46, 204, 113, 0.12);
      color: #2ecc71;
      backdrop-filter: blur(4px);
      border: 1px solid rgba(46, 204, 113, 0.15);
    }
    .change-badge.negative {
      background: rgba(231, 76, 60, 0.12);
      color: #e74c3c;
      border-color: rgba(231, 76, 60, 0.15);
    }

    .time-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 16px 0 10px;
    }
    .time-btn {
      background: rgba(40,40,40,0.3);
      border: none;
      color: #8a8a8a;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 6px 14px;
      border-radius: 40px;
      transition: all 0.2s;
      cursor: pointer;
      backdrop-filter: blur(4px);
      border: 1px solid transparent;
    }
    .time-btn.active {
      background: #f5b342;
      color: #0b0b0b;
      border-color: #f5b342;
      box-shadow: 0 4px 16px rgba(245, 180, 66, 0.25);
    }
    .time-btn:hover:not(.active) {
      background: rgba(60, 60, 60, 0.5);
      color: #ddd;
    }

    #chartContainer {
      width: 100%;
      height: 200px;
      margin: 8px 0 18px;
      border-radius: 28px;
      background: #0d0d0d;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
      position: relative;
    }

    .graph-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 4px 0 16px;
      padding: 10px 14px;
      background: rgba(20, 20, 20, 0.6);
      border-radius: 30px;
      border: 1px solid rgba(60, 60, 60, 0.2);
      align-items: center;
    }
    .graph-controls label {
      color: #aaa;
      font-size: 0.7rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .graph-controls input[type="range"] {
      width: 80px;
      background: #333;
      height: 4px;
      border-radius: 4px;
      -webkit-appearance: none;
    }
    .graph-controls input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #f5b342;
      cursor: pointer;
    }
    .graph-controls select {
      background: #262626;
      border: 1px solid #3a3a3a;
      border-radius: 40px;
      padding: 4px 12px;
      color: #fff;
      font-size: 0.75rem;
    }
    .graph-btn {
      background: #2a2a2a;
      border: none;
      color: #ddd;
      padding: 4px 14px;
      border-radius: 40px;
      font-size: 0.7rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid #3a3a3a;
      transition: 0.15s;
    }
    .graph-btn:hover { background: #f5b342; color: #0b0b0b; }

    .portfolio-grid {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 14px 0 12px;
    }
    .coin-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(30, 30, 30, 0.5);
      backdrop-filter: blur(4px);
      border-radius: 36px;
      padding: 10px 16px;
      border: 1px solid rgba(60, 60, 60, 0.15);
      transition: 0.15s;
    }
    .coin-row:hover { border-color: rgba(245, 180, 66, 0.2); }
    .coin-left {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 2;
    }
    .coin-icon {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.9rem;
      border: 1px solid #444;
    }
    .coin-name { font-weight: 600; color: #eee; font-size: 0.95rem; }
    .coin-symbol { color: #8a8a8a; font-size: 0.65rem; font-weight: 500; margin-left: 4px; }
    .coin-amount { color: #ccc; font-size: 0.85rem; font-weight: 500; }
    .coin-right {
      display: flex;
      align-items: center;
      gap: 14px;
      flex: 1.2;
      justify-content: flex-end;
    }
    .coin-price { color: #fff; font-weight: 700; font-size: 0.95rem; }
    .coin-change { font-weight: 700; font-size: 0.8rem; min-width: 54px; text-align: right; }
    .sparkline { width: 50px; height: 26px; }

    .bottom-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      padding: 8px 6px 0;
      border-top: 1px solid rgba(60,60,60,0.2);
    }
    .nav-item {
      color: #777;
      text-align: center;
      font-size: 0.65rem;
      font-weight: 600;
      transition: 0.15s;
      background: transparent;
      border: none;
      padding: 6px 10px;
      border-radius: 30px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
    .nav-item i { font-size: 1.3rem; }
    .nav-item.active { color: #f5b342; }
    .nav-item:hover { color: #ddd; }

    .dev-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.85);
      backdrop-filter: blur(8px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 999;
      padding: 20px;
    }
    .dev-panel {
      background: #161616;
      max-width: 700px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      border-radius: 40px;
      padding: 28px 24px;
      border: 1px solid #3a3a3a;
      box-shadow: 0 30px 60px rgba(0,0,0,0.95);
      color: #eee;
    }
    .dev-panel h3 { color: #f5b342; margin-bottom: 16px; border-bottom: 1px solid #2a2a2a; padding-bottom: 10px; }
    .dev-group {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 16px;
      margin-bottom: 16px;
      background: #121212;
      padding: 14px 16px;
      border-radius: 28px;
      border: 1px solid #2a2a2a;
    }
    .dev-group label { color: #aaa; font-size: 0.75rem; display: flex; flex-direction: column; gap: 4px; flex: 1 0 120px; }
    .dev-group input, .dev-group select {
      background: #262626;
      border: 1px solid #3a3a3a;
      border-radius: 40px;
      padding: 8px 14px;
      color: #fff;
      font-weight: 500;
      width: 100%;
    }
    .dev-btn {
      background: #2a2a2a;
      border: none;
      color: #ddd;
      padding: 6px 16px;
      border-radius: 40px;
      font-weight: 500;
      cursor: pointer;
      transition: 0.15s;
      border: 1px solid #3a3a3a;
      font-size: 0.8rem;
    }
    .dev-btn:hover { background: #f5b342; color: #0b0b0b; }
    .dev-close { background: #3a2a2a; color: #e74c3c; border-color: #5a3a3a; }
    .dev-close:hover { background: #e74c3c; color: #fff; }
    .flex-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
    .dev-badge { background: #2a2a2a; border-radius: 30px; padding: 2px 12px; font-size: 0.7rem; color: #f5b342; }

    @media (max-width: 600px) {
      .app { padding: 16px 12px; border-radius: 32px; }
      .total-balance { font-size: 2.4rem; }
      .wealth-stats { grid-template-columns: repeat(2, 1fr); }
      .coin-row { flex-wrap: wrap; gap: 6px; }
      .coin-right { flex-wrap: wrap; gap: 6px; }
    }
  </style>
</head>
<body>
<div class="app" id="appContainer">

  <div class="top-bar">
    <span class="logo-text"><i class="fas fa-crown" style="margin-right: 8px; -webkit-text-fill-color: #f5b342;"></i>Cryon</span>
    <button class="hamburger" id="hamburgerBtn"><i class="fas fa-bars"></i></button>
  </div>

  <!-- Wealth Stats -->
  <div class="wealth-stats" id="wealthStats">
    <div class="wealth-card">
      <div class="wealth-label">
        <span><i class="fas fa-wallet"></i> Net Worth</span>
        <button class="wealth-edit" data-target="netWorth"><i class="fas fa-pen"></i></button>
      </div>
      <div class="wealth-value" id="netWorthDisplay">$12.4M</div>
      <input class="wealth-input" id="netWorthInput" type="number" step="100000" value="12400000">
      <div class="wealth-change text-green" id="netWorthChange">+18.3%</div>
    </div>
    <div class="wealth-card">
      <div class="wealth-label">
        <span><i class="fas fa-coins"></i> Total Assets</span>
        <button class="wealth-edit" data-target="totalAssets"><i class="fas fa-pen"></i></button>
      </div>
      <div class="wealth-value" id="totalAssetsDisplay">$8.2M</div>
      <input class="wealth-input" id="totalAssetsInput" type="number" step="100000" value="8200000">
      <div class="wealth-change text-green" id="totalAssetsChange">+12.7%</div>
    </div>
    <div class="wealth-card">
      <div class="wealth-label">
        <span><i class="fas fa-chart-pie"></i> Diversification</span>
        <button class="wealth-edit" data-target="diversification"><i class="fas fa-pen"></i></button>
      </div>
      <div class="wealth-value" id="diversificationDisplay">14</div>
      <input class="wealth-input" id="diversificationInput" type="number" step="1" value="14" style="width:80px;">
      <div class="wealth-change text-muted">Assets</div>
    </div>
    <div class="wealth-card">
      <div class="wealth-label">
        <span><i class="fas fa-fire"></i> Best Performer</span>
        <button class="wealth-edit" data-target="bestPerformer"><i class="fas fa-pen"></i></button>
      </div>
      <div class="wealth-value text-gold" id="bestPerformerDisplay">SOL</div>
      <input class="wealth-input" id="bestPerformerInput" type="text" value="SOL" style="width:80px;">
      <div class="wealth-change text-green" id="bestPerformerChange">+42.3%</div>
    </div>
  </div>

  <div class="balance-wrap">
    <div class="total-balance" id="totalBalance">$12,418,520.90</div>
    <div id="changeBadge" class="change-badge"><i class="fas fa-arrow-up"></i> +8.42% today</div>
  </div>

  <div class="time-filters">
    <button class="time-btn" data-time="1H">1H</button>
    <button class="time-btn active" data-time="24H">24H</button>
    <button class="time-btn" data-time="7D">7D</button>
    <button class="time-btn" data-time="30D">30D</button>
    <button class="time-btn" data-time="3M">3M</button>
    <button class="time-btn" data-time="1Y">1Y</button>
    <button class="time-btn" data-time="ALL">ALL</button>
  </div>

  <div id="chartContainer"></div>

  <div class="graph-controls">
    <label><i class="fas fa-chart-line"></i> Trend
      <select id="graphTrend">
        <option value="bull">Bull</option>
        <option value="bear">Bear</option>
        <option value="sideways" selected>Sideways</option>
        <option value="volatile">Volatile</option>
      </select>
    </label>
    <label>Noise <input type="range" id="graphNoise" min="0" max="20" value="8"></label>
    <label>Points <input type="range" id="graphPoints" min="20" max="120" value="60"></label>
    <button class="graph-btn" id="randomizeGraph"><i class="fas fa-random"></i> Randomize</button>
    <button class="graph-btn" id="smoothGraph"><i class="fas fa-wave-square"></i> Smooth</button>
  </div>

  <div class="portfolio-grid" id="portfolioList"></div>

  <div class="bottom-nav">
    <button class="nav-item active"><i class="fas fa-home"></i><span>Home</span></button>
    <button class="nav-item"><i class="fas fa-coins"></i><span>Portfolio</span></button>
    <button class="nav-item"><i class="fas fa-chart-line"></i><span>Markets</span></button>
    <button class="nav-item"><i class="fas fa-clock"></i><span>Activity</span></button>
    <button class="nav-item"><i class="fas fa-user"></i><span>Account</span></button>
  </div>
</div>

<!-- Developer Overlay -->
<div class="dev-overlay" id="devOverlay">
  <div class="dev-panel">
    <h3><i class="fas fa-code"></i> Developer · Cryon</h3>
    <div id="devControls"></div>
    <div class="flex-row" style="margin-top:18px; justify-content:flex-end;">
      <button class="dev-btn dev-close" id="closeDevBtn"><i class="fas fa-times"></i> Close</button>
    </div>
  </div>
</div>

<script>
  (function() {
    // ---------- ULTRA RICH DATA ----------
    const DEFAULT_COINS = [
      { id: 'btc', name: 'Bitcoin', symbol: 'BTC', amount: 18.4, price: 52340, change: 4.2, color: '#f7931a' },
      { id: 'eth', name: 'Ethereum', symbol: 'ETH', amount: 156.8, price: 3120, change: -1.8, color: '#627eea' },
      { id: 'sol', name: 'Solana', symbol: 'SOL', amount: 1240, price: 98.4, change: 12.3, color: '#9945ff' },
      { id: 'xrp', name: 'XRP', symbol: 'XRP', amount: 18500, price: 0.62, change: 3.1, color: '#00aae4' },
      { id: 'ada', name: 'Cardano', symbol: 'ADA', amount: 72000, price: 0.48, change: -2.5, color: '#0033ad' },
      { id: 'dot', name: 'Polkadot', symbol: 'DOT', amount: 3400, price: 7.2, change: 8.7, color: '#e6007a' },
      { id: 'avax', name: 'Avalanche', symbol: 'AVAX', amount: 920, price: 34.5, change: -4.1, color: '#e84142' },
      { id: 'matic', name: 'Polygon', symbol: 'MATIC', amount: 28000, price: 0.82, change: 6.3, color: '#8247e5' },
    ];

    let coins = JSON.parse(localStorage.getItem('cryon_coins')) || DEFAULT_COINS.map(c => ({...c}));
    let portfolioBalance = parseFloat(localStorage.getItem('cryon_balance')) || 12418520.90;
    let dailyChangePercent = parseFloat(localStorage.getItem('cryon_change')) || 8.42;
    let currencySymbol = localStorage.getItem('cryon_currency') || '$';
    
    // Wealth stats state
    let wealthState = {
      netWorth: parseFloat(localStorage.getItem('cryon_netWorth')) || 12400000,
      totalAssets: parseFloat(localStorage.getItem('cryon_totalAssets')) || 8200000,
      diversification: parseInt(localStorage.getItem('cryon_diversification')) || 14,
      bestPerformer: localStorage.getItem('cryon_bestPerformer') || 'SOL',
      netWorthChange: 18.3,
      totalAssetsChange: 12.7,
      bestPerformerChange: 42.3
    };

    function saveWealthState() {
      localStorage.setItem('cryon_netWorth', wealthState.netWorth);
      localStorage.setItem('cryon_totalAssets', wealthState.totalAssets);
      localStorage.setItem('cryon_diversification', wealthState.diversification);
      localStorage.setItem('cryon_bestPerformer', wealthState.bestPerformer);
    }

    function saveState() {
      localStorage.setItem('cryon_coins', JSON.stringify(coins));
      localStorage.setItem('cryon_balance', portfolioBalance.toFixed(2));
      localStorage.setItem('cryon_change', dailyChangePercent.toFixed(2));
      localStorage.setItem('cryon_currency', currencySymbol);
      saveWealthState();
    }

    // ---------- RENDER UI ----------
    function renderUI() {
      document.getElementById('totalBalance').innerText = currencySymbol + portfolioBalance.toFixed(2);
      
      const badge = document.getElementById('changeBadge');
      const isPos = dailyChangePercent >= 0;
      badge.className = 'change-badge' + (isPos ? '' : ' negative');
      badge.innerHTML = `<i class="fas fa-${isPos ? 'arrow-up' : 'arrow-down'}"></i> ${isPos ? '+' : ''}${dailyChangePercent.toFixed(2)}% today`;

      // Wealth stats
      document.getElementById('netWorthDisplay').innerText = currencySymbol + (wealthState.netWorth/1000000).toFixed(1) + 'M';
      document.getElementById('totalAssetsDisplay').innerText = currencySymbol + (wealthState.totalAssets/1000000).toFixed(1) + 'M';
      document.getElementById('diversificationDisplay').innerText = wealthState.diversification;
      document.getElementById('bestPerformerDisplay').innerText = wealthState.bestPerformer;
      
      // Update input values
      document.getElementById('netWorthInput').value = wealthState.netWorth;
      document.getElementById('totalAssetsInput').value = wealthState.totalAssets;
      document.getElementById('diversificationInput').value = wealthState.diversification;
      document.getElementById('bestPerformerInput').value = wealthState.bestPerformer;
      
      document.getElementById('netWorthChange').innerText = `+${wealthState.netWorthChange.toFixed(1)}%`;
      document.getElementById('totalAssetsChange').innerText = `+${wealthState.totalAssetsChange.toFixed(1)}%`;
      document.getElementById('bestPerformerChange').innerText = `+${wealthState.bestPerformerChange.toFixed(1)}%`;

      // Portfolio list
      const list = document.getElementById('portfolioList');
      list.innerHTML = '';
      coins.forEach(c => {
        const change = c.change || 0;
        const changeClass = change >= 0 ? 'text-green' : 'text-red';
        const iconChar = c.symbol.charAt(0).toUpperCase();
        const row = document.createElement('div');
        row.className = 'coin-row';
        row.innerHTML = `
          <div class="coin-left">
            <div class="coin-icon" style="background:${c.color || '#2a2a2a'}33; border-color:${c.color || '#444'}">${iconChar}</div>
            <div><span class="coin-name">${c.name}</span> <span class="coin-symbol">${c.symbol}</span></div>
            <span class="coin-amount">${c.amount.toFixed(1)} ${c.symbol}</span>
          </div>
          <div class="coin-right">
            <span class="coin-price">${currencySymbol}${c.price.toFixed(2)}</span>
            <span class="coin-change ${changeClass}">${change >= 0 ? '+' : ''}${change.toFixed(2)}%</span>
            <svg class="sparkline" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
              <polyline points="${generateSparklinePoints(50, 20, c.change)}" fill="none" stroke="${change >= 0 ? '#2ecc71' : '#e74c3c'}" stroke-width="2"/>
            </svg>
          </div>
        `;
        list.appendChild(row);
      });
      
      renderGraph();
      saveState();
    }

    function generateSparklinePoints(w, h, change) {
      const pts = [];
      const amp = Math.min(Math.abs(change) * 0.5 + 3, 12);
      for (let i=0; i<10; i++) {
        const x = (i/9)*w;
        const y = h/2 + (Math.sin(i*1.3 + change*0.5) * amp) + (change * 0.15);
        pts.push(`${x},${Math.min(h, Math.max(0, y))}`);
      }
      return pts.join(' ');
    }

    // ---------- WEALTH EDIT CONTROLS ----------
    function setupWealthEditing() {
      document.querySelectorAll('.wealth-edit').forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          const target = this.dataset.target;
          const display = document.getElementById(target + 'Display');
          const input = document.getElementById(target + 'Input');
          display.classList.toggle('hidden');
          input.classList.toggle('active');
          if (input.classList.contains('active')) {
            input.focus();
            input.select();
          } else {
            // Save value
            const val = input.value;
            switch(target) {
              case 'netWorth':
                wealthState.netWorth = parseFloat(val) || 0;
                break;
              case 'totalAssets':
                wealthState.totalAssets = parseFloat(val) || 0;
                break;
              case 'diversification':
                wealthState.diversification = parseInt(val) || 0;
                break;
              case 'bestPerformer':
                wealthState.bestPerformer = val || '---';
                break;
            }
            renderUI();
          }
        });
      });

      // Enter key to save
      document.querySelectorAll('.wealth-input').forEach(input => {
        input.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            this.blur();
            const target = this.id.replace('Input', '');
            const display = document.getElementById(target + 'Display');
            display.classList.remove('hidden');
            this.classList.remove('active');
            const val = this.value;
            switch(target) {
              case 'netWorth':
                wealthState.netWorth = parseFloat(val) || 0;
                break;
              case 'totalAssets':
                wealthState.totalAssets = parseFloat(val) || 0;
                break;
              case 'diversification':
                wealthState.diversification = parseInt(val) || 0;
                break;
              case 'bestPerformer':
                wealthState.bestPerformer = val || '---';
                break;
            }
            renderUI();
          }
        });
        input.addEventListener('blur', function() {
          const target = this.id.replace('Input', '');
          const display = document.getElementById(target + 'Display');
          display.classList.remove('hidden');
          this.classList.remove('active');
        });
      });
    }

    // ---------- CUSTOM GRAPH ENGINE ----------
    let chartInstance = null;
    let graphDataPoints = [];

    function generateGraphData(noiseLevel = 8, trend = 'sideways', pointCount = 60) {
      const data = [];
      let val = 100;
      const trendMap = {
        'bull': 0.6,
        'bear': -0.5,
        'sideways': 0.02,
        'volatile': 0.3
      };
      const trendFactor = trendMap[trend] || 0.02;
      
      for (let i=0; i<pointCount; i++) {
        const noise = (Math.random() - 0.5) * noiseLevel * 1.2;
        const drift = trendFactor * (1 + Math.sin(i/10) * 0.3);
        val += noise + drift;
        val = Math.max(15, val);
        data.push({ x: i, y: val });
      }
      return data;
    }

    function renderGraph() {
      const container = document.getElementById('chartContainer');
      if (!container) return;

      const noise = parseInt(document.getElementById('graphNoise')?.value || 8);
      const trend = document.getElementById('graphTrend')?.value || 'sideways';
      const points = parseInt(document.getElementById('graphPoints')?.value || 60);
      
      const dataPoints = generateGraphData(noise, trend, points);
      graphDataPoints = dataPoints;

      if (chartInstance) chartInstance.destroy();

      const colorRule = localStorage.getItem('cryon_graph_color') || 'green';
      const isGreen = colorRule === 'green';
      const gradient = isGreen ? '#2ecc71' : '#e74c3c';

      const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        backgroundColor: "transparent",
        axisX: { 
          gridThickness: 0, tickThickness: 0, lineThickness: 0,
          labelFontColor: "#555", labelFontSize: 10
        },
        axisY: { 
          gridThickness: 0, tickThickness: 0, lineThickness: 0,
          labelFontColor: "#555", labelFontSize: 10
        },
        data: [{
          type: "line",
          dataPoints: dataPoints,
          lineThickness: 3.5,
          color: gradient,
          markerSize: 0,
          fillOpacity: 0.2,
          lineColor: gradient,
          backgroundColor: "transparent"
        }]
      });
      chart.render();
      chartInstance = chart;
    }

    // Graph controls
    document.getElementById('graphNoise')?.addEventListener('input', renderGraph);
    document.getElementById('graphTrend')?.addEventListener('change', renderGraph);
    document.getElementById('graphPoints')?.addEventListener('input', renderGraph);
    
    document.getElementById('randomizeGraph')?.addEventListener('click', function() {
      document.getElementById('graphNoise').value = Math.floor(Math.random() * 15) + 3;
      document.getElementById('graphTrend').value = ['bull','bear','sideways','volatile'][Math.floor(Math.random()*4)];
      renderGraph();
    });
    
    document.getElementById('smoothGraph')?.addEventListener('click', function() {
      document.getElementById('graphNoise').value = '2';
      document.getElementById('graphTrend').value = 'sideways';
      renderGraph();
    });

    // Time filters
    document.querySelectorAll('.time-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const trends = ['bull', 'bear', 'sideways', 'volatile', 'bull', 'sideways', 'volatile'];
        const idx = ['1H','24H','7D','30D','3M','1Y','ALL'].indexOf(this.dataset.time);
        if (idx >= 0 && idx < trends.length) {
          document.getElementById('graphTrend').value = trends[idx];
          renderGraph();
        }
      });
    });

    // ---------- DEV CONTROLS ----------
    function buildDevControls() {
      const panel = document.getElementById('devControls');
      panel.innerHTML = `
        <div class="dev-group" style="border-color:#f5b34244;">
          <label style="flex:1 0 100%; font-weight:600; color:#f5b342;">💰 Balance Generator</label>
          <div class="flex-row" style="width:100%; gap:6px;">
            <select id="devRangeType" style="background:#262626; border:1px solid #3a3a3a; border-radius:40px; padding:8px 14px; color:#fff;">
              <option value="thousands">Thousands</option>
              <option value="tenthousands">10 Thousands</option>
              <option value="hundredthousands">100 Thousands</option>
              <option value="millions">Millions</option>
              <option value="tenmillions">10 Millions</option>
              <option value="hundredmillions">100 Millions</option>
              <option value="billions">Billions</option>
              <option value="custom">Custom</option>
            </select>
            <select id="devRangeMultiplier" style="background:#262626; border:1px solid #3a3a3a; border-radius:40px; padding:8px 14px; color:#fff;">
              <option value="1">1×</option>
              <option value="10">10×</option>
              <option value="100">100×</option>
            </select>
          </div>
          <div class="flex-row" style="width:100%; gap:6px;">
            <label style="flex:1;">Min <input type="number" id="devRangeMin" value="10000000" step="100000"></label>
            <label style="flex:1;">Max <input type="number" id="devRangeMax" value="90000000" step="100000"></label>
          </div>
          <button class="dev-btn" id="devGenerateBalance" style="width:100%;"><i class="fas fa-dice"></i> Generate</button>
          <div class="flex-row" style="width:100%; gap:6px;">
            <button class="dev-btn" id="devSetBalance1k">1k</button>
            <button class="dev-btn" id="devSetBalance10k">10k</button>
            <button class="dev-btn" id="devSetBalance100k">100k</button>
            <button class="dev-btn" id="devSetBalance1M">1M</button>
            <button class="dev-btn" id="devSetBalance10M">10M</button>
            <button class="dev-btn" id="devSetBalance100M">100M</button>
            <button class="dev-btn" id="devSetBalance1B">1B</button>
          </div>
        </div>

        <div class="dev-group">
          <label>Balance <input type="number" step="100" id="devBalance" value="${portfolioBalance.toFixed(2)}"></label>
          <label>Gain/Loss % <input type="number" step="0.1" id="devChange" value="${dailyChangePercent.toFixed(2)}"></label>
          <label>Currency <select id="devCurrency"><option value="$" ${currencySymbol==='$'?'selected':''}>USD ($)</option><option value="€" ${currencySymbol==='€'?'selected':''}>EUR (€)</option><option value="£" ${currencySymbol==='£'?'selected':''}>GBP (£)</option><option value="¥" ${currencySymbol==='¥'?'selected':''}>JPY (¥)</option><option value="CHF" ${currencySymbol==='CHF'?'selected':''}>CHF</option></select></label>
        </div>
        
        <div class="dev-group">
          <label>Graph Color <select id="devGraphColor"><option value="green" ${localStorage.getItem('cryon_graph_color')!=='red'?'selected':''}>Green ↑</option><option value="red" ${localStorage.getItem('cryon_graph_color')==='red'?'selected':''}>Red ↓</option></select></label>
          <button class="dev-btn" id="devReset">↺ Reset</button>
          <button class="dev-btn" id="devAddCoin"><i class="fas fa-plus"></i> Add</button>
          <button class="dev-btn" id="devRemoveCoin"><i class="fas fa-minus"></i> Remove</button>
        </div>

        <div class="dev-group">
          <button class="dev-btn" id="devExport">⬇ Export</button>
          <button class="dev-btn" id="devImport">⬆ Import</button>
          <input type="file" id="importFileInput" accept=".json" style="display:none">
        </div>
        <div class="dev-group">
          <span class="dev-badge"><i class="fas fa-info-circle"></i> Tap logo 5x to open</span>
        </div>
      `;

      // Balance generator
      function updateRangeInputs() {
        const type = document.getElementById('devRangeType').value;
        const mult = parseInt(document.getElementById('devRangeMultiplier').value) || 1;
        let min=0, max=0;
        switch(type) {
          case 'thousands': min=1000; max=9000; break;
          case 'tenthousands': min=10000; max=90000; break;
          case 'hundredthousands': min=100000; max=900000; break;
          case 'millions': min=1000000; max=9000000; break;
          case 'tenmillions': min=10000000; max=90000000; break;
          case 'hundredmillions': min=100000000; max=900000000; break;
          case 'billions': min=1000000000; max=9000000000; break;
          case 'custom': return;
        }
        document.getElementById('devRangeMin').value = min * mult;
        document.getElementById('devRangeMax').value = max * mult;
      }
      document.getElementById('devRangeType').addEventListener('change', updateRangeInputs);
      document.getElementById('devRangeMultiplier').addEventListener('change', updateRangeInputs);
      updateRangeInputs();

      document.getElementById('devGenerateBalance').addEventListener('click', function() {
        const min = parseFloat(document.getElementById('devRangeMin').value) || 0;
        const max = parseFloat(document.getElementById('devRangeMax').value) || 10000;
        if (min >= max) { alert('Min must be less than Max'); return; }
        const val = Math.random() * (max - min) + min;
        portfolioBalance = Math.round(val * 100) / 100;
        document.getElementById('devBalance').value = portfolioBalance.toFixed(2);
        renderUI();
      });

      const quickSet = (val) => {
        portfolioBalance = val;
        document.getElementById('devBalance').value = val;
        renderUI();
      };
      document.getElementById('devSetBalance1k').addEventListener('click', () => quickSet(1000));
      document.getElementById('devSetBalance10k').addEventListener('click', () => quickSet(10000));
      document.getElementById('devSetBalance100k').addEventListener('click', () => quickSet(100000));
      document.getElementById('devSetBalance1M').addEventListener('click', () => quickSet(1000000));
      document.getElementById('devSetBalance10M').addEventListener('click', () => quickSet(10000000));
      document.getElementById('devSetBalance100M').addEventListener('click', () => quickSet(100000000));
      document.getElementById('devSetBalance1B').addEventListener('click', () => quickSet(1000000000));

      document.getElementById('devBalance').addEventListener('change', function() {
        portfolioBalance = parseFloat(this.value) || 10000;
        renderUI();
      });
      document.getElementById('devChange').addEventListener('change', function() {
        dailyChangePercent = parseFloat(this.value) || 0;
        renderUI();
      });
      document.getElementById('devCurrency').addEventListener('change', function() {
        currencySymbol = this.value;
        renderUI();
      });
      document.getElementById('devGraphColor').addEventListener('change', function() {
        localStorage.setItem('cryon_graph_color', this.value);
        renderGraph();
      });
      document.getElementById('devReset').addEventListener('click', function() {
        coins = DEFAULT_COINS.map(c => ({...c}));
        portfolioBalance = 12418520.90;
        dailyChangePercent = 8.42;
        currencySymbol = '$';
        wealthState.netWorth = 12400000;
        wealthState.totalAssets = 8200000;
        wealthState.diversification = 14;
        wealthState.bestPerformer = 'SOL';
        document.getElementById('devBalance').value = portfolioBalance.toFixed(2);
        document.getElementById('devChange').value = dailyChangePercent.toFixed(2);
        document.getElementById('devCurrency').value = '$';
        renderUI();
      });
      document.getElementById('devAddCoin').addEventListener('click', function() {
        const names = ['Doge', 'Chainlink', 'Uniswap', 'Litecoin', 'Cosmos', 'Near', 'Aptos'];
        const syms = ['DOGE', 'LINK', 'UNI', 'LTC', 'ATOM', 'NEAR', 'APT'];
        const idx = Math.floor(Math.random() * names.length);
        const newCoin = {
          id: syms[idx].toLowerCase() + Date.now(),
          name: names[idx],
          symbol: syms[idx],
          amount: Math.round(Math.random() * 5000) / 10,
          price: Math.round((Math.random() * 300 + 5) * 100) / 100,
          change: Math.round((Math.random() * 30 - 15) * 10) / 10,
          color: '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')
        };
        coins.push(newCoin);
        renderUI();
      });
      document.getElementById('devRemoveCoin').addEventListener('click', function() {
        if (coins.length > 3) { coins.pop(); renderUI(); }
      });

      document.getElementById('devExport').addEventListener('click', function() {
        const data = { coins, portfolioBalance, dailyChangePercent, currencySymbol, wealthState };
        const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'cryon_wealth.json'; a.click();
      });
      document.getElementById('devImport').addEventListener('click', function() {
        document.getElementById('importFileInput').click();
      });
      document.getElementById('importFileInput').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(ev) {
          try {
            const data = JSON.parse(ev.target.result);
            if (data.coins) coins = data.coins;
            if (data.portfolioBalance) portfolioBalance = data.portfolioBalance;
            if (data.dailyChangePercent) dailyChangePercent = data.dailyChangePercent;
            if (data.currencySymbol) currencySymbol = data.currencySymbol;
            if (data.wealthState) {
              wealthState = { ...wealthState, ...data.wealthState };
            }
            document.getElementById('devBalance').value = portfolioBalance.toFixed(2);
            document.getElementById('devChange').value = dailyChangePercent.toFixed(2);
            document.getElementById('devCurrency').value = currencySymbol;
            renderUI();
          } catch(e) { alert('Invalid config'); }
        };
        reader.readAsText(file);
        this.value = '';
      });
    }

    // Secret tap
    let tapCount = 0;
    document.querySelector('.logo-text').addEventListener('click', function() {
      tapCount++;
      if (tapCount === 5) {
        document.getElementById('devOverlay').style.display = 'flex';
        tapCount = 0;
      }
      clearTimeout(this._timer);
      this._timer = setTimeout(() => { tapCount = 0; }, 800);
    });

    document.getElementById('hamburgerBtn').addEventListener('click', function() {
      document.getElementById('devOverlay').style.display = 'flex';
    });
    document.getElementById('closeDevBtn').addEventListener('click', function() {
      document.getElementById('devOverlay').style.display = 'none';
    });
    document.getElementById('devOverlay').addEventListener('click', function(e) {
      if (e.target === this) this.style.display = 'none';
    });

    setupWealthEditing();
    buildDevControls();
    renderUI();
    window.addEventListener('resize', () => { if (chartInstance) renderGraph(); });
  })();
</script>
</body>
</html>
