<template>
    <div :class="$style.recordContainer">
        <Header />
        <div :class="$style.recordListWrapper">
            <Item v-for="item in orderList" :key="item.id" :item="item" />
        </div>
    </div>
</template>
<script setup>
import Header from './widget/header'
import Item from './widget/item'
import { reactive } from 'vue'

const orderList = reactive([
    {
        id: '1',
        phoneNumber: '18836738999',
        status: 1,
        statusText: '已退款',
        packageName: '揭阳移动专属话费50元',
        orderPrice: 40,
        payTime: '2022-3-30 13:15:20',
    },
    {
        id: '2',
        phoneNumber: '18836738999',
        status: 1,
        statusText: '已退款',
        packageName: '揭阳移动专属话费50元',
        orderPrice: 40,
        payTime: '2022-3-30 13:15:20',
    },
    {
        id: '3',
        phoneNumber: '18836738999',
        status: 2,
        statusText: '充值完成',
        packageName: '揭阳移动专属话费50元',
        orderPrice: 40,
        payTime: '2022-3-30 13:15:20',
    },
    {
        id: '4',
        phoneNumber: '18836738999',
        status: 2,
        statusText: '充值完成',
        packageName: '揭阳移动专属话费50元',
        orderPrice: 40,
        payTime: '2022-3-30 13:15:20',
    },
    {
        id: '5',
        phoneNumber: '18836738999',
        status: 2,
        statusText: '充值完成',
        packageName: '揭阳移动专属话费50元',
        orderPrice: 40,
        payTime: '2022-3-30 13:15:20',
    },
])
</script>
<style lang="scss" module>
.recordContainer {
    height: 100%;
    background-color: #f8f8f8;
    @include flex-layout(column, normal, normal);
}
.recordListWrapper {
    flex: 1;
    padding: 24px 30px;
    overflow: auto;
}
</style>
