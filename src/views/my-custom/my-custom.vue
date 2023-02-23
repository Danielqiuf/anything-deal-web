<template>
    <div :class="$style.myCustomContainer">
        <div :class="$style.myCustomHeaderContainer">
            <TabTransition v-model:active="activeIndex" :data="tabData" />
        </div>
        <Content v-model:active="activeIndex" :data="tabData" />
    </div>
</template>
<script setup>
import Content from './widget/content'
import { primaryColor } from '@/constant/theme'
import { ref } from 'vue'
import TabTransition from '@/components/tabTransition'

const tabData = ['一级', '二级']

const activeIndex = ref(0)
</script>
<style lang="scss" module>
.myCustomContainer {
    height: 100%;
    background-color: #f8f8f8;
    @include flex-layout(column, normal, normal);
}
.myCustomHeaderContainer {
    background-color: v-bind(primaryColor);
    height: 138px;
    @include flex-layout;
}
</style>
