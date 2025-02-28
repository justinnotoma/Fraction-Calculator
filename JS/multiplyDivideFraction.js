
export function multiplyDivideFraction(fraction1, fraction2, operation) {
    // Get fractions nunerator and denominator
    const fraction1Parts = fraction1.split('/')
    const fraction2Parts = fraction2.split('/')

    const fraction1Numerator = parseInt(fraction1Parts[0])
    const fraction1Denominator = parseInt(fraction1Parts[1])
    let fraction2Numerator = parseInt(fraction2Parts[0])
    let fraction2Denominator = parseInt(fraction2Parts[1])

    // If 'operation' is divion, than KCF (Keep fraction 1, Change divion to multiplication, Flip the numerator and the denominator)
    if (operation === 'divion') {
        fraction2Numerator = parseInt(fraction2Parts[1])
        fraction2Denominator = parseInt(fraction2Parts[0])
    }

    const ansNumerator = fraction1Numerator * fraction2Numerator
    const ansDenominator = fraction1Denominator * fraction2Denominator
    const newFraction = `${ansNumerator}/${ansDenominator}`

    return newFraction
}