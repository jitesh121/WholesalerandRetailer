//.Input : wholesaler_id, output : wholesaler along with list of active addresses.
 endpoint : localhost:3000/api/v1/wholesaler/getAllActiveAddresses
 body parameter : "wholesaler_id"
 method : post


 //Input : wholesaler_id, output : wholesaler along with list of retailers associated
  endpoint : localhost:3000/api/v1/wholesaler/getAssociatedRetailers
  body parameter : "wholesaler_id"
  method : post


  //Input : retailer_id, output : retailer along with list of wholesalers associated.
  endpoint : localhost:3000/api/v1/retailer/getAssociatedWholesaler
  body parameter : "retailer_id"
  method : post

  // Get a retailer who has single wholesaler
  endpoint : localhost:3000/api/v1/retailer/getRetailerWithSingleWhaolesaler
  body parameter : {}
  method : post

  // Total monthly turnover  of each wholesaler for complete year.
  endpoint : localhost:3000/api/v1/stock/getStockSaleCount
  method : get

  //Max turnover of each wholesaler from single retailer.
  endpoint : localhost:3000/api/v1/stock/getTurnOverFromRetailer
  method : get

  // List of wholesalers and month who have not done any business for any given month
  endpoint : localhost:3000/api/v1/stock/getNonBusinessWholesaler
   body parameter : "month"
  method : post



