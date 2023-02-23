<template>
    <div :class="$style.detailList">
        <Empty :data="list">
            <template #content>
                <DetailItem v-for="item in list" :key="item.orderId" :item="item" />
            </template>
        </Empty>
    </div>
</template>
<script setup>
import DetailItem from '@/components/detailItem'
import Empty from '@/components/empty'
import { useRoute } from 'vue-router'
import { reactive, watch, toRefs } from 'vue'

const route = useRoute()

const state = reactive({
    list: [],
})

/** 模拟请求拿数据 */
const getData = () => {
    console.log('rpoute', route.params.type)
    switch (route.params.type) {
        case 'capital': {
            state.list = [
                {
                    orderType: 1,
                    orderId: 'TX1648573520',
                    price: '10.00',
                    createTime: '2023-03-30 14:33:22',
                },
                {
                    orderType: 2,
                    orderId: 'TCB1644885986',
                    price: '999.00',
                    createTime: '2023-03-30 14:33:22',
                },
            ]
            break
        }
        case 'recharge': {
            state.list = [{}]
        }
    }
}

watch(
    () => route,
    (newRoute) => {
        if (newRoute.params.type && newRoute.meta.titleMap && newRoute.meta.titleMap[newRoute.params.type]) {
            getData()
        }
    },
    { deep: true, immediate: true }
)

const { list } = toRefs(state)
</script>

<style lang="scss" module>
.detailList {
    height: 100%;
    background: #f8f8f8;
    padding: 32px 30px;
}

//.withdrawwalbutton: deep(.);
</style>
