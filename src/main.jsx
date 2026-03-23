import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './utils/language.jsx'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(e) { return { error: e } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: 'monospace', direction: 'ltr' }}>
          <h2 style={{ color: 'red' }}>App Error</h2>
          <pre style={{ background: '#fee', padding: 16, borderRadius: 8, whiteSpace: 'pre-wrap' }}>
            {this.state.error?.message}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>
  </StrictMode>,
)
