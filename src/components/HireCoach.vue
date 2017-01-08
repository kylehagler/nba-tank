<template>
  <div class="container">
  	
    <span v-if="condition === 'stable'">
      <p>You have hired a Grett Frown, a first time head coach with an impressive pedigree. He understands that you want to play an utempo style in order to increase possessions, thus making it more likely that the team will lose a whole lot. But, he fully understands the process. He's excited to begin.</p>
    </span>

    <span v-if="condition === 'blunder'">
      <p>Coach Grett Frown is a bit concerned that you didn't ask for his input on personnel decisions.</p>
    </span>  
  
    <p>Your coach has made it known that he would like to sign veteran free agents who can help right away.</p>    
    <span v-if="condition === 'blunder'">
      <p>Current Assets: {{draftPicks}} second rounder<span v-if="draftPicks !== 1">s</span></p>
    </span>

      <p>What do you do?</p>

      <ul class="choices">
        <li v-on:click="askInput"><a href="javascript://">Tell him you cannot sign veterans at this time, but ask his input on personnel moves</a></li>
        <li v-on:click="doWhatever"><a href="javascript://">Do whatever you want with no explanation</a></li>
        <li v-on:click="listenThenDoWhatever"><a href="javascript://">Listen, but do whatever you want</a></li>
        <li v-on:click="signVeterans"><a href="javascript://">Sign veterans who can help right away</a></li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'hire-coach',
  data () {
    return {}
  },
  methods: {
    askInput: function() {
      this.$store.state.condition = 'Your team\'s season was bad. But a commitment to process allowed flashes of promise to shine through. The chemistry was also good. Many people around the league respect that, while you\'re tanking, you\'re at least building a culture. This is more a rebuild than a naked tank. You will have a lottery pick.';
      this.$store.state.moves += 1;
      this.$store.state.mood = "Your owner is willing to give you another year to assemble your vision.";
      this.$store.state.coachStatus = "understanding"
      this.$store.state.stage = 'no vets but ask input';
    },
    doWhatever: function() {
      this.$store.state.condition = 'Your team\'s season was like a dictatorship. The coaches and fans hate your freaking guts. To say nothing of the players, who are just trying to hang in the league. That said, you have a great shot at a top pick.';
      this.$store.state.moves += 1;
      this.$store.state.mood = "Your owner is seriously considering firing you.";
      this.$store.state.coachStatus = "unhappy"
      this.$store.state.stage = 'do whatever you want';
    },
    listenThenDoWhatever: function() {
      this.$store.state.condition = 'The feeling around the organization, and the chemistry between the players, has been awful. Team meeting devolve into shoving matches. Coach Frown went after you once. That said, all in all, you should have a pretty high draft pick.';
      this.$store.state.moves += 1;
      this.$store.state.mood = "Your owner is quietly mulling options for replacing you; be careful.";
      this.$store.state.coachStatus = "feels lied to"
      this.$store.state.stage = 'listen but do whatever you want';  
    },
    signVeterans: function() {
      if(this.$store.state.condition === 'stable') {
        this.$store.state.draftPicks = 2;
      }

      this.$store.state.condition = 'You will probably have a mid-first rounder. You could have tanked harder, but you care about stability and optics.';
      this.$store.state.moves += 1;
      this.$store.state.mood = "Your owner isn't sure what your strategy is.";
      this.$store.state.coachStatus = "happy"
      this.$store.state.stage = 'sign veterans';
    }
  },
  computed: {
    condition() {
      return this.$store.state.condition;
    },
    draftPicks() {
      return this.$store.state.draftPicks;
    }
  }
}
</script>
