<template>
    <div class="myCustomContent">
        <p class="myCustomContentTitle">共<span>3</span>人</p>
        <Swiper
            centered-slides
            :slides-per-view="1"
            :space-between="22"
            class="swiperContainer"
            @swiper="onSetSwiper"
            @slideChange="onSwiperChange"
        >
            <SwiperSlide v-for="(_, index) in data" :key="index">
                <Item v-for="item in list" :key="item.id" :item="item" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
}
</script>
<script setup>
import Item from './item'
import { useAttrs, watch, ref, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const emits = defineEmits(['update:active'])

const props = defineProps({
    active: Number,
})

const swiper = ref(null)
const attrs = useAttrs()
const list = [
    {
        id: '1',
        avatar: require('@/assets/images/avatar1.jpg'),
        name: '可可西里',
    },
    {
        id: '2',
        avatar: require('@/assets/images/avatar2.webp'),
        name: '王月明',
    },
    {
        id: '3',
        avatar: require('@/assets/images/avatar3.webp'),
        name: '刘丹',
    },
]

const onSwiperChange = (e) => {
    emits('update:active', e.activeIndex)
}

const onSetSwiper = (e) => {
    swiper.value = e
}

watch(
    () => props.active,
    (active) => {
        swiper.value.slideTo(active)
    },
    { deep: true }
)

const { data } = toRefs(attrs)
</script>
<style lang="scss">
.myCustomContent {
    flex: 1;
    overflow: auto;
}
.myCustomContentTitle {
    font-size: 32px;
    padding: 16px 30px;
    background-color: #fff;
    @include flex-layout(row, flex-start);
    span {
        color: #ff8417;
    }
}

.swiperContainer {
    width: 100%;
    padding: 24px 30px;
    //margin: 0 30px;
}
</style>
