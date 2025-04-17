let currentInput = "";  // 入力されているひらがな
let currentImageIndex = 0; // 現在表示している画像のインデックス

let correctCount = 0; // 正解数

const images = [
    {src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEib_aNImB4YeHc74m6gzwDrVWWWWQG5fBmB_pP_Q1yq1GMuM9vyEJMB7dyCQT-UxQYfw986zxut2N3HewrDOuBw4XM5E45nV_-zSSAqsJ4AG6EEUV7jesvxb-LoBXywW9Yhxx5JkSs2Ttg/s180-c/hebi.png', name: 'へび'},
    {src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh7FUsguv3kj27LTMzGyR8dpworfflB1hRI5Vo2IEcPY1pMu7zvJDaMbXZzLImcBRp8XHxpszNgfmhHiC7oK33otMC0IbPBYW0fcWT5HdWvMPyH9Ryfv40Ux1RJhyphenhyphenTp3_wmEcM5Qw7sQE/s180-c/pen_enpitsu_mark.png', name: 'えんぴつ'},
    {src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBjlCGP8CK22vXB3f5E_NWpvVUv5jYmTaeG0NjdSKPZD1kUehNY0VIXyMZWuU90y2Qx6CiFbbjHh0ScSMjN2sXtaHX4l7qEG-xM0TJiXVVlcCF7b0dfXnDBH35r1LhKNxZIlmdH4N6fveH/s180-c/vegetable_toumorokoshi_corn_wagiri.png', name: 'とうもろこし'},
    {src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEnZPvuNtho4eO2RgLeQbn80ndEOzj2i-8mPt0A1K57YrCy2BWenoaeToie9Mme-j4Kos-o_U4OPTcJnLuVGzBXP5nCzfJmhhKubvaGRt4JMv-A5-_2jZi93hDEUzPqxpD0mVMzKbGQT8/s180-c/food_konbini_onigiri.png', name: 'おにぎり'},
    {src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIGzs925zRMgLU60x1bPyZVKdh5ehbjxzZx3sA_yTQMuys2pV6QmND89tbPiQ4aTz7PPTNSmr1OBD2M35_iadW9yHHlGJMvwVw_KjSKg_E0rXUfaOZhCxcNvR-Tthy0gwE8sS1gwuq8v2g/s180-c/fruit_suika_kodama.png', name: 'すいか'},
    {src: 'https://tsukatte.com/wp-content/uploads/2020/08/car_01_blue.png', name: 'くるま'},
    {src: 'https://illust8.com/wp-content/uploads/2019/07/oogata_television_illust_4254.png', name: 'てれび'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/07/77a2ff7bcaf0967cac5915790ec3a68a.png', name: 'とんぼ'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/02/0ba23df9a0dcb0b70f34095698d357e9-1.png', name: 'かたつむり'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/07/53eeda92b15ae6dd9274337a8e0a47b6.png', name: 'かぶとむし'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/07/9f0082a63d59f581cfff426532f5af4f.png', name: 'くわがた'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/02/b962268131f557a7264f3cba85939266.png', name: 'てんとうむし'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/04/1044edcbbde67d33da49a4e1a6c4adc1.png', name: 'けしごむ'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/02/62c45bbb9b021c0cfd4f09f6bec3b6c5.png', name: 'かえる'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/07/cb805b14c49c6333e21c991c3b93d6b5.png', name: 'ひまわり'},
    {src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTniQJxjCYr0zX9RW5qZVYQKBzKCXh1Tfd5w5I6p2cnuYUcek6wbP71JUdepQ1rFwp48VGurGWtBsIm7PF2WhNpTGjpg3uWnmZX1xe7NzlTapN0IPkzEgAzwn1KMlM2N3djqEnf500fwg/s800/space_rocket.png', name: 'ろけっと'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/06/11719435a731ea41b14c695d9756432a.png', name: 'ぱとかー'},
    {src: 'https://www.hoiku-illust.com/wp-content/uploads/2023/03/8b4cd0f6ecf7bfc57c10ce846d92d329.png', name: 'きゅうきゅうしゃ'},
    {src: 'https://japaclip.com/files/strawberry.png', name: 'いちご'},
    {src: 'https://japaclip.com/files/milk.png', name: 'ぎゅうにゅう'},
    {src: 'https://japaclip.com/files/elephant.png', name: 'ぞう'},
    {src: 'https://japaclip.com/files/train-blue.png', name: 'でんしゃ'},
    {src: 'https://japaclip.com/files/airplane.png', name: 'ひこうき'},
    {src: 'https://japaclip.com/files/swing.png', name: 'ぶらんこ'},
    {src: 'https://japaclip.com/files/snowman.png', name: 'ゆきだるま'},
    {src: 'https://japaclip.com/files/rainbow.png', name: 'にじ'},
    {src: 'https://japaclip.com/files/icon-star.png', name: 'ほし'},
    {src: 'https://japaclip.com/files/giraffe.png', name: 'きりん'},
    {src: 'https://japaclip.com/files/turtle.png', name: 'かめ'},
    {src: 'https://japaclip.com/files/penguin.png', name: 'ぺんぎん'},
    {src: 'https://japaclip.com/files/banana.png', name: 'ばなな'},
    {src: 'https://japaclip.com/files/boiled-egg.png', name: 'たまご'},
    {src: 'https://japaclip.com/files/ballons.png', name: 'ふうせん'},
    {src: 'https://japaclip.com/files/electric-fan.png', name: 'せんぷうき'},
    {src: 'https://japaclip.com/files/camera.png', name: 'かめら'},
    // 他の画像を追加できます
];


let answeredImages = [];
let currentImage = null;

if(answeredImages.length === 0){
    showNextImage()
}

// 次の画像に切り替える関数
function showNextImage() {
  console.log(`正解数：${answeredImages.length}`)
  const remainingImages = images.filter(img => !answeredImages.includes(img.src));
  console.log(`残りの問題：${remainingImages.length}`)

  if (remainingImages.length === 0) {
    alert('全ての画像に正解しました！');
    return;
  }

  const next = remainingImages[Math.floor(Math.random() * remainingImages.length)];
  currentImage = next;

  const imageElement = document.querySelector('.image img');
  imageElement.src = `${next.src}`;
  imageElement.alt = next.name;

  // 今表示している画像のindexを検索
  const index = images.findIndex(image => image.name === next.name);
  currentImageIndex = index
}

//// 基本的な入出力
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

// 小文字に変換する関数
function changeToSmallKana() {
    const lastChar = currentInput.charAt(currentInput.length - 1);
    
    const toSmall = {
        "や": "ゃ", "ゆ": "ゅ", "よ": "ょ", "つ": "っ"
    };

    const toLarge = Object.fromEntries(
        Object.entries(toSmall).map(([large, small]) => [small, large])
    );

    if (toSmall[lastChar]) {
        // 大→小変換
        currentInput = currentInput.slice(0, -1) + toSmall[lastChar];
    } else if (toLarge[lastChar]) {
        // 小→大変換
        currentInput = currentInput.slice(0, -1) + toLarge[lastChar];
    }

    document.getElementById('inputField').value = currentInput;
}


// // 正解の確認
// function confirmAnswer() {
//     const inputField = document.getElementById('inputField');
//     const resultIndicator = document.getElementById('resultIndicator');

//     console.log(inputField.value)
    
//     if (inputField.value === images[currentImageIndex].name) {
//         // 正解数をカウント
//         correctCount++;
//         document.getElementById("correctCounter").textContent = correctCount;

//         // 正解済みとして記憶
//         answeredImages.push(currentImage.src);

//         const resultIndicator = document.getElementById('resultIndicator');
//         resultIndicator.style.display = 'block'; // 赤丸表示
    
//         // 0.5秒後に次の画像に切り替え
//         setTimeout(() => {
//             resultIndicator.style.display = 'none'; // 赤丸を消す
//             if (currentImageIndex < images.length) {
//                 document.querySelector('.image img').src = images[currentImageIndex].src;
//                 document.querySelector('.image img').alt = images[currentImageIndex].name;
//                 inputField.value = '';
//                 currentInput = '';
//                 showNextImage();
//             } else {
//                 alert('すべての画像を学習しました！');
//             }
//         }, 1500); // 赤丸は1.5秒表示
//     }
//      else {
//         resultIndicator.style.backgroundColor = ''; // 赤丸を消す
//         shakeImage(); // 画像をシェイクするアニメーション
//         inputField.value = ''; // 入力欄をクリア
//         currentInput = ''; // 内部データもリセット
//     }
// }

// 画像をシェイクするアニメーション
function shakeImage() {
    const imageElement = document.querySelector('.image img');
    imageElement.classList.add('shake'); // CSSのshakeクラスを追加
    setTimeout(() => {
        imageElement.classList.remove('shake'); // アニメーション後にshakeクラスを削除
    }, 1500); // 1.5秒後にクラスを削除
}

// document.getElementById('skipBtn').addEventListener('click', function () {
//     const inputField = document.getElementById('inputField');

//     // 正解のひらがなを表示
//     inputField.value = images[currentImageIndex].name;
//     inputField.style.backgroundColor = '#ffffcc';  // 背景色でヒントっぽく

//     // 5秒後に次の画像へ
//     setTimeout(() => {
//         inputField.value = '';
//         inputField.style.backgroundColor = '';  // 背景色を元に戻す
//         currentInput = '';
//         answeredImages.push(currentImage.src); // スキップも「学習済み」とみなす
//         showNextImage();
//     }, 5000);
// });


let totalQuestions = 0; // 選ばれた問題数
let answeredCount = 0;  // 現在答えた数（スキップも含む）

function startGame(questionCount) {
    console.log("ゲーム開始！", questionCount);  // ← ここで動作確認
    totalQuestions = questionCount;
    answeredCount = 0;
    correctCount = 0;
    answeredImages = [];
    currentInput = "";

    document.getElementById('correctCounter').textContent = 0;
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'flex';

    showNextImage();
}

// ゲーム終了処理
function endGame() {
    document.getElementById('gameContainer').style.display = 'none';
    const message = `おわり！ ${correctCount} / ${totalQuestions} 正解でした！`;
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('startScreen').style.display = 'flex';
}

// 回答確認関数の修正（confirmAnswer 内）
function confirmAnswer() {
    const inputField = document.getElementById('inputField');
    const resultIndicator = document.getElementById('resultIndicator');

    if (inputField.value === images[currentImageIndex].name) {
        document.getElementById('correctSound').play();

        correctCount++;
        document.getElementById("correctCounter").textContent = correctCount;
        resultIndicator.style.display = 'block';
        answeredImages.push(currentImage.src);

        setTimeout(() => {
            resultIndicator.style.display = 'none';
            inputField.value = '';
            currentInput = '';
            answeredCount++;
            if (answeredCount >= totalQuestions) {
                endGame();
            } else {
                showNextImage();
            }
        }, 1500);
    } else {
        shakeImage();
        inputField.value = '';
        currentInput = '';
    }
}

// スキップボタンの処理の修正
document.getElementById('skipBtn').addEventListener('click', function () {
    const inputField = document.getElementById('inputField');
    inputField.value = images[currentImageIndex].name;
    inputField.style.backgroundColor = '#ffffcc';

    setTimeout(() => {
        inputField.value = '';
        inputField.style.backgroundColor = '';
        currentInput = '';
        answeredImages.push(currentImage.src);
        answeredCount++;
        if (answeredCount >= totalQuestions) {
            endGame();
        } else {
            showNextImage();
        }
    }, 5000);
});
