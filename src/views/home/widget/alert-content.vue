<template>
    <div :class="$style.alertTop">
        <img :src="require('@/assets/images/pop-top.png')" />
        <p>确认订单信息</p>
    </div>
    <div :class="$style.alertContent">
        <div :class="$style.contentBlock">
            <div :class="$style.alertContentItem">
                <p>充值号码</p>
                <p>18899092293</p>
            </div>
            <div :class="$style.alertContentItem">
                <p>套餐</p>
                <p>广东移动活动流量</p>
            </div>
            <div :class="$style.alertContentItem">
                <p>售价</p>
                <p>4.88</p>
            </div>
            <div :class="$style.alertSmsWrapper">
                <Input v-model="smsCode" type="digit" placeholder="请输入验证码" font-size="28" />
                <p
                    :class="[
                        $style.alertSmsButton,
                        {
                            [$style.alertSmsButtonDisabled]: timeout > 0,
                        },
                    ]"
                    @click="getCode"
                >
                    {{ button }}
                </p>
            </div>
            <p :class="$style.alertSmsDesc">请确认充值号码无误，充值无法退回！</p>
            <div :class="$style.alertSmsWrapper">
                <Input
                    v-model="desc"
                    :textarea="{
                        rows: 1,
                        autosize: {
                            maxHeight: utils.px2rem(64),
                            minHeight: utils.px2rem(64),
                        },
                    }"
                    font-size="30"
                />
            </div>
            <div :class="$style.policy" @click="policy = !policy">
                <img
                    :src="
                        policy ? require('@/assets/images/checkbox-1.png') : require('@/assets/images/checkbox-0.png')
                    "
                />
                请同意
                <p>《隐私声明》</p>
            </div>
            <div :class="$style.alertAction">
                <Button
                    title="取消"
                    radius="38"
                    :font-color="primaryColor"
                    color="white"
                    width="252"
                    height="76"
                    plain
                    @click="visible(false)"
                />
                <Button title="确认下单" type="primary" radius="38" width="252" height="76" />
            </div>
        </div>
    </div>
</template>
<script setup>
import Input from '@/components/input'
import Button from '@/components/button'
import utils from '@/utils'
import { subColor, primaryColor, disabledColor } from '@/constant/theme'
import { showToast } from 'vant'
import { ref, computed, useAttrs, toRefs } from 'vue'
const desc = ref('广东移动活动流量【验证码】10G7天')
const attrs = useAttrs()

const timeout = ref(0)
const smsCode = ref('')
const tt = ref(null)
const policy = ref(false)

const t = 60

const button = computed(() => {
    return timeout.value === 0 ? '获取验证码' : `${timeout.value}秒后获取`
})

const validate = () => {
    return smsCode.value !== ''
}

const getCode = () => {
    if (!validate()) {
        showToast({
            message: '请输入验证码！',
            icon: 'warning',
        })
        return
    }
    if (tt.value) {
        return
    }
    timeout.value = t
    const loop = () => {
        tt.value = setTimeout(() => {
            timeout.value -= 1
            if (timeout.value === 0) {
                clearTimeout(tt.value)
                tt.value = null
            } else loop()
        }, 1000)
    }
    loop()
}

const { visible } = toRefs(attrs)
</script>
<style lang="scss" module>
.alertTop {
    width: 606px;
    height: 268px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    p {
        font-size: 44px;
        color: #fff;
        position: absolute;
        top: 118px;
        left: 42px;
    }
}
.alertContent {
    background: url(~@/assets/images/pop-bg.png) no-repeat center center / cover;
    width: 100%;
    height: 686px;
    margin-top: 206px;

    position: relative;
}
.contentBlock {
    position: absolute;
    width: 100%;
    top: 20px;
    left: 0;
    padding: 30px;
}
.alertContentItem {
    padding: 20px 0;
    font-size: 28px;
    font-weight: bold;
    @include flex-layout(row, space-between);
    p:first-of-type {
        color: v-bind(subColor);
        font-weight: 400;
    }
}
.alertSmsWrapper {
    border-radius: 8px;
    background-color: #f1f2f3;
    max-height: 72px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    padding: 10px 30px;
    @include flex-layout;
}
.alertSmsDesc {
    color: #ff8417;
    padding: 22px 0;
    font-size: 26px;
}

.alertSmsButton {
    flex-shrink: 0;
    font-size: 28px;
    margin-left: 14px;
    color: v-bind(primaryColor);
}
.alertSmsButtonDisabled {
    color: v-bind(disabledColor);
}
.policy {
    font-size: 26px;
    padding: 26px 0;
    img {
        margin-right: 6px;
        @include same-size(28px);
    }
    p {
        color: v-bind(primaryColor);
    }
    @include flex-layout(row, flex-start);
}
.alertAction {
    @include flex-layout(row, space-around);
}
</style>
