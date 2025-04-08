

// 濁音ボタン
let currentInput = "";  // 現在入力された文字列
const correctAnswer = "れいぞうこ"; // 例として正しい答え（画像の名称）

// 文字を入力欄に追加する関数
function addCharacter(char) {
    currentInput += char;
    document.getElementById('inputField').value = currentInput;
}

// 消去ボタンの機能（最後の1文字だけ消去）
document.getElementById('clearBtn').addEventListener('click', function() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);  // 最後の1文字を削除
        document.getElementById('inputField').value = currentInput; // 入力欄を更新
    }
});

// 濁音に変換する関数
function changeToDakuten() {
    const lastChar = currentInput.charAt(currentInput.length - 1);
    const dakutenMap = {
        "か": "が", "き": "ぎ", "く": "ぐ", "け": "げ", "こ": "ご",
        "さ": "ざ", "し": "じ", "す": "ず", "せ": "ぜ", "そ": "ぞ",
        "た": "だ", "ち": "ぢ", "つ": "づ", "て": "で", "と": "ど",
        "な": "な", "に": "に", "ぬ": "ぬ", "ね": "ね", "の": "の",
        "は": "ば", "ひ": "び", "ふ": "ぶ", "へ": "べ", "ほ": "ぼ",
        "ま": "ま", "み": "み", "む": "む", "め": "め", "も": "も",
        "や": "や", "ゆ": "ゆ", "よ": "よ", "ら": "ら", "り": "り",
        "る": "る", "れ": "れ", "ろ": "ろ", "わ": "わ", "を": "を", "ん": "ん"
    };

    if (dakutenMap[lastChar]) {
        currentInput = currentInput.slice(0, -1) + dakutenMap[lastChar];  // 最後の文字を濁音に変更
        document.getElementById('inputField').value = currentInput;
        console.log(currentInput)
    }
}

// 半濁音に変換する関数
function changeToHandakuten() {
    const lastChar = currentInput.charAt(currentInput.length - 1);
    const handakutenMap = {
        "は": "ぱ", "ひ": "ぴ", "ふ": "ぷ", "へ": "ぺ", "ほ": "ぽ"
    };

    if (handakutenMap[lastChar]) {
        currentInput = currentInput.slice(0, -1) + handakutenMap[lastChar];  // 最後の文字を半濁音に変更
        document.getElementById('inputField').value = currentInput;
    }
}


// 確定ボタンを押した時の動作
function confirmAnswer() {
    const resultIndicator = document.getElementById('resultIndicator');

    // 正解かどうかをチェック
    if (currentInput === correctAnswer) {
        resultIndicator.style.backgroundColor = "red"; // 赤丸を表示
        resultIndicator.style.display = "inline-block"; // 赤丸表示
    } else {
        // アニメーションで入力欄を消去
        const inputField = document.getElementById('inputField');
        inputField.classList.add('clear-animation'); // アニメーション追加

        // 1秒後に文字を消去
        setTimeout(function() {
            currentInput = "";  // 入力をリセット
            inputField.value = ""; // 入力欄を空に
            inputField.classList.remove('clear-animation'); // アニメーションをリセット
        }, 1000); // アニメーションの時間に合わせてリセット
    }
}