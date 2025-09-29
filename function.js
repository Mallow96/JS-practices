const ft_temperature_convert = (degree, type) => {
    let result;
    if (type === "C") {

        result = degree * (9 / 5) + 32;
    }
    else {
        result = (degree - 32) * (5 / 9);
    }
    return result;
}

const calcBMI = (h, w) => {
    height = parseInt(h, 10) / 100;
    weight = parseInt(w, 10);
    let BMI = (weight / (height * height)).toFixed(1);


    if (BMI < 18.5) {
        calResult = "過輕";
        bmiResult.style.color = "black";
        evaResult.style.color = "red";
    }
    else if (BMI < 24) {
        calResult = "正常";
        bmiResult.style.color = "black";
        evaResult.style.color = "green";
    }
    else if (BMI < 27) {
        calResult = "過重";
        bmiResult.style.color = "black";
        evaResult.style.color = "red";
    }
    else if (BMI < 30) {
        calResult = "輕度肥胖";
        bmiResult.style.color = "black";
        evaResult.style.color = "red";
    }
    else if (BMI < 35) {
        calResult = "中度肥胖";
        bmiResult.style.color = "black";
        evaResult.style.color = "red";
    }
    else if (BMI >= 35) {
        calResult = "重度肥胖"
        bmiResult.style.color = "black";
        evaResult.style.color = "red";
    }
    else {
        BMI = "未輸入";
        calResult = "無法計算";
        bmiResult.style.color = "red";
        evaResult.style.color = "red";
    }

    return { "bmi": BMI, "result": calResult };
}

