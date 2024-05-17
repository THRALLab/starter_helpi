/* Structure for Quiz Timer */
class Timer {
    private count: number;
    private timer: NodeJS.Timeout | null;
  
    constructor() {
      this.count = 0;
      this.timer = null;
    }
  
    getCount(): number {
      return this.count;
    }
  
    start(): void {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.count++;
        }, 1000);
      }
    }
  
    stop(): void {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  
    reset(): void {
      this.count = 0;
      this.stop();
    }
  }
  
  export default Timer;