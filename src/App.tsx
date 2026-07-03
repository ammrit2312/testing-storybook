import { Button } from './components/Button';
import './styles/tokens.css';
import './App.css';

function App() {
  return (
    <main className="demo">
      <h1>Button component library</h1>

      <section className="demo__group">
        <h2>Variants</h2>
        <div className="demo__row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </section>

      <section className="demo__group">
        <h2>With icons</h2>
        <div className="demo__row">
          <Button variant="primary" iconName="arrow-right" iconPosition="right">
            Continue
          </Button>
          <Button variant="secondary" iconName="download">
            Download
          </Button>
          <Button variant="tertiary" iconName="plus">
            Add item
          </Button>
        </div>
      </section>

      <section className="demo__group">
        <h2>Disabled</h2>
        <div className="demo__row">
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
