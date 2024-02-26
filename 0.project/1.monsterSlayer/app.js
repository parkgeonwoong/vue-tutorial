function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    stopPlayerHeal() {
      return this.playerHealth === 100;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth = Math.max(this.monsterHealth - attackValue, 0);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth = Math.max(this.playerHealth - attackValue, 0);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth = Math.max(this.monsterHealth - attackValue, 0);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      this.playerHealth = Math.min(this.playerHealth + healValue, 100);
      this.attackPlayer();
    },
  },
});

app.mount("#game");
