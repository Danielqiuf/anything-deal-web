<template>
    <Overlay :show="value" @click="value = false">
        <div :class="$style.alertContainer">
            <div :class="$style.alertBlock" @click.stop>
                <slot></slot>
            </div>
            <img :class="$style.alertCloseImg" :src="require('@/assets/images/pop-close.png')" @click="value = false" />
        </div>
    </Overlay>
</template>
<script setup>
import { Overlay } from 'vant'
import { computed } from 'vue'
import utils from '@/utils'

const props = defineProps({
    modelValue: Boolean,
    width: {
        type: String,
        default: '600',
    },
    showClose: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['update:modelValue'])

const width = utils.px2rem(props.width)

const value = computed({
    get() {
        return props.modelValue
    },
    set(v) {
        emit('update:modelValue', v)
    },
})
</script>
<style lang="scss" module>
.alertContainer {
    height: 100%;
    @include flex-layout(column);
}
.alertBlock {
    width: v-bind(width);
    position: relative;
}
.alertCloseImg {
    margin-top: 34px;
    @include same-size(50px);
}
</style>
