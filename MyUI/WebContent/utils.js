MainShell.prototype = new sap.ui.ux3.Shell("mainShell" ,{ 
	id: "mainShell"   ,
		worksetItemSelected: function(oEvent){
	
		var sId = oEvent.getParameter("id");
		var oShell = oEvent.getSource();
		switch(sId){
		  case "ni_detail":
			  oShell.setContent(sap.ui.getCore().byId("detail"));
			  break;
		  case "ni_overview":
			  oShell.setContent(sap.ui.getCore().byId("overview"));
			  
			  break;
		 default:
			 break;
		}
	}});

function MainShell(){
	var _super = MainShell.prototype; //lokale Referenz auf Elternobjekt
	var _me = this;
	
	
	this._init= function(){
		_me.addWorksetItem(new sap.ui.ux3.NavigationItem("ni_overview",{text:"Übersicht"}));
		_me.addWorksetItem(new sap.ui.ux3.NavigationItem("ni_detail",{text:"Details"}));
		_me.addContent(sap.ui.view({id:"overview", viewName:"myui.overview", type:sap.ui.core.mvc.ViewType.XML}))
		_me.addContent(sap.ui.view({id:"detail", viewName:"myui.detail", type:sap.ui.core.mvc.ViewType.XML}));
		_me.setContent(sap.ui.getCore().byId("overview"));
		
	};
	
	
	
	//do it
	this._init();
	
}
