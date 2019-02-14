import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        /**
         * 退出登录
         *
         * @memberof Vue
         */
        $api(): void;
    }
}
