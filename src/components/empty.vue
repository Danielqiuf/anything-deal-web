<template>
    <template v-if="hasData">
        <slot name="content"></slot>
    </template>
    <div v-else :class="$style.emptyContainer">
        <img :src="img" :class="$style.emptyImg" />
        <p :class="$style.emptyText">{{ text }}</p>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { array } from '@/utils/is'

const props = defineProps({
    type: {
        type: String,
        default: 'data',
    },
    data: {
        type: [Array, Object],
        required: false,
        default: () => [],
    },
    text: String,
})

const img = computed(() => require(`@/assets/images/empty-no${props.type}.png`))

const text = computed(() => {
    switch (props.type) {
        case 'data':
            return '暂无充值记录哦~'
        case 'custom':
            return '暂无客户哦~'
        case 'wallet':
            return '暂无资金明细哦~'
        default:
            return props.text
    }
})

const hasData = computed(() => {
    console.log('data', props.data)
    if (array(props.data)) {
        return props.data.length
    } else {
        return Object.keys(props.data).length
    }
})
</script>

<style lang="scss" module>
.emptyImg {
    width: 348px;
    height: 270px;
}
.emptyContainer {
    height: 100%;
    @include flex-layout(column);
}
.emptyText {
    color: #7d8188;
    font-size: 32px;
    padding: 32px;
}
</style>
