import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


function App() {
  return (
    <div className="App">
      <Container>
      <Row  style={{marginTop: "5%", justifyContent: "center"}}>
      	<Col lg={12}><h2>Gregory of Nazianzus</h2></Col>
      </Row>
      <Row  style={{justifyContent: "center"}}>
      	<Col lg={12}><h4 style={{fontWeight: "normal"}}>Carm. 1.1.11 <em>On the Incarnation</em></h4></Col>
      </Row>
      <Row >
      	<Col style={{justifyContent: "flex-start", marginTop:"2%", textAlign: "left"}}>

Νήπιος, ὅστις ἄνακτα Θεοῦ Λόγον αἰὲν ἐόντα    <br/>
&nbsp;&nbsp;&nbsp;οὐ σέβετ’ ἰσοθέως Πατρὸς ἐπουρανίου.  <br/>
νήπιος, ὅστις ἄνακτα Λόγον βροτὸν ἔνθα φανέντα  <br/>
&nbsp;&nbsp;&nbsp;οὐ σέβετ’ ἰσοθέως οὐρανίοιο Λόγου.  <br/>
τέμνει δ’ ἢ μεγάλοιο Πατρὸς Λόγον, ἠὲ Λόγοιο&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5]  <br/>
&nbsp;&nbsp;&nbsp;μορφὴν ἀνδρομέην, καὶ πάχος ἡμέτερον.  <br/>
ἦν Θεὸς, ἀλλ’ ἐπάγη Πατρὸς Λόγος ἡμέτερος φώς,     <br/>
&nbsp;&nbsp;&nbsp;ὥς κε Θεὸν μίξῃ, μικτὸς ἐὼν χθονίοις.   <br/>
εἷς Θεὸς ἀμφοτέρωθε· τόσον βροτὸς, ὅσσον ἔμ’ ἔρδειν  <br/>
&nbsp;&nbsp;&nbsp;ἀντὶ βροτοῖο Θεόν. Ἵλαθι, τρωτὸς ἄνω.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[10]  <br/>
τόσσον ἔχοις. Τί δ’ ἔμοιγε νόον, καὶ μίξιν ἄφραστον;   <br/>
&nbsp;&nbsp;&nbsp;ἀμφὶ Θεὸν, θνητοὶ, στέργετε μέτρα λόγου.     <br/>
εἰ μὲν δὴ πεπίθοιμι, τὸ λώϊον. Εἰ δὲ μελαίνεις  <br/>
&nbsp;&nbsp;&nbsp;τὸν χάρτην πολλαῖς χιλιάσιν ἐπέων,  <br/>
δεῦρ’ ἄγε, πλαξὶ τεαῖς ὀλιγόστιχα ταῦτα χαράξω&nbsp;&nbsp;&nbsp;&nbsp;[15]  <br/>
&nbsp;&nbsp;&nbsp;γράμματ’ ἐμῇ γραφίδι, ἣ μέλαν οὐδὲν ἔχει. <br/>
      	</Col>

      	<Col>
      	</Col>
      </Row>

      </Container>
    </div>
  );
}

export default App;
