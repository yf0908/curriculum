var app = new Vue({
    el: '#app',
    data: {  //data内のdataにはthisでアクセス可能
        list: [],
        addText: '',
    },
    //watchでlistの中身まで監視する場合はhandlerを使用,deepオプションをtrue
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
                //listキーでlistをJSON形式で保存
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得（更新しても保存される）
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || []; //orの演算子
    },

    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText,   //addTextに追加された内容がlistの末尾に追加される（）最初は空の状態
                    isChecked: false,  //最初からだと完了だとおかしいのでfalse
                });
            } 
            this.addText = ''; //追加が押された後にフォーム内を空文字にする
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {  //filter(コールバック関数)
                return !todo.isChecked;
            });
        }
    },

    computed: {
        remaining: function() {
            var list = this.list.filter(function(todo) {
                return !todo.isChecked;  //完了していないtodoを返す
            });
            return list.length;  //残ったタスク数を返す
        }
    },

        filteredList: function() {
            //フィルターするロジック
            var data = [];
            for (var i in this.data) {
                var list = this.data[i];
                if(list.name.indexOf(this.keyword) !== -1) {
                    data.push(list);
                }
            }
            return data;
        }
});