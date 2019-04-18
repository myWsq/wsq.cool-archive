<template>
    <div>
        <post-list :src="source"></post-list>
    </div>
</template>

<script>
    import PostList from '../components/PostList.vue';

    export default {
        async asyncData({$axios}){
            const {data} = await $axios.get(`/yuque/v2/repos/${process.env.YUQUE_REPO_ID}/docs`)

            return {
                source: data.data || []
            }
        },
        components:{
            PostList
        },
        head:{
            title: '王帅琪的个人博客 | wsq.cool'
        }
    }
</script>

<style lang="stylus" scoped>

</style>
