<template>
    <div :class="$style.panelItemWrapper">
        <div :class="$style.panelItemContainer">
            <img :src="item.icon" :class="$style.panelItemIcon" />
            <div>
                <p :class="$style.panelItemPrice">{{ item.price }}</p>
                <p :class="$style.panelItemLabel">{{ item.label }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
})

const { item } = toRefs(props)
console.log('item', item, item.value)
</script>

<style lang="scss" module>
.panelItemWrapper {
    flex-basis: 33.333%;
    box-sizing: border-box;
    margin-right: 20px;
    &:last-of-type {
        margin-right: 0;
    }
}
.panelItemContainer {
    background: #fff;
    border-radius: 32px;
    height: 120px;
    @include flex-layout;
}
.panelItemIcon {
    width: 78px;
    height: 78px;
    margin-right: 12px;
}
.panelItemPrice {
    font-weight: bold;
    color: #ff8500;
    font-size: 28px;
    word-break: break-all;
    white-space: pre-wrap;
}
.panelItemLabel {
    padding-top: 14px;
    font-size: 24px;
    text-align: center;
}
</style>
