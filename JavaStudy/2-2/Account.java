// package Study;

/**
 * Study.java
 */
public class Account {

    // フィールド変数
    private String userName;
    private int id;
    private String password;

    // コンストラクタ
    public Account(String userName, int id, String password) {
        this.userName = userName;
        this.id = id;
        this.password = password;
    }

    // ① 以下のルールに従いアカウント情報（名前、ID、パスワード）を出力するメソッドを作成してください。
    // アクセス修飾子:「protected」
    // メソッド名:「printAccountInfo」
    protected void printAccountInfo(String userName, int id, String password) {
        System.out.println("ユーザー名は、" + userName);
        System.out.println("IDは、" + id);
        System.out.println("パスワードは、" + password);
    }

}
    /** ===メモ===
    * コンストラクタには以下のルール・特徴がある
    * ・コンストラクタの定義において戻り値の情報は何も記述しない
    *     ※voidすら不要
    * ・コンストラクタ名はクラス名と同じ
    *     ※メソッド名のルールを外れ、大文字からの命名となる
    * ・インスタンス生成時、必ず最初に呼び出される
    */

/**
 * コンストラクタはメソッドの一種なので、様々な因数パターンに応じてオーバーロードしてい定義することが可能
 */