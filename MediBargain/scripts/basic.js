import puppeteer from 'puppeteer';

const scrapeMedicines= async (search_str) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
   var search_string=search_str;
  //apollo pharmacy scraping
    var page_url='https://www.apollopharmacy.in/search-medicines/';
    var temp=page_url;
    page_url+=search_string;
    page_url=page_url.replaceAll(" ","%20");
    //pharm easy scraping
    var peasy_page_url="https://pharmeasy.in/search/all?name=";
    peasy_page_url+=search_string;
    peasy_page_url=peasy_page_url.replaceAll(" ","%20");
    await page.goto(page_url);
    
  var productResultsSelector = 'body > div.SearchListing_searchListingContainer__07Ivl'; 
  await page.waitForSelector(productResultsSelector);
  var images = await page.$$('div.Gv > div.Iv > img');
  var names= await page.$$('h2.Zd.Xd.Sv.Tv.kf');
  var prices= await page.$$('p.df.Xd.CP.Rv.jf');
let count=0;
  // Now search for the image within the search results
  const medicine_object=[];
  for (const image of images) {
    count++;
    const imgsrc = await page.evaluate(img => img.getAttribute('src'), image);
    medicine_object.push({name:"", imgsrc:imgsrc,  price:'0', salt:"",visit_link:""});
    if(count==7)
    break;
  }
  count=0;
  for (const name of names) {
    count++;
    const nameText = await page.evaluate(name => name.innerText, name);
    const generatedURL= (temp+nameText).replaceAll(" ","%20");
    medicine_object[count-1].name=nameText;
    medicine_object[count-1].visit_link=generatedURL;
    if(count==7)
    break;
  }
  count=0;
  for(const price of prices)
  {
    count++;;
    const priceText= await page.evaluate(price=>price.innerText,price);
    medicine_object[count-1].price=priceText;
    if(count==7)
    break;
  }
  var sz=count;
  count=0;
  var peasy_page_url="https://pharmeasy.in/search/all?name=";
    var temp=peasy_page_url;
    peasy_page_url+=search_string;
    peasy_page_url=peasy_page_url.replaceAll(" ","%20");    
  
  // Now search for the image within the search results
  await page.goto(peasy_page_url);
  productResultsSelector = 'div.LHS_container__mrQkM.Search_fullWidthLHS__mteti'; 
  await page.waitForSelector(productResultsSelector);
  images = await page.$$('.ProductCard_productImage__dq5lq');
  names= await page.$$('h1.ProductCard_medicineName__8Ydfq');
  prices= await page.$$('span.ProductCard_striked__jkSiD');

  for (const image of images) {
    count++;
    const imgsrc = await page.evaluate(img => img.getAttribute('src'), image);
    medicine_object.push({name:"", imgsrc:imgsrc,  price:'0', salt:"",visit_link:""});
    if(count==4)
    break;
  }
  count=0;
  for (const name of names) {
    count++;
    //try
    //{
    const nameText = await page.evaluate(name => name.innerText, name);
   const generatedURL= (temp+nameText).replaceAll(" ","%20");
    medicine_object[count-1+sz].name=nameText;
    medicine_object[count-1+sz].visit_link=generatedURL;
    if(count==4)
    break;
    }
    
  count=0;
  for(const price of prices)
  {
    count++;;
   
    var priceText= await page.evaluate(price=>price.innerText,price);
    priceText=priceText.replaceAll("*","");
    medicine_object[count-1+sz].price=priceText;
    
    if(count==4)
    break;
  }
  sz+=count;
  var tata_page_url="https://www.1mg.com/search/all?name=";
    temp=tata_page_url;
    tata_page_url+=search_string;
    tata_page_url=tata_page_url.replaceAll(" ","%20"); 
    await page.goto(tata_page_url);
    productResultsSelector = 'body'; 
     await page.waitForSelector(productResultsSelector);
   images = await page.$$('.style__image___Ny-Sa.style__loaded___22epL');
    names= await page.$$('span.style__pro-title___3zxNC');
    prices= await page.$$('div.style__price-tag___B2csA');
     for (const image of images) {
       count++;
       const imgsrc = await page.evaluate(img => img.getAttribute('src'), image);
       medicine_object.push({name:"", imgsrc:imgsrc,  price:'0', salt:"",visit_link:""});
       if(count==2)
       break;
     }
     count=0;
     for (const name of names) {
       count++;
       //try{
       const nameText = await page.evaluate(name => name.innerText, name);
       const generatedURL= (temp+nameText).replaceAll(" ","%20");
       
       medicine_object[count-1+sz].name=nameText;
       medicine_object[count-1+sz].visit_link=generatedURL;
       
      // }
      // catch(error){}
       if(count==2)
       break;
       }
       
     count=0;
     for(const price of prices)
     {
       count++;
      try{
       var priceText= await page.evaluate(price=>price.innerText,price);
       priceText=priceText.replaceAll("MRP","");

       medicine_object[count-1+sz].price=priceText;
       
      }
      catch(error){}
      if(count==2)
       break;
     }
  await browser.close();
  console.log(medicine_object);
  medicine_object.sort((a, b) => a.price.localeCompare(b.price, 'en', {numeric: true}));
 
  return medicine_object;
};
//scrapeMedicines();
export default scrapeMedicines;