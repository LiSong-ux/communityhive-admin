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
                        title: '标签',
                        key: 'label',
                        align: 'center'
                    },
                    {
                        title: '标题',
                        key: 'title',
                        align: 'center'
                    },
                    {
                        title: '作者',
                        key: 'username',
                        align: 'center'
                    },
                    {
                        title: '回复数量',
                        key: 'replycount',
                        align: 'center'
                    },
                    {
                        title: '查看数量',
                        key: 'viewcount',
                        align: 'center'
                    },
                    {
                        title: '发布时间',
                        key: 'submittime',
                        align: 'center',
                        render: (h, params) => {
                            return h('span', {}, this.dateFormat(params.row.submittime));
                        }
                    },
                    {
                        title: '最后回复时间',
                        key: 'lastSubmit',
                        align: 'center',
                        render: (h, params) => {
                            return h('span', {}, this.dateFormat(params.row.lastSubmit));
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
                this.axios.post('/allTopic', params).then(response => {
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.$Message.error(resp.msg);
                        return;
                    }
                    this.data = resp.data.topicList;
                    this.paging.total = resp.data.topicCount;
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
