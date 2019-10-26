<template>
    <div class="login_page">
        <Form class="form" :model="formItem">
            <FormItem>
                <Input v-model="formItem.admin" placeholder="请输入管理员账号"/>
            </FormItem>
            <FormItem>
                <Input v-model="formItem.password" placeholder="请输入密码"/>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                formItem: {
                    admin: '',
                    password: '',
                },
            }
        }
    }
</script>

<style scoped>
    .login_page {
        width: 100%;
        height: 100%;
        background-color: #20222A;
    }
    .form {
        width: 350px;
        margin-top: 15%;
        padding: 35px 35px 15px 35px;
        background: #f5f5f5;
        border-radius: 5px;
        border: 1px solid #eaeaea;
    }
</style>
