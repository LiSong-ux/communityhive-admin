<template>
    <div class="user_main">
        <Table :columns="columns" :data="data"></Table>
        <div class="paging_box">
            <Page v-if="paging.total>0" :current="paging.currentPage" :page-size="paging.pageSize"
                  :total="paging.total" show-elevator @on-change="changePage"/>
        </div>
    </div>
</template>

<script>
    let moment = require("moment");
    export default {
        name: "Topic",
        data() {
            return {
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
                        render: (h, params) => {
                            return h('span', {}, this.dateFormat(params.row.registertime));
                        }
                    }
                ],
                data: [],
                paging: {
                    currentPage: 1,
                    pageSize: 100,
                    total: 0,
                },
            }
        },
        created: function () {
            this.init();
        },
        methods: {
            init() {
                this.getAllUser();
            },
            getAllUser() {
                let initParams = {
                    'page': this.paging.currentPage
                };
                let params = this.qs.stringify(initParams);
                this.axios.post('/allUser', params).then(response => {
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.$Message.error(resp.msg);
                        return;
                    }
                    this.data = resp.data;
                    this.paging.total = resp.data.length;
                })
            },
            changePage(page) {
                this.paging.currentPage = page;
                this.getAllUser();
            },
            dateFormat: function (tick) {
                return moment(tick).format("YYYY-MM-DD HH:mm:ss");
            },
        }
    }
</script>

<style scoped>
    .paging_box {
        float: right;
        margin: 20px 45px 0px 0px;
    }
</style>
