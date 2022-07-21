const React = require("react");
const {
  Document,
  Page,
  Text,
  Image,
  Font,
  View,
  StyleSheet
} = require("@react-pdf/renderer");

const phone = "./src/img/phone.png";
const mail = "./src/img/mail.png";
const logo = "./src/img/logo.png";


const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
  },
  cellHeader: {
    marginRight: '1px',
    marginBottom: '1px',
    flex: 1,
    fontSize: 10,
    padding: '6px',
    fontFamily: 'Helvetica-Bold',
    fontWeight: 700,
    backgroundColor: '#E7E7E7'
  },
  cell: {
    marginRight: '1px',
    marginBottom: '1px',
    flex: 1,
    fontSize: 10,
    padding: '6px',
    fontFamily: 'Helvetica',
    backgroundColor: '#E7E7E7'
  },
  contactContainer: {
    backgroundColor: 'blue',
    
  }, 
  contactCell: {
    fontSize: 10,
    padding: '6px',
    marginRight: '1px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  billToHeader: {
    marginRight: '1px',
    marginBottom: '1px',
    fontSize: 10,
    fontWeight: 700,
    backgroundColor: '#E7E7E7',
    minHeight: '1.75in',
    display: 'flex',
    flexDirection: 'column',
  },
  invoiceTableCell: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    padding: '6px 12px',
    backgroundColor: '#E7E7E7',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid white',
    borderBottom: '1px solid white',
  }

});

const PDF = (props) => (
  <Document>
    <Page size="A4" style={{padding: '0.5in'}}>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <View style={{
          marginBottom: '0.5in',
        }}>
        <View style={{ 
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '1.75cm',
          padding: '0px 4px'
        }}>
          <Image src={logo} style={{height: '100%', marginRight: '8px'}} />
          <Text style={{
            color: '#606060',
          }}>Invoice | Rey Farms</Text>
          <View style={{
            flex: 1,
            
          }} ></View>
          <Text style={{
            fontSize: 12,
            color: '#606060',
          }}>Original for Recipient</Text>
        </View>
        </View>

        <View style={{
          marginBottom: '0.5in',
        }}>
          <View style={styles.footer}>
            <View style={{...styles.billToHeader}}>
              <View style={{ fontFamily: 'Helvetica-Bold', padding: '6px', paddingRight: '0.25in', flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Text>Invoice No.</Text>
              </View>
              <View style={{ fontFamily: 'Helvetica-Bold', padding: '6px',flex: 1, borderTop: '1px solid white', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Text>Date</Text>
              </View>
            </View>
            <View style={{...styles.billToHeader, fontWeight: 400, flex:1 }}>
              <View style={{ padding: '6px',flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Text>{props['Invoice No.']}</Text>
              </View>
              <View style={{ padding: '6px',flex: 1, borderTop: '1px solid white', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Text>{props.Date}</Text>
              </View>
            </View>
            <View style={{...styles.billToHeader, flex: 2 }}>
              <View style={{ fontFamily: 'Helvetica-Bold', padding: '6px',paddingBottom: '6px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Text>Bill To</Text>
              </View>
              <View style={{ padding: '6px',flex: 1, fontWeight: 400, borderTop: '1px solid white', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Text>
                  {props['Bill To']}{'\n'}
                  {props['Address']}
                </Text>
              </View>
            </View>
          </View>
        </View>

        

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}>
          <View>
            <View style={styles.invoiceTableCell}>
              <Text>Sr No.</Text>
            </View>
            <View style={{...styles.invoiceTableCell, fontFamily: 'Helvetica'}}>
              <Text>1</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <View style={styles.invoiceTableCell}>
              <Text>Description of Goods</Text>
            </View>
            <View style={{...styles.invoiceTableCell, fontFamily: 'Helvetica'}}>
              <Text>{props['Description of Goods']}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
          </View>

          <View>
            <View style={styles.invoiceTableCell}>
              <Text>HSN/SAC</Text>
            </View>
            <View style={{...styles.invoiceTableCell, fontFamily: 'Helvetica'}}>
              <Text>{props['HSN/SAC']}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
          </View>

          <View>
            <View style={styles.invoiceTableCell}>
              <Text>Rate</Text>
            </View>
            <View style={{...styles.invoiceTableCell, fontFamily: 'Helvetica'}}>
              <Text>{props.Rate}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
          </View>

          <View>
            <View style={styles.invoiceTableCell}>
              <Text>per</Text>
            </View>
            <View style={{...styles.invoiceTableCell, fontFamily: 'Helvetica'}}>
              <Text>{props.Per}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{' '}</Text>
            </View>
          </View>

          <View>
            <View style={styles.invoiceTableCell}>
              <Text>Quantity</Text>
            </View>
            <View style={{...styles.invoiceTableCell, fontFamily: 'Helvetica'}}>
              <Text>{props.Quantity}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>Discount</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>Grand Total</Text>
            </View>
          </View>

          <View>
            <View style={styles.invoiceTableCell}>
              <Text>Amount</Text>
            </View>
            <View style={{...styles.invoiceTableCell, fontFamily: 'Helvetica'}}>
              <Text>{props.Amount}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{props.Discount}</Text>
            </View>
            <View style={styles.invoiceTableCell}>
              <Text>{props.Amount}</Text>
            </View>
          </View>

          
          

        </View>

        <View style={{
          flex: 1,
        }} ></View>

        <View style={{
          marginBottom: '0.25in',
        }}>
          <Text style={{ fontSize: 10, lineHeight: 1.6 }}>
            Rey Farms{"\n"}
            PAN no.: ABEFR6707J{"\n"}{"\n"}{"\n"}
            This is a computer generated invoice. No signature is required.
          </Text>
        </View>

        <View>
          <View style={styles.footer}>
            <View style={styles.cellHeader}>
              <Text>Mumbai Office</Text>
            </View>
            <View style={styles.cellHeader}>
              <Text>Site Address</Text>
            </View>
            <View style={styles.cellHeader}>
              <Text>Bank Details</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.cell}>
              <Text>
                602, 6th Floor, Garnet Palladium,{"\n"}
                Pt. Motilal Nehru Marg,{"\n"}
                Off Western Express Highway,{"\n"} 
                Goregaon East,{"\n"}
                Mumbai - 400097{"\n"}
              </Text>
            </View>
            <View style={styles.cell}>
              <Text>
                Rey Farms,{"\n"}
                Khasra No. 141,{"\n"} 
                Village Jhabra,{"\n"} 
                Jaisalmer - 345001.{"\n"}
              </Text>
            </View>
            <View style={styles.cell}>
              <Text>
                Bank : HDFC{"\n"}
                Account Name : Pratik Deora{"\n"}
                A/c No. : 11231930007701{"\n"}
                IFSC : HDFC0001123{"\n"}
                Branch : Centrium Mall, Kandivali East, Mumbai.
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', backgroundColor: '#E7E7E7'}}>
              <View style={styles.contactCell}>
                <Image src={phone} style={{width: '12px', marginRight: '8px'}} />
                <Text>+919870300668</Text>
              </View>
              <View style={styles.contactCell}>
                <Image src={mail} style={{width: '12px', marginRight: '8px'}} />
                <Text>pratikdeora@gmail.com</Text>
              </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);


module.exports = PDF;