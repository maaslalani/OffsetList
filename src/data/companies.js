const companies = [
  {
    name:'Shopify',
    color:'#50B83C',
    url:'https://www.shopify.ca/about/environment',
    title:'We need to change our climate for the better',
    subtitle:'Anthropogenic climate change is the greatest challenge of our time. We need to tackle it together.',
    reportLink: 'https://cdn.shopify.com/static/sustainability-report/2018%20Shopify%20Sustainability%20Report.pdf',
  },
  {
    name:'Microsoft',
    color:'#F25022',
    url:'https://blogs.microsoft.com/blog/2020/01/16/microsoft-will-be-carbon-negative-by-2030/'
  },
  {
    name:'Google',
    color:'#4285F4',
    url:''
  },
  {
    name:'Stripe',
    color:'#008CDD',
    url:''
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
    url:''
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

];

const suggestCard = {
   name:'Suggest a company',
   color:'#0395FF',
   url:'link-to-form'
}

let index = 0;
const COMPANIES = companies.reduce((acc, item) => {
   if(index % 5 === 0 && index !== 0) {
      acc.push(suggestCard);
      acc.push(item);
      index++;
      return acc;
   } else {
      acc.push(item);
      index++;
      return acc;
   }
}, []);

export default COMPANIES;
