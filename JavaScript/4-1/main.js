var app = new Vue({  //予め用意されている、「Vue」というクラスをインスタンス化して使用
    el: '#app',  //elements の略で 「どの領域のVueと結びつけるか」を指定 →今回<div id="app">の領域のこと
    data: {  //この中でデータ（変数のようなもの）を管理  data内のデータにはthisでアクセス可能
        list: [],  //カンマ区切りで並べる
        addText: '',
        keyword: ''
    },

    //watchでlistの中身まで監視する場合はhandlerを使用,deepオプションをtrue
    watch: {  //watchでlistの変更を監視
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

    methods: {  //この中で関数を管理(メソッドはmethodsの中に書く)
        // v-on:clickイベント（追加・削除）後の関数の中身
        addToDo: function() {  //addToDo：条件分岐で、入力欄にテキストが入力された時にlist配列にチェックボックスが空の値を格納
            if (this.addText !== '') {  //空白のまま「追加」ボタンが押されると、空の予定が作成されてしまうのでif文で分岐
                this.list.push({
                    text: this.addText,   //addTextに追加された内容がlistの末尾に追加される（）最初は空の状態
                    isChecked: false,  //追加した瞬間はタスクは終わってないのでチェックフラグはfalse
                });
            }
            this.addText = ''; //追加が押された後にフォーム内を空文字にする処理
        },

        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },
        
        filteredList: function() {  //検索するロジック
            var filtered = [];
            for (var i in this.list) {
                var adding_task = this.list[i];
                var text = this.addText
                if (adding_task.text.indexOf(this.keyword) !== -1) { //ヒットしなかった場合
                    filtered.push(adding_task)
                } 
            }
            return filtered;
        }
    },
    // filterの基本的な記述は以下のように記述
    // var items = 配列データ;
    // items.filter(コールバック関数)
    // 特定の条件を与えて配列データで取得したい内容を「コールバック関数」に書くことで、任意のデータを抽出して新しい配列を生み出す


    computed: {  //この中に算出プロパティを管理(算出プロパティはcomputedの中に書く)
        remaining: function() {
            var list = this.list.filter(function(todo) {
                return !todo.isChecked;  //完了していないtodoを返す
            });
            return list.length;  //残ったタスク数を返す
        },



        filteredLists: function () {
            return this.filteredList();
        }
        // ①for-in文を使い、dataに定義されているlist配列の中身を取り出す
        // ②通常のToDoリストの中身と、ToDo入力欄の値を各変数に代入し、if文で検索にかける
        // ③indexOf()で文字列の検索
        // ④合致した値を検索用に定義している配列に格納
        // ⑤戻り値として検索用の配列を指定することで検索欄に入力が合った時に、合致するものを表示

        // for (変数名 in オブジェクト)
        // 実行する文;
        // 文字列.indexOf( 検索したい文字[, 検索開始位置]) 検索開始位置は省略可

        //indexOfの引数で指定したものが中にない場合は「-1」が返ってくる

        //配列.push(追加したい値) 配列の末尾に追加
        


    }
});
