import Vue from "vue";
import { getCurrentSeconds } from "./util";

export interface Data {
  countdown: {
    intervalId?: number;
    remainingTime: number;
  };
}
export default Vue.extend({
  data(): Data {
    return { countdown: { remainingTime: 0 } };
  },
  destroyed() {
    this.stopCountdown();
  },
  methods: {
    startCountdown(intervalHandler: () => any, period: number) {
      const handle = () => {
        const elapsed = getCurrentSeconds() % period;
        this.countdown.remainingTime = period - elapsed;
        if (elapsed == 0) {
          intervalHandler();
        }
      };
      this.countdown.intervalId = setInterval(handle, 1000);
    },
    stopCountdown() {
      if (this.countdown.intervalId != undefined) {
        clearInterval(this.countdown.intervalId);
      }
    },
  },
});
