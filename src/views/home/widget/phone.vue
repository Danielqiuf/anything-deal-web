<template>
    <div class="phoneContainer">
        <div class="phoneInner">
            <img :src="require('@/assets/images/phone.png')" class="phoneImg" />
            <van-field v-model="phoneNumber" type="digit" class="field" placeholder="填写手机号码" @click="clear">
                <template #right-icon>
                    <img
                        v-if="phoneNumber"
                        :src="require('@/assets/images/close.png')"
                        class="close-icon"
                        @click="phoneNumber.value = ''"
                    />
                </template>
            </van-field>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const phoneNumber = ref('13233565586')

const clear = () => {
    console.log('clear')
}
</script>

<style lang="scss" scoped>
.phoneContainer {
    padding: 14px 30px 0;
    background: #fff;
}
.phoneInner {
    @include flex-layout(row, flex-start);
    @include thin-line(1px, #d7dee3, bottom);
    padding-bottom: 14px;
}
.phoneImg {
    width: 32px;
    height: 52px;
    margin-right: 20px;
}
.phoneNumber {
    font-weight: bold;
    font-size: 48px;
    color: #2b2d2b;
    padding-left: 20px;
}
:deep(.van-cell),
:deep(.van-field__control) {
    font-size: 44px;
    background: transparent !important;
}
:deep(.van-cell) {
    padding: 0;
}
.close-icon {
    @include same-size(36px);
}
</style>
