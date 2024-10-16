<template>
  <section>
    <BaseCard>
      <template #header>
        <h2>Available Badges</h2>
      </template>

      <template #default>
        <ul>
          <li>
            <BaseBadge type="admin" caption="ADMIN" />
          </li>
          <li>
            <BaseBadge type="author" caption="AUTHOR" />
          </li>
        </ul>
      </template>
    </BaseCard>
  </section>
</template>

<script setup>
import BaseBadge from './BaseBadge.vue';
import BaseCard from './BaseCard.vue';
</script>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
