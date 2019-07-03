<template>
    <div class="category-admin">
        <b-form>
            <input type="hidden" id="category-id" v-model="category.id" />
            <b-form-group label="Name:" label-for="category-name">
                <b-form-input id="category-name" type="text"
                    v-model="category.name"
                    :readonly="mode === 'remove'"
                    placeholder="Enter the category name"
                />
            </b-form-group>
        
            <b-form-group label="Category Parent:" label-for="category-parentId">
                <b-form-select id="category-parentId"
                    v-if="mode === 'save'"
                    :options="categories" v-model="category.parentId"
                />
                <b-form-input id="category-parentId" type="text"
                    v-else
                    v-model="category.path"
                    readonly
                />
            </b-form-group>
        
            <b-button variant="primary" v-if="mode === 'save'" @click="save">Save</b-button>
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Remove</b-button>
            <b-button @click="reset" class="ml-2">Cancel</b-button>
        </b-form>
        <hr />
        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'CategoryAdmin',
    data: function() {
        return {
            mode: 'save',
            category: {},
            categories: [],
            fields: [
                { key: 'id', label: 'Code', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                { key: 'path', label: 'Path', sortable: true },
                { key: 'actions', label: 'Actions' }
            ]
        }
    },
    methods: {
        loadCategories() {
            const url = `${baseApiUrl}/categories`
            axios.get(url).then(res => {
                this.categories = res.data.map(category => {
                    return { ...category, value: category.id, text: category.path }
                })
            })
        },
        reset() {
            this.mode = 'save'
            this.category = {}
            this.loadCategories()
        },
        save() {
            const method = this.category.id ? 'put' : 'post'
            const id = this.category.id ? `/${this.category.id}` : ''
            axios[method](`${baseApiUrl}/categories${id}`, this.category)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove() {
            const id = `/${this.category.id}`
            axios.delete(`${baseApiUrl}/categories${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        loadCategory(category, mode = 'save') {
            this.mode = mode
            this.category = { ...category }
        }
    },
    mounted() {
        this.loadCategories()
    }
}
</script>

<style>

</style>
