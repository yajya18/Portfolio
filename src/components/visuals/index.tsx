import type { ComponentType } from 'react'
import LoopinVisual from './LoopinVisual'
import AirAwareVisual from './AirAwareVisual'
import ThermalVisual from './ThermalVisual'
import TwitterCloneVisual from './TwitterCloneVisual'
import EdgeWakeWordVisual from './EdgeWakeWordVisual'
import AntennaVisual from './AntennaVisual'
import HeroVisual from './HeroVisual'

type VisualProps = { className?: string }

export const visualMap: Record<string, ComponentType<VisualProps>> = {
  loopin: LoopinVisual,
  'air-aware': AirAwareVisual,
  thermal: ThermalVisual,
  'twitter-clone': TwitterCloneVisual,
  'edge-wake-word': EdgeWakeWordVisual,
  antenna: AntennaVisual,
}

export { LoopinVisual, AirAwareVisual, ThermalVisual, TwitterCloneVisual, EdgeWakeWordVisual, AntennaVisual, HeroVisual }
