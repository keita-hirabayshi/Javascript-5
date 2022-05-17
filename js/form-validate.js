init();
function init() {
    const $input = document.querySelector('.validate-target');
    $input.addEventListener('input', function(event) {
        const $target = event.currentTarget;
        console.log($target.validity);
        // 入力文字数を検知し入力枠の色を変える
        if($target.checkValidity()){
            $target.classList.add('is-valid');
            $target.classList.remove('is-invalid');
            
        }else{
            $target.classList.add('is-invalid');
            $target.classList.remove('is-valid');
        // 入力した文字数が条件を満たすかチェック
            if($target.validity.valueMissing) {
                console.log('値の入力が必須です。');
            } else if ($target.validity.tooShort) {
                console.log($target.minLength + '文字以上で入力してください。現在の文字数は' + $target.value.length +'文字です。');
            } else if ($target.validity.tooLong) {
                console.log($target.maxLength + '文字以下で入力してください。現在の文字数は' + $target.value.length +'文字です。');
            } else if ($target.validity.patternMismatch) {
                console.log('半角英数字で入力してください。');
            } 
        }
    });
    console.dir($input);
}