const fs = require("fs");
const path = require("path");
const React = require("react");
const parse = require('csv-parse');
const { renderToFile } = require("@react-pdf/renderer");

const MyDocument = require('./components/PDF.jsx')

const go = async (props) => {
  const outputDirectory = path.join(__dirname, "../output");

  if (fs.existsSync(outputDirectory)) {
    fs.rmdirSync(outputDirectory, { recursive: true });
  }

  fs.mkdirSync(outputDirectory);

  renderToFile(
    <MyDocument {...props} />,
    path.join(outputDirectory, `Invoice-${props['Invoice No.']}.pdf`)
  );
};

const csvFilePath='./csv/invoices.csv';
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);

    for (const invoice of jsonObj) {
        go(invoice);
    }
})
