# vue-use-countdown
A mixin that provides countdown timer functionality.

Displays time remaining and executes callback when time elapsed
## Usage

```html
<template>
  <div id="app">
    {{countdown.remainingTime}}
    <button @click="this.stopCounting">stop</button>
    <button @click="this.startCounting">start</button>
  </div>
</template>

<script >
import Vue from "vue";
import useCountdown from "vue-use-countdown";
export default Vue.extend({
  methods: {
    startCounting() {
      const countdownPeriod = 30;
      this.startCountdown(() => console.log('tick'), countdownPeriod);
    },
    stopCounting() {
      this.stopCountdown()
    }
  },
  mixins: [useCountdown]
});
</script>
```
