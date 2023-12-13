new Vue({
    delimiters: ['[[', ']]'],
    el: '#editApp',
    data() {
        return {
            form: {
                kb_desc: '',
                kb_name: '',
                kb_cate: '',
                is_active: false,
                create_time: '',
            },
            fileListData: []
        }
    },
    created() {
        const kbDataJSON = '{{ kb_data_json|escapejs }}';
        console.log('kbDataJSON:', kbDataJSON);
        // 获取通过Django视图传递的数据
        this.form = JSON.parse('{{ kb_data_json|escapejs }}');
        console.log(this.form)
        this.fileListData = JSON.parse('{{ file_list_json|escapejs }}');
        // this.categoryList = JSON.parse('{{ category_list_json|escapejs }}');
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
});

