const PaymentCalculation = {
    vatPercentage : 20,
    smsCharge : 0.021,
    mmsCharge : 0.16,
    percentageCharge : 45,
    applyVatCharge : function(amount) {
        return amount + amount*this.vatPercentage/100;
    },

    getAmountVatCharge : function(amount){
        return amount*this.vatPercentage/100;
    },

    processPlanData : function (plans) {
        if(!plans || !Array.isArray(plans)) {
            return [];
        }
        plans.forEach((plan, index) => {
          plan.vatCharge = this.getAmountVatCharge(plan.grandTotal);
      
          plan.grandTotalShow = plan.vatCharge + plan.totalPrice + plan.appServiceCharge;
          plans[index] = plan;
        });
      
        return plans;
      },
    isUserPlanExpired : function(userData) { //return true;
        const currentDate = new Date().getTime();
        const planExpireDate = new Date(userData.planExpireDate).getTime(); 

        if(planExpireDate < currentDate) {
            return true;
        }

        return false;
    },

    getPlanExpireDate(planData) {
        let validityInDays = planData.validity;
        validityInDays--;
        return new Date(new Date().getTime() + validityInDays*24*60*60*1000);        
    },

    getItemsChargeAmunt(totalItems, type = 'smsCharge') {
        //Get per item percentage charge by item type
        let perItemCharge = (this[type] * this.percentageCharge)/100 + this[type];
        // Get total items change
        let totalItemCharge = perItemCharge * totalItems;        

        return totalItemCharge ;
        // Apply VAT charge on total items
        //return totalItemCharge + totalItemCharge*this.vatPercentage/100
    }

}

export default PaymentCalculation




