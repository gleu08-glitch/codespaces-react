import { memo, useMemo } from 'react';
import './App.css';

const FEATURE_ITEMS = [
  {
    title: 'Memoized rendering',
    detail: 'Static data is cached so React doesn’t rebuild the same list on every render.',
  },
  {
    title: 'Lazy asset loading',
    detail: 'The logo is loaded with a browser-friendly lazy pattern to reduce initial paint cost.',
  },
  {
    title: 'Lower churn',
    detail: 'Child cards are wrapped in React.memo so unchanged sections stay untouched.',
  },
];

const FeatureCard = memo(function FeatureCard({ title, detail }) {
  return (
    <article className="feature-card">
      <h2>{title}</h2>
      <p>{detail}</p>
    </article>
  );
});

function App() {
  const cards = useMemo(
    () =>
      FEATURE_ITEMS.map((feature) => ({
        ...feature,
        id: feature.title,
      })),
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" loading="lazy" decoding="async" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <div className="feature-grid" aria-label="Performance notes">
          {cards.map((feature) => (
            <FeatureCard key={feature.id} title={feature.title} detail={feature.detail} />
          ))}
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
