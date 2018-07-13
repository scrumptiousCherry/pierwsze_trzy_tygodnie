import React, {} from 'react';
import './App.css';

/**
 * potrzebuje klasy ktora bedzie miala:
 * przycisk start ktory bedzie:
 * 1.zablokowany
 * 2.onClick
 */

class App extends React.Component{
      constructor(){
        super()
        this.state = {
          isStartVisible : true,
          isKoniecVisible : false,
          czyKlikniety : false,
          czyZablokowany : false,
          czyPokazacEkranGlowny : false,
          isGracz1Visible : false,
          isGracz2Visible : false,
          turaGracza1 : false,
          turaGracza2 : false
        }
      }
      jesliKlikniety = (event) =>{
        if(this.state.isKoniecVisible === false){
          this.setState({
            czyKlikniety : true,
            isKoniecVisible : true,
            czyZablokowany : true,
            isGracz1Visible: true,
            isGracz2Visible : true
          })
        }else{}
      }
      EkranGry = () => {
        this.setState ({
          czyPokazacEkranGlowny : true,
          isGracz1Visible : false,
          isGracz2Visible: false,
          turaGracza1 : true,
          turaGracza2 : false
        })
      }
      EkranGry2 = () => {
        this.setState ({
          czyPokazacEkranGlowny : true,
          isGracz1Visible: false,
          isGracz2Visible : false,
          turaGracza1 : false,
          turaGracza2 : true
        })
      }
      zmianaTury = () => {
        if(this.state.turaGracza1 === true){
          this.setState ({
            turaGracza2 : true,
            turaGracza1 : false
          })
        }else{
          this.setState ({
            turaGracza1 : true,
            turaGracza2 : false
          })
        }
      }
      PoKliknieciuNaKoniec = () => {
        if(this.state.isStartVisible === true)
          this.setState({
            isKoniecVisible : false,
            czyZablokowany : false,
            czyPokazacEkranGlowny : false
          })
      }
      renderPoKliknieciu = () => {
        if(this.state.isKoniecVisible === false){
          return( // TO JEST WYSWIETLANE NA SAMYM POCZATKU GRY
            <div>
              <h3>Aby rozpoczac gre kliknij start</h3>
            </div>
          ); 
        }else{
            return( // TO JEST WYSWIETLANE PO KLIKNIECIU NA START
              <div>
                {this.renderPrzyciski()}
                <button onClick = {this.PoKliknieciuNaKoniec}>koniec</button>
                <h3>Aby zakonczyc gre kliknij koniec</h3>
              </div>
            );
        }
      }
      renderPrzyciski = () => {
        if(this.state.isGracz1Visible === true && this.state.isGracz2Visible === true){
          return(
                <div>
                  <h3>Kliknij w przycisk Gracz 1 lub Gracz 2 aby rozpoczac gre</h3>
                  <h4>Ktory gracz ma rozpoczac gre?</h4>
                  <button onClick = {this.EkranGry}>Gracz 1</button>
                  <button onClick = {this.EkranGry2}>Gracz 2</button>
                </div>
          );
        }
      }
      renderEkranGry = () => {
        if(this.state.czyPokazacEkranGlowny === true){
            return(
              <div>
                <div>To jest ekran gry</div>
                <button onClick={this.zmianaTury}>zmien ture</button>
                {this.renderTextTura()}
              </div>
            );
        }
      }
      renderTextTura = () => {
        if(this.state.turaGracza1 === true){
          return(
            <div>to jest tura Gracza1</div>
          );         
        }else{
          return(
            <div>to jest tura Gracza2 </div>
          );
        }
      }

      render(){
        return(
          <div>
            <button onClick = {this.jesliKlikniety} disabled = {this.state.czyZablokowany}>start</button>
            {this.renderPoKliknieciu()}
            {this.renderEkranGry()}
          </div>
        );
      }      
}

export default App;
