<template>
    <div :class="$style.tabTransitionContainer">
        <div :class="$style.tabTransitionInner">
            <div ref="contentWrapper" :class="$style.tabTransitionContent">
                <div
                    v-for="(text, index) in data"
                    :key="index"
                    :class="[$style.tabTransitionItem, { [$style.active]: tabActive === index }]"
                    @click="onActiveSet(index)"
                >
                    {{ text }}
                </div>
                <div :class="$style.tabTransitionBgLine" :style="lineStyle"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, toRefs, computed, watch } from 'vue'
import { subColor, primaryColor } from '@/constant/theme'

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
    active: {
        type: Number,
        default: 0,
    },
})

const emit = defineEmits(['update:active'])

const tabActive = computed({
    set(active) {
        emit('update:active', active)
    },
    get() {
        return props.active
    },
})

const state = reactive({
    lineStyle: {},
})

watch(
    () => props.active,
    (active) => {
        onTransitionActive(active)
    }
)

const contentWrapper = ref(null)

const onTransitionActive = (index) => {
    const wrapper = contentWrapper.value
    const children = wrapper.children || wrapper.childNodes
    const node = children[index]
    if (node) {
        const left = node.offsetLeft + node.offsetWidth / 2
        const lineStyle = {
            transform: `translateX(${left}px) translateX(-50%)`,
            transition: `transform .2s ease`,
        }
        state.lineStyle = lineStyle
    }
}

const onActiveSet = (index) => {
    if (tabActive.value === index) {
        return
    }
    tabActive.value = index
}

const { lineStyle } = toRefs(state)
</script>
<style lang="scss" module>
.tabTransitionContainer {
    margin: 0 auto;
    display: inline-block;
}
.tabTransitionInner {
    background-color: #fff;
    border-radius: 40px;
    height: 80px;
    min-width: 380px;
    padding: 0 16px;
}
.tabTransitionContent {
    position: relative;
    height: 100%;
    z-index: 10;
    @include flex-layout(row, space-between);
}
.tabTransitionItem {
    width: 148px;
    flex-basis: 148px;
    font-size: 32px;
    color: v-bind(subColor);
    text-align: center;
}
.active {
    color: #fff;
}
.tabTransitionBgLine {
    background-color: v-bind(primaryColor);
    border-radius: 28px;
    position: absolute;
    z-index: -1;
    left: 0;
    width: 148px;
    height: 56px;
}
</style>
