<template>
    <div :class="$style.webContainer">
        <Content />
        <TabBar />
    </div>
</template>

<script setup>
import TabBar from './tabBar'
import Content from './content'
</script>

<style lang="scss" module>
.webContainer {
    height: 100%;
    background-color: #fff;
    overflow: auto;
    @include flex-layout(column);
}
</style>
