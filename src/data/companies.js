const COMPANIES = [
  {
    name:'Shopify',
    color:'#50B83C',
    url:'https://www.shopify.ca/about/environment',
  },
  {
    name:'Microsoft',
    color:'#F25022',
    url:'https://blogs.microsoft.com/blog/2020/01/16/microsoft-will-be-carbon-negative-by-2030/'
  },
  {
    name:'Google',
    color:'#4285F4',
    url:'https://sustainability.google/environment/'
  },
  {
    name:'Stripe',
    color:'#008CDD',
    url:'https://stripe.com/en-ca/environment'
  },
  {
    name:'Facebook',
    color:'#4267B2',
    url:'https://sustainability.fb.com/sustainability-in-numbers/'
  },
  {
    name:'Apple',
    color:'#555555',
    url:'https://www.apple.com/environment/our-approach/'
  },
  {
    name:'Adobe',
    color:'#FF0000',
    url:'https://www.adobe.com/corporate-responsibility/sustainability/energy-conservation.html'
  },
  {
    name:'Amazon',
    color:'#FF9900',
    url:'https://blog.aboutamazon.com/sustainability/the-climate-pledge'
  },
  {
    name:'Accenture',
    color:'#0089FF',
    url:'https://www.accenture.com/us-en/about/corporate-citizenship/advancing-sustainability'
  },
  {
    name:'Atlassian',
    color:'#172B4D',
    url:'https://www.atlassian.com/blog/announcements/atlassian-commits-to-the-fight-against-global-climate-change'
  },
  {
    name:'Autodesk',
    color:'#0696D7',
    url:'https://www.autodesk.com/sustainability/business-operations'
  },
  {
    name:'HP',
    color:'#0096D6',
    url:'https://www8.hp.com/us/en/hp-information/environment/footprint.html'
  },
  {
    name:'Lyft',
    color:'#FF00BF',
    url:'https://blog.lyft.com/posts/lyft-commits-to-full-carbon-neutrality-and-100-renewable-energy'
  },
  {
    name:'Salesforce',
    color:'#009EDB',
    url:'https://www.salesforce.com/name/news-press/press-releases/2019/09/191809-gl/'
  },
  {
    name:'VMware',
    color:'#717074',
    url:'https://www.vmware.com/radius/achieving-carbon-neutrality/'
  },
  {
    name:'Workday',
    color:'#E28225',
    url:'https://www.workday.com/en-us/name/about-workday/sustainability.html'
  },
  {
    name:'LinkedIn',
    color:'#2867B2',
    url:'https://socialimpact.linkedin.com/environmental-sustainability'
  },
  {
    name:'Uber',
    color:'#000000',
    url:'https://www.uber.com/us/en/community/supporting-cities/sustainability/'
  },
  {
    name:'Cisco',
    color:'#049FD9',
    url:'https://www.cisco.com/c/en/us/about/csr/impact/environmental-sustainability.html'
  },
  {
    name:'Samsara',
    color:'#0A253E',
    url:'https://www.samsara.com/blog/sustainability'
  },
  {
    name:'Lending Loop',
    color:'#45295d',
    url:'https://www.lendingloop.ca/environment',
  },
  {
   name:'Allianz',
   color:'#003781',
   url:'https://www.allianz.com/en/sustainability/low-carbon-economy/decarbonization.html',
  },
  {
   name:'Bank of America',
   color:'#012169',
   url:'https://about.bankofamerica.com/en-us/global-impact/env-operations-detail.html#fbid=sRbog1b3X3w',
  },
  {
   name:'Barclays',
   color:'#00AEEF',
   url:'https://home.barclays/news/2019/1/barclays-approach-to-energy-and-climate-change/',
   },
  {
   name:'Bloomberg',
   color:'#000000',
   url:'https://www.bloomberg.com/impact/operations/beyond-bloomberg-opps/',
   },
  {
   name:'Capital One',
   color:'#9F1D25',
   url:'https://environment.capitalone.com/',
    },
  {
   name:'Coca-Cola',
   color:'#F40009',
   url:'https://www.coca-colacompany.com/news/reducing-emissions-from-manufacturing-ops',
  },
  {
    name:'T-Mobile',
    color:'#E20074',
    url:'https://www.t-mobile.com/responsibility/sustainability/renewable-energy',
  },
  {
    name:'Ebay',
    color:'#86B816',
    url:'https://www.ebayinc.com/impact/responsible-business/environmental-footprint/',
  },
  {
    name:'Etsy',
    color:'#F16521',
    url:'https://www.etsy.com/impact',
  },
  {
    name:'Goldman Sachs',
    color:'#7299C6',
    url:'https://www.goldmansachs.com/citizenship/environmental-stewardship/our-operational-impact/carbon-energy/',
  },
  {
    name:'H&M',
    color:'#CD2522',
    url:'https://hmgroup.com/sustainability/Planet/climate.html',
  },
  {
    name:'Johnson & Johnson',
    color:'#D51901',
    url:'https://www.jnj.com/global-environmental-health/climate-and-energy',
  },
  {
    name:'Kellogg\'s',
    color:'#D41747',
    url:'https://www.kelloggs.com/en_US/who-we-are/environmental-initatives.html',
  },
  {
    name:'LEGO',
    color:'#D10E12',
    url:'https://www.lego.com/en-us/aboutus/responsibility/sustainability/',
  },
  {
    name:'Logitech',
    color:'#009b85',
    url:'https://www.logitech.com/en-us/sustainability/environment.html',
  },
  {
    name:'McKinsey & Company',
    color:'#000000',
    url:'https://www.mckinsey.com/about-us/environmental-sustainability',
  },
  {
    name:'Next',
    color:'#000000',
    url:'https://www.nextplc.co.uk/corporate-responsibility/environment',
  },
  {
    name:'Nike',
    color:'#000000',
    url:'https://purpose.nike.com/carbon-energy',
  },
  {
    name:'New Balance',
    color:'#E21837',
    url:'https://www.newbalance.com/responsible-leadership/environment.html',
  },
  {
    name:'Panasonic',
    color:'#0056A8',
    url:'https://www.panasonic.com/global/corporate/sustainability/eco/co2.html',
  },
  {
    name:'Ralph Lauren',
    color:'#002344',
    url:'https://corporate.ralphlauren.com/citizenship-protect-the-environment',
  },
  {
    name:'SAP',
    color:'#029DE1',
    url:'https://news.sap.com/2017/05/sap-to-go-carbon-neutral-by-2025',
  },
  {
    name:'Starbucks',
    color:'#016341',
    url:'https://www.starbucks.com/responsibility/environment/climate-change',
  },
  {
    name:'Target',
    color:'#CC0000',
    url:'https://corporate.target.com/corporate-responsibility/planet/climate',
  },
  {
    name:'Walmart',
    color:'#0171CE',
    url:'https://corporate.walmart.com/global-responsibility/sustainability/sustainability-in-our-operations/reducing-greenhouse-gas-emissions',
  },
  {
    name:'Wells Fargo',
    color:'#D71F28',
    url:'https://www.wellsfargo.com/about/corporate-responsibility/environment',
  },
].sort(() => Math.random() - 0.5)

const suggestCompany = {
  name: 'Suggest a company',
  color:'#50AA60',
  url: 'https://airtable.com/shrSJYJXfYpyBar5E',
}

const suggestFrequency = 7

for (let i = suggestFrequency; i < COMPANIES.length; i += suggestFrequency) {
  COMPANIES.splice(i, 0, suggestCompany)
}

export default COMPANIES
