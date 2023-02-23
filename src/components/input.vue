<template>
    <van-field
        v-model="value"
        :type="inputType"
        class="field"
        :border="border"
        :placeholder="placeholder"
        v-bind="{ ...(textareaProps || {}) }"
    >
        <template #right-icon> <van-icon v-if="value" name="clear" class="close-icon" @click="value = ''" /> </template>
    </van-field>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { labelColor } from '@/constant/theme'
import utils from '@/utils'
import { object } from '@/utils/is'

const props = defineProps({
    modelValue: String,
    placeholder: String,
    border: {
        type: Boolean,
        default: false,
    },
    textarea: {
        type: Object,
        default: () => ({}),
    },
    type: {
        type: String,
        default: 'text',
    },
    fontSize: {
        type: String,
        default: '44',
    },
    fontColor: {
        type: String,
        default: labelColor,
    },
})

const emit = defineEmits(['update:modelValue'])

const fontSize = utils.px2rem(props.fontSize)

const fontColor = ref(props.fontColor)

const value = computed({
    set(value) {
        emit('update:modelValue', value)
    },
    get() {
        return props.modelValue
    },
})

const textareaProps = computed(() =>
    props.textarea !== undefined && object(props.textarea) && Object.keys(props.textarea).length > 0
        ? props.textarea
        : null
)
const inputType = computed(() => {
    return textareaProps.value !== null ? 'textarea' : props.type
})

const stopTextArea = (e) => {
    e.stopPropagation()
}

onMounted(() => {
    window.addEventListener('touchmove', stopTextArea, true)
})

onUnmounted(() => {
    window.removeEventListener('touchmove', stopTextArea)
})
</script>
<style lang="scss" scoped>
.close-icon {
    font-size: 42px;
    color: #cbd3d8;
}
:global(.van-cell),
:global(.van-field__control) {
    background: transparent !important;
}
:global(.van-cell) {
    padding: 0 !important;
}
.field:deep(.van-field__control) {
    font-size: v-bind(fontSize) !important;
    color: v-bind(fontColor) !important;
}
:global(textarea) {
    overflow: auto;
}
</style>
