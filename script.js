
monthlyRent = undefined;
monthlyEletricity = undefined;
monthlyHelperExpense=undefined;
monthlyMiscExpense=undefined;
overallTotalNoOfProducts=undefined;
totaloverallUnitsSoldPerMonth=undefined;
productName=undefined;
productBulkMaterialCost=undefined;
noOfUnitsMadeFromBulkMaterial=undefined;
noOfunitsSoldMonthly=undefined;
optionalMarketPrice=undefined;
noOfWorkingDaysPerMonth=undefined;
totalProfitMargin=undefined;

const monthlyRentElement= document.getElementById("monthlyrent");
monthlyRentElement.addEventListener('sl-change', event=>{
	monthlyRent=event.target.value;
});

const monthlyElectricityElement= document.getElementById("monthlyEletricity");
monthlyElectricityElement.addEventListener('sl-change', event=>{
	monthlyEletricity=event.target.value;
});

const monthlyHelperExpenseElement= document.getElementById("monthlyHelperExpense");
monthlyHelperExpenseElement.addEventListener('sl-change', event=>{
	monthlyHelperExpense=event.target.value;
});

const monthlyMiscExpenseElement= document.getElementById("monthlyMiscExpenses");
monthlyMiscExpenseElement.addEventListener('sl-change', event=>{
	monthlyMiscExpense=event.target.value;
});

const overallTotalNoOfProductsElement= document.getElementById("noOfProducts");
overallTotalNoOfProductsElement.addEventListener('sl-change', event=>{
	overallTotalNoOfProducts=event.target.value;
});

const totaloverallUnitsSoldPerMonthElement= document.getElementById("totalUnitsSoldOverall");
totaloverallUnitsSoldPerMonthElement.addEventListener('sl-change', event=>{
	totaloverallUnitsSoldPerMonth=event.target.value;
});

const productNameElement= document.getElementById("productName");
productNameElement.addEventListener('sl-change', event=>{
	productName=event.target.value;
});

const productBulkMaterialCostElement= document.getElementById("monthlyBulkMaterialsCost");
productBulkMaterialCostElement.addEventListener('sl-change', event=>{
	productBulkMaterialCost=event.target.value;
});

const noOfUnitsMadeFromBulkMaterialElement= document.getElementById("noOfUnitsMadeFromBulk");
noOfUnitsMadeFromBulkMaterialElement.addEventListener('sl-change', event=>{
	noOfUnitsMadeFromBulkMaterial=event.target.value;
});

const noOfunitsSoldMonthlyElement= document.getElementById("monthlyUnitsSold");
noOfunitsSoldMonthlyElement.addEventListener('sl-change', event=>{
	noOfunitsSoldMonthly=event.target.value;
});

const optionalMarketPriceElement= document.getElementById("optionalMarketPrice");
optionalMarketPriceElement.addEventListener('sl-change', event=>{
	optionalMarketPrice=event.target.value;
});

const noOfWorkingDaysPerMonthElement= document.getElementById("noOfWorkingDays");
noOfWorkingDaysPerMonthElement.addEventListener('sl-change', event=>{
	noOfWorkingDaysPerMonth=event.target.value;
});

const totalProfitMarginElement = document.getElementById("targetProfitMargin");
totalProfitMarginElement.addEventListener('sl-change', event=>{
	totalProfitMargin=event.target.value;
});
