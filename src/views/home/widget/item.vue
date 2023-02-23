<template>
    <div :class="$style.itemLabel">
        <p :class="$style.itemP">{{ item.region }}</p>
        <p :class="$style.itemPerc">{{ item.desc }}</p>
        <div :class="$style.moreDetail">
            详情
            <img :src="require('@/assets/images/more.png')" :class="$style.moreImg" />
        </div>
    </div>
    <div :class="$style.itemListWrapper">
        <div
            v-for="({ originalPrices, price, tagText }, index) in item.list"
            :key="index"
            :class="$style.itemListItem"
            @click="emits('click')"
        >
            <p>{{ originalPrices.length > 1 ? `${originalPrices[0]}元/${originalPrices[1]}元` : originalPrices[0] }}</p>
            <p :class="$style.itemListItemDesc">售价：{{ price }}</p>
            <div :class="$style.itemListItemTag">
                {{ tagText }}
            </div>
        </div>
    </div>
</template>
<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
})

const emits = defineEmits(['click'])

const { item } = toRefs(props)
</script>

<style lang="scss" module>
.itemLabel {
    @include flex-layout(row);
    font-size: 28px;
    padding: 24px 0;
    &:before {
        content: '';
        width: 6px;
        height: 28px;
        background-color: #009dfe;
        border-radius: 3px;
    }
}
.itemListWrapper {
    @include flex-layout(row);
    flex-wrap: wrap;
}
.itemListItemTag {
    position: absolute;
    background: url(~@/assets/images/tag.png) no-repeat 0 0 / cover;
    top: 0;
    left: 0;
    width: 100px;
    height: 34px;
    color: #fff;
    font-size: 20px;
    line-height: 1;
    @include flex-layout(column);
}
.itemListItem {
    border-radius: 16px;
    background-color: #f5f9ff;
    line-height: 44px;
    flex: 1;
    font-size: 32px;
    padding: 44px 0;
    text-align: center;
    position: relative;
    margin-right: 24px;
    &:last-of-type {
        margin-right: 0;
    }
}
.itemListItemDesc {
    color: #009dfe;
    font-size: 24px;
    line-height: 34px;
    margin-top: 4px;
}
.itemP {
    padding: 0 14px;
}
.itemPerc {
    flex: 1;
    color: #ff8417;
}
.moreImg {
    width: 20px;
    height: 22px;
}
.moreDetail {
    color: #b2b8c0;
    font-size: 26px;
}
</style>
