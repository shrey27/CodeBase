const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})
/**
 * The thing about value attribute is that for text or number input type it holds the default value which will be present when your 
 * page loads up. So you have to remove that value or if you start typing it will continue from the end of the default value
 * That's why in line 9 we clear the default value on keydown otherwise last held value becomes default value for that input tag
 * and you will observe more than one digit in the single input field.
 * e.g. 
 * input => value=''
 * on keydown 4 => value=4
 * on keydown 4 => value='4'+4 => 44
 * and so on, but with line 9 statement
 * input => value=''
 * on keydown 4 => value=4
 * value=''(default value = '')
 * on keydown 4 => value=4 
 */