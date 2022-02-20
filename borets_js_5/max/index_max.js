function createFraction(numerator, denominator) {
    return { numerator: numerator, denominator: denominator };
}
let firstFraction = createFraction(2, 5);
let secondFraction = createFraction(4, 6);

function print(fractionObj) {
    console.log(`${fractionObj.numerator}/${fractionObj.denominator}`);
}

function multiFraction(fractionObj1, fractionObj2) {
    let resultNumerator = fractionObj1.numerator * fractionObj2.numerator;
    let resultDenominator = fractionObj1.denominator * fractionObj2.denominator;
    let resultFraction = createFraction(resultNumerator, resultDenominator);
    let trimmedFraction = trimFraction(resultFraction);

    print(trimmedFraction);
}

function divisionFraction(fractionObj1, fractionObj2) {
    let resultNumerator = fractionObj1.numerator * fractionObj2.denominator;
    let resultDenominator = fractionObj2.numerator * fractionObj1.denominator;
    let resultFraction = createFraction(resultNumerator, resultDenominator);
    let trimmedFraction = trimFraction(resultFraction);

    print(trimmedFraction);
}

function unionFraction(fractionObj1, fractionObj2) {
    let resultNumerator = 0;
    let resultDenominator = 0;
    if (fractionObj1.denominator === fractionObj2.denominator) {
        resultNumerator = fractionObj1.numerator + fractionObj2.numerator;
        resultDenominator = fractionObj1.denominator;
    } else {
        let min =
            fractionObj1.denominator > fractionObj2.denominator
                ? fractionObj1.denominator
                : fractionObj2.denominator;
        while (true) {
            if (
                min % fractionObj1.denominator == 0 &&
                min % fractionObj2.denominator == 0
            ) {
                break;
            }
            min++;
            resultNumerator =
                fractionObj1.numerator * (min / fractionObj1.denominator) +
                fractionObj2.numerator * (min / fractionObj2.denominator);
            resultDenominator = min;
        }
    }

    let resultFraction = createFraction(resultNumerator, resultDenominator);
    let trimmedFraction = trimFraction(resultFraction);

    print(trimmedFraction);
}

function diffFraction(fractionObj1, fractionObj2) {
    let resultNumerator = 0;
    let resultDenominator = 0;
    if (fractionObj1.denominator === fractionObj2.denominator) {
        resultNumerator = fractionObj1.numerator - fractionObj2.numerator;
        resultDenominator = fractionObj1.denominator;
    } else {
        let min =
            fractionObj1.denominator > fractionObj2.denominator
                ? fractionObj1.denominator
                : fractionObj2.denominator;
        while (true) {
            if (
                min % fractionObj1.denominator == 0 &&
                min % fractionObj2.denominator == 0
            ) {
                break;
            }
            min++;
            resultNumerator =
                fractionObj1.numerator * (min / fractionObj1.denominator) -
                fractionObj2.numerator * (min / fractionObj2.denominator);
            resultDenominator = min;
        }
        let resultFraction = createFraction(resultNumerator, resultDenominator);
        let trimmedFraction = trimFraction(resultFraction);

        print(trimmedFraction);
    }
}

function trimFraction(fractionObj) {
    let resultNumerator = 0;
    let resultDenominator = 0;
    let isPositive = fractionObj.numerator >= 0;
    let absFraction = createFraction(
        Math.abs(fractionObj.numerator),
        fractionObj.denominator
    );

    let min =
        absFraction.denominator > absFraction.numerator
            ? absFraction.numerator
            : absFraction.denominator;
    for (let i = min; i > 0; i--) {
        if (absFraction.denominator % i === 0 && absFraction.numerator % i === 0) {
            resultNumerator = absFraction.numerator / i;
            resultDenominator = absFraction.denominator / i;
            break;
        }
    }

    return createFraction(
        isPositive ? resultNumerator : -resultNumerator,
        resultDenominator
    );
}

multiFraction(firstFraction, secondFraction);
divisionFraction(firstFraction, secondFraction);
unionFraction(firstFraction, secondFraction);
diffFraction(firstFraction, secondFraction);
print(trimFraction(secondFraction));
