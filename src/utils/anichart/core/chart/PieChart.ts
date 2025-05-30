import { BaseChartOptions, BaseChart } from './BaseChart'
import { Path } from '../component/Path'
import { colorPicker } from '../ColorPicker'
import { FontWeight, Text, TextOptions } from '../component/Text'
import { font } from '../Constant'
import { max, sum } from 'd3-array'
import { arc, pie } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import { timeFormat } from 'd3-time-format'
interface PieChartOptions extends BaseChartOptions {
  radius?: [number, number]
  labelTextStyle?: TextOptions
  showDateLabel?: boolean
  cornerRadius?: number
  padAngle?: number
  minRadio?: number
}
export class PieChart extends BaseChart implements PieChartOptions {
  minRadio: number = 0
  radius: [number, number] = [0, 120]
  cornerRadius: number = 4
  padAngle: number = 5
  keyDurationSec = 0.25
  labelTextStyle: TextOptions = {
    key: 'label-text-style',
    font,
    lineWidth: 6,
    fontSize: 24,
    fontWeight: 'bolder' as FontWeight,
    strokeStyle: '#1e1e1e',
  }

  dateLabel!: Text
  showDateLabel!: boolean
  constructor (options: PieChartOptions = {}) {
    super(options)
    if (options) {
      Object.assign(this, options)
    }
  }

  getComponent (sec: number) {
    const res = super.getComponent(sec)
    if (this.showDateLabel) {
      const date = this.secToDate(sec)
      const dateLabel = new Text({
        key: 'date-label',
        text: timeFormat(this.dateFormat)(date),
        fillStyle: '#FFF',
        fontSize: 30,
        position: { x: 0, y: 0 },
      })
      res?.children.push(dateLabel)
    }

    const remained = sec % this.keyDurationSec
    const start = sec - remained
    const end = start + this.keyDurationSec
    const comp0 = this.getPieData(start)
    const comp1 = this.getPieData(end)
    const pieData = scaleLinear([start, end], [comp0, comp1])(remained + start)
    const arcGen = arc()
    for (const d of pieData) {
      const path = arcGen
        .endAngle(d.endAngle)
        .padAngle(d.padAngle)
        .startAngle(d.startAngle)
        .innerRadius(this.radius[0])
        .outerRadius(this.radius[1])
        .cornerRadius(this.cornerRadius)
        .padAngle(d.padAngle)({
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
        })
      const centroid = arcGen.centroid(pieData as any)
      const label = new Text({
        key: `pie-label-${d.data[this.idField] as string}`,
        text: d.data[this.idField],
        fontSize: this.labelTextStyle.fontSize,
        lineWidth: this.labelTextStyle.lineWidth,
        font: this.labelTextStyle.font,
        textAlign: 'center',
        textBaseline: 'middle',
        fillStyle: colorPicker.getColor(d.data[this.idField]),
        fontWeight: this.labelTextStyle.fontWeight,
        strokeStyle: this.labelTextStyle.strokeStyle,
        position: { x: centroid[0], y: centroid[1] },
      })
      const comp = new Path({
        key: `pie-path-${d.data[this.idField] as string}`,
        fillStyle: colorPicker.getColor(d.data[this.idField]),
        strokeStyle: '#0000',
        path,
      })
      res?.children.push(comp)
      res?.children.push(label)
    }
    return res
  }

  private getPieData (sec: number) {
    const currentData = [...this.dataScales.values()].map((scale) => {
      return scale(sec)
    })
    const minRadio = this.minRadio / 360
    const sumValue = sum(currentData, (d) => d[this.valueField])
    const minValue = sumValue * minRadio
    const pieGen = pie<{
      [key: string]: any
    }>()
      .padAngle((Math.PI / 180) * this.padAngle)
      .value((d) => max([d[this.valueField], minValue]) ?? 0)

    currentData.sort((a, b) => {
      if (Number.isNaN(b[this.valueField])) {
        return -1
      } else if (Number.isNaN(a[this.valueField])) {
        return 1
      } else {
        return b[this.idField] - a[this.idField]
      }
    })
    const pieData = pieGen(currentData)

    return pieData
  }
}
