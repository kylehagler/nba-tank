<template>
  <div class="container">
    <h1>Second Round</h1>

    <p>You have {{draftPicks}} second round picks.</p>

    <div v-if="secondRoundPicksMade">
      <p><strong>You acquired the following players with your 2nd round picks:</strong></p>

      <ul>
        <li v-for="player in secondRoundPlayersDrafted">{{player}}</li>
      </ul>
    </div>
    
    <ul class="choices">
      <li v-if="!secondRoundPicksMade" v-on:click="makeSecondRoundPicks()"><a href="javascript://">Make Picks</a></li>
      <li v-if="secondRoundPicksMade" v-on:click="goToOffseason()"><a href="javascript://">Proceed to offseason</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'second-round',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    makeSecondRoundPicks: function() {
      for(var i = 0; i < this.$store.state.draftPicks; i++) {
        var random = Math.floor(Math.random() * 6) + 1;

        if(random === 1 || random === 3 || random === 5) {
          this.$store.state.secondRoundPlayersDrafted.push('Role Player');
        } else if(random === 4 || random === 6 || random === 7 || random === 8 || random === 9 || random === 10) {
          this.$store.state.secondRoundPlayersDrafted.push('Scrub');
        } else if(random === 2) {
          this.$store.state.secondRoundPlayersDrafted.push('Scrub');
          this.$store.state.numStars += 1;
        }
      }

      this.$store.state.secondRoundPicksMade = true;
    },
    goToOffseason: function() {
      this.$store.state.secondRoundPicksMade = true;
      this.$store.state.secondRoundPlayersDrafted = [];
      this.$store.state.stage = 'preseason';
    }
  },
  computed: {
    draftPicks() {
      return this.$store.state.draftPicks;
    },
    secondRoundPicksMade() {
      return this.$store.state.secondRoundPicksMade;
    },
    secondRoundPlayersDrafted() {
      return this.$store.state.secondRoundPlayersDrafted;
    }
  }
}
</script>
