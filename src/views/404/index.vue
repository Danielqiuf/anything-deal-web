<template>
    <div :class="$style.Container404">
        <Empty type="data">
            <p>您要找的页面不存在哟~</p>
        </Empty>
    </div>
</template>

<script setup>
import Empty from '@/components/empty'
</script>

<style lang="scss" module>
.Container404 {
    height: 100%;
    background-color: #fff;
    @include flex-layout(column);
    img {
        width: 348px;
        height: 270px;
    }
    p {
        color: #7d8188;
        font-size: 32px;
        padding: 32px;
    }
}
</style>
