function Translate(word,language){
    this.apikey ="trnsl.1.1.20181217T100401Z.b0052a1aa25d511d.d3eb0b28230cbbe791bdc914bade2faea1d8d109";
    this.word = word;
    this.language = language;

    // XHR object

    this.xhr = new XMLHttpRequest();



}

Translate.prototype.translateWord = function(callback){
    // Ajax İşlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint,true);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text);
           // console.log(JSON.parse(this.xhr.responseText).text[0]);
        }else{
            callback("Bir Hata Oluştu!",null);
        }
    }
    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}
