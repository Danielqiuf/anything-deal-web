<template>
    <div class="mainHomeContainer">
        <div class="mainHomeSwiperWrapper">
            <Swiper centered-slides class="swiperContainer">
                <SwiperSlide v-for="(src, index) in bannerList" :key="index" class="swiper-slide">
                    <img :src="src" />
                </SwiperSlide>
            </Swiper>
        </div>
        <Phone />
        <div style="overflow: hidden">
            <Tabs v-model:active="serviceIndex" animated class="tab-v">
                <Tab v-for="(item, index) in serviceTabList" :key="index">
                    <template #title>
                        <img :src="serviceIndex === index ? item.selectedIcon : item.icon" class="serviceImg" />
                        {{ item.label }}
                    </template>
                </Tab>
            </Tabs>
        </div>
        <div class="itemWrapper">
            <Item v-for="item in dataList" :key="item.id" :item="item" @click="alert = true" />
        </div>
    </div>
    <Alert v-model="alert" width="660" show-close>
        <AlertContent :visible="visible" />
    </Alert>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Tabs, Tab } from 'vant'
import { useServiceTabData } from '@/hooks/init'
import AlertContent from './widget/alert-content'
import Phone from './widget/phone'
import Item from './widget/item'
import Alert from '@/components/alert'
import 'swiper/css'
import { reactive, ref } from 'vue'

const serviceTabList = useServiceTabData()

const serviceIndex = ref(0)

const alert = ref(false)

const bannerList = reactive([require('@/assets/images/banner.png'), require('@/assets/images/banner.png')])

const visible = (v) => {
    alert.value = v
}

/** 静态假数据 */
const dataList = [
    {
        region: '全国移动活动花费',
        desc: '70%成功率',
        id: '1',
        list: [
            {
                tagText: '仅限1次',
                originalPrices: [3, 5],
                price: 1.88,
            },
            {
                tagText: '仅限1次',
                originalPrices: [3, 5],
                price: 1.88,
            },
            {
                tagText: '仅限1次',
                originalPrices: [3, 5],
                price: 1.88,
            },
        ],
    },
    {
        region: '汕尾移动活动话费',
        desc: '96小时到账',
        id: '2',
        list: [
            {
                tagText: '95折扣',
                originalPrices: [100],
                price: 95,
            },
            {
                tagText: '95折扣',
                originalPrices: [200],
                price: 190,
            },
            {
                tagText: '95折扣',
                originalPrices: [200],
                price: 190,
            },
        ],
    },
    {
        region: '全国移动慢充',
        desc: '4-6天左右到账',
        id: '3',
        list: [
            {
                tagText: '96.8折',
                originalPrices: [100],
                price: 95,
            },
            {
                tagText: '96.8折',
                originalPrices: [200],
                price: 193.6,
            },
            {
                tagText: '96.8折',
                originalPrices: [200],
                price: 193.6,
            },
        ],
    },
    {
        region: '全国移动慢充',
        desc: '24小时到账',
        id: '4',
        list: [
            {
                tagText: '96.8折',
                originalPrices: [100],
                price: 95,
            },
            {
                tagText: '96.8折',
                originalPrices: [200],
                price: 193.6,
            },
            {
                tagText: '96.8折',
                originalPrices: [200],
                price: 193.6,
            },
        ],
    },
]
</script>

<style lang="scss">
.mainHomeContainer {
    padding: 20px 0 40px;
    background: url(~@/assets/images/indexbg.png) no-repeat;
    background-size: contain;
    background-position-y: -200px;
    background-position-x: 0px;

    .van-tab__text {
        font-size: 32px;
        @include flex-layout(row);
    }
    .van-tabs__line {
        background: #009dfe;
        width: 40px;
        left: 30px;
        bottom: 46px;
    }
    .van-tab--active {
        color: #009dfe;
    }
}
.tab-v {
    padding: 10px 0;
    background-color: #fff;
    :deep(.van-tabs__nav--line) {
        padding-bottom: 0 !important;
    }
}
.mainHomeSwiperWrapper {
    padding: 0 16px;
    overflow: hidden;
}
.swiperContainer {
    width: 100%;
}
:deep(.swiper-slide) {
    height: 288px;
}
.serviceImg {
    width: 50px;
    height: 48px;
    margin-right: 10px;
}
.title {
    font-size: 32px;
    color: #989da4;
}
.itemWrapper {
    padding: 0 32px;
}
</style>
