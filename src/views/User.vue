<template>
    <div class="user_main">
        <Table :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                columns: [
                    {
                        title: 'ID',
                        key: 'id',
                        align: 'center'
                    },
                    {
                        title: '账号',
                        key: 'account',
                        align: 'center'
                    },
                    {
                        title: '用户名',
                        key: 'username',
                        align: 'center'
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                        align: 'center'
                    },
                    {
                        title: '性别',
                        key: 'gender',
                        align: 'center'
                    },
                    {
                        title: '发帖数量',
                        key: 'topicCount',
                        align: 'center'
                    },
                    {
                        title: '回复数量',
                        key: 'replyCount',
                        align: 'center'
                    },
                    {
                        title: '登录次数',
                        key: 'loginCount',
                        align: 'center'
                    },
                    {
                        title: '注册时间',
                        key: 'registerTime',
                        align: 'center'
                    }
                ],
                data: [
                    {
                        account: 'LiSong-ux',
                        username: '沨殘淩渡',
                        email: '546993317@qq.com',
                        gender: '男',
                        topicCount: '2',
                        replyCount: '2',
                        loginCount: '2',
                        registerTime: '2019-11-20 19:35:46',
                    },
                ]
            }
        },
        created:function () {
            this.init();
        },
        methods: {
            init(){
                this.getAllUser();
            },
            getAllUser(){
                this.axios.get('/allUser').then(response=>{
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.$Message.error(resp.msg);
                        return;
                    }
                    this.data = resp.data;
                })
            },
        }
    }
</script>

<style scoped>

</style>
