
// net salary calculator step by step explanation 

// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
//  Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

// NB: Use KRA, NHIF, and NSSF values provided in the link below.

// - https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

// Links to an external site.-  Links to an external site.Links to an external site.

// - www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.


const taxRates = [{
  // the tax rate for salary between 0 to 24000
  min:0,
  max:24000,
  percentageRate: 0.1
}, 
// the rate for slaraly between 24001 to 32333
{
  min:24001,
  max:32333,
  percentageRate: 0.25
}, 
// the taxe rate for salary  between 32334 to 50000
{
  min:32334,
  max:500000,
  percentageRate: 0.3
}, 
// the tax rate for salary between 500001 to 800000
{
  min:500001,
  max:800000,
  percentageRate: 0.325
}, 

// the tax rates for the salary between 800001 to a maximum of infinity 
{
  min:800001,
  max:Infinity,
  percentageRate: 0.35
}];

// we now define the nhif deductions as follows
const nhif = [{
  // with a gross salary of 0 to 5999 
  grossPayMin: 0,
  grossPayMax: 5999,
  deduction: 150
}, 

// with a gross salary of 6000 to 7999
{
  grossPayMin:6000,
  grossPayMax:7999,
  deduction:300
}, 

// with a gross salary of 8000 to 11999
{
  grossPayMin:8000,
  grossPayMax:11999,
  deduction:400
}, 

// with a gross salary of 12000 to 14999
{
  grossPayMin:12000,
  grossPayMax:14999,
  deduction:500
}, 

// with a gross salary of 15000 to 19999
{
  grossPayMin:15000,
  grossPayMax:19999,
  deduction:600
}

];
// here we calculate netsalary as follows 
const netSalary =(basicSalary, benefits)=>{
  // lets get the taxable income
  let tax;
  let nhifRate;
  
      for (let i = 0; i < taxRates.length; i++) {
          if (basicSalary >= taxRates[i].min && basicSalary <= taxRates[i].max) {
              // console.log(taxRates[i].percentageRate)
              tax = taxRates[i].percentageRate * basicSalary;
             
              // return taxRates[i].percentageRate;
          }
      }
      // return null; 
      // takes cre of the case where basicSalary is outside all tax brackets
  
      // console.log(`tax is ${tax}`)
      ;
nssfRate = 200;

//find nhif payable

    for (let i = 0; i < nhif.length; i++) {
        // console.log('running');
        if (basicSalary >= nhif[i].grossPayMin && basicSalary <= nhif[i].grossPayMax) {
            // console.log(nhif[i].deduction);
            nhifRate= nhif[i].deduction;
        }
    }
    // return null; // Handle the case where basicSalary is outside all ranges

    // console.log(`payee: ${tax}`)
    // console.log(`nhif: ${nhifRate}`)
    // console.log(`nssf: ${nssfRate}`)
   
const totalDeductions =  tax + nhifRate + nssfRate;

// console.log(`total deduction is ${totalDeductions}`)

const grosfPay = basicSalary + benefits;

const netSalary = grosfPay -totalDeductions;

// console.log(`net pay  is ${netSalary}`)
return {netSalary, nssfRate, nhifRate, tax};
}


//  tax(10000, 2500)

 console.log( netSalary(10000, 2500));
  
