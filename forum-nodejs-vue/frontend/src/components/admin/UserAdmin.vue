<template>
    <div class="user-admin">
        <b-table hover striped :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'UserAdmin',
    data: function() {
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [
                { key: 'id', label: 'Code', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'admin', label: 'Administrator', sortable: true, 
                    formatter: value => value ? 'Yes' : 'No'
                },
                { key: 'actions', label: 'Actions' }
            ]
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
            })
        }
    },
    mounted() {
        this.loadUsers()
    }
}
</script>

<style>

</style>
