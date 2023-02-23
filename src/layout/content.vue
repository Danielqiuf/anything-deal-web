<template>
    <div :class="$style.webContent">
        <router-view v-slot="{ Component }">
            <keep-alive :include="includeList">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'

const includeList = reactive([])
const route = useRoute()

watch(
    () => route,
    (newV, oldV) => {
        if (newV.meta.alive && includeList.indexOf(newV.name) === -1) {
            includeList.push(newV.name)
        }
    },
    { deep: true }
)
</script>

<style lang="scss" module>
.webContent {
    width: 100%;
    flex: 1;
    overflow: auto;
}
</style>
