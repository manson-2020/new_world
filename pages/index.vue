<template>
    <view class="root height-100vh">
        <swiper
            class="swiper"
            :indicator-dots="true"
            :autoplay="true"
            :interval="2000"
            :duration="500"
            indicator-color="#fff"
            indicator-active-color="#2d6dcc"
        >
            <swiper-item v-for="(item, index) in swiperImages" :key="index">
                <image class="height-100percent width-100percent" mode="aspectFill" :src="item" />
            </swiper-item>
        </swiper>
        <view class="main f1">
            <view class="title bgc-fff fd-row ai-center jc-sb">
                <view class="lh-100 fd-row fs-32 fw-500">
                    <text
                        v-for="(item, index) in tabs"
                        :key="index"
                        @click="tabChange({detail: {current: index}})"
                        :class="['mr-44','title-text', {'active': index == tabIndex}]"
                    >{{ item.text }}</text>
                </view>
                <view class="fd-row fs-30 color-666">
                    <label
                        v-for="(item, index) in filter"
                        :key="index"
                        @click="operation(index)"
                        class="fd-row ai-center ml-40"
                    >
                        <text>{{ item }}</text>
                        <image class="icon-dropDown" src="/static/imgs/icon-dropDown.png" />
                    </label>
                </view>
            </view>

            <swiper class="pt-30 f1 height-0" :current="tabIndex" @change="tabChange">
                <swiper-item v-for="tabsItem in tabs" :key="tabsItem.name">
                    <scroll-view
                        scroll-y
                        class="f1"
                        :scroll-top="10"
                        @scrolltolower="loadMore"
                        @scrolltoupper="refresh"
                    >
                        <uni-load-more v-if="isRefresh" :status="refreshStatus" />
                        <navigator
                            url="/pages/details"
                            v-for="(carsItem, carsIndex) in cars[tabsItem.name]"
                            :key="carsIndex"
                            :class="['item','br-12','ai-center','fd-row','bgc-fff','mb-18','ml-30','mr-30', {'mt-20': carsIndex}]"
                        >
                            <image
                                class="previewImage br-8 f2"
                                mode="aspectFill"
                                :src="swiperImages[0]"
                            />
                            <view class="ml-12 fs-30 f3">
                                <text class="fw-500">{{ carsItem.name }}</text>
                                <view
                                    v-for="(item, index) in carsItem.data"
                                    :key="index"
                                    class="fd-row"
                                >
                                    <view class="item-title fd-row jc-sb">
                                        <text>【</text>
                                        <text>{{ item.title }}</text>
                                        <text>】</text>
                                    </view>
                                    <text
                                        :class="!index && 'color-d81e06 fs-32 fw-500'"
                                    >{{ item.value }}</text>
                                </view>
                            </view>
                        </navigator>
                        <uni-load-more :status="loadMoreStatus" />
                    </scroll-view>
                </swiper-item>
            </swiper>
        </view>
        <popup ref="filter" type="bottom" @change="popupStatus">
            <view class="popup-box bgc-fff text-center">
                <text class="color-333 fs-42">价格选择</text>
                <view class="condition-container fd-row fs-36 mt-30">
                    <view
                        v-for="(item, index) in conditions"
                        :key="index"
                        :class="[{active: item.active},'condition','lh-70','br-8','text-center','mt-90']"
                        hover-class="navigator-hover"
                    >{{ item.text }}</view>
                </view>
            </view>
        </popup>
    </view>
</template>

<script>
    import uniLoadMore from "@/components/uni-load-more.vue";
    import popup from "@/components/popup.vue";
    export default {
        components: { uniLoadMore, popup },
        data() {
            return {
                tabIndex: 0,
                tabs: [
                    { name: "new", text: "最新" },
                    { name: "price", text: "关注" }
                ],
                isRefresh: false,
                refreshStatus: "loading",
                loadMoreStatus: "more",
                swiperImages: [
                    "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg",
                    "https://tp.xkodm.com/d/file/bigpic/2019-07-11/19/1942161128.jpg",
                    "http://pic1.win4000.com/wallpaper/2019-09-09/5d761484a9b49.jpg"
                ],
                conditions: [
                    { text: "全部", active: true },
                    { text: "1-10万", active: false },
                    { text: "10-30万", active: false },
                    { text: "30-100万", active: false },
                    { text: "100万+", active: false }
                ],
                filter: ["价格"],
                cars: {
                    new: [
                        {
                            name: "宝马525Li",
                            data: [
                                { title: "一口价", value: "28.2万元" },
                                { title: "上牌日期", value: "2016-04-04" },
                                { title: "指导价格", value: "50.2万元" },
                                { title: "公里总数", value: "11054万公里" },
                                { title: "所在位置", value: "河北省-石家庄" }
                            ]
                        },
                        {
                            name: "宝马525Li",
                            data: [
                                { title: "一口价", value: "28.2万元" },
                                { title: "上牌日期", value: "2016-04-04" },
                                { title: "指导价格", value: "50.2万元" },
                                { title: "公里总数", value: "11054万公里" },
                                { title: "所在位置", value: "河北省-石家庄" }
                            ]
                        },
                        {
                            name: "宝马525Li",
                            data: [
                                { title: "一口价", value: "28.2万元" },
                                { title: "上牌日期", value: "2016-04-04" },
                                { title: "指导价格", value: "50.2万元" },
                                { title: "公里总数", value: "11054万公里" },
                                { title: "所在位置", value: "河北省-石家庄" }
                            ]
                        },
                        {
                            name: "宝马525Li",
                            data: [
                                { title: "一口价", value: "28.2万元" },
                                { title: "上牌日期", value: "2016-04-04" },
                                { title: "指导价格", value: "50.2万元" },
                                { title: "公里总数", value: "11054万公里" },
                                { title: "所在位置", value: "河北省-石家庄" }
                            ]
                        }
                    ],
                    price: [
                        {
                            name: "兰博基尼525Li",
                            data: [
                                { title: "一口价", value: "28.2万元" },
                                { title: "上牌日期", value: "2016-04-04" },
                                { title: "指导价格", value: "50.2万元" },
                                { title: "公里总数", value: "11054万公里" },
                                { title: "所在位置", value: "河北省-石家庄" }
                            ]
                        }
                    ]
                }
            };
        },
        methods: {
            openPopup(type) {
                this.$refs[type].open();
            },
            closePopup(type) {
                this.$refs[type].close();
            },
            tabChange(e) {
                this.tabIndex = e.detail.current;
            },
            loadMore() {
                this.loadMoreStatus = "loading";
                setTimeout(() => (this.loadMoreStatus = "nomore"), 3000);
            },
            refresh() {
                this.isRefresh = true;
                setTimeout(() => (this.isRefresh = false), 3000);
            },
            popupStatus(e) {
                if (e.show) {
                    uni.hideTabBar({ animation: true });
                } else {
                    uni.showTabBar({ animation: true });
                }
            },
            operation() {
                this.openPopup("filter");
            }
        }
    };
</script>

<style>
    .title {
        padding: 0 30rpx;
    }

    .swiper {
        height: 300rpx;
    }

    .swiper-image {
        height: 100%;
    }

    .item {
        padding: 18rpx;
        box-shadow: 0 2rpx 13rpx 0 rgba(51, 113, 205, 0.15);
    }

    .previewImage {
        height: 230rpx;
    }

    .icon-dropDown {
        margin-left: 12rpx;
        width: 30rpx;
        height: 30rpx;
    }

    .item-title {
        width: 180rpx;
    }

    .title-text.active {
        border-bottom: 3px solid #2d6dcc;
        color: #2d6dcc;
    }

    .popup-box {
        padding: 18rpx;
        border-top-left-radius: 12rpx;
        border-top-right-radius: 12rpx;
    }

    .condition-container {
        flex-wrap: wrap;
    }

    .condition.active {
        color: #2d6dcc;
        border: 1px solid #2d6dcc;
    }

    .condition {
        width: calc(calc(100% / 3) - 20rpx);
        margin: 10rpx;
        color: #333;
        background-color: #fff;
        border: 1px solid #ddd;
    }
</style>