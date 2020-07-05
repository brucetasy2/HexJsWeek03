var app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 'notDefine1',
                unit: '杯',
                category: '咖啡',
                title: '大象咖啡',
                origin_price: 4000,
                price: 3800,
                description: '想喝就喝',
                content: '大象排遺過濾出的咖啡豆',
                is_enabled: 1,
                imageUrl:
                    'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                // options: {
                //     aroma: 75,
                // }
            },
            {
                id: 'notDefine2',
                unit: '杯',
                category: '茶品',
                title: '蠶沙茶',
                origin_price: 1500,
                description: '天然回甘降血壓',
                content: '蠶寶寶餵食桑葉後的排遺製成品',
                price: 1200,
                is_enabled: 0,
                imageUrl:
                    'https://images.unsplash.com/photo-1578934830069-cde3d6bfb854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
                // options: {
                //     aroma: 60,
                // }
            },
        ],
        cloneDate: {
            imageUrl: [],
            // options: { 
            //     aroma : 0,
            // },
        },
        editPanelName: '新增產品',
    },
    methods: {
        updData() {
            // alert(`updData Process ${this.editPanelName}`);
            if (this.editPanelName == '新增產品') {
                this.products.unshift(this.cloneDate);
            } else {
                let curId = this.cloneDate.id;
                this.products.forEach((arry, inx) => {
                    if (arry.id == curId) {
                        this.products[inx] = this.cloneDate;
                    }
                });
            }
            this.cloneDate = {};
            $('#editPanel').modal('hide');
        },

        delPrduct() {
            let delId = this.cloneDate.id;
            this.products.forEach((product, inx) => {
                if (product.id == delId) {
                    this.products.splice(inx, 1);
                }
            })

            $('#deletePanel').modal('hide');
        },

        // 開啟工作面板
        editPanel(editType, product) {
            console.log(`Your Click ${editType} `);
            console.log(product);
            switch (editType) {
                case 'new': // 新增模式
                    $('#editPanel').modal('show');
                    this.editPanelName = '新增產品';
                    this.cloneDate = {
                        imageUrl: [],
                    };
                    this.cloneDate.id = new Date().getTime();
                    break;
                case 'edit': //修改模式
                    $('#editPanel').modal('show');
                    this.editPanelName = '修改產品';
                    this.cloneDate = JSON.parse(JSON.stringify(product));
                    break;
                case 'delete': //刪除模式
                    $('#deletePanel').modal('show');
                    this.cloneDate = JSON.parse(JSON.stringify(product));
                    break;
                default:
                    break;
            }
        },
    },
});
