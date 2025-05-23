import { Component } from '../component/Component'
import { Text } from '../component/Text'
import { Rect } from '../component/Rect'
import { Ani } from './Ani'
import { font } from '../Constant'
import { easePolyOut } from 'd3-ease'
import { format } from 'd3-format'
import { scaleLinear } from 'd3-scale'
import { easeInterpolate } from '../utils/ease'

export interface ProgressOptions {
  position?: { x: number, y: number }
  shape?: { width: number, height: number }
  aniTime?: [number, number]
  color?: string
}
export class Progress extends Ani implements ProgressOptions {
  ani: Ani
  shape!: { width: number, height: number }
  radius: number = 6
  padding: number = 3
  lineWidth: number = 2
  aniTime!: [number, number]
  position!: { x: number, y: number }
  center = { x: 0, y: 0 }
  color!: string
  constructor (options?: ProgressOptions) {
    super()
    if (options != null) {
      this.position = options.position ?? { x: 0, y: 0 }
      this.aniTime = options.aniTime ?? [0, 3]
      this.shape = options.shape ?? { width: 400, height: 18 }
      this.color = options.color ?? '#FFF'
    }
    const border0 = new Rect({
      key: 'progress-border-0',
      shape: {
        width: this.shape.width,
        height: this.shape.height,
      },
      center: { x: this.shape.width / 2, y: this.shape.height / 2 },
      alpha: 1,
      radius: this.radius,
      fillStyle: '#0006',
      strokeStyle: this.color,
      lineWidth: this.lineWidth,
    })
    const border1 = new Rect({
      key: 'progress-border-1',
      shape: {
        width: this.shape.width * 1.75,
        height: this.shape.height,
      },
      center: {
        x: (this.shape.width * 1.75) / 2,
        y: this.shape.height / 2,
      },
      alpha: 1,
      radius: this.radius,
      fillStyle: '#0006',
      strokeStyle: this.color,
      lineWidth: this.lineWidth,
    })
    const bar0 = new Rect({
      key: 'progress-bar-0',
      position: { x: this.padding, y: this.padding },
      center: { x: this.shape.width / 2, y: this.shape.height / 2 },
      shape: { width: 0, height: this.shape.height - this.padding * 2 },
      radius: this.radius,
      fillStyle: this.color,
    })
    const bar1 = new Rect({
      key: 'progress-bar-1',
      position: { x: this.padding, y: this.padding },
      center: { x: (this.shape.width / 2) * 1.75, y: this.shape.height / 2 },
      shape: {
        width: (this.shape.width - this.padding * 2) * 1.75,
        height: this.shape.height - this.padding * 2,
      },
      radius: this.radius,
      fillStyle: this.color,
    })

    const start = new Component({
      key: 'progress-start',
      position: this.position,
      scale: { x: 2, y: 2 },
    })
    start.children.push(border0)
    start.children.push(bar0)
    const end = new Component({
      key: 'progress-end',
      position: this.position,
      scale: { x: 1, y: 1 },
    })
    end.children.push(border1)
    end.children.push(bar1)

    const borderFinished = new Rect({
      key: 'progress-border-finished',
      shape: {
        width: this.shape.width * 2,
        height: this.shape.height * 2,
      },
      center: {
        x: (this.shape.width * 2) / 2,
        y: (this.shape.height * 2) / 2,
      },
      alpha: 0,
      radius: this.radius,
      fillStyle: '#0006',
      strokeStyle: '#27C',
      lineWidth: this.lineWidth,
    })
    const bar2 = new Rect({
      key: 'progress-bar-2',
      center: { x: this.shape.width / 2, y: this.shape.height / 2 },
      position: { x: this.padding, y: this.padding },
      shape: {
        width: this.shape.width - this.padding * 2,
        height: this.shape.height - this.padding * 2,
      },
      alpha: 0.0,
      radius: this.radius,
      fillStyle: '#27C',
    })
    const final = new Component({
      key: 'progress-final',
      position: this.position,
      alpha: 1,
      scale: { x: 1.2, y: 1.2 },
    })
    final.children.push(borderFinished)
    final.children.push(bar2)

    const objCopy = Object.assign({}, final)
    objCopy.alpha = 0
    this.ani = new Ani()
  }

  getComponent (sec: number) {
    const val = scaleLinear(this.aniTime, [0, 100])
      .clamp(true)
      .interpolate(easeInterpolate(easePolyOut.exponent(5)))(sec)

    const label = format('d')(val)
    const res = this.ani.getComponent(sec)
    const textLabel = new Text({
      key: 'progress-label',
      text: val === 100 ? '' : `Loading ${label} %`,
      font,
      fontSize: 24,
      textAlign: 'center',
      textBaseline: 'top',
      position: { x: 0, y: this.shape.height },
      fillStyle: '#fff',
    })
    res?.children.push(textLabel)
    return res
  }
}
