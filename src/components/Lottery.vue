<template>
  <div class="container">
  	
    <div v-if="mood === 'Your owner is quietly mulling options for replacing you; be careful.'">
      <h1>Welcome to the NBA Draft Lottery</h1>

      <p>Lying to your coach right at the start made trust impossible. There were several that times and let him take the fall in the press for how bad the team was instead of speaking up and explaining the plan. But you wanted to keep your tanking strategy quiet to maintain a tactical advantage against other teams.</p>

      <p>You have the #{{firstRounder}} pick in the draft and {{draftPicks}} second rounder<span v-if="draftPicks !== 1">s</span>.</p>

      <p v-if="firstRounder === 6 || firstRounder === 7">Your owner is fed and up about the bad press and shady behavior. You have been fired.</p>

      <ul class="choices">
        <li v-if="firstRounder === 6 || firstRounder === 7" v-on:click="goToPlayAgain()"><a href="javascript://">Game Over</a></li>
        <li v-if="firstRounder === 4 || firstRounder === 5" v-on:click="goToDraftNight()"><a href="javascript://">Go to Draft Night</a></li>
      </ul>
    </div>

    <div v-if="mood === 'Your owner is seriously considering firing you.'">
      <h1>Welcome to the NBA Draft Lottery</h1>

      <p>You treated your team like assets instead of people and ruled with an iron fist. The shittiness of your team is a constant talking point in sports media. Agents are becoming concerned. General sports fans are unhappy because losing on purpose is antithetical to the spirit of competition.</p>

      <p>You have the #{{firstRounder}} pick in the draft and {{draftPicks}} second rounder<span v-if="draftPicks !== 1">s</span>.</p>

      <p v-if="firstRounder === 1">Woo-hoo!</p>
      <p v-if="firstRounder === 2">Not bad.</p>
      <p v-if="firstRounder === 3">If you already took a center, don't take another one.</p>
      <p v-if="firstRounder === 4">Hey, that's where the Knicks got Porzingis.</p>

      <ul class="choices">
        <li v-on:click="goToDraftNight()"><a href="javascript://">Go to Draft Night</a></li>
      </ul>
    </div>

    <div v-if="mood === 'Your owner is willing to give you another year to assemble your vision.' || mood === 'Your owner isn\'t sure what your strategy is.'">
      <h1>Welcome to the NBA Draft Lottery</h1>

      <p>You didn't tank quite as hard as you could have. No one is sure what your strategy is. But, your owner is relatively happy, the media treats you as a normal bad team, and Adam Silver is staying out of your hair.</p>

      <p>You have the #{{firstRounder}} pick in the draft and {{draftPicks}} second rounder<span v-if="draftPicks !== 1">s</span>.</p>

      <p v-if="firstRounder === 6 || firstRounder === 7">Well, it's not the worst outcome.</p>
      <p v-if="firstRounder === 8">Hopefully it's a loaded draft.</p>
      <p v-if="firstRounder === 9">Maybe you luck out on a Justise Winslow situation.</p>
      <p v-if="firstRounder === 10">Shouts to Paul Pierce.</p>
      <p v-if="firstRounder === 11">The Spurs would figure something out.</p>

      <ul class="choices">
        <li v-on:click="goToDraftNight()"><a href="javascript://">Go to Draft Night</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'lottery',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    goToDraftNight: function() {
      this.$store.state.stage = 'draft night';
    },
    goToPlayAgain: function() {
      this.$store.state.stage = 'play again';
    }
  },
  computed: {
    mood() {
      return this.$store.state.mood;
    },
    firstRounder() {
      return this.$store.state.firstRounder;
    },
    draftPicks() {
      return this.$store.state.draftPicks;
    }
  }
}
</script>
