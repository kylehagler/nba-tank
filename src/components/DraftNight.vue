<template>
  <div class="container">
    <p>You have the #{{firstRounder}} pick and {{draftPicks}} second rounder<span v-if="draftPicks !== 1">s</span>.</p><p>The fetid air of the team war room smells of rank coffee breath and sublimated farts, but crackles with excitement nonetheless.</p>

    <P v-if="firstPickMade"><strong>You have selected<span v-if="firstPlayerDrafted !== 'an alcoholic'"> a</span> {{firstPlayerDrafted}}.</strong></p>
    
    <ul class="choices">
      <li v-if="!firstPickMade" v-on:click="makeFirstPick()"><a href="javascript://">Make your selection</a></li>
      <li v-if="firstPickMade && draftPicks > 0" v-on:click="goToSecondRound()"><a href="javascript://">Go to second round</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'draft-night',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    makeFirstPick: function() {
      switch(this.$store.state.firstRounder) {
        case 1:
          var choices = ["Superstar", "Star", "Injury Prone Player"];
          break;
        case 2:
          var choices = ["Superstar", "Star", "Injury Prone Player"];
          break;
        case 3:
          var choices = ["Superstar", "Star", "Bust", "Role Player", "Injury Prone Player"];
          break;
        case 4:
          var choices = ["Superstar", "Star", "Bust", "Role Player"];
          break;
        case 5:
          var choices = ["Star", "Role Player", "Bust", "Superstar", "Injury Prone Player", "player who dies tragically before training camp"];
          break;
        case 6:
          var choices = ["Star", "Role Player", "Bust", "Superstar", "Injury Prone Player", "player who dies tragically before training camp"];
          break;
        case 7:
          var choices = ["Star", "Role Player", "Bust", "Superstar", "Injury Prone Player", "player who dies tragically before training camp"];
          break;
        case 8:
          var choices = ["Star", "Role Player", "Bust", "Superstar", "Injury Prone Player", "player who dies tragically before training camp"];
          break;
        case 9:
          var choices = ["Star", "Role Player", "Bust", "Superstar", "Injury Prone Player", "player who dies tragically before training camp"];
          break;    
        case 10:
          var choices = ["Role player", "Potential Star with personality issues", "role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies tragically before training camp"];
          break;
        case 11:
          var choices = ["Role player", "Potential Star with personality issues", "role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "an alcoholic", "player who dies in a tragic farming accident"];
          break;
        case 12:
          var choices = ["Role player", "Potential Star with personality issues", "Role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies tragically before training camp"];
          break;
        case 13:
          var choices = ["Role player", "Potential Star with personality issues", "Role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies in a tragic farming accident"];
          break;
        case 14:
          var choices = ["Role player", "Potential Star with personality issues", "Role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies tragically before training camp"];
          break;            
        case 15:
          var choices = ["Role player", "Potential Star with personality issues", "Role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies tragically before training camp"];    
      }

      this.$store.state.firstPlayerDrafted = choices[Math.floor(Math.random()*choices.length)];
      this.$store.state.firstPickMade = true;

      switch(this.$store.state.firstPlayerDrafted) {
        case "Superstar":
          this.$store.state.firstPlayerDrafted += 1;
          break;
        case "Star":
          this.$store.state.firstPlayerDrafted += 1;
          break;
        case "Weed Carrier":
          
          break;
        case "Bust":
          
          break;
        case "Potential Star with personality issues":
          this.$store.state.firstPlayerDrafted += 1;
          break;
        case "player who dies tragically before training camp":
          
          break;
        case "D-Leaguer":
          
          break;
        case "Role player":
          
          break;
        case "Injury Prone Player":
          
          break;    
        case 10:
          var choices = ["Role player", "Potential Star with personality issues", "role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies tragically before training camp"];
          break;
        case 11:
          var choices = ["Role player", "Potential Star with personality issues", "role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "an alcoholic", "player who dies in a tragic farming accident"];
          break;
        case 12:
          var choices = ["Role player", "Potential Star with personality issues", "Role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies tragically before training camp"];
          break;
        case 13:
          var choices = ["Role player", "Potential Star with personality issues", "Role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies in a tragic farming accident"];
          break;
        case 14:
          var choices = ["Role player", "Potential Star with personality issues", "Role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies tragically before training camp"];
          break;            
        case 15:
          var choices = ["Role player", "Potential Star with personality issues", "Role player", "Weed Carrier", "Injury Prone Player", "D-Leaguer", "player who dies tragically before training camp"];    
      }
    },
    goToSecondRound: function() {
      this.$store.state.firstPickMade = false;
      this.$store.state.firstPlayerDrafted = null;
      this.$store.state.stage = 'second round';
    },
    goToPlayAgain: function() {
      this.$store.state.stage = 'play again';
    }
  },
  computed: {
    firstRounder() {
      return this.$store.state.firstRounder;
    },
    draftPicks() {
      return this.$store.state.draftPicks;
    },
    firstPickMade() {
      return this.$store.state.firstPickMade;
    },
    firstPlayerDrafted() {
      return this.$store.state.firstPlayerDrafted;
    }
  }
}
</script>
