<template>
    <div class="buttonWrapper">
        <Button class="vButton" :type="type" :color="color" :plain="plain" :hairline="hairline" @click="emits('click')">
            {{ title }}
        </Button>
    </div>
</template>
<script setup>
import { computed, toRefs } from 'vue'
import { Button } from 'vant'
import { primaryColor } from '@/constant/theme'
import utils from '@/utils'

const props = defineProps({
    color: {
        type: String,
        default: primaryColor,
    },
    type: {
        type: String,
        default: 'default',
    },
    fontColor: {
        type: String,
        default: '#2b2d2b',
    },
    borderColor: {
        type: String,
        default: primaryColor,
    },
    title: String,
    plain: {
        type: Boolean,
        default: false,
    },
    hairline: {
        type: Boolean,
        default: false,
    },
    width: {
        type: String,
        required: false,
        default: '200',
    },
    height: {
        type: String,
        required: false,
        default: '100',
    },
    fontSize: {
        type: String,
        default: '24',
    },
    radius: {
        type: String,
        default: '4',
    },
})

const emits = defineEmits(['click'])

const { color, fontColor, width, height, radius, borderColor, fontSize } = toRefs(props)

const borderRadius = utils.px2rem(radius.value)

const buttonSize = computed(() => {
    const s = {}
    if (width.value && width.value !== 'auto') {
        Object.assign(s, { width: utils.px2rem(width.value) })
    }
    if (height.value && height.value !== 'auto') {
        Object.assign(s, { height: utils.px2rem(height.value) })
    }
    return s
})

const buttonFontSize = utils.px2rem(fontSize.value)

const { width: buttonWidth, height: buttonHeight } = buttonSize.value
</script>
<style lang="scss" scoped>
.buttonWrapper {
    :deep(.van-button) {
        padding: 0 !important;
        height: v-bind(buttonHeight);
        width: v-bind(buttonWidth);
        border-radius: v-bind(borderRadius);
        font-size: v-bind(buttonFontSize);
    }
    :deep(.van-button--default) {
        background: transparent !important;
        color: v-bind(fontColor) !important;
        border-color: v-bind(borderColor) !important;
    }
}
</style>
