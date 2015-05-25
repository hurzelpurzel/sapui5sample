sap.ui.controller("myui.overview", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf myui.overview
	 */
	onInit : function() {
		var uri = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/"; // local
		var oModel = new sap.ui.model.odata.ODataModel(uri, true);
		sap.ui.getCore().setModel(oModel);
//		
	
	 	var oTable = sap.ui.getCore().getElementById("overview").byId(	"employeesTable");
		oTable.bindRows({
			path : "/Employees"
		});
		

		oTable.attachRowSelectionChange(function(oEvent) {

			var currentRowContext = oEvent.getParameter("rowContext"); // Stores
			// your
			// Row
			// Context
			// in
			// the
			// variable
			// alert(currentRowContext.sPath);

			
			var dview = sap.ui.getCore().byId("detail").byId("grid");

			dview.unbindElement();
			dview.setModel(sap.ui.getCore().getModel());

			dview.bindElement(currentRowContext.sPath);

			$("#ni_detail").click(); //workaround to show details
		});
		
		
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf myui.overview
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf myui.overview
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf myui.overview
 */
// onExit: function() {
//
// }
});