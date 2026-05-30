import ScrollContainer from './components/layout/ScrollContainer'
import PaperGrainOverlay from './components/ui/ScanlineOverlay'
import HardStopOverlay from './components/layout/HardStopOverlay'

export default function App() {
  return (
    <div className="relative min-h-screen bg-parch">
      <PaperGrainOverlay />
      <HardStopOverlay />
      <ScrollContainer />
    </div>
  )
}
