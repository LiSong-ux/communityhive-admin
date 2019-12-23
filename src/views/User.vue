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
                        key: 'topiccount',
                        align: 'center'
                    },
                    {
                        title: '回复数量',
                        key: 'replycount',
                        align: 'center'
                    },
                    {
                        title: '登录次数',
                        key: 'logincount',
                        align: 'center'
                    },
                    {
                        title: '注册时间',
                        key: 'registertime',
                        align: 'center',
                        render: (h,params)=> {
                            let time = this.moment(params.row.registertime).format('YYYY-MM-DD HH:mm:ss');
                            return h('span',time);
                        }
                    }
                ],
                data: []
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
