<template>
    <div :class="$style.withdrawalContainer">
        <Card />
        <Withdrawing />
        <div :class="$style.withdrawalWechat">
            <img :src="require('@/assets/images/wechat-icon.png')" />
            <Input v-model="wechat" type="digit" font-size="32" placeholder="请输入微信号，以便联系" />
        </div>
        <div :class="$style.withdrawalButton">
            <Button
                title="提现"
                width="690"
                height="88"
                radius="44"
                font-size="32"
                font-color="#fff"
                color="linear-gradient(360deg, #27ADFF 0%, #55D6FF 100%)!important"
            />
        </div>
    </div>
</template>
<script setup>
import Card from './widget/card'
import Withdrawing from './widget/withdrawing'
import Input from '@/components/input'
import Button from '@/components/button'
import { ref } from 'vue'

const wechat = ref('')
</script>

<style lang="scss" module>
.withdrawalContainer {
    height: 100%;
    background: #f8f8f8;
    overflow: auto;
    padding: 32px 30px;
}
.withdrawalWechat {
    background-color: #fff;
    border-radius: 20px;
    padding: 30px 40px;
    @include flex-layout;
    margin-top: 24px;
    img {
        @include same-size(60px);
        margin-right: 24px;
    }
}
.withdrawalButton {
    margin-top: 24px;
}
//.withdrawwalbutton: deep(.);
</style>
