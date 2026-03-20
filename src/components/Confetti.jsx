import './Confetti.css'

const PIECE_COUNT = 50

export function Confetti() {
  return (
    <div className="confetti-container" aria-hidden="true">
      {Array.from({ length: PIECE_COUNT }, (_, i) => (
        <div key={i} className="confetti-piece" />
      ))}
    </div>
  )
}
