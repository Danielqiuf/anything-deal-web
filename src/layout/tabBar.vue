<template>
    <div :class="$style.tabBarContainer">
        <div :class="$style.tabBarContainerInner">
            <div
                v-for="(item, index) in tabBarDataList"
                :key="index"
                :class="$style.tabBarContainerItem"
                @click="onTabSwitch(index, item.url)"
            >
                <img
                    :src="tabIndex === index ? item.selectedIcon : item.icon"
                    alt="icon"
                    :class="$style.tabBarItemImage"
                />
                <p
                    :class="[
                        $style.tabBarItemText,
                        {
                            [$style.tabBarItemTextActive]: tabIndex === index,
                        },
                    ]"
                >
                    {{ item.label }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useTabBarData } from '@/hooks/init'

const router = useRouter()
const route = useRoute()

const tabBarDataList = useTabBarData()

const tabIndex = ref(0)

const onTabSwitch = (index, path) => {
    tabIndex.value = index
    router.replace(path)
}

watch(
    () => [route.fullPath, route.meta],
    ([fullPath, meta]) => {
        if (fullPath && meta.sort) {
            tabIndex.value = meta.sort - 1
        }
    },
    { immediate: true }
)
</script>

<style lang="scss" module>
.tabBarContainer {
    background-color: #fff;
    width: 100%;
    font-size: 22px;
    padding-bottom: 20px;
}

@supports (padding-bottom: constant(safe-area-inset-bottom)) or (padding-bottom: env(safe-area-inset-bottom)) {
    .tabBarContainer {
        padding-bottom: env(safe-area-inset-bottom);
        padding-bottom: constant(safe-area-inset-bottom);
    }
}
.tabBarContainerInner {
    @include thin-line(1px, #bfc8c2);
    padding: 16px 0 22px;
    @include flex-layout(row);
}
.tabBarContainerItem {
    flex: 1;
    @include flex-layout(column);
}
.tabBarItemImage {
    @include same-size(48px);
}
.tabBarItemText {
    color: #7d8188;
    padding-top: 10px;
}
.tabBarItemTextActive {
    color: #009dfe;
    transition: color 0.2s ease;
}
</style>
