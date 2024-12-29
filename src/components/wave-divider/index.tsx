import { wavePaths } from './wave-paths'
import { cn } from '@/lib/utils'

const hashCode = (str: string) => {
  let hash = 0
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

const makePath: (arr: string[]) => string[] = (arr) => {
  let resultArr = arr.concat(arr.slice(0, -1).reverse())
  return resultArr
}

const generateKeyTimes: (n: number) => string = (n) => {
  const stepSize = 1 / (n - 1)
  let keyTimesString = ''
  for (let i = 0; i < n - 1; i++) keyTimesString += `${(i * stepSize).toFixed(3)}; `
  return `${keyTimesString} 1`
}

interface singleWave {
  layers: string[][]
  colors: string[]
}

const getWaveData = (w: singleWave) => {
  let layers = w.layers
  let colors = w.colors
  return layers.map(function (layer, i) {
    return [layer, colors[i]] as [string[], string]
  })
}

interface waveProps {
  pathArr: string[]
  fill: string
}

const Wave = ({ pathArr, fill }: waveProps) => {
  let steps = pathArr.length * 2 - 1
  let keyTimes = generateKeyTimes(steps)
  return (
    <path fill={fill}>
      <animate
        attributeName="d"
        values={makePath(pathArr).join('; ')}
        keyTimes={keyTimes}
        dur={`${steps}s`}
        repeatCount="indefinite"
      />
    </path>
  )
}

interface waveDividerProps extends React.SVGProps<SVGElement> {
  waveLayers: singleWave
  viewBox?: string
}

const WaveStack = ({ className, waveLayers, viewBox = '0 0 1000 300' }: waveDividerProps) => {
  return (
    <>
      <svg className={cn(className)} id="visual" viewBox={viewBox}>
        {getWaveData(waveLayers).map(([path, color]) => (
          <Wave key={hashCode(path[0])} fill={color} pathArr={path} />
        ))}
      </svg>
    </>
  )
}

const headerDiagonal = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.headerDiagonal} viewBox="0 0 1000 650" />
)
const headerDiagonalSm = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.headerDiagonalSm} viewBox="0 0 640 850" />
)
const headerDiagonalXs = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.headerDiagonalXs} viewBox="0 0 333 570" />
)
const headerHorizontal = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack viewBox="0 0 1000 160" className={className} waveLayers={wavePaths.headerHorizontal} />
)
const footer = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.footer} viewBox="0 0 1000 250" />
)
const homeTop = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.homeTop} />
)
const homeBottom = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.homeBottom} />
)
const eventsTop = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.eventsTop} />
)
const eventsBottom = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.eventsBottom} />
)
const patronsTop = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.patronsTop} />
)
const patronsBottom = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.patronsBottom} />
)
const aboutTop = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.aboutTop} />
)
const aboutBottom = ({ className }: React.SVGProps<SVGElement>) => (
  <WaveStack className={className} waveLayers={wavePaths.aboutBottom} />
)

export const WaveDivider = {
  headerDiagonal,
  headerDiagonalSm,
  headerDiagonalXs,
  headerHorizontal,
  footer,
  homeTop,
  homeBottom,
  eventsTop,
  eventsBottom,
  patronsTop,
  patronsBottom,
  aboutTop,
  aboutBottom,
} as const
