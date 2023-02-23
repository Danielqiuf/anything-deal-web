<template>
    <div :class="$style.myCustomItemContainer">
        <img :src="item.avatar" :class="$style.myCustomItemAvatar" />
        <p>{{ item.name }}</p>
    </div>
</template>
<script setup>
defineProps({
    item: {
        type: Array,
        default: () => [],
    },
})
</script>
<style lang="scss" module>
.myCustomItemContainer {
    background-color: #fff;
    border-radius: 20px;
    font-size: 32px;
    padding: 24px;
    margin-bottom: 24px;
    @include flex-layout(row, flex-start);
    p {
        padding-left: 20px;
    }
}
.myCustomItemAvatar {
    border-radius: 50%;
    @include same-size(96px);
}
</style>
