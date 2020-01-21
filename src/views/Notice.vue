<template>
    <div>
        <div class="function_box">
            <Button class="button_add" type="primary" @click="addNotice()">添加</Button>
        </div>
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
        name: "Notice",
        data() {
            return {
                columns: [
                    {
                        title: '标签',
                        key: 'label',
                        width: 120,
                        align: 'center'
                    },
                    {
                        title: '标题',
                        key: 'title',
                    },
                    {
                        title: '作者',
                        key: 'username',
                        width: 200,
                        align: 'center'
                    },
                    {
                        title: '发布时间',
                        key: 'submitTime',
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            return h('span', {}, this.dateFormat(params.row.submitTime));
                        }
                    },
                    {
                        title: '最后编辑',
                        key: 'lastEdit',
                        width: 200,
                        align: 'center',
                    },
                    {
                        title: '最后编辑时间',
                        key: 'lastSubmit',
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            return h('span', {}, this.dateFormat(params.row.lastSubmit));
                        }
                    },
                    {
                        title: '位置',
                        key: 'position',
                        width: 95,
                        align: 'center'
                    },
                    {
                        title: '查看数量',
                        width: 95,
                        key: 'viewCount',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        width: 120,
                        align: 'center',
                        render: (h, params) => {
                            return h('Button', {
                                props: {
                                    size: 'small',
                                    type: 'error'
                                },
                                on: {
                                    click: () => {
                                        this.deleteTopic(params.row.id);
                                    }
                                }
                            }, '删除')
                        }
                    },
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
                this.getAllNotice();
            },
            getAllNotice() {
                let initParams = {
                    'page': this.paging.currentPage
                };
                let params = this.qs.stringify(initParams);
                this.axios.post('/allNotice', params).then(response => {
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.$Message.error(resp.msg);
                        return;
                    }
                    this.data = resp.data.noticeList;
                    this.paging.total = resp.data.noticeCount;
                })
            },
            addNotice() {
                this.$router.push('/toSubmitNotice');
            },
            changePage(page) {
                this.paging.currentPage = page;
                this.getAllNotice();
            },
            dateFormat: function (tick) {
                return moment(tick).format("YYYY-MM-DD HH:mm:ss");
            },
        }
    }
</script>

<style scoped>

    .function_box {
        overflow: hidden;
        margin: 15px 20px;
    }

    .button_add {
        float: right;
        /*margin-right: 45px;*/
        width: 80px;
    }

    .paging_box {
        float: right;
        margin: 20px 45px 0px 0px;
    }

</style>
