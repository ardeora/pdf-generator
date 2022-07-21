const fs = require("fs");
const path = require("path");
const React = require("react");
const parse = require('csv-parse');
const { renderToFile } = require("@react-pdf/renderer");

const MyDocument = require('./components/PDF.jsx')
let total = 0;
let done = 0;

const go = async (props) => {
  const outputDirectory = path.join(__dirname, "../output");

  if (fs.existsSync(outputDirectory)) {
    fs.rmdirSync(outputDirectory, { recursive: true });
  }

  fs.mkdirSync(outputDirectory);

  renderToFile(
    <MyDocument {...props} />,
    path.join(outputDirectory, `Invoice-${props['Invoice No.']}.pdf`)
  ).then(()=> {
    done++;
    console.log(`${done}/${total}`);
  });
};

const csvFilePath='./csv/invoices.csv';
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    total = jsonObj.length;
    console.log('CSV Read Successfully!');
    console.log(`Generating PDFs for ${total} invoices...`);

    for (const invoice of jsonObj) {
        go(invoice);
    }
})
