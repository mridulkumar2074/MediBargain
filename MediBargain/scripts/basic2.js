import puppeteer from 'puppeteer';

const scrapeMedicines= async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  var search_string='dolo 650';
  //apollo pharmacy scraping
 
    //pharm easy scraping
    var peasy_page_url="https://pharmeasy.in/search/all?name=";
    var temp=peasy_page_url;
    peasy_page_url+=search_string;
    peasy_page_url=peasy_page_url.replaceAll(" ","%20");    
  
let count=0;
  // Now search for the image within the search results
  const medicine_object=[];
  await page.goto(peasy_page_url);
 const productResultsSelector = 'div.LHS_container__mrQkM.Search_fullWidthLHS__mteti'; 
  await page.waitForSelector(productResultsSelector);
 const images = await page.$$('.ProductCard_productImage__dq5lq');
 const names= await page.$$('h1.ProductCard_medicineName__8Ydfq');
 const prices= await page.$$('span.ProductCard_striked__jkSiD');

  for (const image of images) {
    count++;
    const imgsrc = await page.evaluate(img => img.getAttribute('src'), image);
    medicine_object.push({name:"", imgsrc:imgsrc,  price:0, salt:"",visit_link:""});
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
    medicine_object[count-1].name=nameText;
    medicine_object[count-1].visit_link=generatedURL;
    if(count==4)
    break;
    }
    
  count=0;
  for(const price of prices)
  {
    count++;;
   
    const priceText= await page.evaluate(price=>price.innerText,price);
    medicine_object[count-1].price=priceText;
    
    if(count==4)
    break;
  }
  await browser.close();
  console.log(medicine_object);
  //medicine_object.sort((a, b) => a.price.localeCompare(b.price, 'en', {numeric: true}));
 
  return medicine_object;
};
scrapeMedicines();
export default scrapeMedicines;