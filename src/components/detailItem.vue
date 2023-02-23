<template>
    <div :class="$style.detailItemWrapper">
        <img :src="orderTypeInfo.icon" :class="$style.detailOrderTypeImg" />
        <div :class="$style.detailOrderInfo">
            <p>{{ orderTypeInfo.label }}</p>
            <p>订单号：{{ item.orderId }}</p>
        </div>
        <div :class="$style.detailOrderChange">
            <p>{{ uniType }}{{ item.price }}</p>
            <p>{{ item.createTime }}</p>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { redColor, subColor } from '@/constant/theme'

const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
})

const orderTypeInfo = computed(() => {
    const orderTypeMap = new Map([
        [1, { icon: require('@/assets/images/tb1.png'), label: '提现申请' }],
        [2, { icon: require('@/assets/images/tb2.png'), label: '后台充值' }],
    ])

    const { icon, label } = orderTypeMap.get(props.item.orderType)

    return { icon, label }
})

const uniType = computed(() => {
    return props.item.orderType === 1 ? '-' : '+'
})
</script>
<style lang="scss" module>
.detailItemWrapper {
    background-color: #fff;
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 20px;
    @include flex-layout(row, flex-start);
}
.detailOrderTypeImg {
    @include same-size(96px);
}
.detailOrderInfo,
.detailOrderChange {
    font-size: 24px;
    margin-left: 12px;

    p:first-of-type {
        font-size: 32px;
        font-weight: bold;
        padding-bottom: 24px;
    }
}
.detailOrderInfo {
    flex: 1;
}
.detailOrderChange {
    p:first-of-type {
        text-align: right;
        color: v-bind(redColor);
    }
    p:last-of-type {
        color: v-bind(subColor);
    }
}
</style>
