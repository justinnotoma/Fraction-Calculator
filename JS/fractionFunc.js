/**
 * Finding the GCF between two number
 * @param {number} num1 
 * @param {number} num2 
 * @returns gcf
 */
export function findGCF(num1, num2) {
    // Get both numbers factors
    const commonFactors = []
    for (var x = 0; x < num2 + 1; x++) {
        if ((num1 % x) === 0 && (num2 % x) === 0) commonFactors.push(x)
    }

    const gcf = commonFactors[commonFactors.length - 1]
    return gcf
}

/**
 * Simplify the fraction
 * @param {string} fraction 
 * @returns simplifyFraction
 */
export function simplify(fraction) {
    const fractionPart = fraction.split('/')
    const gcf = findGCF(parseInt(fractionPart[0]), parseInt(fractionPart[1]))

    let numerator = fractionPart[0] / gcf
    const denominator = fractionPart[1] / gcf

    let simplifyFraction = `${numerator}/${denominator}`

    // Calculate mixed fraction
    if (numerator > denominator) {
        // Calculate mixed number
        const decimalFraction = numerator / denominator
        const wholeNum = decimalFraction.toString().split('.')[0]
        const mixedNumber = wholeNum

        // Calculate new numerator
        numerator = numerator % denominator

        simplifyFraction = `${mixedNumber} ${numerator}/${denominator}`
    }

    return simplifyFraction
}