<template>
    <div :class="$style.gangnamContainer">
        <p :class="$style.gangnamLabel">主要功能</p>
        <div :class="$style.gangnamListWrapper">
            <div v-for="(item, index) in list" :key="index" :class="$style.gangnamListItem" @click="to(index)">
                <div :class="$style.gangnamListItemInner">
                    <img :src="item.icon" :class="$style.gangnamListItemIcon" />
                    <p>{{ item.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useGangnamData } from '@/hooks/init'
import { useRouter } from 'vue-router'

const list = useGangnamData()
const router = useRouter()

const routes = ['/record', '/withdrawal', '/my-custom', '/detail/capital', '']

const to = (index) => {
    router.push(routes[index])
}
</script>
<style lang="scss" module>
.gangnamContainer {
    flex-grow: 1;
    flex-shrink: 0;
    overflow: auto;
    padding: 48px 30px;
    background: linear-gradient(137deg, #ffffff 0%, #fef6ea 100%);
}
.gangnamLabel {
    font-weight: bold;
    font-size: 32px;
}
.gangnamListWrapper {
    margin-top: 36px;
    @include flex-layout(row, normal, normal);
    flex-wrap: wrap;
}
.gangnamListItem {
    flex-basis: 25%;
    padding-right: 16px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 42px;
    &:nth-of-type(4n) {
        margin-right: 0;
    }
    p {
        padding-top: 16px;
        white-space: nowrap;
    }
}
.gangnamListItemInner {
    @include flex-layout(column);
}
.gangnamListItemIcon {
    @include same-size(60px);
}
</style>
