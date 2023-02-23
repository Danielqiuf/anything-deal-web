<template>
    <div :class="$style.withdrawingContainer">
        <p>提现金额(元)</p>
        <div :class="$style.withdrawingMain">
            <Input v-model="price" font-size="52" type="digit" class="input" placeholder="请输入提现金额" />
            <div :class="$style.allButton">全部</div>
        </div>
        <p :class="$style.withdrawingDesc">最低5元起提</p>
    </div>
</template>
<script setup>
import Input from '@/components/input'
import { primaryColor } from '@/constant/theme'
import { ref } from 'vue'

const price = ref('')
</script>

<style lang="scss" module>
.withdrawingContainer {
    background-color: #fff;
    border-radius: 20px;
    padding: 40px;
    font-size: 32px;
    margin-top: 24px;
}
.withdrawingMain {
    padding: 38px 0;
    @include thin-line(1px, #e3e9f0, bottom);
    @include flex-layout;
}
.allButton {
    color: v-bind(primaryColor);
    font-size: 32px;
    white-space: nowrap;
    padding: 0 10px;
}
.withdrawingDesc {
    color: #ff8417;
    font-size: 28px;
    padding-top: 24px;
}
</style>
