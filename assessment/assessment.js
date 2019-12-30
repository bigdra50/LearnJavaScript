'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子を全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if(userName.length === 0){
        return;
    }

    // 診断結果表示
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    // ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=UnkoTest&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #unko';
    resultDivided.appendChild(anchor);

    // widget.jsの設定
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
};

const answers = [
    '{userName}の特徴的なうんこは皆を惹きつけ、心に残ります。',
    '{userName}のうんこに見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のうんこは情熱的です。{userName}のうんこの情熱に周りの人は感化されます。',
    '{userName}のうんこの厳しさがものごとをいつも成功に導きます。',
    '{userName}の博識なうんこを多くの人が頼りにしています。',
    '{userName}のうんこはユニークです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のうんこの洞察に、多くの人が助けられます。',
    '{userName}のうんこのいいところは見た目です。内側から溢れ出る{userName}うんこの良さに皆が気を惹かれます。',
    '{userName}のうんこに気をかけてもらった多くの人が感謝しています。',
    '{userName}のうんこが感じたことに皆が共感し、わかりあうことができます。',
    '強引すぎない{userName}のうんこの考えに皆が感謝しています。',
    '新しいことに向かっていく{userName}のうんこの心構えが多くの人に魅力的に映ります。',
    'ありのままの{userName}うんこ自身がいいところなのです。',
    'やばいと思ったときにしっかりと衝動を抑えられる{userName}うんこが皆から評価されています。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザー名
 * @returns {string} 診断結果
 */
function assessment(userName) {
    // 全文字のコード番号を足し合わせる
    let sumOfCharCode = 0;
    for(let i = 0; i < userName.length; i++){
        sumOfCharCode += userName.charCodeAt(i);
    }

    // 文字コードの合計を回答の数で割ってインデックスを求める
    const index = sumOfCharCode%answers.length;
    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);
    return result;
}

