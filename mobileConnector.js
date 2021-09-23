loadLibrary("xtk:shared/nl.js");
NL.require('/nl/core/shared/xtk.js')
  .require('/nl/core/shared/js.js')
  .require('/ib/shorten.js');



function mobileAgent(){

  this.TRACKING_URL = "https://marketing.ibank.co.kr";
  this.SHORTEN_URL = "http://marketing.ibank.co.kr/shorten/";
  
  this.TRACKING_URL = this.TRACKING_URL.replace("https://","").replace("http://","");
  this.REGEXP = new RegExp("(https?:\/\/"+this.TRACKING_URL+"\/r\/\\?id=[a-zA-Z0-9-%&;=_]{20,150})","gm"); 
  
}

function processDeliveryPart (deliveryPart) {

/* API request code comes here */
  var msgs = <messages successOnSent="true"/>;
  var mobile = new mobileAgent();
  var shortenUrl = mobile.SHORTEN_URL;
  var regExp = mobile.REGEXP;
  
  var mobileContent = "";
  var urlArr = null;
  
  var xmlObj = null;  
  var xmlCollection  = new DOMDocument("shorten-collection");
  var xmlCollectionObj = xmlCollection.root;
  
  xmlCollectionObj.setAttribute("xtkschema", "ib:shorten");
  
  try { 
    
    var xmlCollection  = new DOMDocument("shorten-collection")
    var xmlCollectionObj = xmlCollection.root;
    xmlCollectionObj.setAttribute("xtkschema", "ib:shorten");
    
    
    foreach ( let msg in deliveryPart.message){
      xmlObj = null;
      xmlObj = xmlCollection.createElement("shorten");
      xmlObj.setAttribute("_operation", "insert");
      
      mobileContent = "";
      mobileContent = msg.mobileAgent.toString();
      urlArr = mobileContent.match(regExp);
 
      if(urlArr && urlArr != null){
        urlArr.forEach(function(url, index){
          mobileContent = mobileContent.replace(url, shortenUrl + $ib.shorten.create(msg.@id, index, url) );
          
      xmlObj.setAttribute("code", $ib.shorten.create(msg.@id, index, url));
      xmlCollectionObj.appendChild(xmlObj);
        });
      }
    }
    
    logonEscalation('admin');
    xtk.session.WriteCollection(xmlCollection); 
    
  } catch (e) {
     console.log("error : " + e);
  } 
  
  return msgs;

}  



//-----------------------------------------------------------------------------

// Useless here, but needed by Neolane

//-----------------------------------------------------------------------------

function getStatus (xml) {

  var msgs = <messages/>;

  return msgs;

}

//-----------------------------------------------------------------------------

// Useless here, but needed by Neolane

//-----------------------------------------------------------------------------

function getMessages (xml) {

  var msgs = <messages/>;

  return msgs;

}