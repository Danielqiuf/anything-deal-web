<template>
    <div :class="$style.headerContainer">
        <div :class="$style.headerSearchWrapper">
            <div :class="$style.headerSearchIcon">
                <img :src="require('@/assets/images/search-icon.png')" alt="" />
            </div>
            <Input v-model="keyword" font-size="28" class="input" placeholder="请输入号码进行搜索" />
            <Button :class="$style.headerButton" type="primary" title="搜索" width="130" height="48" radius="23" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Input from '@/components/input'
import Button from '@/components/button'

const keyword = ref('')
</script>
<style lang="scss" module>
.headerContainer {
    padding: 34px 30px;
    margin-bottom: 4px;
    background-color: #33b1ff;
    font-size: 28px;
}
.headerSearchWrapper {
    background-color: #fff;
    border-radius: 34px;
    padding: 14px 10px 14px 0;
    height: 68px;
    @include flex-layout;
}
.headerSearchIcon {
    flex-basis: 80px;
    width: 80px;
    text-align: center;
    img {
        @include same-size(28px);
    }
}
.headerButton {
    margin-left: 20px;
}
</style>
