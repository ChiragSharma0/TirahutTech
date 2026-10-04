import { CodeXml, Cpu, Cloud, LayoutDashboard, ShoppingBag, Package, Users, FileBarChart, Settings } from 'lucide-react'
import { Button, Mountains } from './Shared'

const SIDEBAR = [
  [LayoutDashboard, 'Dashboard'],
  [ShoppingBag, 'Orders'],
  [Package, 'Products'],
  [Users, 'Customers'],
  [FileBarChart, 'Reports'],
  [Settings, 'Settings'],
]

const PRODUCTS = [
  ['Wireless Earbuds', '216'],
  ['Smart Watch', '182'],
  ['Laptop Stand', '146'],
  ['USB-C Hub', '121'],
]

function Dashboard() {
  return (
    <div className="dash">
      <aside className="dash-side">
        <div className="dash-brand">SkyVerse</div>
        {SIDEBAR.map(([Icon, label], i) => (
          <div key={label} className={`dash-link${i === 0 ? ' on' : ''}`}>
            <Icon size={9} /> {label}
          </div>
        ))}
      </aside>
      <div className="dash-main">
        <div className="dash-title">Overview</div>
        <div className="dash-kpis">
          <div><small>Total Sales</small><b>₹4,83,320</b><em>+12.5%</em></div>
          <div><small>Total Orders</small><b>1,426</b><em>+8.2%</em></div>
          <div><small>Customers</small><b>882</b><em>+6.7%</em></div>
        </div>
        <div className="dash-grid">
          <div className="dash-chart">
            <small>Revenue Overview</small>
            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#2dd4bf" stopOpacity=".5" />
                  <stop offset="1" stopColor="#2dd4bf" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 70 20 60 40 64 60 45 80 52 100 34 120 40 140 22 160 30 180 12 200 18V80H0Z" fill="url(#rev)" />
              <path d="M0 70 20 60 40 64 60 45 80 52 100 34 120 40 140 22 160 30 180 12 200 18" fill="none" stroke="#2dd4bf" strokeWidth="2" />
            </svg>
          </div>
          <div className="dash-list">
            <small>Top Products</small>
            {PRODUCTS.map(([n, v]) => (
              <div key={n}><i />{n}<span>{v}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Circuit traces leaving the pad: [path, colour, pulse duration in s]
const TRACES = [
  ['M300 92 L360 104 L440 104 L500 118 L560 118', 'teal', 2.6],
  ['M300 92 L370 84 L450 84 L520 70 L580 70', 'teal', 3.4],
  ['M300 92 L340 112 L400 128 L470 128 L510 140', 'orange', 3],
  ['M300 92 L240 104 L160 104 L100 118 L40 118', 'teal', 2.9],
  ['M300 92 L230 84 L150 84 L80 70 L20 70', 'orange', 3.6],
  ['M300 92 L260 112 L200 128 L130 128 L90 140', 'teal', 3.2],
]

// Holographic circuit pad the laptop sits on: glowing rings, traces and moving data pulses.
function CircuitBase() {
  return (
    <svg className="circuit-base" viewBox="0 0 600 170" aria-hidden="true">
      <defs>
        <radialGradient id="pad-glow">
          <stop offset="0" stopColor="#2dd4bf" stopOpacity=".55" />
          <stop offset="1" stopColor="#2dd4bf" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pad-top" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#123238" />
          <stop offset="1" stopColor="#0a1a1e" />
        </linearGradient>
      </defs>

      {TRACES.map(([d, c, dur], i) => (
        <g key={i} className={`trace ${c}`}>
          <path id={`trace-${i}`} d={d} />
          <circle className="node" cx={d.split(' ').at(-2).slice(1)} cy={d.split(' ').at(-1)} r="3.5" />
          <circle className="pulse" r="2.5">
            <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${i * 0.4}s`}>
              <mpath href={`#trace-${i}`} />
            </animateMotion>
          </circle>
        </g>
      ))}

      {/* the pad: a thick disc seen from above */}
      <ellipse cx="300" cy="104" rx="210" ry="44" fill="#061113" />
      <ellipse cx="300" cy="92" rx="210" ry="44" fill="url(#pad-top)" stroke="#2dd4bf" strokeOpacity=".6" strokeWidth="1.5" />
      <ellipse cx="300" cy="92" rx="170" ry="34" className="ring dash" />
      <ellipse cx="300" cy="92" rx="125" ry="25" className="ring" />
      <ellipse cx="300" cy="92" rx="80" ry="16" className="ring orange" />
      <ellipse cx="300" cy="88" rx="200" ry="40" fill="url(#pad-glow)" />
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const r = (a * Math.PI) / 180
        return <rect key={a} x={300 + Math.cos(r) * 190 - 4} y={92 + Math.sin(r) * 39 - 2} width="8" height="4" rx="1" className="chip" />
      })}
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <Mountains className="hero-mountains" colors={['#0f2c31', '#0b2125', '#081a1e']} />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-tag">
            <span>BUILD</span> / <span className="o">AUTOMATE</span> / <span>SCALE</span>
          </p>
          <h1>
            Technology
            <br />
            that works for
            <br />
            <span className="o">your business.</span>
          </h1>
          <p className="lead">
            We build scalable web applications, mobile apps, automation systems, and custom software solutions for
            startups and growing companies worldwide.
          </p>
          <div className="btn-row">
            <Button to="/contact">Start a Project</Button>
            <Button variant="outline" to="/services">Explore Services</Button>
          </div>
          <ul className="hero-feats">
            <li><CodeXml size={16} /> Custom Development</li>
            <li><Cpu size={16} /> Automation &amp; AI</li>
            <li><Cloud size={16} /> IT Infrastructure</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="float-panel fp-1">
            <small>Dashboard</small>
            <i /><i /><i /><i />
          </div>
          <div className="float-panel fp-2">
            <small>Analytics</small>
            <i /><i />
          </div>
          <div className="float-panel fp-3">
            <small>Reports</small>
            <i /><i /><i /><i /><i />
          </div>
          <div className="laptop">
            <div className="laptop-screen"><Dashboard /></div>
            <div className="laptop-base" />
          </div>
          <CircuitBase />
          <div className="impact-badge">Real Systems.<br />Real Impact.</div>
        </div>
      </div>
    </section>
  )
}
