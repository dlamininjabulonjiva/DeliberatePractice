export class Calculator {
    private value = 0
    private isSeeded = false

    private history: number[] = []
    private historyPointer = 0

    public Seed(value: number): this {
        if (!this.isSeeded) {
            this.value = value
            this.history = [value]
            this.historyPointer = 0
            this.isSeeded = true
        }
        return this
    }

    private recordHistory(newValue: number) {
        this.historyPointer++
        this.history = this.history.slice(0, this.historyPointer)
        this.history.push(newValue)
    }

    public Plus(value: number): this {
        this.value += value
        this.recordHistory(this.value)
        return this
    }

    public Minus(value: number): this {
        this.value -= value
        this.recordHistory(this.value)
        return this
    }

    public Undo(): this {
        if (this.historyPointer > 0) {
            this.historyPointer--
            this.value = this.history[this.historyPointer]
        }
        return this
    }

    public Redo(): this {
        if (this.historyPointer < this.history.length - 1) {
          this.historyPointer++
          this.value = this.history[this.historyPointer]
        }
        return this
    }

    public Result(): number {
        return this.value
    }
}