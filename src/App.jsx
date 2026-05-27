import ScrollContainer from './components/layout/ScrollContainer'
import PaperGrainOverlay from './components/ui/ScanlineOverlay'

export default function App() {
  return (
    <div className="relative min-h-screen bg-parch">
      <PaperGrainOverlay />
      <ScrollContainer />
    </div>
  )
}
