<template>
  <div class="container">
    <h1>Game Over</h1>

    <span v-html="content"></span>

    <ul class="choices">
      <li><a href="javascript://" v-on:click="restart()">Yes</a></li>
      <li><a href="javascript://" v-on:click="goToSiliconValley()">No</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'play-again',
  data () {
    return {
      content: 'Would you like to tank again?'
    }
  },
  methods: {
    restart: function() {
      this.$store.state.stage = 'start';
    },
    goToSiliconValley: function() {
      this.$store.state.stage = 'silicon valley';
    }
  }
}
</script>
