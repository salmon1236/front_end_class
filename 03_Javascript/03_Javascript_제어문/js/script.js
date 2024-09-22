//  제어문
//  ■ 조건문: if() ~ else if() ~ else
//  ■ 선택문: switch ~ case ~ break ... default
//  ■ 반복문: while, do while, for

//  #1. 조건문: true 또는 false 조건에 의해서 어떤 결과를 도출 제어를 담당
var age =12;
if(age >= 13) {
    document.write(`가입연령 대상입니다. <br />`) 
}
else {document.write(`가입연령 대상이 아닙니다. <br />`)
}

//  월별에 따른 계절 문구 보여주기
var curMonth = parseInt(24);
if(curMonth >= 1 && curMonth <= 12){
    //  초기 입력 받은 값을 1~12까지로만 제한
    if(curMonth >= 3 && curMonth <= 5) {
        //  3 <= curMouth <= 5
        document.write(`따뜻한 봄 입니다.<br />`);
    }
    else if (curMonth >= 6 && curMonth <=8){
        //  6 <= curMonth <= 8
        document.write(`개같게 타죽을 것 같은 여름입니다. <br />`);
    }
    else if (curMonth >= 9 && curMonth <=11){
        //  9 <= curMonth <= 11
        document.write(`시원~한 가을이네유. <br />`);
    }
    else {
        document.write(`얼어뒤진 겨울입니다. <br />`);
    }
} else {
    document.write(`당신의 1년은 그렇습니까? <br />`)
}

//  조건문으로 구매자의 등급에 따른 할인쿠폰 발송
/*
VIP(100,000원 이상 구매 고객) ==> 30% 할인쿠폰 발송
GOLD(60,000원 이상 구매 고객) ==> 20% 할인쿠폰 발송
SILVER(10,000원 이상 구매 고객) ==> 10% 할인쿠폰 발송
BRONZE(10,000원 미만 구매 고객) ==> 5% 할인쿠폰 발송
*/

var buyPrice = 25000;
if(buyPrice >= 100000){
document.write(`당신은 VIP 등급입니다. 마이페이지에서 30% 할인쿠폰을 확인 바랍니다. <br/>`)
}
else if (buyPrice >= 60000) {
    document.write(`당신은 GOLD 등급입니다. 마이페이지에서 20% 할인쿠폰을 확인 바랍니다. <br/>`)
}
else if (buyPrice >= 10000) {
    document.write(`당신은 SILVER 등급입니다. 마이페이지에서 10% 할인쿠폰을 확인 바랍니다. <br/>`)
}
else 
    document.write(`당신은 BRONZE 등급입니다. 마이페이지에서 5% 할인쿠폰을 확인 바랍니다. <br/>`)



//  디바이스 사이즈를 기준으로 어떤 디바이스에서 서비스를 보고 있는지 확인 (PC, Tablet, Mobile)
//  가로사이즈가 1200px 이상 = pc
//  가로사이즈가 768px 이상 = Tablet
//  가로사이즈가 768px 미만 = Mobile

var deviceWidith =375;
if(deviceWidith >= 1200){
    console.log(`디바이스 - PC`);
} else if (deviceWidith >= 768) {
    console.log(`디바이스 - Tablet`);
} else {
    console.log(`디바이스 - Mobile`);
}

//  선택문 - 값이 정확하게 일치하는 여부에 따라 결과를 다르게 도출
var subwayNum = "2"
switch(subwayNum) {
    case "1": document.write(`군청색 1호선 입니다. <br/>`);
    break;
    case "2": document.write(`녹색 2호선 입니다. <br/>`);
    break;
    case "3": document.write(`주황색 3호선 입니다. <br/>`);
    break;
    case "4": document.write(`하늘색 4호선 입니다. <br/>`);
    break;
    case "5": document.write(`보라색 5호선 입니다. <br/>`);
    break;
    default : document.write(`유효값이 아닙니다. <br/>`);
}