<template>
    <div :class="$style.itemWrapper">
        <div :class="$style.itemTitle">
            <img :src="require('@/assets/images/phone.png')" />
            <p>{{ item.phoneNumber }}</p>
            <p :style="{ color: statusColor }">{{ item.statusText }}</p>
        </div>
        <div :class="$style.itemContent">
            <p :class="$style.itemRow">
                套餐
                <span>{{ item.packageName }}</span>
            </p>
            <p :class="$style.itemRow">
                实付款
                <span :class="$style.itemOrderPrice">{{ item.orderPrice }}元</span>
            </p>
            <p :class="$style.itemRow">
                付款时间
                <span>{{ item.payTime }}</span>
            </p>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'

const colors = {
    1: '#FF3434',
    2: '#2EB230',
}

const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
})

const statusColor = computed(() => colors[props.item.status] || '#2b2d2b')
</script>
<style lang="scss" module>
.itemWrapper {
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 20px;
}
.itemTitle {
    background-color: #ececec;
    height: 68px;
    font-size: 32px;
    padding: 0 24px;
    @include flex-layout(row, space-between);
    img {
        width: 32px;
        height: 46px;
    }
    p:first-of-type {
        flex-grow: 1;
        margin-left: 12px;
        font-weight: bold;
    }
}
.itemContent {
    background-color: #fff;
    padding: 22px 24px 0;
}
.itemRow {
    font-size: 28px;
    color: #7d8188;
    @include flex-layout(row, space-between);
    padding-bottom: 22px;
    line-height: 40px;
    span {
        color: #2b2d2b;
    }
}
.itemOrderPrice {
    color: #ff8417 !important;
}
</style>
