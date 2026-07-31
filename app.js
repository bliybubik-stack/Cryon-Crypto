// ============================================
// CRYON - Main Application
// ============================================

// ---------- DATA ----------
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

// ---------- STATE ----------
let state = {
  coins: JSON.parse(localStorage.getItem('cryon_coins')) || DEFAULT_COINS.map(c => ({ ...c })),
  portfolioBalance: parseFloat(localStorage.getItem('cryon_balance')) || 12418520.90,
  dailyChangePercent: parseFloat(localStorage.getItem('cryon_change')) || 8.42,
  currencySymbol: localStorage.getItem('cryon_currency') || '$',
  wealth: {
    netWorth: parseFloat(localStorage.getItem('cryon_netWorth')) || 12400000,
    totalAssets: parseFloat(localStorage.getItem('cryon_totalAssets')) || 8200000,
    diversification: parseInt(localStorage.getItem('cryon_diversification')) || 14,
    bestPerformer: localStorage.getItem('cryon_bestPerformer') || 'SOL',
    netWorthChange: 18.3,
    totalAssetsChange: 12.7,
    bestPerformerChange: 42.3
  }
};

let chartInstance = null;

// ---------- HELPERS ----------
function saveState() {
  localStorage.setItem('cryon_coins', JSON.stringify(state.coins));
  localStorage.setItem('cryon_balance', state.portfolioBalance.toFixed(2));
  localStorage.setItem('cryon_change', state.dailyChangePercent.toFixed(2));
  localStorage.setItem('cryon_currency', state.currencySymbol);
  localStorage.setItem('cryon_netWorth', state.wealth.netWorth);
  localStorage.setItem('cryon_totalAssets', state.wealth.totalAssets);
  localStorage.setItem('cryon_diversification', state.wealth.diversification);
  localStorage.setItem('cryon_bestPerformer', state.wealth.bestPerformer);
}

function formatCurrency(amount) {
  return state.currencySymbol + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function generateSparklinePoints(w, h, change) {
  const pts = [];
  const amp = Math.min(Math.abs(change) * 0.5 + 3, 12);
  for (let i = 0; i < 10; i++) {
    const x = (i / 9) * w;
    const y = h / 2 + (Math.sin(i * 1.3 + change * 0.5) * amp) + (change * 0.15);
    pts.push(`${x},${Math.min(h, Math.max(0, y))}`);
  }
  return pts.join(' ');
}

// ---------- RENDER ----------
function render() {
  // Balance
  document.getElementById('totalBalance').textContent = formatCurrency(state.portfolioBalance);
  
  const badge = document.getElementById('changeBadge');
  const isPos = state.dailyChangePercent >= 0;
  badge.className = 'balance-change' + (isPos ? '' : ' negative');
  badge.innerHTML = `<i class="fas fa-${isPos ? 'arrow-up' : 'arrow-down'}"></i> ${isPos ? '+' : ''}${state.dailyChangePercent.toFixed(2)}%`;

  // Wealth stats
  document.getElementById('netWorthDisplay').textContent = state.currencySymbol + (state.wealth.netWorth / 1000000).toFixed(1) + 'M';
  document.getElementById('totalAssetsDisplay').textContent = state.currencySymbol + (state.wealth.totalAssets / 1000000).toFixed(1) + 'M';
  document.getElementById('diversificationDisplay').textContent = state.wealth.diversification;
  document.getElementById('bestPerformerDisplay').textContent = state.wealth.bestPerformer;
  document.getElementById('bestPerformerChange').textContent = `+${state.wealth.bestPerformerChange.toFixed(1)}%`;

  // Portfolio list
  const list = document.getElementById('portfolioList');
  list.innerHTML = '';
  
  state.coins.forEach(c => {
    const change = c.change || 0;
    const changeClass = change >= 0 ? 'positive' : 'negative';
    const iconChar = c.symbol.charAt(0).toUpperCase();
    const row = document.createElement('div');
    row.className = 'coin-row';
    row.innerHTML = `
      <div class="coin-left">
        <div class="coin-icon" style="background:${c.color || '#2a2a2a'}33; border-color:${c.color || '#444'}">${iconChar}</div>
        <div class="coin-info">
          <span class="coin-name">${c.name}</span>
          <span class="coin-symbol">${c.symbol}</span>
          <span class="coin-amount">${c.amount.toFixed(1)} ${c.symbol}</span>
        </div>
      </div>
      <div class="coin-right">
        <div>
          <div class="coin-price">${state.currencySymbol}${c.price.toFixed(2)}</div>
          <div class="coin-change ${changeClass}">${change >= 0 ? '+' : ''}${change.toFixed(2)}%</div>
        </div>
        <svg class="sparkline" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
          <polyline points="${generateSparklinePoints(50, 20, c.change)}" 
                    fill="none" stroke="${change >= 0 ? '#2ecc71' : '#e74c3c'}" stroke-width="1.8"/>
        </svg>
      </div>
    `;
    list.appendChild(row);
  });

  renderChart();
  saveState();
}

// ---------- CHART ----------
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
  
  for (let i = 0; i < pointCount; i++) {
    const noise = (Math.random() - 0.5) * noiseLevel * 1.2;
    const drift = trendFactor * (1 + Math.sin(i / 10) * 0.3);
    val += noise + drift;
    val = Math.max(15, val);
    data.push({ x: i, y: val });
  }
  return data;
}

function renderChart() {
  const container = document.getElementById('chartContainer');
  if (!container) return;

  const noise = parseInt(document.getElementById('graphNoise')?.value || 8);
  const trend = document.getElementById('graphTrend')?.value || 'sideways';
  const points = parseInt(document.getElementById('graphPoints')?.value || 60);
  
  const dataPoints = generateGraphData(noise, trend, points);

  if (chartInstance) chartInstance.destroy();

  const colorRule = localStorage.getItem('cryon_graph_color') || 'green';
  const isGreen = colorRule === 'green';
  const gradient = isGreen ? '#2ecc71' : '#e74c3c';

  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    backgroundColor: "transparent",
    axisX: { 
      gridThickness: 0, tickThickness: 0, lineThickness: 0,
      labelFontColor: "#555", labelFontSize: 9
    },
    axisY: { 
      gridThickness: 0, tickThickness: 0, lineThickness: 0,
      labelFontColor: "#555", labelFontSize: 9
    },
    data: [{
      type: "line",
      dataPoints: dataPoints,
      lineThickness: 2.5,
      color: gradient,
      markerSize: 0,
      fillOpacity: 0.15,
      lineColor: gradient,
    }]
  });
  chart.render();
  chartInstance = chart;
}

// ---------- TIME FILTERS ----------
document.querySelectorAll('.time-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const trends = ['bull', 'bear', 'sideways', 'volatile', 'bull', 'sideways', 'volatile'];
    const idx = ['1H', '24H', '7D', '30D', '3M', '1Y', 'ALL'].indexOf(this.dataset.time);
    if (idx >= 0 && idx < trends.length) {
      document.getElementById('graphTrend').value = trends[idx];
      renderChart();
    }
  });
});

// ---------- DEVELOPER MENU ----------
function buildDevMenu() {
  const panel = document.getElementById('devControls');
  panel.innerHTML = `
    <div class="dev-group">
      <label style="font-weight:600; color:var(--amber);">💰 Balance Generator</label>
      <div class="flex-row">
        <select id="devRangeType" style="flex:1;">
          <option value="thousands">Thousands</option>
          <option value="tenthousands">10K</option>
          <option value="hundredthousands">100K</option>
          <option value="millions">Millions</option>
          <option value="tenmillions">10M</option>
          <option value="hundredmillions">100M</option>
          <option value="billions">Billions</option>
          <option value="custom">Custom</option>
        </select>
        <select id="devRangeMultiplier" style="flex:1;">
          <option value="1">1×</option>
          <option value="10">10×</option>
          <option value="100">100×</option>
        </select>
      </div>
      <div class="flex-row">
        <label style="flex:1;">Min <input type="number" id="devRangeMin" value="10000000"></label>
        <label style="flex:1;">Max <input type="number" id="devRangeMax" value="90000000"></label>
      </div>
      <button class="dev-btn primary" id="devGenerateBalance" style="width:100%;"><i class="fas fa-dice"></i> Generate Random</button>
      <div class="flex-row">
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
      <label>Balance <input type="number" step="100" id="devBalance" value="${state.portfolioBalance.toFixed(2)}"></label>
      <label>Daily Change % <input type="number" step="0.1" id="devChange" value="${state.dailyChangePercent.toFixed(2)}"></label>
      <label>Currency <select id="devCurrency">
        <option value="$" ${state.currencySymbol === '$' ? 'selected' : ''}>USD ($)</option>
        <option value="€" ${state.currencySymbol === '€' ? 'selected' : ''}>EUR (€)</option>
        <option value="£" ${state.currencySymbol === '£' ? 'selected' : ''}>GBP (£)</option>
        <option value="¥" ${state.currencySymbol === '¥' ? 'selected' : ''}>JPY (¥)</option>
        <option value="CHF" ${state.currencySymbol === 'CHF' ? 'selected' : ''}>CHF</option>
      </select></label>
    </div>

    <div class="dev-group">
      <label>Graph Color <select id="devGraphColor">
        <option value="green" ${localStorage.getItem('cryon_graph_color') !== 'red' ? 'selected' : ''}>Green ↑</option>
        <option value="red" ${localStorage.getItem('cryon_graph_color') === 'red' ? 'selected' : ''}>Red ↓</option>
      </select></label>
      <div class="flex-row">
        <button class="dev-btn" id="devAddCoin"><i class="fas fa-plus"></i> Add Coin</button>
        <button class="dev-btn" id="devRemoveCoin"><i class="fas fa-minus"></i> Remove</button>
        <button class="dev-btn danger" id="devReset">↺ Reset</button>
      </div>
    </div>

    <div class="dev-group">
      <div class="flex-row">
        <button class="dev-btn" id="devExport"><i class="fas fa-download"></i> Export</button>
        <button class="dev-btn" id="devImport"><i class="fas fa-upload"></i> Import</button>
        <input type="file" id="importFileInput" accept=".json" style="display:none">
      </div>
    </div>

    <div class="dev-group">
      <span class="dev-badge"><i class="fas fa-info-circle"></i> Tap "Cryon" logo 5x to open</span>
    </div>
  `;

  // Balance generator
  function updateRangeInputs() {
    const type = document.getElementById('devRangeType').value;
    const mult = parseInt(document.getElementById('devRangeMultiplier').value) || 1;
    let min = 0,
      max = 0;
    switch (type) {
      case 'thousands':
        min = 1000;
        max = 9000;
        break;
      case 'tenthousands':
        min = 10000;
        max = 90000;
        break;
      case 'hundredthousands':
        min = 100000;
        max = 900000;
        break;
      case 'millions':
        min = 1000000;
        max = 9000000;
        break;
      case 'tenmillions':
        min = 10000000;
        max = 90000000;
        break;
      case 'hundredmillions':
        min = 100000000;
        max = 900000000;
        break;
      case 'billions':
        min = 1000000000;
        max = 9000000000;
        break;
      case 'custom':
        return;
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
    state.portfolioBalance = Math.round(val * 100) / 100;
    document.getElementById('devBalance').value = state.portfolioBalance.toFixed(2);
    render();
  });

  const quickSet = (val) => {
    state.portfolioBalance = val;
    document.getElementById('devBalance').value = val;
    render();
  };

  document.getElementById('devSetBalance1k').addEventListener('click', () => quickSet(1000));
  document.getElementById('devSetBalance10k').addEventListener('click', () => quickSet(10000));
  document.getElementById('devSetBalance100k').addEventListener('click', () => quickSet(100000));
  document.getElementById('devSetBalance1M').addEventListener('click', () => quickSet(1000000));
  document.getElementById('devSetBalance10M').addEventListener('click', () => quickSet(10000000));
  document.getElementById('devSetBalance100M').addEventListener('click', () => quickSet(100000000));
  document.getElementById('devSetBalance1B').addEventListener('click', () => quickSet(1000000000));

  // Standard controls
  document.getElementById('devBalance').addEventListener('change', function() {
    state.portfolioBalance = parseFloat(this.value) || 10000;
    render();
  });

  document.getElementById('devChange').addEventListener('change', function() {
    state.dailyChangePercent = parseFloat(this.value) || 0;
    render();
  });

  document.getElementById('devCurrency').addEventListener('change', function() {
    state.currencySymbol = this.value;
    render();
  });

  document.getElementById('devGraphColor').addEventListener('change', function() {
    localStorage.setItem('cryon_graph_color', this.value);
    renderChart();
  });

  document.getElementById('devAddCoin').addEventListener('click', function() {
    const names = ['Dogecoin', 'Chainlink', 'Uniswap', 'Litecoin', 'Cosmos', 'Near', 'Aptos'];
    const syms = ['DOGE', 'LINK', 'UNI', 'LTC', 'ATOM', 'NEAR', 'APT'];
    const idx = Math.floor(Math.random() * names.length);
    const newCoin = {
      id: syms[idx].toLowerCase() + Date.now(),
      name: names[idx],
      symbol: syms[idx],
      amount: Math.round(Math.random() * 5000) / 10,
      price: Math.round((Math.random() * 300 + 5) * 100) / 100,
      change: Math.round((Math.random() * 30 - 15) * 10) / 10,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    };
    state.coins.push(newCoin);
    state.wealth.diversification = state.coins.length;
    render();
  });

  document.getElementById('devRemoveCoin').addEventListener('click', function() {
    if (state.coins.length > 3) {
      state.coins.pop();
      state.wealth.diversification = state.coins.length;
      render();
    }
  });

  document.getElementById('devReset').addEventListener('click', function() {
    if (confirm('Reset all data to defaults?')) {
      state.coins = DEFAULT_COINS.map(c => ({ ...c }));
      state.portfolioBalance = 12418520.90;
      state.dailyChangePercent = 8.42;
      state.currencySymbol = '$';
      state.wealth.netWorth = 12400000;
      state.wealth.totalAssets = 8200000;
      state.wealth.diversification = 14;
      state.wealth.bestPerformer = 'SOL';
      document.getElementById('devBalance').value = state.portfolioBalance.toFixed(2);
      document.getElementById('devChange').value = state.dailyChangePercent.toFixed(2);
      document.getElementById('devCurrency').value = '$';
      render();
    }
  });

  // Export/Import
  document.getElementById('devExport').addEventListener('click', function() {
    const data = {
      coins: state.coins,
      portfolioBalance: state.portfolioBalance,
      dailyChangePercent: state.dailyChangePercent,
      currencySymbol: state.currencySymbol,
      wealth: state.wealth
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'cryon_backup.json';
    a.click();
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
        if (data.coins) state.coins = data.coins;
        if (data.portfolioBalance) state.portfolioBalance = data.portfolioBalance;
        if (data.dailyChangePercent) state.dailyChangePercent = data.dailyChangePercent;
        if (data.currencySymbol) state.currencySymbol = data.currencySymbol;
        if (data.wealth) state.wealth = { ...state.wealth, ...data.wealth };
        document.getElementById('devBalance').value = state.portfolioBalance.toFixed(2);
        document.getElementById('devChange').value = state.dailyChangePercent.toFixed(2);
        document.getElementById('devCurrency').value = state.currencySymbol;
        render();
        alert('Import successful!');
      } catch (e) {
        alert('Invalid backup file');
      }
    };
    reader.readAsText(file);
    this.value = '';
  });
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', function() {
  // Setup developer menu
  buildDevMenu();

  // Graph controls
  document.getElementById('graphNoise')?.addEventListener('input', renderChart);
  document.getElementById('graphTrend')?.addEventListener('change', renderChart);
  document.getElementById('graphPoints')?.addEventListener('input', renderChart);

  document.getElementById('randomizeGraph')?.addEventListener('click', function() {
    document.getElementById('graphNoise').value = Math.floor(Math.random() * 15) + 3;
    document.getElementById('graphTrend').value = ['bull', 'bear', 'sideways', 'volatile'][Math.floor(Math.random() * 4)];
    renderChart();
  });

  document.getElementById('smoothGraph')?.addEventListener('click', function() {
    document.getElementById('graphNoise').value = '2';
    document.getElementById('graphTrend').value = 'sideways';
    renderChart();
  });

  // Menu button
  document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('devOverlay').classList.toggle('active');
  });

  document.getElementById('closeDevBtn').addEventListener('click', function() {
    document.getElementById('devOverlay').classList.remove('active');
  });

  document.getElementById('devOverlay').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('active');
  });

  // Secret tap on logo
  let tapCount = 0;
  document.querySelector('.logo')?.addEventListener('click', function() {
    tapCount++;
    if (tapCount === 5) {
      document.getElementById('devOverlay').classList.toggle('active');
      tapCount = 0;
    }
    clearTimeout(this._timer);
    this._timer = setTimeout(() => { tapCount = 0; }, 800);
  });

  // Render initial UI
  render();

  // Handle resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (chartInstance) renderChart();
    }, 250);
  });
});
