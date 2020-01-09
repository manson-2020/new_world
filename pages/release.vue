<template>
    <view class="root">
        <navigator url="/pages/releaseInformation" class="add-btn" hover-class="navigator-hover">
            <image class="icon-add" src="/static/imgs/icon-add.png" />
        </navigator>
    </view>
</template>

<script>
    export default {};
</script>

<style>
    .add-btn {
        position: fixed;
        bottom: 100rpx;
        right: 30rpx;
        padding: 0;
        line-height: 0;
        border-radius: 50%;
    }

    .add-btn::after {
        border: none;
    }

    .icon-add {
        width: 120rpx;
        height: 120rpx;
    }
</style>