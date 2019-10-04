import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function App() {
  return (
    <div className="App">
      <Container>
      <Row  style={{marginTop: "5%", justifyContent: "center"}}>
      	<Col lg={12}><h2>Gregory of Nazianzus</h2></Col>
      </Row>
      <Row  style={{justifyContent: "center"}}>
      	<Col lg={12}>
      		<h4 style={{fontWeight: "normal"}}>Carm. 1.1.11 <em>On the Incarnation</em></h4>
      			<h4 style={{fontWeight: "normal"}}>Translated by <a href="https://alexpoulos.com">Alex Poulos</a></h4>
      	</Col>
      </Row>
      <Row style={{justifyContent: "flex-start", marginTop:"2%", textAlign: "left"}}>
      	<Col lg={6} sm={12} md={12} >
      	<h4 style={{marginTop: "1%"}}>Greek</h4>
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

      	<Col lg={6} sm={12}>
      	<h4 style={{marginTop: "1%"}}>English</h4>
      	Foolish who worships not th’ eternal Word&nbsp;<br/>
as equal to the high  Father in heaven.&nbsp;<br/>
Foolish who worships not th’ incarnate Word,&nbsp;<br/>
as equal to the heavenly Word on High,&nbsp;<br/>
but cuts from Father’s might His Word, or else&nbsp;<br/>
doth cut the Word from human shape, our breadth.&nbsp;<br/>
The Father’s Word was God, but made our man&nbsp;<br/>
so that, with mortals mixed, He’d mix in God.&nbsp;<br/>
A single god comprising both: a man, &nbsp;<br/>
to make man into gods: have mercy, thou&nbsp;<br/>
who art above the Wounded Word  on high.&nbsp;<br/>
For you, no more– why seek from me the knowledge&nbsp;<br/>
of that ineffable and holy mixture.&nbsp;<br/>
Oh mortals, mind the boundaries your speech.&nbsp;<br/>
Should I persuade thee, that is all the better;&nbsp;<br/>
yet if you stain your page with myriad lines &nbsp;<br/>
come here and I will scratch these letters few &nbsp;<br/>
onto your books, with pen that bears no stain&nbsp;<br/>
      	</Col>
      </Row>
      <Row>
      <Col style={{textAlign: "left", marginTop: "5%"}}>
      <h4>Notes</h4>
      <ol>
      	<li>The Greek text is taken from the edition of D.A.B. Caillau, which was reprinted in vol. 37 of the <em>Patrologia Graeca,</em> col. 470–71. No critical edition yet exists.</li>
      	<li>For fuller comments on the poem, see Poulos, Alex. 2019. <em>Callimachus and Callimacheanism in the Poetry of Gregory of Nazianzus</em>. PhD Diss. (Catholic University of America; Washington, DC), pp. 87–91 (Available online <a href="https://mapoulos.files.wordpress.com/2019/08/poulos_callimachus-and-callimacheanism-in-the-poetry-of-gregory-of-nazianzus_2019-06-24.pdf">here</a>).</li>
      </ol>
      </Col>
      </Row>

      </Container>
    </div>
  );
}

export default App;
