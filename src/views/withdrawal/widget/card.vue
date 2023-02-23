<template>
    <div class="withdrawalCardInfo">
        <div class="withdrawalCardInner">
            <div class="withdrawalCardItem">
                <p class="withdrawalCardItemPrice">999.00</p>
                <p class="withdrawalCardItemDesc">可提现金额</p>
            </div>
            <div class="withdrawalCardItem">
                <p class="withdrawalCardItemPrice">1028.00</p>
                <p class="withdrawalCardItemDesc">可提现金额</p>
            </div>
        </div>

        <div class="withdrawalButton">
            <Button
                font-size="28"
                font-color="#fff"
                title="提现记录"
                border-color="#fff"
                radius="22"
                plain
                width="160"
                height="44"
            />
        </div>
    </div>
</template>
<script setup>
import Button from '@/components/button'
</script>

<style lang="scss">
.withdrawalCardInfo {
    height: 286px;
    padding-top: 44px;
    background: url(~@/assets/images/withdrawalBg.png) no-repeat center center / cover;
}
.withdrawalCardInner {
    @include flex-layout;
    text-align: center;
}
.withdrawalCardItem {
    flex: 1;
    color: #fff;
    @include flex-layout(column);
    &:first-of-type {
        border-right: 1px solid #fff;
    }
}
.withdrawalCardItemPrice {
    font-size: 56px;
    font-weight: bold;
    line-height: 64px;
}
.withdrawalCardItemDesc {
    font-size: 30px;
    font-weight: 300;
    padding-top: 16px;
}
.withdrawalButton {
    text-align: right;
    margin-top: 34px;
    font-size: 28px;
    padding-right: 40px;
}
//.withdrawwalbutton: deep(.);
</style>
