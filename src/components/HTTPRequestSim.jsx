/**
 * הדמיה - HTTP Request/Response Flow
 * לקוח שולח בקשה → שרת מעבד → תגובה חוזרת
 */
import { useState, useRef } from 'react'
import { useLang } from '../utils/language.jsx'
import './Simulations.css'

function getRoutes(isEn) {
  return {
    '/index.html': {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Content-Length': '3421' },
      body: '<html><body><h1>ברוכים הבאים!</h1></body></html>',
      meaning: isEn ? 'Request succeeded — the server returns the requested content' : 'הבקשה הצליחה — השרת מחזיר את התוכן המבוקש'
    },
    '/missing': {
      status: 404,
      statusText: 'Not Found',
      headers: { 'Content-Type': 'text/html', 'Content-Length': '142' },
      body: '<html><body><h1>404 - Page Not Found</h1></body></html>',
      meaning: isEn ? 'Resource not found — the path you requested does not exist on the server' : 'המשאב לא נמצא — הנתיב שביקשת לא קיים בשרת'
    },
    '/admin': {
      status: 403,
      statusText: 'Forbidden',
      headers: { 'Content-Type': 'text/html', 'Content-Length': '98' },
      body: '<html><body><h1>403 - Access Denied</h1></body></html>',
      meaning: isEn ? 'Access forbidden — you do not have permission to access this resource' : 'גישה אסורה — אין לך הרשאה לגשת למשאב זה'
    },
    '/old-page': {
      status: 301,
      statusText: 'Moved Permanently',
      headers: { 'Content-Type': 'text/html', 'Location': 'http://www.example.com/new-page', 'Content-Length': '0' },
      body: '',
      meaning: isEn ? 'Permanent redirect — the resource has moved to a new address (see Location header)' : 'הפניה קבועה — המשאב עבר לכתובת חדשה (ראה Location header)'
    }
  }
}

function getDefaultRoute(isEn) {
  return {
    status: 500,
    statusText: 'Internal Server Error',
    headers: { 'Content-Type': 'text/html' },
    body: '<html><body><h1>500 - Server Error</h1></body></html>',
    meaning: isEn ? 'Internal server error — something went wrong on the server side' : 'שגיאת שרת פנימית — משהו השתבש בצד השרת'
  }
}

function getStatusColor(code) {
  if (code >= 200 && code < 300) return '#16a34a'
  if (code >= 300 && code < 400) return '#2563eb'
  if (code >= 400 && code < 500) return '#ea580c'
  return '#dc2626'
}

function getStatusClass(code) {
  if (code >= 200 && code < 300) return 'status-2xx'
  if (code >= 300 && code < 400) return 'status-3xx'
  if (code >= 400 && code < 500) return 'status-4xx'
  return 'status-5xx'
}

export function HTTPRequestSim() {
  const { lang } = useLang(); const isEn = lang === 'en'
  const [url, setUrl] = useState('www.example.com/index.html')
  const [method, setMethod] = useState('GET')
  const [stage, setStage] = useState('idle') // idle, building, sending, processing, returning, done
  const [response, setResponse] = useState(null)
  const timeoutsRef = useRef([])

  const clearTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }

  const addTimeout = (fn, ms) => {
    timeoutsRef.current.push(setTimeout(fn, ms))
  }

  const handleSend = () => {
    clearTimeouts()
    setResponse(null)
    setStage('building')

    // Extract path from URL
    const urlStr = url.trim() || 'www.example.com/index.html'
    const pathMatch = urlStr.match(/\/[^\s]*/)
    const path = pathMatch ? pathMatch[0] : '/index.html'

    const routes = getRoutes(isEn)
    const route = routes[path] || getDefaultRoute(isEn)

    addTimeout(() => setStage('sending'), 800)
    addTimeout(() => setStage('processing'), 1600)
    addTimeout(() => {
      setStage('returning')
      setResponse(route)
    }, 2600)
    addTimeout(() => setStage('done'), 3400)
  }

  const isRunning = stage !== 'idle' && stage !== 'done'

  // Extract path for display
  const urlStr = url.trim() || 'www.example.com/index.html'
  const pathMatch = urlStr.match(/\/[^\s]*/)
  const displayPath = pathMatch ? pathMatch[0] : '/index.html'
  const hostMatch = urlStr.match(/^([^/]+)/)
  const displayHost = hostMatch ? hostMatch[1] : 'www.example.com'

  return (
    <div className="simulation-box http-sim" dir={isEn ? 'ltr' : 'rtl'}>
      <h4>{isEn ? 'HTTP Simulation — Request & Response' : 'הדמיית HTTP — בקשה ותגובה'}</h4>

      {/* Controls */}
      <div className="http-controls">
        <select
          className="http-method-select"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          disabled={isRunning}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          className="http-url-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !isRunning && handleSend()}
          placeholder="www.example.com/index.html"
          disabled={isRunning}
        />
      </div>

      {/* Visual flow */}
      <div className="http-flow">
        <div className={`http-node http-client ${stage === 'building' ? 'active' : ''}`}>
          <span className="http-node-icon">🖥️</span>
          <span className="http-node-label">{isEn ? 'Client' : 'לקוח'}</span>
        </div>

        <div className="http-pipe">
          {/* Request arrow */}
          <div className={`http-arrow http-arrow-req ${stage === 'sending' ? 'flying' : ''} ${['processing', 'returning', 'done'].includes(stage) ? 'arrived' : ''}`}>
            <span className="http-arrow-label">{isEn ? 'Request →' : 'בקשה →'}</span>
          </div>
          {/* Response arrow */}
          <div className={`http-arrow http-arrow-res ${stage === 'returning' ? 'flying' : ''} ${stage === 'done' ? 'arrived' : ''}`}>
            <span className="http-arrow-label">{isEn ? '← Response' : '← תגובה'}</span>
          </div>
        </div>

        <div className={`http-node http-server ${stage === 'processing' ? 'active processing' : ''}`}>
          <span className="http-node-icon">🌐</span>
          <span className="http-node-label">{isEn ? 'Server' : 'שרת'}</span>
          {stage === 'processing' && <span className="http-spinner">⏳</span>}
        </div>
      </div>

      {/* Request details */}
      {stage !== 'idle' && (
        <div className="http-details">
          <div className="http-request-box">
            <div className="http-detail-title">{isEn ? '📤 Request' : '📤 בקשה'}</div>
            <pre className="http-pre" dir="ltr">
{`${method} ${displayPath} HTTP/1.1
Host: ${displayHost}
Accept: text/html
User-Agent: NetworksGuide/1.0
Connection: keep-alive`}
            </pre>
          </div>

          {response && (
            <div className="http-response-box">
              <div className="http-detail-title">{isEn ? '📥 Response' : '📥 תגובה'}</div>
              <pre className="http-pre" dir="ltr">
                <span className={`http-status-line ${getStatusClass(response.status)}`}>
{`HTTP/1.1 ${response.status} ${response.statusText}`}
                </span>
{`\n${Object.entries(response.headers).map(([k, v]) => `${k}: ${v}`).join('\n')}`}
{response.body && `\n\n${response.body}`}
              </pre>
              <div className="http-meaning" style={{ borderRightColor: getStatusColor(response.status) }}>
                <span className={`http-status-badge ${getStatusClass(response.status)}`}>
                  {response.status}
                </span>
                {response.meaning}
              </div>
            </div>
          )}
        </div>
      )}

      {/* URL hints */}
      <div className="http-hints">
        <span className="http-hint-label">{isEn ? 'Try these paths:' : 'נתיבים לניסוי:'}</span>
        <code>/index.html</code>
        <code>/missing</code>
        <code>/admin</code>
        <code>/old-page</code>
      </div>

      <button className="sim-btn" onClick={handleSend} disabled={isRunning}>
        {isRunning ? (isEn ? '⏳ Sending...' : '⏳ שולח...') : (isEn ? '🚀 Send Request' : '🚀 שלח בקשה')}
      </button>
    </div>
  )
}
