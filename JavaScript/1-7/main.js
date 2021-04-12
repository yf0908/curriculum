class Taiyaki {

    //コンストラクタ(引数あり) 
    constructor(nakami) {

        //受け取ったnakami（右辺）をこのクラスのnakami（左辺）に代入して使える状態にする 
        this.nakami = nakami; //クラスから作られたインスタンス
    }

    //焼きメソッド
    yaki() {
        console.log("中身は" + this.nakami + "です")
    }
}    

let anko = new Taiyaki("あんこ");
let cream = new Taiyaki("クリーム");
let cheese = new Taiyaki("チーズ");

anko.yaki();
cream.yaki();
cheese.yaki();

