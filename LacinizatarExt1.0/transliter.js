

function transliter(txt) {

    var vowels = ' аАеЕёЁіІоОуУыЫэЭюЮяЯ\n\t';
    var softVowels = 'еЕёЁюЮіІяЯ';
    var softChars = 'ьЬ';
    var consonants = 'бБвВгГдДжЖзЗйЙкКлЛмМнНпПрРсСтТўЎфФхХцЦчЧшШьЬ';
    var txtLat = '';
    for (var i =0; i < txt.length; i++){
        switch (txt[i]) {
            case 'а':
                txtLat = txtLat + 'a';
                break;
            case 'А':
                txtLat = txtLat + 'A';
                break;
            case 'б':
                txtLat = txtLat + 'b';
                break;
            case 'Б':
                txtLat = txtLat + 'B';
                break;
            case 'в':
                txtLat = txtLat + 'v';
                break;
            case 'В':
                txtLat = txtLat + 'V';
                break;
            case 'г':
                txtLat = txtLat + 'h';
                break;
            case 'Г':
                txtLat = txtLat + 'H';
                break;
            case 'д':
                txtLat = txtLat + 'd';
                break;
            case 'Д':
                txtLat = txtLat + 'D';
                break;
            case 'е': {
                if (vowels.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'je';
                else if (consonants.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'ie';
                break;
            }
            case 'Е': {
                if (vowels.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'Je';
                else if (consonants.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'Je';
                break;
            }
            case 'ё': {
                if (vowels.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'jo';
                else if (consonants.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'io';
                break;
            }
            case 'Ё': {
                if (vowels.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'Jo';
                else if (consonants.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'Io';
                break;
            }
            case 'ж': txtLat = txtLat + 'ž';
                break;
            case 'Ж': txtLat = txtLat + 'Ž';
                break;
            case 'з': {
                if(softChars.search(txt[i+1] > -1)){
                    txtLat = txtLat + 'ź';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'ź';
                    break;
                }
                else txtLat = txtLat + 'z';
                break;
            }
            case 'З': {
                if(softChars.search(txt[i+1] > -1)){
                    txtLat = txtLat + 'Ź';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'Ź';
                    break;
                }
                else txtLat = txtLat + 'Z';
                break;
            }
            case 'і':
                txtLat = txtLat + 'i';
                break;
            case 'І':
                txtLat = txtLat + 'I';
                break;
            case 'и':
                txtLat = txtLat + 'i';
                break;
            case 'И':
                txtLat = txtLat + 'I';
                break;
            case 'й':
                txtLat = txtLat + 'j';
                break;
            case 'Й':
                txtLat = txtLat + 'J';
                break;
            case 'к':
                txtLat = txtLat + 'k';
                break;
            case 'К':
                txtLat = txtLat + 'K';
                break;
            case 'л': {
                //ĺ
                if(softChars.search(txt[i+1] > -1)){
                    txtLat = txtLat + 'ĺ';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'ĺ';
                    break;
                }
                else txtLat = txtLat + 'ł';
                break;
            }
            case 'Л':
                //Ĺ
                if(softChars.search(txt[i+1] > -1)){
                    txtLat = txtLat + 'Ĺ';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'Ĺ';
                    break;
                }
                else txtLat = txtLat + 'Ł';
                break;
            case 'м':
                txtLat = txtLat + 'm';
                break;
            case 'М':
                txtLat = txtLat + 'M';
                break;
            case 'н':{
                //soft

                if((softChars.search(txt[i+1]) > -1)){
                    txtLat = txtLat + 'ń';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'ń';
                    break;
                }
                else txtLat = txtLat + 'n';
                break;
            }
            case 'Н':
                if((softChars.search(txt[i+1]) > -1)){
                    txtLat = txtLat + 'Ń';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'Ń';
                    break;
                }
                else txtLat = txtLat + 'N';
                break;
            case 'о':
                txtLat = txtLat + 'o';
                break;
            case 'О':
                txtLat = txtLat + 'O';
                break;
            case 'п':
                txtLat = txtLat + 'p';
                break;
            case 'П':
                txtLat = txtLat + 'P';
                break;
            case 'р':
                txtLat = txtLat + 'r';
                break;
            case 'Р':
                txtLat = txtLat + 'R';
                break;
            case 'с':
                if((softChars.search(txt[i+1]) > -1)){
                    txtLat = txtLat + 'ś';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'ś';
                    break;
                }
                else txtLat = txtLat + 's';
                break;
            case 'С':
                if((softChars.search(txt[i+1]) > -1)){
                    txtLat = txtLat + 'Ś';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'Ś';
                    break;
                }
                else txtLat = txtLat + 'S';
                break;
            case 'т':
                txtLat = txtLat + 't';
                break;
            case 'Т':
                txtLat = txtLat + 'T';
                break;
            case 'у':
                txtLat = txtLat + 'u';
                break;
            case 'У':
                txtLat = txtLat + 'U';
                break;
            case 'ў':
                txtLat = txtLat + 'ŭ';
                break;
            case 'Ў':
                txtLat = txtLat + 'Ŭ';
                break;
            case 'ф':
                txtLat = txtLat + 'f';
                break;
            case 'Ф':
                txtLat = txtLat + 'F';
                break;
            case 'х':
                txtLat = txtLat + 'ch';
                break;
            case 'Х':
                txtLat = txtLat + 'Ch';
                break;
            case 'ц':
                if((softChars.search(txt[i+1]) > -1)){
                    txtLat = txtLat + 'ć';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'ć';
                    break;
                }
                else txtLat = txtLat + 'c';
                break;
            case 'Ц':
                if((softChars.search(txt[i+1]) > -1)){
                    txtLat = txtLat + 'Ć';
                    break;
                }
                else if (consonants.search(txt[i+1]) > -1 && softVowels.search(txt[i+2]) > -1){
                    txtLat = txtLat + 'Ć';
                    break;
                }
                else txtLat = txtLat + 'C';
                break;
            case 'ч':
                txtLat = txtLat + 'č';
                break;
            case 'Ч':
                txtLat = txtLat + 'Č';
                break;
            case 'ш':
                txtLat = txtLat + 'š';
                break;
            case 'Ш':
                txtLat = txtLat + 'Š';
                break;
            case 'щ':
                txtLat = txtLat + 'šč';
                break;
            case 'Щ':
                txtLat = txtLat + 'ŠČ';
                break;
            case 'ы':
                txtLat = txtLat + 'y';
                break;
            case 'Ы':
                txtLat = txtLat + 'Y';
                break;
            case 'ь':
                txtLat = txtLat + '';
                break;
            case 'Ь':
                txtLat = txtLat + '';
                break;
            case 'э':
                txtLat = txtLat + 'e';
                break;
            case 'Э':
                txtLat = txtLat + 'E';
                break;
            case 'ю': {
                if (vowels.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'ju';
                else if (consonants.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'iu';
                break;
            }
            case 'Ю': {
                if (vowels.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'Ju';
                else if (consonants.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'Iu';
                break;
            }
            case 'я': {
                if (vowels.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'ja';
                else if (consonants.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'ia';
                break;
            }
            case 'Я': {
                if (vowels.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'Ja';
                else if (consonants.search(txt[i - 1]) > -1)
                    txtLat = txtLat + 'Ia';
                break;
            }
            default:
                txtLat = txtLat + txt[i];
        }
    }
    return txtLat;
}





























