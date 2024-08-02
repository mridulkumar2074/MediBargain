import puppeteer from 'puppeteer';

const scrapeMedicines= async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  var search_string='paracetamol 650';
  //apollo pharmacy scraping
 
    //pharm easy scraping
    var tata_page_url="https://www.1mg.com/search/all?name=";
    var temp=tata_page_url;
    tata_page_url+=search_string;
    tata_page_url=tata_page_url.replaceAll(" ","%20");    
  
let count=0;
  // Now search for the image within the search results
  const medicine_object=[];
  await page.goto(tata_page_url);
 const productResultsSelector = 'body'; 
  await page.waitForSelector(productResultsSelector);
 const images = await page.$$('.style__image___Ny-Sa.style__loaded___22epL');
 const names= await page.$$('span.style__pro-title___3zxNC');
 const prices= await page.$$('div.style__price-tag___B2csA');
const links = await page.$$('div.row style__grid-container___3OfcL > a');
  for (const image of images) {
    count++;
    const imgsrc = await page.evaluate(img => img.getAttribute('src'), image);
    medicine_object.push({name:"", imgsrc:imgsrc,  price:0, salt:"",visit_link:""});
    if(count==2)
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
    if(count==2)
    break;
    }
    
  count=0;
  for(const price of prices)
  {
    count++;;
   
    const priceText= await page.evaluate(price=>price.innerText,price);
    medicine_object[count-1].price=priceText;
    
    if(count==2)
    break;
  }
//   for(const link of links)
//   {
//     count++;
//     const linktext= await page.evaluate(link=>link.getAttribute('href'),link);
//     medicine_object[count-1].visit_link=linktext;
//     if(count==2)
//     break;
//   }
  await browser.close();
  console.log(medicine_object);
  //medicine_object.sort((a, b) => a.price.localeCompare(b.price, 'en', {numeric: true}));
 
  return medicine_object;
};
scrapeMedicines();
export default scrapeMedicines;