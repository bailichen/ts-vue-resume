import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routers = [
    { path: '/', redirect: '/index' }, //重定向
    {
        path: '/index',
        name: 'index',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: '活动'
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/index.vue')
    },
    {
        path: '/resume-active',
        name: 'resume-active',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: '邀请好友录简历'
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/resume/resume-active.vue')
    },
    {
        path: '/recommend-active',
        name: 'recommend-active',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: '推荐好友入职'
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/active-detail/recommend-active.vue')
    },
    {
        path: '/scene-active',
        name: 'scene-active',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: '到现场面试'
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/active-detail/scene.vue')
    },
    {
        path: '/video-active',
        name: 'video-active',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: '视频面试担保入职'
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/active-detail/video-active.vue')
    },
    {
        path: '/share/resume',
        name: 'share-resume',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: '录简历赚钱'
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/resume/resume-index.vue')
    },
    {
        path: '/share/resume-adit',
        name: 'resume-adit',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: '录简历赚钱'
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/resume/resume-adit.vue')
    },
    {
        path: '/share/submit-result',
        name: 'submit-result',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: '录简历赚钱'
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/resume/submit-result.vue')
    },
    {
        path: '/share/position',
        name: 'share-position',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: ''
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/position/position-detail.vue')
    },
    {
        path: '/share/position/result',
        name: 'position-result',
        meta: {
            requireAuth: true,
            keepAlive: true,
            title: ''
        },
        component: () =>
            import(/* webpackChunkName: "modules/main" */ '@/views/position/position-result.vue')
    }
];
export default routers;
