type Opts = {
    /**
     * 画板宽
     */
    width: number,
    /**
     * 画板高
     */
    height: number,
    /**
     * 列数
     */
    cols: number,
    /**
     * 行数
     */
    rows: number,
    /**
     * 间距
     */
    gap: number
}

export class EliminateConsole {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    constructor(private options: Opts) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = options.width;
        this.canvas.height = options.height;

        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }



    draw() {

    }

    getCanvas() {
        return this.canvas;
    }
}