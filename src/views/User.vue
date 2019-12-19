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
                        title: '账号',
                        key: 'account'
                    },
                    {
                        title: '用户名',
                        key: 'username'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '性别',
                        key: 'gender'
                    },
                    {
                        title: '',
                        key: ''
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
