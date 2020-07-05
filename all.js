
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
                imageUrl: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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
                imageUrl: 'https://images.unsplash.com/photo-1578934830069-cde3d6bfb854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
            },
        ],
        cloneDate: [],
    },
    mothods: {
        updPrduct() {
            alert("update Prduct");
        },
        delPrduct() {
            alert("delete Prduct");
        },

        // 開啟工作面板
        editPanel(editType, item) {
            switch (editType) {
                case 'new':     // 新增模式
                    $('#editPanel').modal('show');
                    break;
                case 'edit':    //修改模式
                    $('#editPanel').modal('show');
                    break;
                case 'delete':  //刪除模式
                    $('#editPanel').modal('show');
                    break;
                default:
                    break;
            }
        },

        // 金額加逗點
        commafy(num) {
            num = num + "";
            var re = /(-?\d+)(\d{3})/
            while (re.test(num)) {
                num = num.replace(re, "$1,$2");
            }
            return num;
        },
        // UUID/GUID GENATATOR
        uuid() {
            debugger
            var d = Date.now();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
                d += performance.now(); //use high-precision timer if available
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        },
        doTest() {
            console.log("Hello Iam TEST");
        }
    },
});