import {
  closeCircle,
  copperCoinFillIcon,
  boxFill,
  qrCodeFill,
  chartPieFill,
  timeFill,
  bookmarkFill,
  cellphoneFill,
  checkCircleFill,
  pluginFill,
} from 'resources/images/Images';

const problemsCardData = [
  {
    icon: copperCoinFillIcon, 
    heading: 'Costly',
    desc: 'Managing assets manually can be a costly endeavor, with potential for mistakes, lost time, and missed opportunities. With trakr, you can streamline your asset management processes and minimise the costs associated with manual methods.',
  },
  {
    icon: timeFill,
    heading: 'Time-consuming',
    desc: 'Manual asset management can be incredibly time-consuming, especially when using outdated methods like spreadsheets. trakr offers a cloud-based solution that makes asset management quick and easy.',
  },
  {
    icon: closeCircle,
    heading: 'Error prone',
    desc: 'With manual asset management comes the risk of errors and inaccurate data, which can lead to costly mistakes. By using trakr, you can minimise errors and ensure reliable data, enabling you to make informed decisions that drive your business forward.',
  },
];

const featuresCardData = [
  { icon: boxFill, fName: 'Asset ', lName: 'tracking' },
  { icon: qrCodeFill, fName: 'Lost and ', lName: 'found' },
  { icon: timeFill, fName: 'Maintenance ', lName: 'scheduling' },
  { icon: chartPieFill, fName: 'Reporting & ', lName: 'analytics' },
  { icon: bookmarkFill, fName: 'Reservation ', lName: 'system' },
  { icon: cellphoneFill, fName: 'Mobile ', lName: 'compatibility' },
  { icon: checkCircleFill, fName: 'Check-in ', lName: 'and out' },
  { icon: pluginFill, fName: 'API ', lName: 'integration' },
];
const freqQuestionData = [
  {
    question: 'What is an asset?',
    answer:
      'Everything of value that a business needs to manage their work and keep track off. An example of an asset could be, but is not limited too, computers, tools, vehicles or keys. Trakr helps you efficiently manage all your assets in one place, saving you time and money.',
  },
  {
    question: 'Can I integrate trakr with other systems?',
    answer:
      'Yes, trakr functions seamlessly with various existing systems. Let us know which integrations your company needs to streamline workflows within the apps you use every day.',
  },
  {
    question: 'How does trakr track my assets?',
    answer:
      "trakr uses a cloud-based platform and connectable QR codes to connect assets to users, areas, or locations. With trakr's asset specification interface, users can check items in and out, reserve items, or report them as missing within the system. Our user-friendly interface makes it easy to manage your assets and keep track of their whereabouts.",
  },
  {
    question: 'Is trakr going to be mobile friendly?',
    answer:
      "Yes! trakr's design automatically adjusts to mobile devices, allowing you to keep track of your assets on the go. Our platform is optimized for mobile use, so you can easily access your asset information from your smartphone or tablet.  ",
  },
  {
    question: 'How does trakr ensure the security and privacy of my data?',
    answer:
      'At trakr, we take data security and privacy seriously. Our platform is built with the latest security and GDPR protocols and measures in place to ensure that your data is safe and secure at all times. We use encryption to protect your data both in transit and at rest, and we also employ strict access controls to ensure that only authorized personnel can access your data.',
  },
];
export { problemsCardData, featuresCardData, freqQuestionData };
