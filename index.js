let header = {
  logo: 'sunnyside',
  slogan: 'WE ARE CREATIVES',
  links: {
    about: 'About', 
    services: 'Services', 
    projects: 'Projects', 
    contact: 'Contact', 
    LearnMore: 'Learn more'
  },
}

let firstSection = {
 section1: {
  box1: {
    heading: 'Transform your brand',
    longText: `We are a full-service creative agency specializing in helping brands grow fast. 
    Engage your clients through compelling visuals that do most of the marketing for you.`,
  },
  box3: {
    heading: 'Graphic design',
    longText: `Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.`,
  },
 },
 section2: {
  box2: {
    heading: 'Stand out to the right audience',
    longText: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. `,
  },
  box3: {
    heading: 'Photography',
    longText: `Increase your credibility by getting the most stunning, high-quality photos that improve your business image.`,
  },
 }
}

let lastSection = {
  heading: 'Client Testimonies',
  client1: {
    name: 'Emily R.',
    occupation: 'Marketing Director',
    testimony: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
  },
  client2: {
    name: 'Thomas S.',
    occupation: 'Chief Operating Officer',
    testimony: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
  },
  client3: {
    name: 'Jennie R.',
    occupation: 'Business Owner',
    testimony: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
  },
}

function pageData() {

  document.querySelectorAll('.logo').forEach(element => {
    element.textContent = header.logo;
  });
  document.querySelectorAll('.slogan').forEach(element => {
    element.textContent = header.slogan;
  });
  document.querySelectorAll('.about').forEach(element => {
    element.textContent = header.links.about;
  });
  document.querySelectorAll('.services').forEach(element => {
    element.textContent = header.links.services;
  });
  document.querySelectorAll('.projects').forEach(element => {
    element.textContent = header.links.projects;
  });
  document.querySelectorAll('.contact').forEach(element => {
    element.textContent = header.links.contact;
  });
  document.querySelectorAll('.learn-more').forEach(element => {
    element.textContent = header.links.LearnMore;
  });
  ///
  document.querySelector('#left-box1-heading').textContent = firstSection.section1.box1.heading;
  document.querySelector('#left-box1-text').textContent = firstSection.section1.box1.longText;
  document.querySelector('#left-box3-heading').textContent = firstSection.section1.box3.heading;
  document.querySelector('#left-box3-text').textContent = firstSection.section1.box3.longText;
  document.querySelector('#right-box2-heading').textContent = firstSection.section2.box2.heading;
  document.querySelector('#right-box2-text').textContent = firstSection.section2.box2.longText;
  document.querySelector('#right-box3-heading').textContent = firstSection.section2.box3.heading;
  document.querySelector('#right-box3-text').textContent = firstSection.section2.box3.longText;
  //
  document.querySelector('#testimonials').textContent = lastSection.heading;
  document.querySelector('#client1-name').textContent = lastSection.client1.name;
  document.querySelector('#client1-occupation').textContent = lastSection.client1.occupation;
  document.querySelector('#client1-text').textContent = lastSection.client1.testimony;
  document.querySelector('#client2-name').textContent = lastSection.client2.name;
  document.querySelector('#client2-occupation').textContent = lastSection.client2.occupation;
  document.querySelector('#client2-text').textContent = lastSection.client2.testimony;
  document.querySelector('#client3-name').textContent = lastSection.client3.name;
  document.querySelector('#client3-occupation').textContent = lastSection.client3.occupation;
  document.querySelector('#client3-text').textContent = lastSection.client3.testimony;
};
pageData();