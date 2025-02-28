import { addSubFractions } from "./addSubtractFraction.js"
import { findGCF, simplify } from "./fractionFunc.js"
import { multiplyDivideFraction } from "./multiplyDivideFraction.js"

const numbers = document.getElementsByClassName('number')
const operations = document.getElementById('operations')
const submitBtn = document.getElementById('submit')
const backBtn = document.getElementById('back')

const calculator = document.getElementById('calculate')
const answer = document.getElementById('answer')

const equationQuestion = document.getElementById('equation')
const equationAns = document.getElementById('equation-answer')


submitBtn.addEventListener('click', e=> {
    e.preventDefault()

    // Edge Cases
    if (numbers[0].value === '' || numbers[0].value === '0') return 
    if (numbers[1].value === '' || numbers[1].value === '0') return 
    if (numbers[2].value === '' || numbers[2].value === '0') return 
    if (numbers[3].value === '' || numbers[3].value === '0') return
    
    // Get data 
    const fraction1Numerator = numbers[0]
    const fraction1Denominator = numbers[1]

    const fraction2Numerator = numbers[2]
    const fraction2Denominator = numbers[3]
    
    const fraction1 = `${fraction1Numerator.value}/${fraction1Denominator.value}`
    const fraction2 = `${fraction2Numerator.value}/${fraction2Denominator.value}`
    const operation = operations.value

    // Calculate Data
    let ans;
    if (operation === 'plus' || operation === 'minus') ans = addSubFractions(fraction1, fraction2, operation)
    if (operation === 'multiply' || operation === 'divion') ans = multiplyDivideFraction(fraction1, fraction2, operation)
    
    let simplifyAns = simplify(ans)

    // Check if 'ans' is a whole number
    if (simplifyAns.toString().split('/')[1] === '1') {
        simplifyAns = ans.toString().split('/')[0] 
    }

    // Display Answer
    calculator.classList.remove('shown')
    calculator.classList.add('hidden')

    answer.classList.remove('hidden')
    answer.classList.add('shown')

    submitBtn.classList.add('hidden')
    backBtn.classList.remove('hidden')

    let operationSign;
    if (operation === 'plus') operationSign = '+'
    if (operation === 'minus') operationSign = '–'
    if (operation === 'multiply') operationSign = '*'
    if (operation === 'divion') operationSign = '÷'

    equationQuestion.textContent = `${fraction1} ${operationSign} ${fraction2}:`
    if (ans === simplifyAns) equationAns.textContent = ans
    if (ans !== simplifyAns) equationAns.innerHTML = `${simplifyAns} or ${ans} <i>(Orignal)</i>`
    

    // Reset data
    fraction1Numerator.value = ''
    fraction1Denominator.value = ''

    fraction2Numerator.value = ''
    fraction2Denominator.value = ''

    operations.value = 'plus'
})

backBtn.addEventListener('click', e=> {
    calculator.classList.remove('hidden')
    calculator.classList.add('shown')

    answer.classList.remove('shown')
    answer.classList.add('hidden')

    submitBtn.classList.remove('hidden')
    backBtn.classList.add('hidden')
})