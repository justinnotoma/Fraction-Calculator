/**
 * 
 * @param {string} fraction1 
 * @param {string} fraction2 
 * @param {string} operation 
 * @returns newFraction
 */
export function addSubFractions(fraction1, fraction2, operation) {
    // Get fractions nunerator and denominator
    const fraction1Parts = fraction1.split('/')
    const fraction2Parts = fraction2.split('/')

    const fraction1Numerator = parseInt(fraction1Parts[0])
    const fraction1Denominator = parseInt(fraction1Parts[1])
    let fraction2Numerator = parseInt(fraction2Parts[0])
    let fraction2Denominator = parseInt(fraction2Parts[1])

    // Get LCM
    const LCMInfo = findLCM(fraction1Denominator, fraction2Denominator)

    // Calculate answer
    let ans;
    let newFraction;

    if (operation === 'plus') {
        ans = (fraction1Numerator * LCMInfo.num1Multiplier) + (fraction2Numerator * LCMInfo.num2Multiplier)
        newFraction = `${ans}/${LCMInfo.LCM}`
    }

    if (operation === 'minus') {
        ans = (fraction1Numerator * LCMInfo.num1Multiplier) - (fraction2Numerator * LCMInfo.num2Multiplier)
        newFraction = `${ans}/${LCMInfo.LCM}`
    }

    return newFraction
}

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns LCM
 */
function findLCM(num1, num2) {
    const LCM = {'LCM': 1, 'num1Multiplier': 1, 'num2Multiplier': 1}

    if (num1 === num2) return {'LCM': num1, 'num1Multiplier': 1, 'num2Multiplier': 1}

    // Get multiples
    let greaterThan;
    if (num1 > num2) greaterThan = num1
    if (num1 < num2) greaterThan = num2
    
    const num1Multiples = []
    const num2Multiples = []
    for(var x = 1; x < greaterThan + 1; x++) {
        num1Multiples.push(num1 * x)
        num2Multiples.push(num2 * x)
    }

    // Find the lcm
    for (const multiple of num1Multiples) {
        if (num2Multiples.includes(multiple)) {
            LCM.LCM = multiple
            break
        } 
    }

    LCM.num1Multiplier = LCM.LCM / num1
    LCM.num2Multiplier = LCM.LCM / num2
    return LCM
}