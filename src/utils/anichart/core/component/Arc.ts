import { BaseCompOptions, Component } from './Component'

export interface ArcOptions extends BaseCompOptions {
  radius?: number
  startAngle?: number
  endAngle?: number
  anticlockwise?: boolean
}

export class Arc extends Component {
  readonly type = 'Arc'
  radius: number
  startAngle: number
  endAngle: number
  anticlockwise: boolean
  constructor (options?: ArcOptions) {
    super(options ?? { key: 'arc' })
    const {
      radius = 10,
      startAngle = 0,
      endAngle = 2 * Math.PI,
      anticlockwise = false
    } = options ?? {};

    this.radius = radius
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.anticlockwise = anticlockwise
  }
}
