
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

productSuggestedPrice=undefined;
productBasePrice=undefined;
isdeficit=undefined;
let overallDetailsJSON= JSON.parse(localStorage.getItem('price-predictor-overall'));

if(overallDetailsJSON != undefined){
	if(overallDetailsJSON.stored=true){
		monthlyRent=overallDetailsJSON.monthlyRent;
		monthlyEletricity=overallDetailsJSON.monthlyEletricity;
		monthlyHelperExpense=overallDetailsJSON.monthlyHelperExpense;
		monthlyMiscExpense=overallDetailsJSON.monthlyMiscExpense;
		overallTotalNoOfProducts=overallDetailsJSON.overallTotalNoOfProducts;
		totaloverallUnitsSoldPerMonth=overallDetailsJSON.totaloverallUnitsSoldPerMonth;
	}
}

const monthlyRentElement= document.getElementById("monthlyrent");
monthlyRentElement.addEventListener('sl-change', event=>{
	monthlyRent=event.target.value;
});
monthlyRentElement.value=monthlyRent;

const monthlyElectricityElement= document.getElementById("monthlyEletricity");
monthlyElectricityElement.addEventListener('sl-change', event=>{
	monthlyEletricity=event.target.value;
});
monthlyElectricityElement.value=monthlyEletricity;

const monthlyHelperExpenseElement= document.getElementById("monthlyHelperExpense");
monthlyHelperExpenseElement.addEventListener('sl-change', event=>{
	monthlyHelperExpense=event.target.value;
});
monthlyHelperExpenseElement.value=monthlyHelperExpense;

const monthlyMiscExpenseElement= document.getElementById("monthlyMiscExpenses");
monthlyMiscExpenseElement.addEventListener('sl-change', event=>{
	monthlyMiscExpense=event.target.value;
});
monthlyMiscExpenseElement.value=monthlyMiscExpense;

const overallTotalNoOfProductsElement= document.getElementById("noOfProducts");
overallTotalNoOfProductsElement.addEventListener('sl-change', event=>{
	overallTotalNoOfProducts=event.target.value;
});
overallTotalNoOfProductsElement.value=overallTotalNoOfProducts;

const totaloverallUnitsSoldPerMonthElement= document.getElementById("totalUnitsSoldOverall");
totaloverallUnitsSoldPerMonthElement.addEventListener('sl-change', event=>{
	totaloverallUnitsSoldPerMonth=event.target.value;
});
totaloverallUnitsSoldPerMonthElement.value=totaloverallUnitsSoldPerMonth;

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

const localStorageButton = document.getElementById("saveToLocalStroage");
localStorageButton.addEventListener("onclick", event=>{
	storeOverallDetailsLocal();
});



function estimatePrice(){
	if(monthlyRent==undefined || monthlyEletricity==undefined || monthlyHelperExpense==undefined || monthlyMiscExpense==undefined || 
	   overallTotalNoOfProducts==undefined || totaloverallUnitsSoldPerMonth==undefined || productBulkMaterialCost==undefined || 
	   noOfUnitsMadeFromBulkMaterial==undefined || noOfunitsSoldMonthly ==undefined || noOfWorkingDaysPerMonth==undefined ||
	   totalProfitMargin==undefined){	
			const alertsDiv= document.getElementById("divForAlerts");
			const slAlertDiv= document.createElement("sl-alert");
			slAlertDiv.variant="warning";
			slAlertDiv.open=true;
			slAlertDiv.closable=true;
			slAlertDiv.variant="warning";
			slAlertDiv.duration=3000;
			const slIconDiv= document.createElement("sl-icon");
			slIconDiv.slot="icon";
			slIconDiv.name="gear";
			slAlertDiv.appendChild(slIconDiv);
			slAlertDiv.innerText="All the fields are not populated.";
			alertsDiv.appendChild(slAlertDiv);
	}else{
		isdeficit=false;
		let totalOverhead= parseFloat(monthlyEletricity)+parseFloat(monthlyHelperExpense)+parseFloat(monthlyRent)+parseFloat(monthlyMiscExpense);
		let materialCostPerUnit=parseFloat(productBulkMaterialCost)/parseFloat(noOfUnitsMadeFromBulkMaterial);
		let model1Overhead=totalOverhead/parseFloat(totaloverallUnitsSoldPerMonth);
		productBasePrice=Math.round((materialCostPerUnit+model1Overhead));
		productSuggestedPrice=Math.round(productBasePrice*(1+(parseFloat(totalProfitMargin)/100)));
		if(parseFloat(noOfUnitsMadeFromBulkMaterial)>parseFloat(noOfunitsSoldMonthly)){
			isdeficit=true;
			let deficit=Math.round(((parseFloat(noOfUnitsMadeFromBulkMaterial)-parseFloat(noOfunitsSoldMonthly))*materialCostPerUnit)/parseFloat(noOfunitsSoldMonthly));
			productSuggestedPrice=productSuggestedPrice+deficit;
		}
		const resultWindow = document.getElementById("resultCard");
		resultWindow.innerHTML='';
		const resultCard= document.createElement("sl-card");
		resultCard.classList.add("card-header");
		resultCard.classList.add("custom-card");
		const headerSlot=document.createElement("div");
		headerSlot.slot="header";
		headerSlot.innerText="Suggessted Price";
		resultCard.appendChild(headerSlot);
		let resultline= isdeficit?`There is deficit, Assuming the items will not be sold for next month, wastage is being added to suggested price. \n Break-Even Price:     ${productBasePrice} \n Suggested Price:     ${productSuggestedPrice}` :`Break-Even Price:     ${productBasePrice} \n Suggested Price:     ${productSuggestedPrice}`;
		resultCard.innerText=resultline;
		resultWindow.appendChild(resultCard);
		
	}
}



function storeOverallDetailsLocal(){
	let dummyJson={};
	dummyJson.monthlyRent=monthlyRent;
	dummyJson.monthlyEletricity=monthlyEletricity;
	dummyJson.monthlyHelperExpense=monthlyHelperExpense;
	dummyJson.monthlyMiscExpense=monthlyMiscExpense;
	dummyJson.overallTotalNoOfProducts=overallTotalNoOfProducts;
	dummyJson.totaloverallUnitsSoldPerMonth=totaloverallUnitsSoldPerMonth;
	dummyJson.stored=true;
	localStorage.setItem('price-predictor-overall',JSON.stringify(dummyJson));
	
}


