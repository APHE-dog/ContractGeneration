new Vue({
    delimiters: ['[[', ']]'],
    el: '#selectApp',
    data() {
        return {
            conversationMode: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }],
            value1: '',
            value: '',
            textColor: '#8492a6',
            tableData: [{
                id: '12987122',
                name: '好滋好味',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987123',
                name: '好滋好味',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987125',
                name: '好滋好味',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987125',
                name: '好滋好味',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }],
            templateSelection: {},
            radio: '',
            selectedRow: null,
            mylist: [
                {id: 1, name: '上海市普陀区真北路'},
                {id: 2, name: '上海市普陀区真北路'},
                {id: 3, name: '上海市普陀区真北路'},
            ],
            input: '',
            isInputEmpty: true,
        }
    },
    methods: {
        getCurrentRow(row) {
            // 获取选中数据   row表示选中这一行的数据，可以从里面提取所需要的值
            this.templateSelection = row
        },
        handleSelect(id) {
            // 更新选中的行
            this.selectedRow = row;
        },
        isSelected(row) {
            // 检查当前行是否被选中
            return this.selectedRow === row;
        },
        inputBtn() {
            if (!this.input) {
                // 如果输入为空，不执行任何操作
                return;
            }
            htmls.push({
                messageType: "text",
                headIcon: "./img/B.jpg",
                name: "SuperPaxxs",
                position: "right",
                html: this.input,
            });
            this.input = "";
            beforeRenderingHTML(htmls, ".lite-chatbox");
            this.isInputEmpty = true;
        },
        handleInput() {
            // 在输入事件处理程序中更新 isInputEmpty
            this.isInputEmpty = !this.input.trim(); // 检查输入是否为空（去掉首尾空格）
        }
    }
});


