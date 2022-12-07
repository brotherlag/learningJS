//add your IK to "IKstr array"
const IKstr = ['', '', '', '', '', '', '', '', '', '', ''];
const IKnum = [];

IKstr.forEach(str => {
    IKnum.push(Number(str));
});


const IKyearstr = [IKstr[1]+IKstr[2]];
const IKyearnum = [];
const IKmonthstr = [IKstr[3]+IKstr[4]];
const IKmonthnum = [];
const IKdaystr = [IKstr[5]+IKstr[6]];
const IKdaynum = [];
const IKplacestr = [IKstr[7]+IKstr[8]+IKstr[9]];
const IKplacenum = [];


IKyearstr.forEach(str => {
    IKyearnum.push(Number(str));
});


IKmonthstr.forEach(str => {
    IKmonthnum.push(Number(str));
});

IKdaystr.forEach(str => {
    IKdaynum.push(Number(str));
});

IKplacestr.forEach(str => {
    IKplacenum.push(Number(str));
});

let cnparsed = parseInt((IKnum[0] * 1 + IKnum[1] * 2 + IKnum[2] * 3 + IKnum[3] * 4 + IKnum[4] * 5 + IKnum[5] * 6 + IKnum[6] * 7 + IKnum[7] * 8 + IKnum[8] * 9 + IKnum[9] * 1) / 11);
let cnparsed2 = parseInt((IKnum[0] * 3 + IKnum[1] * 4 + IKnum[2] * 5 + IKnum[3] * 6 + IKnum[4] * 7 + IKnum[5] * 8 + IKnum[6] * 9 + IKnum[7] * 1 + IKnum[8] * 2 + IKnum[9] * 3) / 11);
let cn1 = (((IKnum[0] * 1 + IKnum[1] * 2 + IKnum[2] * 3 + IKnum[3] * 4 + IKnum[4] * 5 + IKnum[5] * 6 + IKnum[6] * 7 + IKnum[7] * 8 + IKnum[8] * 9 + IKnum[9] * 1)) - (cnparsed * 11));
let cn2 = (((IKnum[0] * 3 + IKnum[1] * 4 + IKnum[2] * 5 + IKnum[3] * 6 + IKnum[4] * 7 + IKnum[5] * 8 + IKnum[6] * 9 + IKnum[7] * 1 + IKnum[8] * 2 + IKnum[9] * 3)) - (cnparsed2 * 11));


function ikCheck() {
    if  (cn1 === IKnum[10] || cn2 === IKnum[10] && IKnum[0] < 9 && IKdaynum[0] < 31 && IKplacenum[0] > 0 && IKplacenum < 701) {
        console.log('The ID code is valid!');
    } else {
        console.log('The code is invalid! Please check the numbers!')
    }
}

ikCheck(IKnum);


if (IKnum[0] === 1) {
    console.log('Male, born on');
} else if (IKnum[0] === 2) {
    console.log('Female, born on');    
} else if (IKnum[0] === 3) {
    console.log('Male, born on');    
} else if (IKnum[0] === 4) {
    console.log('Female, born on');    
} else if (IKnum[0] === 5) {
    console.log('Male, born on');    
} else if (IKnum[0] === 6) {
    console.log('Female, born on');    
} else if (IKnum[0] === 7) {
    console.log('Male, born on');    
} else if (IKnum[0] === 8) {
    console.log('Female, born on');    
}

console.log(IKdaynum[0]);

if (IKmonthnum[0] === 01) {
    console.log('of January');
} else if (IKmonthnum[0] === 02) {
    console.log('of February');
} else if (IKmonthnum[0] === 03) {
    console.log('of March');
} else if (IKmonthnum[0] === 04) {
    console.log('of April');
} else if (IKmonthnum[0] === 05) {
    console.log('of May');
} else if (IKmonthnum[0] === 06) {
    console.log('of June');
} else if (IKmonthnum[0] === 07) {
    console.log('of July');
} else if (IKmonthnum[0] === 08) {
    console.log('of August');
} else if (IKmonthnum[0] === 09) {
    console.log('of September');
} else if (IKmonthnum[0] === 10) {
    console.log('of October');
} else if (IKmonthnum[0] === 11) {
    console.log('of November');
} else if (IKmonthnum[0] === 12) {
    console.log('of December');
} 

console.log(IKyearnum[0]);

if (IKplacenum[0] > 0 && IKplacenum[0] < 10) {
    console.log('in Kuressaare haigla');
} else if (IKplacenum[0] > 10 && IKplacenum[0] < 19) {
    console.log('in Tartu Ülikooli Naistekliinik');
} else if (IKplacenum[0] > 20 && IKplacenum[0] < 151) {
    console.log('in Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)');
} else if (IKplacenum[0] > 150 && IKplacenum[0] < 161) {
    console.log('in Keila haigla');
} else if (IKplacenum[0] > 160 && IKplacenum[0] < 221) {
    console.log('in Rapla haigla, Loksa haigla, Hiiumaa haigla (Kärdla)');
} else if (IKplacenum[0] > 220 && IKplacenum[0] < 271) {
    console.log('in Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi)');
} else if (IKplacenum[0] > 270 && IKplacenum[0] < 371) {
    console.log('in Maarjamõisa kliinikum (Tartu), Jõgeva haigla');
} else if (IKplacenum[0] > 370 && IKplacenum[0] < 421) {
    console.log('in Narva haigla');
} else if (IKplacenum[0] > 420 && IKplacenum[0] < 471) {
    console.log('in Pärnu haigla ');
} else if (IKplacenum[0] > 470 && IKplacenum[0] < 491) {
    console.log('in Haapsalu haigla');
} else if (IKplacenum[0] > 490 && IKplacenum[0] < 521) {
    console.log('in Järvamaa haigla (Paide)');
} else if (IKplacenum[0] > 520 && IKplacenum[0] < 571) {
    console.log('in Rakvere haigla, Tapa haigla');
} else if (IKplacenum[0] > 570 && IKplacenum[0] < 601) {
    console.log('in Valga haigla');
} else if (IKplacenum[0] > 600 && IKplacenum[0] < 651) {
    console.log('in Viljandi haigla');
} else if (IKplacenum[0] > 650 && IKplacenum[0] < 701) {
    console.log('in Lõuna-Eesti haigla (Võru), Põlva haigla');
} 
