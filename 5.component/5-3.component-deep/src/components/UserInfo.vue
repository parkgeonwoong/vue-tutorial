<template>
  <section>
    <BaseCard>
      <template #header>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()" />
      </template>

      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </BaseCard>
  </section>
</template>

<script setup>
import BaseBadge from './BaseBadge.vue';
import BaseCard from './BaseCard.vue';

const { fullName, infoText, role } = defineProps([
  'fullName',
  'infoText',
  'role',
]);
</script>
