<template>
    <div :class="$style.userContainer">
        <div :class="$style.userMaskPanel">
            <img :src="require('@/assets/images/userMask.png')" />
            <div :class="$style.userInfoMain">
                <img :src="userInfo.avatar" :class="[$style.userInfoAvatar, $style.userInfoSpace]" />
                <p :class="[$style.userInfoName, $style.userInfoSpace]">{{ userInfo.userName }}</p>
                <p :class="[$style.userInfoPhoneNumber, $style.userInfoSpace]">
                    绑定手机号：{{ userInfo.phoneNumber }}
                </p>
                <div :class="$style.userInfoPanelWrapper">
                    <Panel v-for="(item, index) in panelList" :key="index" :item="item" />
                </div>
            </div>
        </div>
        <Gangnam />
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { usePanelData } from '@/hooks/init'
import Panel from './widget/panel'
import Gangnam from './widget/gangnam'

const userInfo = reactive({
    avatar: require('@/assets/images/default-avatar.webp'),
    userName: '白月有光',
    phoneNumber: '1397893226',
})

const panelList = usePanelData()
</script>

<style lang="scss" module>
.userContainer {
    padding: 40px 0 0;
    background: url(~@/assets/images/userBg.png) no-repeat;
    background-size: contain;
    height: 100%;
    overflow: auto;
    @include flex-layout(column, normal, normal);
}
.userMaskPanel {
    position: relative;
    & > img {
        height: 496px;
    }
}
.userInfoMain {
    position: absolute;
    top: 0;
    left: 0;
    height: 496px;
    width: 100%;
    @include flex-layout(column, flex-start);
}
.userInfoSpace {
    margin: 12px 0;
}
.userInfoAvatar {
    border-radius: 50%;
    object-fit: contain;
    box-shadow: 0 4px 10px 0px rgba(66, 66, 66, 0.66);
    @include same-size(120px);
}
.userInfoName {
    font-size: 36px;
}
.userInfoPhoneNumber {
    font-size: 28px;
    color: #7d8188;
}
.userInfoPanelWrapper {
    @include flex-layout;
    width: 100%;
    padding: 0 30px;
    height: 418px;
}
</style>
